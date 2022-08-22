#!/bin/bash

DIR="publico adm ven sec"

USR="carlos maria joao debora sebastiana roberto josefina amanda rogerio"

GRP_ADM="carlos maria joao"

GRP_VEN="debora sebastiana roberto"

GRP_SEC="josefina amanda rogerio"

GRP="GRP_ADM GRP_VEN GRP_SEC"

for i in $DIR; 
do echo "Excluindo diretorio $i";
rm -rf /$i;
echo "Criando diretorio $i";
mkdir /$i;
chmod 770 /$i;
done;

chmod 777 /publico
chgrp GRP_ADM /adm;
chgrp GRP_VEN /ven;
chgrp GRP_SEC /sec;

for i in $USR;
do echo "Excluindo usuario $i";
userdel -r $i;
echo "Criando usuario $i";
useradd $i;
done;

for i in $GRP;
do echo "Criando grupo $i";
groupadd $i;
done;

for i in $GRP_ADM;
do echo "Adicionando usuario $i ao grupo GRP_ADM";
usermod -aG GRP_ADM $i;
done;

for i in $GRP_VEN;
do echo "Adicionando usuario $i ao grupo GRP_VEN";
usermod -aG GRP_VEN $i;
done;

for i in $GRP_SEC;
do echo "Adicionando usuario $i ao grupo GRP_SEC";
usermod -aG GRP_SEC $i;
done;