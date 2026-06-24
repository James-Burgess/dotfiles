# JIMBOT Neovim Keymaps

## Essential

| Key | Mode | Action |
|-----|------|--------|
| `jk` | insert | Exit to normal mode |
| `Ctrl+s` | n/i | Save (`:w`) |
| `Ctrl+z` | n/i | Undo (`:u`) |
| `Esc` | normal | Clear search highlights |
| `Ctrl+/` | n/t | Toggle floating terminal |

## Navigation

| Key | Mode | Action |
|-----|------|--------|
| `Ctrl+h` | normal | Move to left window |
| `Ctrl+j` | normal | Move to bottom window |
| `Ctrl+k` | normal | Move to top window |
| `Ctrl+l` | normal | Move to right window |
| `s` | n/x/o | Flash jump (jump to anywhere on screen) |
| `S` | n/x/o | Flash treesitter (select syntax node) |
| `Ctrl+p` | normal | Buffer pick (barbar magic jump) |

## Files & Buffers

| Key | Mode | Action |
|-----|------|--------|
| `Space+e` | normal | Toggle file explorer (nvim-tree) |
| `Space+ff` | normal | Find files (telescope) |
| `Space+fg` | normal | Live grep (telescope) |
| `Space+fb` | normal | Browse open buffers (telescope) |
| `Space+fh` | normal | Search help tags |
| `Space+ft` | normal | Search TODO/FIXME/HACK comments |
| `Alt+,` | normal | Previous buffer |
| `Alt+.` | normal | Next buffer |
| `Alt+p` | normal | Pin/unpin buffer |
| `Alt+c` | normal | Close buffer |

## Editing

| Key | Mode | Action |
|-----|------|--------|
| `<` | visual | Dedent (keeps selection) |
| `>` | visual | Indent (keeps selection) |
| `p` | visual | Paste without yanking replaced text |
| `gc` | n/v | Toggle comment (Comment.nvim) |
| `s` | normal | Substitute operator (replace motion with register) |
| `ss` | normal | Substitute entire line |
| `s` | visual | Substitute selection |

## Surround (mini.surround)

| Key | Mode | Action |
|-----|------|--------|
| `gsa` | normal | Add surround |
| `gsd` | normal | Delete surround |
| `gsr` | normal | Replace surround |
| `gsf` | normal | Find surround (right) |
| `gsF` | normal | Find surround (left) |

## LSP

| Key | Mode | Action |
|-----|------|--------|
| `gd` | normal | Go to definition |
| `gD` | normal | Go to declaration |
| `gi` | normal | Go to implementation |
| `gr` | normal | Find references (telescope) |
| `K` | normal | Hover documentation |
| `Space+rn` | normal | Rename symbol (live preview via inc-rename) |
| `Space+ca` | normal | Code actions |

## Refactoring

| Key | Mode | Action |
|-----|------|--------|
| `Space+re` | visual | Extract function |
| `Space+rv` | visual | Extract variable |
| `Space+ri` | normal | Inline variable |
| `Space+rb` | normal | Extract block |

## Formatting & Code Structure

| Key | Mode | Action |
|-----|------|--------|
| `Space+fm` | normal | Format file (conform) |
| `Space+a` | normal | Toggle aerial (code outline/symbols) |

## AI Completion

| Key | Mode | Action |
|-----|------|--------|
| `F2` | n/i | Trigger ollama completion (gemma4:31b-cloud) |

## AI Tutor

| Key | Mode | Action |
|-----|------|--------|
| `Space+?` | normal | Toggle AI tutor panel |
| `Space+t` | normal | Open AI tutor (or clear response → new question) |

## Undo & History

| Key | Mode | Action |
|-----|------|--------|
| `Space+u` | normal | Toggle undo tree |

## Dashboard

Alpha dashboard opens on empty start:

| Key | Action |
|-----|--------|
| `f` | Find files |
| `r` | Recent files |
| `g` | Find text (live grep) |
| `e` | New file |
| `q` | Quit |

## Spellcheck (built-in)

| Key | Mode | Action |
|-----|------|--------|
| `]s` | normal | Next misspelled word |
| `[s` | normal | Previous misspelled word |
| `z=` | normal | Suggest corrections |
| `zg` | normal | Add word to dictionary |
| `zw` | normal | Mark word as wrong |

## Autocompletion (blink.cmp)

| Key | Mode | Action |
|-----|------|--------|
| `Ctrl-Space` | insert | Trigger completion |
| `Tab` | insert | Select next item |
| `Shift-Tab` | insert | Select previous item |
| `Enter` | insert | Cancel completion (does not confirm) |

Signature help pops up automatically when typing function args.

## Auto-formatting

Conform.nvim formats on save for: lua (stylua), python (ruff), js/ts (prettierd), go (gofmt), json/yaml/md (prettierd). Install formatters via `:Mason` or system package manager.