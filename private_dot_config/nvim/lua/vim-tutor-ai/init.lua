local M = {}

M.config = {
  model = 'gemma4:31b-cloud',
  keymaps_path = vim.fn.stdpath('config') .. '/KEYMAPS.md',
  height = 15,
}

local state = {
  buf_id = nil,
  win_id = nil,
  job_id = nil,
  mode = nil,
  keymaps_doc = nil,
  source_ft = nil,
}

local function load_keymaps(path)
  local ok, lines = pcall(vim.fn.readfile, path)
  if not ok then return '' end
  return table.concat(lines, '\n')
end

local function replace_buffer_content(lines)
  local buf = state.buf_id
  if not buf or not vim.api.nvim_buf_is_valid(buf) then return end
  vim.bo[buf].modifiable = true
  vim.api.nvim_buf_set_lines(buf, 0, -1, false, lines)
end

local function safe_del_keymap(mode, lhs, opts)
  if vim.keymap.del then
    pcall(vim.keymap.del, mode, lhs, opts)
  else
    pcall(vim.api.nvim_buf_del_keymap, opts.buffer, mode, lhs)
  end
end

local function set_buf_keymaps(mode)
  local buf = state.buf_id
  if not buf or not vim.api.nvim_buf_is_valid(buf) then return end

  local opts = { buffer = buf, nowait = true, silent = true }

  safe_del_keymap('n', '<CR>', opts)
  safe_del_keymap('n', '<C-c>', opts)
  safe_del_keymap('n', '<leader>t', opts)
  safe_del_keymap('n', 'q', opts)
  safe_del_keymap('n', 'i', opts)
  safe_del_keymap('n', 'a', opts)
  safe_del_keymap('n', 'o', opts)
  safe_del_keymap('n', 'A', opts)
  safe_del_keymap('n', 'O', opts)
  safe_del_keymap('n', 's', opts)
  safe_del_keymap('n', 'S', opts)
  safe_del_keymap('i', '<CR>', opts)

  vim.keymap.set('n', 'q', function() M.close() end, opts)

  if mode == 'question' then
    vim.keymap.set('i', '<CR>', function() M.submit_question() end, opts)
    vim.keymap.set('n', '<CR>', function() M.submit_question() end, opts)
  elseif mode == 'wait' then
    vim.keymap.set('n', '<C-c>', function() M.cancel_request() end, opts)
  elseif mode == 'response' then
    vim.keymap.set('n', '<leader>t', function() M.to_question_mode() end, opts)
  end

  if mode ~= 'question' then
    vim.keymap.set('n', 'i', '<Nop>', opts)
    vim.keymap.set('n', 'a', '<Nop>', opts)
    vim.keymap.set('n', 'o', '<Nop>', opts)
    vim.keymap.set('n', 'A', '<Nop>', opts)
    vim.keymap.set('n', 'O', '<Nop>', opts)
    vim.keymap.set('n', 's', '<Nop>', opts)
    vim.keymap.set('n', 'S', '<Nop>', opts)
  end
end

local function build_system_prompt()
  return string.format(
    [[You are an expert vim/neovim guru embedded directly in the user's editor.
    You provide immediate, actionable keystrokes and commands.
    You are not a tutor; do not explain basic vim philosophy or give lengthy tutorials.

    # Core Directives:

Table First: ALWAYS begin your response with a Markdown table showing the exact keymaps/commands needed to solve the user's problem.

Context-Aware: Reference the user's provided plugins and keybindings if they offer a more efficient solution than native vim.

Zero Fluff: Provide only the table and a maximum of 1-2 sentences of practical context if absolutely necessary. Do not include greetings, conclusions, or rambling explanations.

## Editor Context:
Current filetype: %s

User's keybindings and plugins:
---
%s
---]],
    state.source_ft or 'unknown',
    state.keymaps_doc or ''
  )
end

function M.submit_question()
  local buf = state.buf_id
  if not buf or not vim.api.nvim_buf_is_valid(buf) then return end
  if state.mode ~= 'question' then return end

  local lines = vim.api.nvim_buf_get_lines(buf, 0, -1, false)
  local first_line = lines[1] or ''
  local question = first_line:gsub('^❯%s*', '')

  if question == '' then return end

  vim.cmd('stopinsert')

  state.mode = 'wait'
  replace_buffer_content({ '...' })
  set_buf_keymaps('wait')

  local ok_payload, payload = pcall(vim.fn.json_encode, {
    model = M.config.model,
    prompt = question,
    system = build_system_prompt(),
    stream = false,
  })

  if not ok_payload then
    state.mode = 'question'
    M.to_question_mode()
    return
  end

  local stdout_data = {}

  local function handle_completion(exit_code)
    state.job_id = nil

    if state.mode ~= 'wait' then return end

    local raw = table.concat(stdout_data, '')
    local _, parsed = pcall(vim.fn.json_decode, raw)

    if exit_code ~= 0 then
      replace_buffer_content({ 'Error: Could not connect to Ollama. Is it running?' })
    elseif parsed and parsed.response then
      local response_lines = vim.split(parsed.response, '\n', { plain = true })
      replace_buffer_content(response_lines)
    else
      replace_buffer_content({ 'Error: unexpected response' })
    end

    state.mode = 'response'
    set_buf_keymaps('response')

    if state.win_id and vim.api.nvim_win_is_valid(state.win_id) then
      vim.api.nvim_win_set_cursor(state.win_id, { 1, 0 })
    end
  end

  state.job_id = vim.fn.jobstart(
    {
      'curl', '-s', '-X', 'POST',
      'http://localhost:11434/api/generate',
      '-H', 'Content-Type: application/json',
      '-d', payload,
    },
    {
      on_stdout = function(_, data)
        if data then
          for _, line in ipairs(data) do
            table.insert(stdout_data, line)
          end
        end
      end,
      on_exit = function(_, exit_code)
        handle_completion(exit_code)
      end,
    }
  )
end

function M.cancel_request()
  if state.job_id then
    local jid = state.job_id
    state.job_id = nil
    pcall(vim.fn.jobstop, jid)
  end
  M.to_question_mode()
end

function M.to_question_mode()
  local buf = state.buf_id
  local win = state.win_id
  if not buf or not vim.api.nvim_buf_is_valid(buf) then return end
  if not win or not vim.api.nvim_win_is_valid(win) then return end

  state.mode = 'question'
  replace_buffer_content({ '❯ ' })
  set_buf_keymaps('question')
  vim.api.nvim_set_current_win(win)
  vim.cmd('startinsert!')
end

function M.open()
  if state.buf_id and vim.api.nvim_buf_is_valid(state.buf_id) then
    M.close()
  end

  state.source_ft = vim.bo.filetype

  local buf = vim.api.nvim_create_buf(false, true)
  vim.bo[buf].buftype = 'nofile'
  vim.bo[buf].bufhidden = 'wipe'
  vim.bo[buf].swapfile = false
  vim.bo[buf].filetype = 'markdown'
  state.buf_id = buf

  vim.cmd('aboveleft split')
  state.win_id = vim.api.nvim_get_current_win()
  vim.api.nvim_win_set_buf(state.win_id, buf)
  vim.api.nvim_win_set_height(state.win_id, M.config.height)

  M.to_question_mode()
end

function M.close()
  if state.job_id then
    pcall(vim.fn.jobstop, state.job_id)
    state.job_id = nil
  end

  local win = state.win_id
  if win and vim.api.nvim_win_is_valid(win) then
    vim.api.nvim_win_close(win, true)
  end

  state.buf_id = nil
  state.win_id = nil
  state.mode = nil
  state.source_ft = nil
end

function M.toggle()
  local win = state.win_id
  if win and vim.api.nvim_win_is_valid(win) then
    M.close()
  else
    M.open()
  end
end

function M.leader_t()
  local win = state.win_id
  if win and vim.api.nvim_win_is_valid(win) then
    if state.mode == 'response' then
      M.to_question_mode()
    end
  else
    M.open()
  end
end

function M.setup(opts)
  M.config = vim.tbl_deep_extend('force', M.config, opts or {})
  state.keymaps_doc = load_keymaps(M.config.keymaps_path)

  vim.keymap.set('n', '<leader>/', function() M.toggle() end, { silent = true })
  vim.keymap.set('n', '<leader>t', function() M.leader_t() end, { silent = true })
end

return M
