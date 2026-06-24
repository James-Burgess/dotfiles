bindkey '^ ' autosuggest-execute

alias vi="nvim"
alias cat="bat"
alias sudo='sudo '
alias fucking='sudo '
alias plz='sudo '

alias g='git'
alias gcsm='git commit -S -m'
alias gcm='git commit -m'
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

alias tab='tmux new -t'
