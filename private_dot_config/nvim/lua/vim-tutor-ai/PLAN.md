# vim-tutor-ai

A persistent AI tutor panel for Neovim that answers vim/neovim questions
using a local Ollama instance, with full awareness of your keybindings and plugins.

---

## UI Layout — Top Split

```
┌──────────────────────────────────────────────────┐
│ ❯ How do I delete a word?                        │  ← question mode
│──────────────────────────────────────────────────│
│ ...                                              │  ← wait mode
│──────────────────────────────────────────────────│
│ Use `dw` in normal mode. From your               │  ← response mode
│ config you also have `s` for the...              │
├──────────────────────────────────────────────────┤
│ (your code buffer)                               │
└──────────────────────────────────────────────────┘
```

Regular horizontal split pinned to the top, ~15 lines tall (configurable).
Single scratch buffer with three modes driving what the user sees and can do.

---

## Key Decisions

| Decision | Choice |
|----------|--------|
| UI layout | Regular `:split` above (not floating) |
| Streaming | Non-streamed (wait for full response) |
| History | No — fresh context each question |
| Model | `gemma4:31b-cloud` via Ollama API (configurable) |
| Input type | Single-line only — Enter submits, no newlines |
| Timeout | None |
| Buffer reuse | No — new buffer + window every toggle |
| Highlighting | None — plain text, only key combos matter |

---

## File Structure

```
~/.config/nvim/lua/vim-tutor-ai/
└── init.lua          -- all logic in one file
```

---

## Three Modes

The tutor buffer operates in exactly one of three modes at any time.
Mode is tracked in the state table. Keymaps change per mode.

### Mode 1: Question Mode

- Buffer shows the question prompt line: `❯ `
- User types their question, presses `<Enter>` to submit
- Empty input is ignored (no-op)
- On submit → capture text, switch to wait mode

### Mode 2: Wait Mode

- Buffer shows `...` placeholder
- API request is in-flight
- `<Ctrl+c>` cancels the request → kills the job → switches back to question mode
- `q` closes the panel (kills job first)

### Mode 3: Response Mode

- API response is displayed in the buffer
- Read-only behavior enforced by keymaps (not by `nomodifiable`)
- `<leader>t` clears the buffer and returns to question mode
- `q` closes the panel

### Global: `<leader>t`

- If panel is **not open** → calls `open()` (same as `<leader>?` but also works from outside)
- If panel is open in **response mode** → clear buffer → question mode
- Otherwise (question/wait mode) → no-op

Keymaps by mode:

| Key | Mode | Action |
|-----|------|--------|
| `<Enter>` | question | Submit question → wait mode (no-op if empty) |
| `<Ctrl+c>` | wait | Cancel request → question mode |
| `q` | any | Close panel (kills job if in-flight) |
| `<leader>t` | response | Clear buffer → question mode |

Global keymaps:

| Key | Action |
|-----|--------|
| `<leader>t` | If panel closed → `open()`. If panel open in response mode → clear → question mode |
| `<leader>?` | Toggle tutor panel (open/close) |

---

## Window Management — `open()` / `close()` / `toggle()`

- `open()`:
  1. Record the active buffer's filetype (`vim.bo.filetype`) before leaving it
  2. Create a new scratch buffer (`buftype=nofile`, `bufhidden=wipe`, `swapfile=false`, `filetype=markdown`)
  3. Create a horizontal split at the top via `vim.cmd('aboveleft split')`
  4. Set window height to configured value (default 15)
  5. Write `❯ ` into the buffer, set mode to `question`
  6. Place cursor in insert mode at end of the prompt line

- `close()`:
  1. Kill any in-flight job
  2. Close the window + wipe the buffer
  3. Clear state (`buf_id`, `win_id`, `job_id`, `mode`)

- `toggle()`:
  - If panel is open → `close()`
  - If panel is closed → `open()`

---

## Ollama API Call

- Endpoint: `POST http://localhost:11434/api/generate`
- Payload:
  ```json
  {
    "model": "<configured model>",
    "prompt": "<user question>",
    "system": "<system prompt with keymaps + filetype>",
    "stream": false
  }
  ```
- Uses `vim.fn.jobstart` with handlers:
  - `on_stdout`: accumulate response chunks
  - `on_exit`: parse accumulated JSON via `vim.fn.json_decode`, insert response
- Error on JSON parse failure: show "Error: unexpected response" inline
- No native timeout — `jobstart` runs until the job exits or is killed

---

## Output Rendering

- Wait mode: replace buffer content with `...`
- Response mode:
  - On success: replace buffer content with `response.response` from JSON
  - On connection error (`on_exit` with non-zero exit): show "Error: Could not connect to Ollama. Is it running?"
  - On JSON parse error: show "Error: unexpected response"
  - Scroll to top so the start of the response is visible
- Question mode: clear and write `❯ `

---

## State

Module-level Lua table (not buffer-local):

```lua
{
  buf_id = nil,       -- scratch buffer handle
  win_id = nil,       -- window handle
  job_id = nil,       -- in-flight Ollama job (nil if none)
  mode = nil,         -- "question" | "wait" | "response"
  keymaps_doc = nil,  -- contents of KEYMAPS.md (loaded once on require)
  source_ft = nil,    -- filetype of the buffer active when panel was opened
}
```

---

## System Prompt

Sent with every request:

```
You are a vim/neovim tutor embedded in the user's editor.
Answer questions about how to accomplish tasks in vim/neovim.
Reference the user's actual keybindings and plugins when relevant.
Keep answers concise and practical.

Current filetype: {source_ft}

User's keybindings and plugins:
---
{KEYMAPS.md contents}
---
```

`{source_ft}` is the filetype of the buffer that was active when the panel was opened, captured at `open()` time.

---

## `setup()` Configuration

```lua
require('vim-tutor-ai').setup({
  model = "gemma4:31b-cloud",         -- Ollama model name
  keymaps_path = vim.fn.stdpath('config') .. '/KEYMAPS.md',
  height = 15,                        -- panel height in lines
})
```

All keys optional with sensible defaults. `keymaps_doc` is loaded once at `require` time by reading `keymaps_path` via `vim.fn.readfile`.

---

## Error Handling

- Ollama not running → `on_exit` exit code ≠ 0 → "Error: Could not connect to Ollama. Is it running?"
- JSON parse failure → `pcall` around `vim.fn.json_decode` → "Error: unexpected response"
- Panel closed while request in-flight → `close()` kills job via `vim.fn.jobstop(job_id)`

---

## Integration into init.lua

```lua
{
  dir = vim.fn.stdpath('config') .. '/lua/vim-tutor-ai',
  name = 'vim-tutor-ai',
  config = function()
    require('vim-tutor-ai').setup()
  end,
}
```

---

## Flow

```
User presses <leader>? (or <leader>t when panel closed)
  → open():
      capture active buffer's filetype
      create scratch buffer
      create top split (15 lines)
      write "❯ "
      set mode = question
      cursor in insert mode

[Question mode]
User types, presses <Enter>
  → input is non-empty? → capture text, switch to wait mode
  → input is empty? → no-op

[Wait mode]
Buffer shows "..."
jobstart → POST to Ollama

  <Ctrl+c>:
    → kill job
    → switch to question mode

  on_exit (success):
    → parse JSON response
    → write response to buffer
    → switch to response mode

  on_exit (error):
    → write error message to buffer
    → switch to response mode

[Response mode]
User reads response
  <leader>t:
    → clear buffer
    → write "❯ "
    → switch to question mode

  q (any mode):
    → close():
        kill job if in-flight
        wipe buffer + close window
        clear state
```
