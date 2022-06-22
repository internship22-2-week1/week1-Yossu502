#!/bin/bash
sudo mkdir $1
expect "mendez14.\r"
read -p "Ingrese mensaje: " MSG
cd $1
sudo mkdir assets
cd assets
sudo mkdir css
sudo mkdir img
sudo mkdir js
cd ..
cd ..
sudo cp "style.css" /home/yossu/Documentos/pasantia/scripts/$1/assets/css/
sudo cp "index.html" /home/yossu/Documentos/pasantia/scripts/$1/
cd $1
sudo sed -i 's/{mensaje}/'"$MSG"'/g' index.html
firefox index.html
echo "Proyecto creado correctamente!"
