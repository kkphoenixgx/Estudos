# Logaritmos
2023-12-03
tags: [-Matemática Básica](-Matemática%20Básica.md) [Potências](-Matemática%20Básica.md#Potências)

$$ \log_{2}{32} ⇔ 2^x = 32 $$

Sempre imagina um x depois do 32 e o 2 colocando o lado de lá nas costas (potencia), imagina o movimento que fica fácil de memorizar

## Desenvolvimento

### Propriedades

para nos 

*  Temos uma propriedade de **multiplicação de logs**

	$$\log _{2} 2.5 = \log_{2} 2 + \log _{2}5 $$

* Temos uma propriedade de **divisão de logs** 
	$$\log_{2}2:4 ⇔ \log_{2} 2 - \log_{2} 4 $$

* Temos uma propriedade de **potência em logs**

	$$\log_{2}2^3 ⇔ 3 . \log_{2}2 $$

* Temos uma propriedade óbvia de **1 de logs**
	Funciona melhor quando abstrai, o log de um número pela base do mesmo número é 1

	$$\log_{2}2 = 1 $$

* Temos uma propriedade que meche com o **0 em logs**
	Qualquer log 1, independente da base, vai ser 0
	$$\log_{139278193792183971}1 = 0 $$

Agora veja uma imagem que abstrai e explica bem isso:

![](../../../img/Pasted%20image%2020231203184843.png)


Podemos aplicar essa propriedade no logaritmo de uma raiz, pois, podemos escrever uma raiz na forma de expoente fracionário. Assim:
log com a subscrito espaço x enésima raiz de b igual a log com a subscrito b à potência de 1 sobre x fim do exponencial igual a 1 sobre x log com a subscrito b

![](../../../img/Screenshot_20240830_093428_Chrome.jpg)

Exemplo
Considerando log 3 = 0,48, determine o valor do log 81.

Solução

Podemos escrever o número 81 como sendo 34. Neste caso, vamos aplicar a propriedade do logaritmo de uma potência, ou seja:

log 81 = log 34
log 81 = 4 . log 3
log 81 = 4 . 0,48
log 81 = 1,92

Mudança de base
Para aplicar as propriedades anteriores é necessário que todos os logaritmos da expressão estejam na mesma base. Do caso contrário, será necessário transformar todos para uma mesma base.

A mudança de base também é muito útil quando precisamos usar a calculadora para encontrar o valor de um logaritmo que está em uma base diferente de 10 e de e (base neperiana).


A mudança de base é feita aplicando-se a seguinte relação:

log com a subscrito b igual a numerador log com c subscrito b sobre denominador log com c subscrito a fim da fração

Uma aplicação importante dessa propriedade é que o logab é igual ao inverso do logba, ou seja:

log com a subscrito b igual a numerador 1 sobre denominador log com b subscrito a fim da fração

Exemplo
Escreva o log3 7 na base 10.

Solução

Vamos aplicar a relação para mudar o logaritmo para a base 10:

log com 3 subscrito 7 igual a numerador log espaço 7 sobre denominador log espaço 3 fim da fração

#### Exemplos

Agora vamos aos exemplos e tenta faze-los

Sabendo que log_{10} 2 = 0,3 e \log_{10} 3 = 0,47, responda:

1. $$\log_{10}6 = $$
~~~spoiler-block
log_{10}6 = \log_{10}2.3 = \log_{10}2 + \log_{10}3 = 0,3 + 0,47 = 0,77
~~~

2. $$\log_{10}9=$$
~~~spoiler-block
log_{10}9 = log_{10}3.3 = log_{10}3 + log_{10}3  = 0,47 + 0,47 = 0,94

ou

log_{10}9 = log_{10}3² = 2.log_{10}3  = 2.0,47 = 0,94
~~~

3. $$log_{10}\frac{2}{3} = $$
~~~spoiler-block
log_{10}2/3 = log_{10}2 - log_{10}3 = 0,3 - 0,47 = -0,17
~~~

4. $$log_{10}1,5 = $$
~~~spoiler-block
log_{10}1,5 = log_{10}3/2 = log_{10}3 - log_{10}2 = 0,47 - 0,3 = 0,17
~~~

5. $$log_{10}\sqrt{ 2 }$$
~~~spoiler-block
log_{10}√2 = log_{10}√2 = 2^1/2 = 1/2 . log_{10}2 = 1/2 . 0,3 = 0,15
~~~


Entendendo as propriedades básicas, podemos nos aprofundar nas propriedades mais especiais

#### Propriedades especiais

* Veja essa propriedade: $$a^{\log_{a}c} = c$$
	para melhor entendermos: $$3^{\log_{3}27} =27 $$
	Quando tem a mesma base na base e na base do expoente, o resultado vai ser o logaritmando.

![](../../../img/LogarítimoseElevadosALogaritimosComAMesmaBasePropriedade.png)

* Logaritmos não podem ser negativos


### log_{10} x -> o queridinho

Quando temos um logaritmo na base 10, não precisaremos colocar a base: 
$$\log 10$$

### ln

e~= 2,71
ln 2 = log_e 2

### Exercícios

tenha certeza de aprender toda a parte de potenciação para fazer esse exercício:

$$\log{_\sqrt{ 8 }}{\sqrt{ 128 }}$$

```spoiler-block

fique na próxima linha e depois faça: alt + seta para baixo. Ao conferir a resposta, fique na linha que tem código da imagem, exatamente como a linha de baixo e faça alt + seta para cima
![](../../../img/Pasted%20image%2020231203183810.png)
```


Se:
$$ log_{2}b - log_{2}a = 5$$

Determine quanto vale a/b

```spoiler-block
fique na próxima linha e depois faça: alt + seta para baixo. Ao conferir a resposta, fique na linha que tem código da imagem, exatamente como a linha de baixo e faça alt + seta para cima
![](../../../img/FuvestSpExercicioLogDivisao.png)
```


![](../../../img/LogarítimosExercicioFuvest2010Questao.png)


```spoiler-block
fique na próxima linha e depois faça: alt + seta para baixo. Ao conferir a resposta, fique na linha que tem código da imagem, exatamente como a linha de baixo e faça alt + seta para cima
![](../../../img/LogarítimosExercicioFUVEST2010.png)
```



-----------------------------------------------
## Bibliografia

https://plataforma.seliga.com.br/aula/31c17ba0-fd07-11ea-ad80-b7dfb945e303
