# Algebra das preposições
2023-08-30
tags: [-Matemática discreta](-Matemática%20discreta.md)
<div style="display:flex; justify-content: center; text-align: center"> ⋀ ⊻ ⋁ ¬ ⇒ ⇔ </div>

Com a algebra das preposições, podemos inferir o que é verdade pelas nossas preposições verdadeiras, num raciocínio lógico-dedutivo.

## Desenvolvimento

Seguiremos então as seguintes propriedades para que nossa álgebra seja coesa:

* Propriedades da **conjunção**: Temos que ⋀ segue as propriedades matemáticas de .
	* **Idempotente**: Se: "Eu sou aluno e sou aluno", ainda sou aluno -> **p ⋀ p ⇔ p**
	* **Comutativa**: Se: "Sou aluno e sou professor", posso: "Sou professor e sou aluno" ->  **p ⋀ q ⇔ q ⋀ p** 
	* **Associativa**: Um pouco longa de demostrar, contudo, podemos fazer **r ⋀ (p⋀q) ⇔p ⋀ ( q ⋀ r)** [demonstração da propriedade associativa ChatGPT](#demonstração%20da%20propriedade%20associativa%20ChatGPT)
	* **Identidade**: **p ⋀ t ⇔ p** e **p ⋀ c ⇔ c**
* As mesmas valem para a **disjunção**, só troca o operador
* Propriedades da conjunção e disjunção:
	* Distributiva: 
		* **p ⋀ ( q ⋁ r ) ⇔ (p ⋀ q) ⋁ (p ⋀ r)**, igual matemática
		* **p ⋁ ( q ⋀ r ) ⇔ (p ⋁ q) ⋁ (p ⋁ r)**, a questão é que aqui pode fazer com ⋁  também
	* Absorção:  
		* p ⋀ (p ⋁ q) ⇔ p
		* p ⋁ (p ⋀ q) ⇔p
	* **Regra de [[De Morgan]]** - Inverte o operador
		* ~(p ⋀ q ) ⇔~p ⋁ ~q
		* ~(p ⋁ q ) ⇔~p ⋀ ~q
* Negação da condicional:
	Podemos dizer que **p →q ⇔ (~p ⋁ q)** Daí menor, aplica Morgan nesse caso
	$$~(~p ⋁ q) ⇔ p ⋀ ¬q $$

* Negação bicondicional: 
$$¬(p → q) ⇔ (p ⇔ ¬q) ⇔ (¬p ⇔ q) $$


## Bibliografia

### demonstração da propriedade associativa ChatGPT

A demonstração da propriedade associativa na álgebra das proposições é relativamente simples e baseia-se nas tabelas de verdade das operações lógicas envolvidas. Vamos considerar três proposições A, B e C e demonstrar a associatividade para a operação lógica "E" (AND).

A propriedade associativa afirma que a ordem em que as operações são realizadas não afeta o resultado final. Matematicamente, isso pode ser expresso da seguinte forma:

**(A E B) E C = A E (B E C)** ou **r ⋀ (p⋀q)⇔p ⋀ ( q ⋀ r)**

Vamos demonstrar isso usando tabelas de verdade:

**Tabela de Verdade para (A E B) E C:**

| A | B | C | A E B | (A E B) E C |
|---|---|---|-------|------------|
| 0 | 0 | 0 |   0   |     0      |
| 0 | 0 | 1 |   0   |     0      |
| 0 | 1 | 0 |   0   |     0      |
| 0 | 1 | 1 |   0   |     0      |
| 1 | 0 | 0 |   0   |     0      |
| 1 | 0 | 1 |   0   |     0      |
| 1 | 1 | 0 |   1   |     0      |
| 1 | 1 | 1 |   1   |     1      |


**Tabela de Verdade para A E (B E C):**

| A | B | C | B E C | A E (B E C) |
|---|---|---|-------|------------|
| 0 | 0 | 0 |   0   |     0      |
| 0 | 0 | 1 |   0   |     0      |
| 0 | 1 | 0 |   0   |     0      |
| 0 | 1 | 1 |   1   |     0      |
| 1 | 0 | 0 |   0   |     0      |
| 1 | 0 | 1 |   0   |     0      |
| 1 | 1 | 0 |   0   |     0      |
| 1 | 1 | 1 |   1   |     1      |

Ao comparar as duas tabelas de verdade, podemos ver que os resultados para todas as combinações de valores de A, B e C são idênticos para as duas expressões. Isso confirma a propriedade associativa para a operação lógica "E" (AND).

Esse tipo de análise pode ser estendido para outras operações lógicas, como a operação "OU" (OR) e a operação "NÃO" (NOT). A propriedade associativa também se mantém para essas operações.


