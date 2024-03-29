export ZSH="/home/jimmy/.oh-my-zsh"

ZSH_THEME="powerlevel9k/powerlevel9k"
POWERLEVEL9K_MODE="nerdfont-complete"

source $ZSH/themes/powerlevel9k/powerlevel9k.zsh-theme

POWERLEVEL9K_FOLDER_ICON=""
POWERLEVEL9K_HOME_SUB_ICON="$(print_icon "HOME_ICON")"
POWERLEVEL9K_DIR_PATH_SEPARATOR=" $(print_icon "LEFT_SUBSEGMENT_SEPARATOR") "

POWERLEVEL9K_COMMAND_EXECUTION_TIME_THRESHOLD=0

POWERLEVEL9K_DIR_OMIT_FIRST_CHARACTER=true

POWERLEVEL9K_BACKGROUND_JOBS_FOREGROUND='black'
POWERLEVEL9K_BACKGROUND_JOBS_BACKGROUND='178'
POWERLEVEL9K_NVM_BACKGROUND="238"
POWERLEVEL9K_NVM_FOREGROUND="green"
POWERLEVEL9K_CONTEXT_DEFAULT_FOREGROUND="blue"
POWERLEVEL9K_DIR_WRITABLE_FORBIDDEN_FOREGROUND="015"

POWERLEVEL9K_TIME_BACKGROUND='255'
#POWERLEVEL9K_COMMAND_TIME_FOREGROUND='gray'
POWERLEVEL9K_COMMAND_EXECUTION_TIME_BACKGROUND='245'
POWERLEVEL9K_COMMAND_EXECUTION_TIME_FOREGROUND='black'

POWERLEVEL9K_TIME_FORMAT="%D{%H:%M}"
POWERLEVEL9K_LEFT_PROMPT_ELEMENTS=(root_indicator context dir dir_writable vcs)
POWERLEVEL9K_RIGHT_PROMPT_ELEMENTS=(status background_jobs command_execution_time time)
POWERLEVEL9K_SHOW_CHANGESET=true

HYPHEN_INSENSITIVE="true"
COMPLETION_WAITING_DOTS="true"

DISABLE_AUTO_UPDATE="true"
ZSH_HIGHLIGHT_HIGHLIGHTERS=(main brackets pattern cursor)
typeset -gA ZSH_HIGHLIGHT_STYLES
ZSH_HIGHLIGHT_STYLES[cursor]='bold'

ZSH_HIGHLIGHT_STYLES[alias]='fg=green,bold'
ZSH_HIGHLIGHT_STYLES[suffix-alias]='fg=green,bold'
ZSH_HIGHLIGHT_STYLES[builtin]='fg=green,bold'
ZSH_HIGHLIGHT_STYLES[function]='fg=green,bold'
ZSH_HIGHLIGHT_STYLES[command]='fg=green,bold'
ZSH_HIGHLIGHT_STYLES[precommand]='fg=green,bold'
ZSH_HIGHLIGHT_STYLES[hashed-command]='fg=green,bold'


plugins=(
  # git
 	zsh-syntax-highlighting
  zsh-autosuggestions
  copyfile
  copybuffer
  autojump
  dotenv
  docker
  docker-compose
  common-aliases
  python
  sudo
)

[[ -s /home/jimmy/.autojump/etc/profile.d/autojump.sh ]] && source /home/jimmy/.autojump/etc/profile.d/autojump.sh

autoload -U compinit && compinit -u


cd() { builtin cd "$@" && ls; }

# aliases
alias sudo ='sudo'
alias fucking='sudo '
alias plz='sudo '


alias gcsm='git commit -S -m'
alias gp='git push origin'
alias gs='git status'
alias gd='git diff'
alias gds='git diff --staged'
alias gpl='git pull origin'
alias ga='git add'
alias gca='git commit --amend'
alias gco='git checkout'
alias glg='git log --abbrev --oneline --decorate'
alias glp='git log --pretty=oneline --graph --decorate --all'

alias branch-del='git branch --merged | grep -v \* | xargs git branch -D'
alias branch-del-all='git branch | grep -v "master" | grep -v "development" | xargs git branch -D'

alias be='bundle exec'
alias br='be rails'

alias dcp='docker-compose'

eval $(thefuck --alias)


source $ZSH/oh-my-zsh.sh
screenfetch;
source /usr/share/nvm/init-nvm.sh

export PATH="$HOME/.cargo/bin $HOME/.poetry/bin:$PATH"

PATH="/home/jimmy/perl5/bin${PATH:+:${PATH}}"; export PATH;
PERL5LIB="/home/jimmy/perl5/lib/perl5${PERL5LIB:+:${PERL5LIB}}"; export PERL5LIB;
PERL_LOCAL_LIB_ROOT="/home/jimmy/perl5${PERL_LOCAL_LIB_ROOT:+:${PERL_LOCAL_LIB_ROOT}}"; export PERL_LOCAL_LIB_ROOT;
PERL_MB_OPT="--install_base \"/home/jimmy/perl5\""; export PERL_MB_OPT;
PERL_MM_OPT="INSTALL_BASE=/home/jimmy/perl5"; export PERL_MM_OPT;
