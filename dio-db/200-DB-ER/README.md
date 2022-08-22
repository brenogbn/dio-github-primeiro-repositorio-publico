# Projeto de Banco de Dados

Contexto: Levantamento de Requisitos

Projeto Conceitual: Modelo ER

Projeto Lógico: Modelo Relacional

Projetos: Ordem de Serviço; Universidade; Ecommerce

## Ordem de Serviço

- Dentro de uma empresa os clientes demandam ao helpdesk algumas ações;
- Estas ações são transformadas em Ordem de Serviço
- Os clientes realizam pedido;
- O pedido é convertido em OS se puder ser realizado;
- O técnico executaa a OS. Após a finalização, é arquivada.

### Entidades

- Cliente
- Responsável
- Pedido
- Ordem de Serviço

### Relacionamentos

- Solicita
- Analisa
- Executa
- Arquiva

### Como foi feito

[MWB / MySQL Workbench](estudo-helpdesk.mwb) | [PDF](estudo-helpdesk.pdf) | [SQL](estudo-helpdesk.sql)

#### Usuario

Aplica-se a todos os usuários do sistema, independente do papel, possui as informações básicas para realizar login, contato, nome, etc.

#### Cliente

Cria o tipo cliente, neste caso, apenas vincula a uma empresa.

#### Empresa

Uma empresa tem nome, cnpj, contato, descrição e endereço. Possui as informações necessárias para abertura de chamados.

#### Responsavel

Cria o tipo responsável, neste caso, um funcionário da empresa que trabalha em determinado departamento e tem por objetivo atender aos chamados. O responsável possui um nível de acesso a ser definido pelo sistema construído.

#### Pedido

Um pedido é aberto por um usuário e pode ser respondido por um Responsável. 

#### AnaliseDePedido

A análise é feita por um responsavel em relação a um Pedido. Pode aceitar (o que gera ordem de serviço) ou negar (o que arquiva)

#### OrdemDeServico

É aberta após uma análise de pedido. A ordem de serviço permanece aberta até que seja fechada (data de fechamento). Para arquivamento, possui vínculo com o cliente, análise, responsável e empresa solicitante. Por ser modificado durante o fluxo, possui histórico.

#### Historico

Armazena elementos históricos a cada Ordem de Serviço, tais como data e hora, usuário responsável, título e descrição do que foi feito. Pode ser utilizado pelo backend para incluir registros a uma OS.

## Universidade

- Narrativa: Alunos
  - A universidade possui diversos alunos que podem estar em diversos cursos de graduação
  - Os alunos podem fazer cursos extras para contar como horas complementares.
  - Não há restrição quanto ao número de matérias se não houver sobreposição de horários
  - Os alunos são submetidos a duas provas por semestre para cada disciplinas. Eventuais trabalhos podem ser tratados pelo professor para compor a prova. 
  - Cada disciplina possui apenas um professor.
  - As disciplinas possuem pré-requisitos, que podem ser associados a mais de uma disciplina.
- Narrativa: Disciplinas
  - As disciplinas podem ser comuns a vários cursos
  - O ciclo de vida da disciplina é semestral
- Narrativa: Professores
  - Os professores que ministram as disciplinas estão vinculados às coordenações de seus respectivos cursos.

### Como foi feito

[MWB / MySQL Workbench](estudo-universidade.mwb) | [PDF](estudo-universidade.pdf) | [SQL](estudo-universidade.sql)

## E-Commerce

Escopo: Produto, Estoque, Cliente, Pedido, Fornecedor, Venda de Produtos
faltou: Vendedor

- Narrativa: Produto
  - Os produtos são vendidos em uma única plataforma online. Os produtos podem ter vendedores distintos / terceiros.
  - Cada produto tem um fornecedor
  - Um ou mais produtos podem compor um pedido.
- Narrativa: Cliente
  - O cliente pode se cadastrar com CPF ou CNPJ
  - O endereço do cliente determina o valor do frete
  - Um cliente pode comprar mais de um pedido, este tem um período de carencia para devolução do produto
- Narrativa: Pedido
  - Os pedidos são criados por clientes e possuem informações de compra, endereço e status da entrega
  - Um produto ou mais compõem um pedido
  - O pedido pode ser cancelado
- Narrativa: Fornecedor & Estoque
  - Um produto pode ter vários vendedores
  - O estoque é determinado pelo fornecedor

### Como foi feito

[MWB / MySQL Workbench](estudo-ecommerce.mwb) | [PDF](estudo-ecommerce.pdf) | [SQL](estudo-ecommerce.sql)


Modelagem:

 - Usuario
   - Todos os usuários (Clientes, Fornecedores e Vendedores) são cadastrados;
   - Todos os usuários possuem DocID que pode ser tanto CPF quanto CNPJ, generalizado como Documento.
 - Fornecedor
   - São usuários e possuem Nome Fantasia, uma descrição curta, uma descrição longa e um endereço que pode ser diferente do endereço de cadastro.
 - Cliente
   - São usuários e possuem apenas uma flag para dizer se podem ou não comprar algo.
 - Vendedor
   - São usuários e possuem Nome Fantasia, uma descrição curta e uma descrição longa. São considerados intermediários entre os fornecedores e os clientes.
   - Os vendedores determinam os preços de venda dos produtos;
 - Produto
   - Possui ID único, nome, anúncio, preço de custo e preço de venda recomendado;
   - Um produto pode ter vários fornecedores, cada um com seu estoque.
   - Os preços são armazenados em centavos, visto que o tipo INT possui a precisão necessária para tal. O uso de double/float não possui a precisão necessária para representar moeda.
 - Pedido
   - Possui ID único, vínculo com o Cliente, data, valor total, último status, endereço de entrega e forma de pagamento.
 - ProdutosPedido
   - Possui os produtos selecionados em um pedido. Os campos criados são Pedido, Produto, Vendedor, Quantidade e Valor Unitário.
   - São armazenados os dados do valor para fins históricos, visto que com o tempo os preços serão alterados.
 - HistoricoPedido
   - Possui o número do pedido, a data da alteração do status, o status anterior e novo, uma descrição, um comentário e meta-dados. Esta tabela pode ser utilizada para armazenar o histórico de um pedido e colocar anotações como Pedido Gerado, Pedido Pago, Pedido Cancelado, Pedido Devolvido.
   - Informações como o código de rastreio, andamento e devolução serão armazenadas aqui.
 - StatusPedido
   - Tabela estática que possui os status possíveis utilizados nas tabelas Pedido e HistoricoPedido.
 - Estoque
   - Tabela que possui um ID de estoque para que possa ser alterada facilmente, possui o Fornecedor, o Produto, o Endereço e a quantidade de itens disponíveis.
 - PrecoVendedor
   - Armazena o valor da venda dos produtos, sendo vinculado Vendedor, Produto, Estoque (opcional) e Preço de venda.
 - Endereco
   - Cada endereço possui um ID e não é recomendável a alteração de endereços mas sim o cadastro de novos.
   - CEP, UF, Cidade, Logradouro, Número e Complemento.
 - FormasDePagamento
   - Esta tabela possui as formas válidas que podem ser utilizada nas compras, tais como Pix e cartões de Débito e Crédito.
 - FormaDePagamento
   - Esta tabela possui o vínculo de uma forma de pagamento válida, um cliente e seus meta-dados que podem variar de acordo com a forma.