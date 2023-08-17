# Sistemas de numeração em computação
2023-08-14
tags: [[-Hardware]]
U+2234

Quando falamos sobre sistemas de numeração, estamos falando de como anumeração foi criada, não sei se sabe, mas usamos um sistema de numeração com base 10, ou seja, cada casa após o primeiro numero multiplica-se 10 x index, sendo index quantas casas ele está para a esquerda, é, basicamente, a abstração do nosso sistema numérico... Quando temos decimal, centena, milhar... estamos falando sobre: 10 x 1, 10 x 2, 10 x 3, sendo esses números a base e o index... 

Portanto, vamos abstrair esse conceito e criar uma fórmula que equivale inclusive para o index 0:
$$Casa.base^{îndex}$$
Ex: 130 -> `0.10^0 = 0` - `3.10^1 = 30` - `1.10^2 = 100`...

Outra coisa importante a se notar é que o somatório dos resultados dá o número completo de volta por motivos óbvios, portanto, temos a seguinte relação:

$$Número = ∑Casa.base^{îndex}$$

O interessante dessa fórmula é que podemos fazer isso para qualquer base inclusive quando quisemos converter de uma base não decimal para outra, então, antes de nos aprofundarmos, vamos ver as bases que vamos trabalhar:

* **Binário**, onde a base = **2**
* **Octal**, onde a  base = **8**
* **Hexadecimal** , onde a base = **16**

Importante dizer também que quando temos a seguinte notação:
$$ Número_{base}$$
Exemplo: 
$$ 10_{2}$$
Estamos sinalizando a base do número... E assim como _ significa essa descida no número.

## Convertendo de outros sistemas para decimal

Quando estamos convertendo de outros sistemas, podemos usar a fórmula base e somar o valor dos index para obter o valor de uma base não decimal para uma decimal:

* Binário

Dessa forma, temos o número 10_2 e queremos passa-lo para decimal, podemos usar a fórmula e encontrar:
$$ 10_2 → ∑ 0.2^0 + 1.2^1 → 0+2 = 2 ∴ 10_2 = 2$$

Sendo assim podemos fazer isso com todos os outros:

* Octal
$$10_{8} = ∑0.8⁰ + 1.8¹ = 8$$

* Hexadecimal
Leia antes [O Hexadecimal](#O%20Hexadecimal)  
3F:  
$$3F_{16} = ∑15.16^0 + 3.16^1 = 63 $$

## Convertendo de decimal para outros sistemas

para fazer essa conversão, usamos o método de divisões sucessivas, onde pegamos o resto das divisões sucessivas e formamos o número na base definida




## Convertendo de sistemas não-decimais para não-decimais


## O Hexadecimal

O Hexadecimal tem uma peculiaridade, suas casas vão até F, sim, depois do 9, tem A, B, C, D, E e F, veja a [Tabela Hexadecimal](#Tabela%20Hexadecimal) 

### Tabela Hexadecimal

| Número em decimal | Número em Hexadecimal |
| ----------------- | --------------------- |
| 1                 | 1                     |
| 2                 | 2                     |
| 3                 | 3                     |
| 4                 | 4                     |
| 5                 | 5                     |
| 6                 | 6                     |
| 7                 | 7                     |
| 8                 | 8                     |
| 9                 | 9                     |
| 10                | A                     |
| 11                | B                     |
| 12                | C                     |
| 13                | D                     |
| 14                | E                     |
| 15                | F                     |
| 16                | 10                    |
| 17                | 11                    |
| 18                | 12                    |
| 19                | 13                    |
| 20                | 14                    |
| 21                | 15                    |
| 22                | 16                    |
| 23                | 17                    |
| 24                | 18                    |
| 25                | 19                    |
| 26                | 1A                    |


