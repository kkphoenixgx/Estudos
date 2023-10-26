# Sentenças abertas
Tags: [[-Matemática discreta]] [[../Conjuntos numéricos/Conjuntos]]

No conjunto de números reais, temos a seguinte Sentença: 

* **p(n): n+ 1 > 8**

> Dessa forma, temos alo similar a:
> switch n {  
>     case n +1 > 8:
>       return "satisfaz"
>       break
>      default: 
>        return "não satisfaz"
>  } 

**Isso é uma sentença aberta**. Então podemos definir um conjunto V_p que pode receber todos n que satisfazem a sentença p. Dessa forma, podemos dizer que V_p = { 8, 9...}, ou seja, o conjunto verdade da sentença será {8, 9...}

## Cartesiano

A × B === { (x, y), x ∈ A e y ∈ B }
Ou seja, dados os conjuntos: 
A === { 2, 3, 4 }
B === { 4, 5, 6 }

A×B === { (2, 4), (2, 5), (2, 6), (3, 4), (3, 5), (3, 6 ), (4, 4 ), (4, 5 ), (4, 6) }

Fizemos dois switchs juntos... O que faz sentido com o símbolo ×

## Sentenças abertas com duas variáveis

Definição de conjunto verdade: 
> "Chama-se de cinjunto verdade de uma sentença aberta p(x, y) em um conjunto A×B, o conjunto de todos elementos (a, b) ∈ A×B tais que p(a, b) seja verdadeira"

Então analisando a definição, temos: A que possui vários a dentro dele e B com vários b dentro dele e duas variáveis (x, y) que vão assumir os valores de a e b conforme percorremos os dois conjuntos (A e B). Entendendo isso, toda vez que um x e y satisfazem p, o resultado irá ser adicionado a um conjunto V_p, que é o conjunto verdade de p(x, y)

Então entenda: A === { 2, 3, 4 } e B === { 4, 5, 6 }

**p(x, y): x² = y** === V_p{ (2,4) } 

E entenda que a sentença depende de x, y. Estamos falando de cordenadas cartesianas, não existe um único ponto no plano cartesiano que esteja sozinho, dessa forma, se falarmos: 

**p(x, y): x >= 3** ===  
V_p === { (3, 4), (3, 5), (3, 6), (4, 4)(4, 5)(4, y)   }

Pois estamos procurando pares cartesianos que recebem essa condição, não são pontos separados.

## Operações lógicas de conjuntos

<div style="display:flex; justify-content: center; text-align: center"> ⋀ ⊻ ⋁ ¬ ⇒ ⇔ </div>

<div style="display:flex; justify-content: center; text-align: center"> ∪ ∩</div>

Estudaremos então novamente, mas de um ponto de vista lógico, o funcionamento das operações com conjuntos.
###  Conjunção

 $$ P(x) ⋀ Q(x) === P(x) ∩ Q(x)$$

Olha que legal:  
P(x): x é médico; Q(x): x é professor -> P(x) ⋀ Q(x): x é médico e professor

$$  V_{p⋀q} === V_p ∩ V_q $$

Temos então a intercessão dos dois conjuntos

### Disjunção

$$  P(x) ⋁ Q(x) === P(x) ∪ Q(x) $$

Então:
P(x): x é jovem, Q(x): x é musico -> P(x) ⋁ Q(x): x é jovem ou músico ou jovem e músico

$$  V_{p⋁q} === V_p ∪ V_q $$

Nesse caso temos a união, os próprios conjuntos e a intercessão, dos dois conjuntos

#### Curiosidade do ou exclusivo

Presta atenção, ⊻ é basicamente o ⋁ sem a intercessão... Então para representamos isso somente com U e ∩ fica mais complicado, teríamos algo assim:

$$ V_{p⊻q} = (V_p ∪ V_q) - (V_p ∩ V_q)$$ 
![[../../../img/20231003_125308.jpg]]

### Negação

A Negação é simplesmente, pensando em conjuntos, o que não está no conjunto solução de uma sentença. 
Imagine:  
A === { 2, 3, 4 } e B === { 4, 5, 6 }

**p(x, y): x%2 == 0  && y%2 == 0**
( os que são divisiveis por 2)
$$V_p = (2, 4), (2, 6), (4, 4), (4, 6)$$

Dessa forma, **V_~p vai ser todos que não estão em V_p -> (2, 5) (3, 4) (3, 5)(3, 6) (4, 5)**. O complementar de V_p


### Condicional

Experimentação é perigoso. Ir vendo um por um o que cabe e o que não cabe, é perigoso, toma muito cuidado.

Com isso em mente: Quando temos P(x) ⇒ Q(x). Estamos dizendo que se x satisfaz P, vai satisfazer Q. Veja: `p(x): x é musico e q(x): x é jovem`  P(x) ⇒ Q(x) significa que se x é musico, x será músico e jovem

Entendendo a condicional, veremos então o porquê de ser perigoso: p ⇒ q === ~p ⋁ q

A = {0, 1, 2, 3, 4, 5}
p(x): x é par então x² <9

O conjunto verdade não vai ser {0, 2}, pois vamos ter que incluir os números que não satisfazem p, ou seja: 

$$V_{p⇒q} = {1, 3, 5, 0, 2}$$
Obs: em chaves, o latex não suporta essas chaves de conjunto

### Bicondicional

Dadas as sentenças P(x) e Q(x), **P(x) ⇔ Q(x)** terá o conjunto verdade com x quando as suas sentenças forem verdadeiras ou as duas sentenças forem falsas, ou seja:

p(x): x é musico. 
q(x): x é jovem.  
V_p⇔q = quando x é musico e jovem ou quando não é musico nem jovem. Dessa forma, resolva:

A = {0, 1, 2, 3, 4, 5}
p(x): x é par se somente se x² <9

> V_p⇔q = {0, 2, 3, 5}


#### curiosidade, como faz isso somente com a notação de conjuntos

$$ V_{p⇔q} = V_{(p⇒q)⋀(q⇒p)} = V_{¬p⋁q} ∩ V_{¬q⋁p} = (V_{¬p}∪ V_{q}) ∩ (V_{¬q}∪ V_{p}) $$

### Tabela verdade para condicionais em operações lógicas de conjuntos

![[../../../img/20231003_125554.jpg]]


