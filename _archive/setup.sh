echo 'setting up your machine'
date
pwd

os=$(cat /etc/os-release | grep ID=)

if [[ $os = ID=manjaro ]]
then
echo $os detected, setting up


echo Updating system!
sudo pacman -Syyu -y

echo Installing yay
sudo pacman -Sy yay git lolcat cowsay -y

yay -S screenfetch \
       feh \
       flameshot \
       google-chrome-unstable \
       atom \
       pycharm-community 



else
echo $os not supported.
fi
