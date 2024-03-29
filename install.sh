# update and upgrade
echo updating system, please enter password for sudo:
sudo pacman -Syyu

echo installing yay and git
echo y | sudo pacman -S yay git

echo pulling dotfiles
git clone https://github.com/James-Burgess/dotfiles.git
cd dotfiles

echo installing deps
yay -S i3lock-fancy-git \
       screenfetch \
       feh \
       flameshot \
       udiskie \
       libinput-gestures \
       wmctrl \
       xdotool \
       ulauncher \
       blueman \
       xfce4-power-manager \
       udiskie \
       deepin-screenshot \
       polybar \
       caffine \
       redshift


echo installing languages
yay -S go \
       npm


echo installing editors
       atom \
       pycharm-community


echo installing apps
yay -S chromium \
       firefox
