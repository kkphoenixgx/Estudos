# Lógica
2023-07-09
tags: #Lógica
<p style="display:flex; justify-content: center; text-align: center" > 
  <i> 
    A lógica é uma disciplina filosófica e matemática que estuda o raciocínio válido e coerente. Ela se concentra nas regras e nos princípios que governam o pensamento correto, identificando as formas válidas de argumentação e inferência. ~ChatGPT
  </i>
 </p>

## Desenvolvimento
  <div style="display:flex; justify-content: center; text-align: center"> ⋀ ⊻ ⋁ ¬ ⇒ ⇔ </div>

### Proposição

Uma *sentença* (declarada por meio de palavras e símbolos) que será considerada, por seu conteúdo, verdadeira ou falsa
	Sendo sentença uma declaração feita por meio de palavras e símbolos.
	Portanto, podemos diferenciar:
		*Você terá um bom dia* → **Proposição**, podemos declarar verdadeiro ou falso;
		*Bom dia!* →**Não é uma Proposição**, não possui verdadeiro ou falso, apenas uma sentença;
		*Ele Passou em Cálculo* →**Não é uma Proposição**, não podemos definir verdadeiro ou falso, não sabemos quem é ele;
		*2+3* → **Não é uma Proposição**;
		*2+3 =1* →**Proposição**, podemos definir verdadeiro e falso;
		
![](../../img/Pasted%20image%2020230709145655.png)

Portanto, podemos definir princípios para as preposições:

1. **Princípio da identidade**: "Uma proposição verdadeira é verdadeira; Uma proposição falsa é falsa"
2. **Princípio da não-contradição**: "Nenhuma proposição pode ser verdadeira e falsa ao mesmo tempo"
3. **Princípio do terceiro excluído**: "uma proposição será verdadeira ou será falsa: não há outra possibilidade"

p = proposição;

![](../../img/Pasted%20image%2020230709150311.png)

A disjunção **inclusiva** abrange verdadeiro e falso; verdadeiro verdadeiro. Quando **pelo menos uma ou todas são p verdadeiras**.
Enquanto a **exclusiva** é quando exclusivamente temos verdadeiro e falso. Ou seja quando **exclusivamente uma é verdadeira**.

### Tabela Verdade

A quantidade de possíveis resultados lidando com tabela verdade é sempre:

$$ combinações = 2^n $$

Sendo que n = quantidade de proposições. Portanto, se tivermos 2 proposições, podemos ter 4 respostas.

#### Montando a tabela

Podemos construir uma tabela verdade assim:

![](../../img/Pasted%20image%2020230709151833.png)

Perceba que: Se temos 3 p →2³ = 8, portanto, teremos 8 em cada preposição e podemos definir que **cada** *_sequencia_* **terá metade do valor anterior**, sendo valor anterior, inicialmente, a quantidade de combinações e, posteriormente, a sequência anterior... Exemplo: 8 combinações, então **4 verdadeiros e 4 falsos** na primeira proposição, uma **sequência de 4**, na próxima, uma **sequência de 2** e caso fosse um número maior, iriamos poder fazer infinitamente sem se perder.

#### Aplicando a tabela

Para aplicação da tabela, teremos que ter uma conjunção de preposições (que nada mais é que duas preposições usando um conectivo lógico) e iremos usar apenas lógica para definir cada valor dessa conjunção de preposições. (Veja [Aplicação de cada tabela](Lógica.md#Aplicação%20de%20cada%20tabela)).

* ⋀ = Só é verdade quando temos todas as proposições verdadeiras. **&&**
* ⋁ = Só é falso quando todas as preposições são falsas. **||**
* ¬ = Se a afirmação for verdadeira, significa que a preposição é falsa **!x**
* ⇒ = Se B for possível, a sentença será verdadeira  **( A == B || B == true )**
* ⇔ = Será verdadeira se A e B forem falsos ou verdadeiros. Quando as duas proposições forem iguais  **A == B**


##### Aplicação de cada tabela

![](../../img/Pasted%20image%2020230710134352.png)

###### Tabela ⋀

![](../../img/Pasted%20image%2020230709154034.png)

###### Tabela ⋁

![](../../img/Pasted%20image%2020230709154458.png)

###### Tabela ⊻

![](../../img/Pasted%20image%2020230709154817.png)

###### Tabela ¬

![](../../img/Pasted%20image%2020230709155059.png)

###### Tabela ⇒

![](../../img/Pasted%20image%2020230709155153.png)

###### Tabela ⇔

![](../../img/Pasted%20image%2020230709155324.png)

-----------------------------------------------

### Fórmula bem formulada

A **fórmula bem formulada** (fbf, ou somente fórmula) é uma cadeia que forma uma expressão válida, como: 
> *(A ⇒ B) ⋀ (B  ⇒ A)* →fbf

No caso da expressão acima, perceba que nós temos uma **equivalência tautológica** com ⇔, já que este é, basicamente, o próprio ⇔. Contudo, vamos focar nas fbf, elas tem que ter uma ordem lógica de solução para chamarmos de fbf, não podemos definir uma fórmula: *A) ⇒ AB⋀⋀B¬*, temos que ter uma ordem lógica para chamar uma fórmula de fbf, não podemos ter parênteses que não abrem ou não fecham, conectivos seguidos, preposições que não tem conectivos (Algumas fontes usam o . ou somente nada para fazer referência ao ⋀, então pense duas vezes, mas no caso, a sentença não tem lógica de qualquer forma). Ao contrário, essa fórmula será chamada de **fórmula não válida**.

* O último conectivo a ser solucionado é o **conectivo principal**

#### Ordem lógica de solução de uma fbf

Assim como os operadores matemáticos tem uma ordem lógica, os operadores lógicos também possuem ordem lógica:

* Primeiro parênteses
* depois negação ¬
* depois disjunções ( ⋁;  ⊻) e  conjunção (⋀)
* depois Condicionais ( ⇒ )
* E por último bicondicionais (⇔)

* O último conectivo a ser solucionado é o **conectivo principal**
	* *( A ⇒ B ) **⋀** ( ¬A ⇒ C )* → ⋀ seria o conectivo principal.

#### Transformando texto para uma fbf

O primeiro passo é achar as preposições; Depois achar os conectivos; Formular as preposições, caso necessário; Formular a fbf

Exemplo: 
![](../../img/Pasted%20image%2020230710142353.png)

Formulação das preposições e da fbf do exemplo:
> A = Pricila foi na festa do Marcos
> B = Pricila foi no aniversário de Felipe
> C = Pricila comeu muito
$$ A⋁B ⇒ C $$

Exemplo 2:
![](../../img/Pasted%20image%2020230710143110.png)

> A = Dimas gosta de churrasco
> B = Dimas gosta de pizza
> C = Dimas tem bom gosto
> D = Dimas tem muita fome
$$A ⋀ B ⇒ C ⋁ D$$


#### Tabela Verdade de fbf

![](../../img/Pasted%20image%2020230710143735.png)

**Toma muito cuidado nessa brincadeira**, como estamos usando a tabela do implica, vamos levar em conta a tabela para solucionar essa tabelas verdade do fbf, Perceba que a tabela verdade é sempre A ⇒ B e não B ⇒ A, dessa forma, **Temos que inverter a tabela verdade para solucionar B ⇒ A, então B na verdade é A e A na verdade é B**, desse modo, na segunda linha, B é F e A é V →F ⇒ V = Verdadeiro, **inverta a tabela se a expressão for inversa**.

![](../../img/Pasted%20image%2020230710144454.png)

Veja agora a tabela completa acima, vamos substituir (A ⇒ B) por seu respectivo valor, no caso da primeira linha Verdadeiro e (B ⇒ A)  por seu respectivo valor, no caso, Verdadeiro e usar a  [tabela verdade do ⋀](Lógica.md#Tabela%20⋀). Então vai ficar: Verdadeiro a expressão.

Inclusive, perceba que (A ⇒ B) ⋀ (B ⇒ A) tem o mesmo resultado da [tabela do ⇔](Lógica.md#Tabela%20⇔), então podemos falar com segurança que:
> (A ⇒ B) ⋀ (B ⇒ A) é igual à A⇔B

### Tautologia

É uma fórmula que é sempre verdadeira, independentemente dos valores lógicos atribuídos as suas proposições. Sempre vai dar verdadeiro em tudo...

Exemplo: 
![](../../img/Pasted%20image%2020230710145658.png)

Uma clássica tautologia, veja:

![](../../img/Pasted%20image%2020230710145814.png)

### Equivalência tautológica

Uma equivalência tautológica é quando podemos dizer A⇔B, sendo A uma fbf ou B fbf, tanto as longas quanto as compridas, tanto faz, o ponto é que ⇔ sempre será uma equivalência tautológica. Pois toda vez que falarmos: A ⇔ B, estamos dizendo que sempre que A == true, B ==  true; A == false, B ==  false... Portanto, temos uma equivalência tautológica

![](../../img/Pasted%20image%2020230711152345.png)

Dessa forma, podemos montar preceitos lógicos que usamos na matemática:

![](../../img/Pasted%20image%2020230711152817.png)
![](../../img/Pasted%20image%2020230711152835.png)
![](../../img/Pasted%20image%2020230711154157.png)

![](../../img/Pasted%20image%2020230711154114.png)

#### Passando para palavras

![](../../img/Pasted%20image%2020230711153410.png)
### Contradição

O Oposto da tautologia 

![](../../img/Pasted%20image%2020230710151723.png)

![](../../img/Pasted%20image%2020230710151844.png)

## Exercícios

![](../../img/Pasted%20image%2020230710151943.png)



## Bibliografia

https://www.youtube.com/watch?v=QE6ruiq632o&list=PLrOyM49ctTx-HWypJVvn_zMO1o7oOAfVx&index=1

<p style="display:flex; justify-content: center; text-align: center" > <i> A conjunção de preposições não possui um nome específico na lógica. No contexto da lógica proposicional, as preposições são consideradas como proposições simples, ou seja, proposições que não são formadas por combinações de outras proposições.

A conjunção, por sua vez, é um conectivo lógico que combina duas proposições para formar uma proposição composta. Entretanto, as preposições não são combinadas diretamente por meio da conjunção. A conjunção é geralmente utilizada para combinar proposições simples, como "Está chovendo" e "O céu está nublado", formando a proposição composta "Está chovendo e o céu está nublado" usando o conectivo "e".

Portanto, quando falamos em conjunção de preposições, estamos nos referindo a uma combinação de duas preposições usando um conectivo lógico, como "e". Por exemplo, se temos as preposições P: "Na praia" e Q: "Com os amigos", a conjunção P e Q seria "Na praia e com os amigos". No entanto, essa construção não possui um nome específico além da combinação de preposições usando a conjunção. ~chatGPT</i></p>

## Mapa Mental