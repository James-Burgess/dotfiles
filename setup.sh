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





else
echo $os not supported.
fi
