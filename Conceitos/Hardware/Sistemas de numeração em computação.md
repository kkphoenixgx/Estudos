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

### Convertendo com vírgula

Bom, seguindo a lógica, atrás da unidade seria o -1...

* Binário: (Dessa vez vou fazer a conta da esquerda para direita para ficar mais organizado)

111.001: 
$$ 111.001= ∑ 1.2² + 1.2¹ + 1.2⁰ + 0.2^{-1} + 0.2^{-2} + 1.2^{-3} $$ $$= (4 + 2 + 1) , (0 + 0 + 0,125) = 7,125$$
E segue a mesma lógica para todos os outros.

## Convertendo de decimal para outros sistemas

para fazer essa conversão, usamos o método de divisões sucessivas, onde pegamos o resto das divisões sucessivas e formamos o número na base definida de trás para frente

![divisões sucessivas](img/divisões%20sucessivas.md)

Nessa forma de conversão, definiremos dois atores principais, o MSB e o LSB:

MSB = Most Significant Bit, o bit mais importante, que seria o último bit;  
LSB = Last Significant Bit, o bit menos significante.

No exemplo da imagem, temos que o último 1 é o MSB e o primeiro 0 o LSB, e 
sempre segue essa ordem, o primeiro resto é o LSB e o último quociente o MSB 

### Decimal fracional

Para convertermos um número fracional, ou seja, com casas após a vírgula, devemos isolar a parte decimal e aplicar o método de multiplicações sucessivas

Então veremos o número 17,098: * Fazemos o 17 →* fazemos o 0,098:

17 →

![Exemplo17-DivisS](img/Exemplo17-DivisS.md)

Agora no método de multiplicações sucessivas, pegaremos sempre a maior casa do resultado:
![Multiplicações sucessivas](img/Multiplicações%20sucessivas.md)

0, 098


### Decimal para Octal

Substitua a base por 8 no método de divisões sucessivas:

![divisões sucessivas](img/divisões%20sucessivas.md)

## Convertendo de sistemas não-decimais para não-decimais

Agora entre bases não decimais, precisamos entender quantos bits de um sistema equivale para outro. Utilizaremos a fórmula base^casas, então quantas casas vamos precisar para chegar na base que queremos converter?

### Octal para binário

A base do octal é 8 e a do binário é 2, então se queremos converter de octal para binário, precisaremos saber quantas casas cada número em octal vale para as casas em binário, teríamos 2^x = 8. E isso logicamente é 3. Dessa forma, precisaremos converter cada número em octal para 3 casas:

27_8 para binário = 
$$2 7 = 010 + 111 ∴ 10111$$

Perceba que somente juntamos o valor em binário dos dois números e que por ter que ser em 3 casas, adicionamos um zero a frente do 10 que seria 2, logo depois, cortamos ele pois é um zero a esquerda, contudo, isso poderia influenciar se não fosse a primeira casa 

### Binário para Hexadecimal

Mesma lógica do de cima, contudo, 2^4 = 16...

$$10011000 = 9(1001) + 8(1000) = 98$$

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




## Mapa Mental
