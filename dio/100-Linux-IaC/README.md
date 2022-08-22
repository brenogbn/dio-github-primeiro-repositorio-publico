# IAC
Infraestrutura como Código
Script de criação de estrutura de usuários, diretórios e permissões.
Quando vamos instalar um sistema em diversas máquinas, uma alternativa é criar um código que executa para finalizar a instalação de um sistema, customizando-o, pelo gerenciamento e profisionamento de uma infraestrutura comum para todas as máquinas com configurações semelhantes.

O processo manual além de ser lento pode levar a erros.

O código deve ficar guardado em algum lugar em que possa ser reutilizado.

exemplos:

Diretórios:
- /publico
- /adm
- /ven
- /sec

grupos
- GRP_ADM
- GRP_VEN
- GRP_SEC

usuários

carlos, maria, djoao, debora, sebastiana, roberto, josefina, amanda, rogerio

definições:
- exclui os arquivos grupos e usuários anteriores
- utilizamos SH / Bash Script
- o dono de todos os diretórios é root
- todos os usuários podem acessar o /público
- todos os usuários de cada grupo tem permissão no seu respectivo diretório.
- todos os usuários não poderão ler/gravar/executar em diretórios que não lhes pertencem.


---
## Solução deste exemplo
O Shell suporta outras estruturas que facilitam e melhoram este código.
Poderíamos por exemplo, criar variáveis e iterações que podem ser reutilizadas no decorrer da execução.

### 1. Excluir diretórios


### 2. Excluir usuários e /home/...






## Solução final

DIR="publico adm ven sec"

USR="carlos maria joao debora sebastiana roberto josefina amanda rogerio"

GRP_ADM="carlos maria joao"

GRP_VEN="debora sebastiana roberto"

GRP_SEC="josefina amanda rogerio"

GRP="GRP_ADM GRP_VEN GRP_SEC"

for i in $DIR; 
do echo "Excluindo diretorio $i";
echo rm -rf /$i;
echo "Criando diretorio $i";
echo mkdir /$i;
done;

