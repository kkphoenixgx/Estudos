# Quantificadores e lógica de predicados
2023-10-03
tags: [-Matemática discreta](-Matemática%20discreta.md)
<div style="display:flex; justify-content: center; text-align: center"> ⋀ ⊻ ⋁ ¬ ⇒ ⇔ </div>

Veremos agora quantificadores lógicos para tratar conjuntos
## Para todo

* **∀** = Para todo, qualquer que seja, para cada -> `(∀ x)(x > 0) === (x, x > 0)`

No exemplo citado, *∀* é o quantificador e todo o resto tirando a variável x, é o predicado, podemos chamar de P(x).
> ~P(x) ⇔ P'(x)

∀(x)P(x), para definirmos o valor verdade, precisamos definir qual a interpretação para ela, similar as [[Sentenças abertas]] quando tínhamos A para definirmos o conjunto universo...

Aqui precisamos também de um "conjunto universo", uma **interpretação**,  que consiste na coleção de objetos dos quais x pode ser escolhido, chamado de **domínio de interpretação** na propriedade que P(x) representa em seu domínio, exemplo: 

(∀ x)(x > 0) levando em conta somente os inteiros positivos, essa sentença é verdadeira. Pois todo número inteiro positivo é maior que 0... Se lê: para todo x, x > 0

Dessa forma, o dominio dessa expressão seria todos os números inteiros positivos. Contudo, podemos ter domínios de todos os tipos, de números até pessoas... se definirmos o domínio como todos os pássaros: `P(x): x é amarelo`, `(∀x)P(x)` é falso, pois nem todo x é amarelo, nem todo pássaro é amarelo.

## Pelo menos um

* ∃ = ("existe um", "pelo menos um", "para algum")
* (∃x)P(x) === Existe x tal que P(x)


Significa que basta um x no dominio para que a sentença seja verdadeira 

(∃x)(x > 0) É verdadeira tanto nos inteiros positivos quanto nos reais, assim como no domínio dos pássaros com P(x): x é amarelo.

### curiosidades

* ∃! = existe um único

## Predicados com mais de uma variável

Veja a expressão: **(∀x)(∃y)P(x, y)**   
Eu leio assim: Para todo x, pelo menos um y, satisfaz a premissa com x, y

Se o domínio for todos os inteiros e a premissa `P(x,y): x < y`. De fato é verdadeira, pois para todo x haverá um y maior e vice-versa...

Agora digamos que eu tire um dos quantificadores: `(∀x)P(x, y)`, y não terá valor na **sentença aberta**... Pois não demos nenhum quantificador lógico para y, então não será possível definir seu valor verdade. Portanto, para que se torne possivel, definiremos y como 1, por exemplo, agora será possível realizar e seria verdadeiro, mas perceba que nós que definimos, se ela for 2, será falsa. Desse modo falaremos que y é uma variavel livre, ela não possui um quantificador.

Com isso, transformariamos essa sentença em uma [[Sentenças abertas]], 

É importante reescrevermos as fbfs, leia: [[#Tome cuidado com os escopos fbf em quantificadores lógicos]], trocando suas sentenças para que possamos entender melhor, principalmente quando estamos falando de fbfs maiores e mais trabalhosas: 

> (∃x)(A(x) ⋀ (∀y)[B(x, y) ⇒ C(y)])

Sendo `A(x): x > 0`, `B(x, y): x > y` e `C(y) y <= 0`  e o dominio o conjunto dos inteiros

Devemos reescrever, para melhor entendimento: 
`(∃x)( (x > 0) ⋀ (∀y)[ (x > y) ⇒ (y <= 0) ])`

## Tome cuidado com os escopos: fbf em quantificadores lógicos

(∀x)(∃y)[ P(x, y) ⋀ Q(x, y) ] Está falando que para todo x, pelo menos um y satisfaz as sentenças P(x, y) e Q(x, y).

Agora: (∀x)[ (∃y) P(x, y) ⋀ Q(x, y) ] Está falando que para algum x, então ∃y está no escopo de P(x, y) e o Q(x, y) está sem quantificador, o que torna y sem quantificador para a segunda parte já que definimos para algum x em tudo

Dessa forma, devemos tomar cuidado com as formulações, essas expressões são fórmulas e devem ser coesas para terem sentido, são **fórmulas bem formuladas**, fbfs.




## Simbolizando as sentenças

Presta atenção, para todo é ou uma implicação ou para uma bi condicional ou para uma disjunção. Para conjunção usamos o existe. 

**Todo papagaio é feio** -> 
> (∀x)[ P(x) -> F(x) ]  

onde P(x): x é papagaio e F(x): x é feio

  -
    Errado: (∀ x)P(x) Sendo P(x): x é feio. Sendo meu domínio os papagaios... Ela não tinha definido o domínio
  -
**Existe um papagaio feio** ->  
> (∃x)(P(x) ⋀ F(x) )

**Apenas estudantes inteligentes gostam de música** ->
> (∀x)(M(x) ⇒ E(x) ⋁ I(x))

Onde M(x): x gosta de música; E(x): x é estudante; I(x): x é inteligente.

*Quando temos apenas ou somente, inverte a posição do ou*.

**Somente os que gostam de musica são estudantes inteligentes**
> (∀x)(∃(x) ⋀ I(x) ⇒M(x) )

## Negação de sentenças quantificados

Para negarmos sentenças, invertemos esses operadores e negaremos a sentença.

[(∀x)P(x)]' = (∃x) P'(x)

E isso vai servir para provarmos como falsa as afirmações, assim como darmos um exemplo que foge a regra, precisaremos de um contra exemplo, um outro dominio.