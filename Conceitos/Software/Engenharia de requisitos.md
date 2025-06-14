# Engenharia de requisitos
2024-02-29
tags: [-Software e sua metalinguagem](-Software%20e%20sua%20metalinguagem.md)

> Os requisitos vem do contexto do sistema.

- **Extensão**: É algo a parte que usa o caso de uso
- **Inclusão**: O incluído faz parte do que está incluindo, sua execução é obrigatória mas ele é tratado como um componente a parte


## Tipos de requisitos

* **Requisitos funcionais:** 

**Requisitos funcionais** = o que o software vai fazer, os requisitos centrais, eles são os mais centrais mas não necessariamente os principais


**Requisitos comportamentais** = 


* **Requisitos não funcionais**: 

Não funcionais não remetem diretamente a solução, mas sim ao sistema como um todo, como por exemplo tempo, confiabilidade e isso não é mais importante que os requisitos funcionais, as vezes são até mais importantes

**Requisitos Produto** 
**Requisitos Organizacionais**
**Requisito Externos**


* **Requisitos de domínio**:

Refletem requisitos que são dados pelos stackholders e que irão gerar novos requisitos, requisitos que devem ser implementados como regras de negócio. Não confunda com o funcional, isso não é uma funcionalidade, é uma regra

- **Requisito de usuário:**

Requisitos em linguagem clara e compreensível pelos usuários. Lembra de separar os requisitos obrigatórios dos desejáveis. Faz os principais primeiro.


*  **Requisitos de sistema**

São requisitos funcionais e não funcionais descritos para o desenvolvimento, com detalhes e bases para a o desenvolvimento.

## Avaliando requisitos

**Corretude** = Escrita correta.

**Completude** = deve ter todos os requisitos e tudo necessário de fato para programar.

**Univocalidade** = Todos devem entender. Nenhum duplo sentido.

**Verificabilidade** = Deve ter como achar a pessoa que escreveu, a pessoa deve ter a capacidade de verificar se está correto.
.
**Consistência** = Não deve possuir contradições ou informações conflitantes. 

**Compreensibilidade** = Todos proficionais, independente da área, deve entender.

**Modificabilidade** = A estrutura do documento deve estar aberto a escalabilidade e modificações.

**Rastreabilidade** = Fontes dos requisitos, quais outros requisitos demandam dele e quais outras partes dos documentos dependem dele.

## Sistema e contexto de sistema

**Sistema** = o produto 

**Contexto de sistema** = elementos do mundo real que influenciam diretamente e indiretamente o sistema.
* Stackholders
* sistemas em operação e legados
* processos
* eventos
* documentos
* legislações
* ...

**O que faz parte do sistema?** Tudo que pode ser mudado durante o desenvolvimento, o **limite do sistema**. No final, a *zona cinzenta do sistema some*.

E quando não podemos delimitar, se ficamos na dúvida, ela fica na **zona cinzenta** ou não. Você não sabe se faz ou não parte do sistema. Note que ela não é estática.

o **limite do contexto** é o que precisa ser levado em conta para a criação do sistema. Dessa forma também existe uma zona cinzenta em volta do contexto.


## Técnicas de elicitação de Requisitos

Por detalhamento, do menor para o mais detalhado:

* Criatividade
- Observação e pesquisa 
    - Entrevista: Estruturada 
    - 
- Documentação


Entrevista


## Exercícios


![](../../img/Screenshot_20240302_132419_Teams.jpg)

1. Algoritmos criados para dar comandos à um máquina.
2. Um requisito é uma demanda, no nosso contexto, uma demanda de um stackholder
3. Um stackholder é alguém que tem interesse em um determinado produto. No nosso contexto, interesse em um software que estamos produzindo. Exemplos de stackholders: Um dono de uma loja que precisa de um site para fazer vendas online, um investidor anjo procurando produtos que ele possa investir, dessa mesma forma, um usuário do banco Bradesco é um stackholder do aplicativo do Bradesco. Todos eles são stackholders porque eles tem interesse no produto final.
4. Engenharia de requisitos é a forma e o estudo de como lidamos com os requisitos dos stackholders.
5. O principal objetivo é saber lidar, categorizar, organizar e melhorar a forma com que produzimos o produto de modo que seja convergente com o que os stackholders querem.
