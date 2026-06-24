-- ~/.config/nvim/init.lua
-- Custom Neovim config with lazy.nvim plugin manager

-- ═══════════════════════════════════════════════════════════════
-- OPTIONS
-- ═══════════════════════════════════════════════════════════════

local opt = vim.opt
local g = vim.g

-- Leader keys
vim.g.mapleader = ' '
vim.g.maplocalleader = '\\'

-- Basic settings
opt.number = true
opt.relativenumber = true
opt.cursorline = true
opt.expandtab = true
opt.shiftwidth = 2
opt.tabstop = 2
opt.softtabstop = 2
opt.smartindent = true
opt.wrap = false
opt.termguicolors = true
opt.signcolumn = 'yes'
opt.scrolloff = 10
opt.sidescrolloff = 10
opt.clipboard = 'unnamedplus'

opt.undofile = true
opt.ignorecase = true
opt.smartcase = true
opt.hlsearch = false
opt.incsearch = true
opt.splitbelow = true
opt.splitright = true
opt.hidden = true
opt.backup = false
opt.writebackup = false
opt.swapfile = false
opt.updatetime = 250
opt.timeoutlen = 300
opt.showcmd = true
opt.showmode = true
opt.wildmenu = true
opt.spell = true
opt.spelllang = { 'en' }

-- ═══════════════════════════════════════════════════════════════
-- KEYMAPS
-- ═══════════════════════════════════════════════════════════════

local map = vim.keymap.set
local opts = { noremap = true, silent = true }

-- Save and undo
map({ 'n', 'i' }, '<C-s>', '<cmd>w<cr>', opts)
map({ 'n', 'i' }, '<C-z>', '<cmd>u<cr>', opts)

-- Better window navigation
map('n', '<C-h>', '<C-w>h', opts)
map('n', '<C-j>', '<C-w>j', opts)
map('n', '<C-k>', '<C-w>k', opts)
map('n', '<C-l>', '<C-w>l', opts)

-- jk to escape insert mode
map('i', 'jk', '<esc>', opts)

-- Better indenting in visual mode
map('v', '<', '<gv', opts)
map('v', '>', '>gv', opts)

-- Don't yank on paste in visual mode
map('v', 'p', '"_dP', opts)

-- Clear search highlights
map('n', '<Esc>', ':nohlsearch<CR>', opts)

-- ═══════════════════════════════════════════════════════════════
-- LAZY.NVIM BOOTSTRAP
-- ═══════════════════════════════════════════════════════════════

local lazypath = vim.fn.stdpath('data') .. '/lazy/lazy.nvim'
if not vim.loop.fs_stat(lazypath) then
  vim.fn.system({
    'git',
    'clone',
    '--filter=blob:none',
    'https://github.com/folke/lazy.nvim.git',
    '--branch=stable',
    lazypath,
  })
end
vim.opt.rtp:prepend(lazypath)

-- ═══════════════════════════════════════════════════════════════
-- PLUGINS
-- ═══════════════════════════════════════════════════════════════

require('lazy').setup({

  -- ═══════════════════════
  -- UI / Appearance
  -- ═══════════════════════

  {
    'catppuccin/nvim',
    name = 'catppuccin',
    priority = 1000,
    config = function()
      require('catppuccin').setup({ flavour = 'mocha', integrations = { lualine = true } })
      vim.cmd.colorscheme('catppuccin')
    end,
  },

  {
    'nvim-lualine/lualine.nvim',
    dependencies = { 'nvim-tree/nvim-web-devicons', 'SmiteshP/nvim-navic' },
    config = function()
      local theme = require('catppuccin.utils.lualine')('mocha')
      require('lualine').setup({
        options = { theme = theme },
        sections = {
          lualine_c = { 'filename', { 'navic', draw_empty = true } },
        },
      })
    end,
  },

  {
    'romgrk/barbar.nvim',
    dependencies = {
      'lewis6991/gitsigns.nvim',
      'nvim-tree/nvim-web-devicons',
    },
    init = function()
      vim.g.barbar_auto_setup = false
    end,
    version = '^1.0.0',
    opts = {
      sidebar_filetypes = {
        NvimTree = true,
        undotree = { text = 'undotree', align = 'center' },
      },
    },
    config = function(_, bar_opts)
      require('barbar').setup(bar_opts)
      map('n', '<A-,>', '<Cmd>BufferPrevious<CR>', opts)
      map('n', '<A-.>', '<Cmd>BufferNext<CR>', opts)
      map('n', '<A-p>', '<Cmd>BufferPin<CR>', opts)
      map('n', '<A-c>', '<Cmd>BufferClose<CR>', opts)
      map('n', '<C-p>', '<Cmd>BufferPick<CR>', opts)
    end,
  },

  {
    'lukas-reineke/indent-blankline.nvim',
    main = 'ibl',
    config = function()
      require('ibl').setup()
    end,
  },

  -- ═══════════════════════
  -- File Explorer
  -- ═══════════════════════

  {
    'nvim-tree/nvim-tree.lua',
    dependencies = { 'nvim-tree/nvim-web-devicons' },
    config = function()
      require('nvim-tree').setup()
      map('n', '<leader>e', ':NvimTreeToggle<CR>', opts)
    end,
  },

  -- ═══════════════════════
  -- Fuzzy Finder
  -- ═══════════════════════

  {
    'nvim-telescope/telescope.nvim',
    tag = '0.1.5',
    dependencies = { 'nvim-lua/plenary.nvim' },
    config = function()
      local telescope = require('telescope')
      telescope.setup({})
      local builtin = require('telescope.builtin')
      map('n', '<leader>ff', builtin.find_files, opts)
      map('n', '<leader>fg', builtin.live_grep, opts)
      map('n', '<leader>fb', builtin.buffers, opts)
      map('n', '<leader>fh', builtin.help_tags, opts)
    end,
  },

  -- ═══════════════════════
  -- Completion
  -- ═══════════════════════

  {
    'saghen/blink.cmp',
    version = '1.*',
    dependencies = { 'rafamadriz/friendly-snippets' },
    opts = {
      keymap = {
        preset = 'default',
        ['<CR>'] = { 'fallback' },
      },
      appearance = { use_nvim_cmp_as_default = true },
      sources = {
        default = { 'lsp', 'path', 'snippets', 'buffer' },
      },
      signature = { enabled = true },
    },
  },

  -- ═══════════════════════
  -- Treesitter (Syntax Highlighting)
  -- ═══════════════════════

  {
    'nvim-treesitter/nvim-treesitter',
    build = ':TSUpdate',
    main = 'nvim-treesitter.config',
    opts = {
      ensure_installed = { 'lua', 'vim', 'vimdoc', 'bash', 'python', 'javascript', 'typescript', 'go', 'json', 'yaml', 'toml', 'markdown' },
      highlight = { enable = true },
      indent = { enable = true },
    },
  },

  -- ═══════════════════════
  -- LSP Support
  -- ═══════════════════════

  {
    'neovim/nvim-lspconfig',
    dependencies = {
      'saghen/blink.cmp',
      'williamboman/mason.nvim',
      'williamboman/mason-lspconfig.nvim',
    },
    config = function()
      require('mason').setup()
      require('mason-lspconfig').setup({
        ensure_installed = { 'lua_ls', 'gopls', 'ts_ls' },
      })

      local capabilities = require('blink.cmp').get_lsp_capabilities()

      vim.api.nvim_create_autocmd('LspAttach', {
        group = vim.api.nvim_create_augroup('lsp_keymaps', { clear = true }),
        callback = function(args)
          local bufopts = { noremap = true, silent = true, buffer = args.buf }
          map('n', 'gD', vim.lsp.buf.declaration, bufopts)
          map('n', 'gd', vim.lsp.buf.definition, bufopts)
          map('n', 'K', vim.lsp.buf.hover, bufopts)
          map('n', 'gi', vim.lsp.buf.implementation, bufopts)
          map('n', '<leader>rn', function()
            return ':IncRename ' .. vim.fn.expand('<cword>')
          end, { expr = true, buffer = args.buf })
          map('n', '<leader>ca', vim.lsp.buf.code_action, bufopts)
          map('n', 'gr', require('telescope.builtin').lsp_references, bufopts)
        end,
      })

      vim.lsp.config('lua_ls', {
        capabilities = capabilities,
        settings = {
          Lua = {
            diagnostics = { globals = { 'vim' } },
            workspace = { library = vim.api.nvim_get_runtime_file('', true) },
          },
        },
      })

      vim.lsp.config('gopls', { capabilities = capabilities })
      vim.lsp.config('ts_ls', { capabilities = capabilities })

      vim.lsp.enable({ 'lua_ls', 'gopls', 'ts_ls' })
    end,
  },

  -- ═══════════════════════
  -- Git
  -- ═══════════════════════

  {
    'lewis6991/gitsigns.nvim',
    config = function()
      require('gitsigns').setup()
    end,
  },

  -- ═══════════════════════
  -- Quality of Life
  -- ═══════════════════════

  {
    'numToStr/Comment.nvim',
    config = function()
      require('Comment').setup()
    end,
  },


  {
    'folke/which-key.nvim',
    config = function()
      require('which-key').setup()
    end,
  },

  {
    'stevearc/aerial.nvim',
    config = function()
      require('aerial').setup({
        on_attach = function(bufnr)
          map('n', '<leader>a', '<cmd>AerialToggle!<CR>', { buffer = bufnr })
        end,
      })
    end,
  },

  {
    'SmiteshP/nvim-navic',
    config = function()
      require('nvim-navic').setup()
    end,
  },

  {
    'folke/todo-comments.nvim',
    dependencies = { 'nvim-lua/plenary.nvim' },
    config = function()
      require('todo-comments').setup()
      map('n', '<leader>ft', '<cmd>TodoTelescope<CR>', opts)
    end,
  },

  {
    'echasnovski/mini.surround',
    version = '*',
    config = function()
      require('mini.surround').setup()
    end,
  },

  {
    'MeanderingProgrammer/render-markdown.nvim',
    ft = { 'markdown' },
    opts = {},
  },

  {
    'echasnovski/mini.pairs',
    version = '*',
    config = function()
      require('mini.pairs').setup()
    end,
  },

  {
    'stevearc/conform.nvim',
    config = function()
      require('conform').setup({
        format_on_save = {
          timeout_ms = 500,
          lsp_fallback = true,
        },
        formatters_by_ft = {
          lua = { 'stylua' },
          python = { 'ruff_format' },
          javascript = { 'prettierd' },
          typescript = { 'prettierd' },
          go = { 'gofmt' },
          json = { 'prettierd' },
          yaml = { 'prettierd' },
          markdown = { 'prettierd' },
        },
      })
      map('n', '<leader>fm', function()
        require('conform').format({ lsp_fallback = true })
      end, opts)
    end,
  },

  {
    'mbbill/undotree',
    config = function()
      map('n', '<leader>u', '<cmd>UndotreeToggle<CR>', opts)
    end,
  },

  {
    'sha0coder/nvim-ollama',
    opts = {
      model = 'gemma4:31b-cloud',
      trigger = 'manual',
      keybind = '<F2>',
    },
  },

  {
    'akinsho/toggleterm.nvim',
    version = '*',
    config = function()
      require('toggleterm').setup({
        direction = 'float',
      })
      map({ 'n', 't' }, '<C-/>', '<cmd>ToggleTerm<CR>', opts)
    end,
  },

  {
    'goolord/alpha-nvim',
    dependencies = { 'nvim-tree/nvim-web-devicons' },
    config = function()
      local alpha = require('alpha')
      local dashboard = require('alpha.themes.dashboard')
      dashboard.section.header.val = {
        '                                                     ',
        '  ██╗███╗   ███╗██████╗  ██████╗ ██████╗ ████████╗    ',
        '  ██║████╗ ████║██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝    ',
        '  ██║██╔████╔██║██████╔╝██║   ██║██████╔╝   ██║       ',
        '  ██║██║╚██╔╝██║██╔═══╝ ██║   ██║██╔═══╝    ██║       ',
        '  ██║██║ ╚═╝ ██║██║     ╚██████╔╝██║        ██║       ',
        '  ╚═╝╚═╝     ╚═╝╚═╝      ╚═════╝ ╚═╝        ╚═╝       ',
      }
      dashboard.section.buttons.val = {
        dashboard.button('f', ' Find file', ':Telescope find_files<CR>'),
        dashboard.button('r', ' Recent files', ':Telescope oldfiles<CR>'),
        dashboard.button('g', ' Find text', ':Telescope live_grep<CR>'),
        dashboard.button('e', ' New file', ':ene<CR>'),
        dashboard.button('q', ' Quit', ':qa<CR>'),
      }
      alpha.setup(dashboard.config)
    end,
  },

  {
    'rcarriga/nvim-notify',
    config = function()
      vim.notify = require('notify')
    end,
  },

  {
    'folke/flash.nvim',
    event = 'VeryLazy',
    opts = {
      modes = { search = { enabled = false } },
    },
    keys = {
      { 's', mode = { 'n', 'x', 'o' }, function() require('flash').jump() end, desc = 'Flash' },
      { 'S', mode = { 'n', 'x', 'o' }, function() require('flash').treesitter() end, desc = 'Flash Treesitter' },
    },
  },

  {
    'windwp/nvim-ts-autotag',
    dependencies = { 'nvim-treesitter/nvim-treesitter' },
    config = function()
      require('nvim-ts-autotag').setup()
    end,
  },

  {
    'smjonas/inc-rename.nvim',
    config = function()
      require('inc_rename').setup()
    end,
  },

  {
    'gbprod/substitute.nvim',
    config = function()
      local sub = require('substitute')
      sub.setup()
      map('n', 's', sub.operator, opts)
      map('n', 'ss', sub.line, opts)
      map('x', 's', sub.visual, opts)
    end,
  },

  {
    'fcpg/vim-osc52',
    config = function()
      vim.g.oscpy_osc52 = 1
    end,
  },

  {
    'stevearc/dressing.nvim',
    config = function()
      require('dressing').setup()
    end,
  },

  {
    'folke/noice.nvim',
    dependencies = {
      'MunifTanjim/nui.nvim',
      'rcarriga/nvim-notify',
    },
    config = function()
      require('noice').setup({
        presets = {
          bottom_search = true,
          command_palette = true,
        },
      })
    end,
  },

  {
    'ThePrimeagen/refactoring.nvim',
    dependencies = { 'nvim-lua/plenary.nvim', 'nvim-treesitter/nvim-treesitter', 'nvim-neotest/nvim-nio' },
    config = function()
      require('refactoring').setup({})
      map('x', '<leader>re', function()
        require('refactoring').refactor('Extract Function')
      end, opts)
      map('x', '<leader>rv', function()
        require('refactoring').refactor('Extract Variable')
      end, opts)
      map('n', '<leader>ri', function()
        require('refactoring').refactor('Inline Variable')
      end, opts)
      map('n', '<leader>rb', function()
        require('refactoring').refactor('Extract Block')
      end, opts)
    end,
  },

  {
    dir = vim.fn.stdpath('config') .. '/lua/vim-tutor-ai',
    name = 'vim-tutor-ai',
    config = function()
      require('vim-tutor-ai').setup()
    end,
  },

})
