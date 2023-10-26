# Funções
2022-04-27
tags: [-Matemática](../-Matemática.md)

Uma variável é quando temos várias respostas para algo, já uma incógnita só possui um valor, na qual ainda não sabemos.

![[Pasted image 20220427002427.png]]


* Domínio = (D) - Todos elementos de A que tem conexão
* Contra Domínio = (CD) Todos os elementos de B
* Imagem = Todos os elementos de B que tem conexão

{ 1, 2, 3 }
	[ 1, 3 ] ( -infinito, 7]   


Uma função é que todos os elementos do domínio tem uma correspondência num domínio. E essa correspondência para esse Domínio só pode ter uma correspondência em um contra domínio


## Esboçando gráficos

![EsboçandoGráficosDeFunções](../../../img/EsboçandoGráficosDeFunções.md)

## Estudo de sinais

O estudo de sinais nada mais é que entender como a função se comporta, como cada parte de seu gráfico está localizado. Do mesmo modo podemos entender a junção de duas imagens, ou seja, o comportamento de duas funções, dessa forma, temos dois conjuntos que se unem para se tornarem apenas um conjunto, ou seja, o resultado de duas funções se entrepondo. Para sabermos qual será o resultado dos sinais das funções, precisamos usar o método de estudo de sinais, que consiste na operação de sinais das duas imagens das funções:

![EstudoDeSinais](../../../img/EstudoDeSinais.md)



-----------------------------------------------

## Função Modular

Para entendermos função modular, precisamos entender o que é uma função com mais de uma sentença:

$$
f(x) = \begin{Bmatrix}
1, x < 0  \\
2, x > 0 
\end{Bmatrix}
$$

Temos aqui uma função com mais de um comportamento, quando x < 0,  a função assume 1, ao contrário, 2

![SimplefunctionWithTwosentences](../../../img/SimplefunctionWithTwosentences.md)


Dessa forma, temos aqui uma função que se comporta de duas formas. Entenderemos aqui também que o módulo de um número é a distância até o 0 de um número:| |-7| = 7; |6| = 6

Então entenda a definição de uma função modular:
$$
f(x) = \begin{Bmatrix}
|x| = x, x >= 0 \\
|x| = -x, x < 0
\end{Bmatrix}
$$

Desse modo podemos obter `f(x) = |x|`

O interessante das funções modulares é que elas tem uma parada bem decisiva, entende? Quando fazemos |x|, podemos entender que não há uma continuação:

![ExemploDeFuncaoModular](../../../img/ExemploDeFuncaoModular.md)


Note que não há nada em y negativo e que a imagem de quando o x é negativo é diferente, criando esse V.

Perfeito, entenderemos então agora a mesma coisa só que com uma função que não é simplesmente |x|, teremos: |x - 1|:

![funcaoModuloDeXMenosUm](../../../img/funcaoModuloDeXMenosUm.md)


E assim podemos fazer qualquer função modular... Olha também que interessante:

```functionplot
---
title: Função x -1
xLabel: 
yLabel: 
bounds: [-10,10,-10,10]
disableZoom: true
grid: true
---
f(x) = x -1
```

É como se todos os valores que são negativos de f(x) = x -1 fossem refletidos para y positivo, o que torna a função um V

Agora vejamos a seguinte função: f(x) = |x -1| + 2. Não podemos analisar do mesmo jeito, veja:

![FuncaoModularModuloDeXMenosUmMaisDois](../../../img/FuncaoModularModuloDeXMenosUmMaisDois.md)

Quanto maior o termo independente, mais afastada a função estará do gráfico, sendo o termo independente da função citada o +2. Pois +2 só afeta y, ou seja, só afeta a imagem.

Agora, vamos ver um outro caso, quando temos uma ou mais módulos, entenderemos um módulo como uma função, como vimos na definição de módulo, dessa forma, precisaremos tratar cada parte com módulo de uma função como uma função independente fazendo estudo dos sinais, vejamos **f(x) = |x + 2| + | x -1 |**





## Bibliografia

https://plataforma.seliga.com.br/aula/a6e67180-fd06-11ea-8c57-018434849ba6

## Mapa mental

![[Funções Mapa Mental.png]]
