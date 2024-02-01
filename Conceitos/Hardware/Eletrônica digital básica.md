# Eletrônica digital básica
2023-08-25
tags: [-Hardware](-Hardware.md) [[Lógica]]

Circuito combinacional = depende das entradas

## De imagens até expressões

## De expressões para imagens

## Diagrama de Karloh 


## Flip Flops

Circuitos Sequenciais = dependem das entradas e de saídas que dependem também da última saída do Flip Flop

Clock = sequência de pulsos, onda

Um Flip Flop tem no máximo duas entradas, onde tem duas saídas, uma saída normal e uma saída barrada.

Inconsistência = quando não tem a saída barrada.

### RS básico

RS = re set

Existem elos de realimentação

![[../../img/20231006_183351.jpg]]

Estado estável é quando temos um Q = Qa
Instável = quando é diferente do último Q

Os últimos valores desse Flip Flop vão ser Q = Q barrado. O que não pode acontecer, pois o Flip Flop é para ser um loop.

![[../../img/20231006_185941.jpg]]

Essa seria a tabela verdade do Flip Flop 

Pensa em uma lâmpada, quando estamos setando o circuito, vamos forçar ele a ficar ligado e quando o reset é ligado, vamos voltar ao estado inicial de loop

#### RS com Clock

![[../../img/20231006_190527.jpg]]

Quando o Clock é 1, temos uma porta inversora, o que transforma o Clock no RS, R . S BÁSICO 
Quando temos o Clock 0, mantém 1 no circuito, o que transforma num loop

### JK

Não tem o problema do básico, que não perderemos os dois últimos casos

![[../../img/20231006_191645.jpg]]

#### Com clear e preset

![[../../img/20231006_192725.jpg]]

Temos aí um botão de liga e desliga no Flip Flop

![[../../img/20231006_193149.jpg]]

A bolinha é bem importante, pois quer dizer que ele é ativado com 1 

#### JK mestre escravo

Antes, se o circuito tivesse alterando o J e o K, ele continuaria mudando no meio do Clock. Com o mestre escravo, um sempre vai ser uma porta inversora que não vai mudar o valor na troca do clock 

![[../../img/20231006_194112.jpg]]

É basicamente o J e o K que não muda durante a descida do clock

![[../../img/20231006_194927.jpg]]

Bolinha é sensível a decida


## Substituição de dados na Cache

![[20231027_202828.jpg]]

* Política de salvamento: 

Cache é pequena, então vamos trazer por blocos

Mapeamento direto: não tem blocos, vai direto no dado, mas as células vão ficar se trocando em uma única linha 0 vai no bloco 1 e o 1 no 2, mas o 3 vai de volta na 

Associativo:
Vai mudar toda hora sem essa organização de cada célula em cada linha

Associativo por conjunto: 
Vai ter um tipo de algoritimo, vai ter uma política de mudança
![[20231027_191917.jpg]]

Tempo sem ser utilizado
Quantas vezes sem ser utilizado

* Política de escrita:

Temos o problema de quando trocamos as células para executar alguma coisa mas não temos mais essa célula (dado)

![[20231027_192835.jpg]]
![[20231027_193219.jpg]]

E como vamos criar fisicamente a organização da memória: 

![[20231027_193651.jpg]]

Tipos de seleção:

* Linear
![[20231027_193803.jpg]]

* Matriz
![[20231027_195516.jpg]]

Então vamos a uma breve comparação:

![[20231027_195254 1 1.jpg]]

Quando organizamos em matriz, temos uma performance maior.

## Executando instruções

Isso é uma instrução de máquina:

![[20231027_203845.jpg]]

Ciclo de vida das instruções:

![[20231027_204808.jpg]]

Analisa aí uma CPU, tem que escrever o que cada uma faz
![](../../img/Pasted%20image%2020231121104604.png)

O lado direito é para puxar e armazenar na memória

Tem a ACC que vai servir como se fosse um cache para fazer as operações e guarda também os resultados

Tem o CI que vai ser como se fosse uma thread de chamadas

REM = endereço para salvar a memória

RdM = instrução

Ri = instruções
Ci = Endereço de instruções

Tem dois tipos de operação: 

**Operações de processamentos** de dados, que vai rolar na UAL
* multiplicação e divisão pode ser feito através de deslocamentos do número binário adicionando 0 ou 1

**Operação de operações**: Que vai ser como se fosse uma call stack

Alguns processadores guardam o estado da operação


### Função de controle

![[20231027_211938.jpg]]

![[20231027_212055.jpg]]


##### Falando sobre a UC

![[20231027_212244.jpg]]
![[20231027_212507.jpg]]

Veja um exemplo de transformação de clock com uma frequência maior

![[20231027_213115.jpg]]

Mas isso não significa que seja melhor, tem que ver a benchmark (A velocidade de processamento) pq tem outras coisas que influenciam a velocidade

##### Falando sobre o clock

![[20231027_213411.jpg]]

##### Falando sobre o decodificador

![[20231027_213748.jpg]]

