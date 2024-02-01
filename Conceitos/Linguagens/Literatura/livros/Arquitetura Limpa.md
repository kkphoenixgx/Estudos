---
annotation-target:  arquitetura-limpa.pdf
---
# Anotações do Arquitetura Limpa
2022-12-07
tags: Programação #uncleBob

## -Cap 2: 

![20221207_231702.jpg](20221207_231702.jpg)

## -Cap 3
programação estruturada é aquela que funciona sem classes e a com classes é a POO (OOP) 

* Parte 3 - Solid...
    * SRP = Cada arquivo deve ser um ator
    * OCP = Faça um sistema pensando nas alterações
    * LSP = Não faça heranças sem lógica
    * ISP = Não importe coisas desnecessárias
    * DIP = Evite dependências concretas

## -Cap 11 no SRP: **Factories** 

Crie objetos concretos voláteis para não depender diretamente do componente, é melhor que você só dependa de um static method do que da aplicação toda. Melhor, se tiver usando esse mesmo trecho nos dois e tiver como mandar esse trecho para um utils, já fica mais organizado.

![20221207_232549.jpg](20221207_232549.jpg)

Separar os componentes por abstratos e concretos.

## -Cap 13. COESÃO DE COMPONENETES

* REP = Utilize compementes coesos com o projeto. Então, não reuse componentes em todos os seus projetos, os componentes devem ser escolhidos a dedo e esses devem ser compativeis em atualizações futuras e encaixadas com facilidade.

* COP = Componentes escolhidos só devem criar problemas nos arquivos que foram insportados. Isso se torna importante em momentos de atualização.

* CRP = não force classes de um componente a usar importações desnecessárias
 

## -Cap 14- Acoplamento de componentes
 
* Os componentes devem ser acoplados de acordo com a sua volatilidade.

$$I = fanIn + fanOut$$

$$A = Na/Nc$$
$$D = |A + I -1|$$
* I (Instabilidafe ) deve ser maior que a dos componentes que ele depende, lógico.
* I = fanIn (dependecias que chegam) + fanOut (dependências que saem)
* A (Abstração) = na (numero de classes de um componente) nc (classes abstratas + Interfaces)
* D (Distância da sequência principal) |A +I -1 |

![20221209_180258.jpg](20221209_180258.jpg)
![20221209_180248.jpg](20221209_180248.jpg)

## -Cap 16: Independência (dos componentes)

* De acordo com a lei de Conway, a estrutura é uma cópia da estrutura de comunicação da organização. Ou seja, os componentes devem ser organizados para facilitar o gerenciamento e o processo de produção das equipes.

* Na implantação, os componentes não precisam de arquivos para explicar sua organização, quando eles são devidamente acoplados e com um bom SOLID, fica fácil entender o sistema.

* A arquitetura deve suportar que o código seja feito em um monolito e depois desacoplado pois arquitetar e desacoplar custa tempo e dinheiro. Dessa forma, a refatoração deve ocorrer assim que possível, podemos começar com algo mais simples e refatorar para algo mais correto, portanto que isso realmente aconteça.

## Cap 17: limites

![20221226_140519.jpg](20221226_140519.jpg)

![20221226_140917.jpg](20221226_140917.jpg)
![20221226_140920.jpg](20221226_140920.jpg)

