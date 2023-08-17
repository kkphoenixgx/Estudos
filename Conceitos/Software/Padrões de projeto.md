# Padrões de projeto
2023-04-14
tags: #GOF

![[Pasted image 20230414162054.png]]

![[Pasted image 20230414162104.png]]

## Compose e Composition

![[Compositor&CompositionPattern]]


Aqui temos um padrão bem interessante de quando queremos criar coisas, criar textos para uma interface dinamicamente, criar arrays de objetos, adicionar coisas na aplicação dinamicamente... Como um editor de texto que precisa formatar quando um texto chega a certo limite de caracteres, ou quando adicionamos uma imagem em .md ....

Na prática,  Composition envia um Objeto para o Compositor com as informações necessárias para criar coisas em seus filhos e por meio do método Compose(), cria o que necessita e coloca na tela. Podemos até colocar Compositor para falar com um Controller para fazer essa manipulação de dados.

## Strategy

O strategy quer encapsular um algorítimo em um objeto
