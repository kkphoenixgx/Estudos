---
annotation-target: Historic230304226.pdf
---

# History of IA

2024-03-28
tags: [-IA](-IA.md)

## Notas

![](../../../img/History%20of%20IA-types-of-generic-AIs.png)

- **Hidden Markov Models (HMMs)**:
    
    - Em um HMM, você tem um conjunto de estados ocultos que estão associados a observações visíveis. A ideia básica é que, dado um estado oculto, você tem uma distribuição de probabilidade sobre as observações que podem ser geradas nesse estado. Além disso, você tem transições entre esses estados, cada uma com sua própria probabilidade.
    - Essa estrutura é usada para modelar sequências de observações. Por exemplo, em reconhecimento de fala, cada estado oculto pode representar um fonema, e as observações são os sons reais. O modelo é treinado com muitas sequências de fala, aprendendo as transições entre os fonemas e as distribuições de probabilidade associadas a cada fonema.
    - Para gerar uma sequência, você inicia em um estado inicial (geralmente escolhido aleatoriamente ou baseado em alguma distribuição de probabilidade inicial) e, em seguida, segue as transições entre os estados, gerando observações de acordo com as distribuições de probabilidade em cada estado.

- **Gaussian Mixture Models (GMMs)**:
    
    - Um GMM é uma combinação de várias distribuições gaussianas. Cada uma dessas distribuições representa um "componente" do modelo.
    - GMMs são frequentemente usados para modelar distribuições de dados complexas. Em dados sequenciais, você pode ter um GMM que modela a distribuição de observações em um determinado momento no tempo.
    - Para gerar dados sequenciais usando um GMM, você amostra um componente (distribuição gaussiana) de acordo com suas probabilidades, e então amostra um ponto dentro dessa distribuição para obter uma observação. Repete-se esse processo ao longo do tempo para gerar uma sequência de observações.

Em resumo, tanto HMMs quanto GMMs são capazes de gerar sequências de dados através de seus mecanismos internos de modelagem de probabilidades e transições entre estados ou componentes. Essas técnicas são fundamentais em várias aplicações, como reconhecimento de fala, modelagem de linguagem, previsão de séries temporais e muito mais.

However, it wasn’t until the advent of deep learning that generative models saw significant improvements in performance.

* **N-gram language modeling** é uma técnica utilizada em processamento de linguagem natural (PLN) para modelar a probabilidade de ocorrência de uma sequência de palavras em um texto, com base em observações históricas de dados linguísticos.
	
	Um n-grama é uma sequência contígua de n itens de uma determinada sequência maior. No contexto de modelagem de linguagem, os itens geralmente são palavras, então um n-grama é uma sequência de n palavras consecutivas em um texto. Por exemplo:
	
	- Unigrama (1-grama): "hoje", "está", "sol".
	- Bigrama (2-grama): "hoje está", "está sol".
	- Trigrama (3-grama): "hoje está sol".

* However, this method cannot effectively adapt to long sentences. To solve this problem, **recurrent neural networks (RNNs)** 

* This was followed by the development of **Long Short-Term  Memory (LSTM)**, and **Gated Recurrent Unit (GRU)**, which leveraged gating mechanism to  control memory during training.

* Meanwhile, in computer vision (CV), before the advent of deep learning-based methods, traditional image generation algorithms used techniques such as **texture synthesis**  and **texture mapping**.

* **Variational Autoencoders** (VAEs) and other methods like **diffusion generative models** have also been developed for more fine-grained control over the image generation process and the ability to generate high-quality images.

* The advancement of generative models in various domains has followed different paths, but  eventually, the intersection emerged: the **transformer architecture**.
	Parece que você está se referindo ao "Transformer architecture" (arquitetura Transformer), uma arquitetura de rede neural desenvolvida originalmente pela equipe do Google Brain em 2017. O Transformer foi introduzido no artigo "Attention is All You Need" por Vaswani et al. e rapidamente se tornou uma das arquiteturas mais influentes em processamento de linguagem natural (PLN) e outras tarefas de aprendizado de máquina.
	
	A principal inovação do Transformer é o uso de mecanismos de atenção para capturar relações de dependência entre palavras em uma sequência. Isso permite que o modelo processe sequências de entrada completas de uma só vez, em vez de depender de arquiteturas recorrentes ou convolucionais.
	
	Aqui estão alguns pontos-chave sobre a arquitetura Transformer:
	
	1. **Mecanismo de Atenção**: Em vez de calcular uma representação fixa para cada palavra em uma sequência de entrada, o Transformer calcula uma ponderação dinâmica para cada palavra, considerando todas as outras palavras na sequência. Isso é feito usando o mecanismo de atenção, que atribui pesos às palavras com base em sua relevância para cada palavra de consulta na sequência.
	    
	2. **Camadas de Codificação e Decodificação**: O Transformer consiste em uma pilha de camadas de codificação e decodificação. Cada camada tem várias subcamadas, incluindo camadas de autoatenção (para capturar a dependência entre palavras) e camadas totalmente conectadas (para transformação não linear). As camadas de codificação são usadas para processar a entrada, enquanto as camadas de decodificação são usadas para gerar uma saída.
	    
	3. **Posição Encoding**: Uma limitação das arquiteturas baseadas em atenção é que elas não consideram explicitamente a posição das palavras na sequência. Para resolver isso, o Transformer usa codificação de posição para fornecer informações sobre a posição absoluta de cada palavra na sequência.
	    
	4. **Arquitetura Sem Recorrência**: Ao contrário das arquiteturas recorrentes, como LSTMs e GRUs, o Transformer não tem conexões recorrentes. Isso significa que ele pode processar sequências de entrada em paralelo, o que o torna mais eficiente em termos de tempo de computação e mais adequado para treinamento em hardware acelerado, como GPUs.
	    
	
	O Transformer provou ser altamente eficaz em uma variedade de tarefas de PLN, como tradução automática, modelagem de linguagem, resumo de texto, entre outras. Sua abordagem inovadora para lidar com sequências de entrada contribuiu significativamente para avanços na área de PLN e aprendizado de máquina em geral.

* In recent years, researchers have also begun to introduce new techniques based on these models.For instance, in NLP, instead of fine-tuning, people sometimes prefer **few-shot prompting**, which refers to including a few examples selected from the dataset in the prompt, to help themodel better understand task requirements.

![](../../../img/timeline-History%20of%20IA.png)


Despite being trained on large-scale data, the AIGC may not always produce output that aligns with the user’s intent, which includes considerations of usefulness and truthfulness. In order to  better align AIGC output with human preferences, reinforcement learning from human feedback (RLHF) has been applied to fine-tune models in various applications such as Sparrow, InstructGPT,  and ChatGPT.

Pre-trained Language Models. Since the introduction of the **Transformer architecture**, it has become the dominant choice in natural language processing due to its parallelism and learning capabilities. Generally, these transformer based pre-trained language models can be commonly  classified into two types based on their training tasks: **autoregressive language modeling** and **masked language modeling** [41]. Given a sentence, which is composed of several tokens, the objective of masked language modeling, e.g., **BERT** [42] and **RoBERTa** [43], refers to predicting the probability of a masked token given context information. The most notable example of masked language modeling is **BERT** [42], which includes masked language modeling and next sentence

![](../../../img/History%20of%20IA-EncodersAndDecoders.png)

Fig. 4. Categories of pre-trained LLMs. Black line represents information flow in bidirectional models, while gray line representas left-to-right information flow. Encoder models, e.g. BERT, are trained with context-aware  objectives. Decoder models, e.g. GPT, are trained with autoregressive objectives. Encoder-decoder models, e.g. T5 and BART, combines the two, which use context-aware structures as encoders and left-to-right structures as decoders

![](../../../img/History%20of%20IA-Models%20Parameters.png)

Modelos:

1. **Transformer Self-Attention Encoder**: Uma arquitetura de rede neural que utiliza mecanismos de atenção para capturar relações entre palavras em uma sequência, amplamente utilizada em processamento de linguagem natural (PLN).
    
2. **Concatenated Encoders e Cross-aligned Encoders**: Duas abordagens para aprender representações contextualizadas em sistemas de visão e linguagem. Os concatenados aceitam embeddings concatenados de diferentes modalidades, enquanto os cross-aligned usam uma estrutura de duas torres para alinhar as modalidades.
    
3. **Vision Language Decoders**: Decodificadores que transformam representações de uma modalidade em outra, como de texto para imagem. Existem decodificadores treinados em conjunto com encoders (jointly-trained) e decodificadores com o modelo de linguagem congelado (frozen).
    
4. **Text Audio Generation e Text-Music Generation**: Abordagens para a geração de áudio baseada em texto, incluindo métodos para a personalização de vozes, transferência de voz entre idiomas e geração de música a partir de texto.
    
5. **Text Graph Generation**: Geração de grafos de conhecimento a partir de texto, envolvendo a conversão de texto em representações de grafos estruturados para tarefas como análise semântica e geração de texto.
    
6. **Text Code Generation**: Geração automática de código de programação a partir de descrições em linguagem natural, utilizando modelos de linguagem pré-treinados e estratégias específicas para capturar a semântica e a estrutura do código.
    
7. **Interactive Programming System**: Sistemas interativos para geração de código que lidam com o desafio da ambiguidade na especificação da intenção do usuário e na exploração do espaço de busca complexo da geração de código de programação.

## Annotator


>%%
>```annotation-json
>{"created":"2024-03-28T15:40:55.863Z","updated":"2024-03-28T15:40:55.863Z","document":{"title":"A Comprehensive Survey of AI-Generated Content (AIGC): A History of Generative AI from GAN to ChatGPTA Comprehensive Survey of AI-Generated Content (AIGC): A History of Generative AI from GAN to ChatGPT","link":[{"href":"urn:x-pdf:1fddab5321e4b18952d8023a71827114"},{"href":"vault:/pdfs/articles-ia/Historic230304226.pdf"}],"documentFingerprint":"1fddab5321e4b18952d8023a71827114"},"uri":"vault:/pdfs/articles-ia/Historic230304226.pdf","target":[{"source":"vault:/pdfs/articles-ia/Historic230304226.pdf","selector":[{"type":"TextPositionSelector","start":6013,"end":6255},{"type":"TextQuoteSelector","exact":"The core advancements in recent AIGC compared to prior works are the result oftraining more sophisticated generative models on larger datasets, using larger foundation modelarchitectures, and having access to extensive computational resources","prefix":"ated by previousstudies [6, 7]. ","suffix":". For example, the mainframework"}]}]}
>```
>%%
>*%%PREFIX%%ated by previousstudies [6, 7].%%HIGHLIGHT%% ==The core advancements in recent AIGC compared to prior works are the result oftraining more sophisticated generative models on larger datasets, using larger foundation modelarchitectures, and having access to extensive computational resources== %%POSTFIX%%. For example, the mainframework*
>%%LINK%%[[#^95hqi0oj36|show annotation]]
>%%COMMENT%%
>
>%%TAGS%%
>
^95hqi0oj36


>%%
>```annotation-json
>{"created":"2024-03-28T15:48:52.131Z","text":"why = To summarize everything","updated":"2024-03-28T15:48:52.131Z","document":{"title":"A Comprehensive Survey of AI-Generated Content (AIGC): A History of Generative AI from GAN to ChatGPTA Comprehensive Survey of AI-Generated Content (AIGC): A History of Generative AI from GAN to ChatGPT","link":[{"href":"urn:x-pdf:1fddab5321e4b18952d8023a71827114"},{"href":"vault:/pdfs/articles-ia/Historic230304226.pdf"}],"documentFingerprint":"1fddab5321e4b18952d8023a71827114"},"uri":"vault:/pdfs/articles-ia/Historic230304226.pdf","target":[{"source":"vault:/pdfs/articles-ia/Historic230304226.pdf","selector":[{"type":"TextPositionSelector","start":8867,"end":8979},{"type":"TextQuoteSelector","exact":"This is the first comprehensive survey of AIGC that summarizes GAI in the aspects of techniquesand applications.","prefix":" of AIGC.1.1 Major Contributions","suffix":" Previous surveys have focused o"}]}]}
>```
>%%
>*%%PREFIX%%of AIGC.1.1 Major Contributions%%HIGHLIGHT%% ==This is the first comprehensive survey of AIGC that summarizes GAI in the aspects of techniquesand applications.== %%POSTFIX%%Previous surveys have focused o*
>%%LINK%%[[#^ukse772y74b|show annotation]]
>%%COMMENT%%
>why = To summarize everything
>%%TAGS%%
>#5w2h, #why
^ukse772y74b


>%%
>```annotation-json
>{"created":"2024-03-28T15:50:10.733Z","text":"what","updated":"2024-03-28T15:50:10.733Z","document":{"title":"A Comprehensive Survey of AI-Generated Content (AIGC): A History of Generative AI from GAN to ChatGPTA Comprehensive Survey of AI-Generated Content (AIGC): A History of Generative AI from GAN to ChatGPT","link":[{"href":"urn:x-pdf:1fddab5321e4b18952d8023a71827114"},{"href":"vault:/pdfs/articles-ia/Historic230304226.pdf"}],"documentFingerprint":"1fddab5321e4b18952d8023a71827114"},"uri":"vault:/pdfs/articles-ia/Historic230304226.pdf","target":[{"source":"vault:/pdfs/articles-ia/Historic230304226.pdf","selector":[{"type":"TextPositionSelector","start":9153,"end":9307},{"type":"TextQuoteSelector","exact":"However, these prior works only focus on a specific part of AIGC. In this survey, we first providea review of foundation techniques commonly used in AIGC.","prefix":"imodal machine learning [7, 19].","suffix":" Then, we further offer a thorou"}]}]}
>```
>%%
>*%%PREFIX%%imodal machine learning [7, 19].%%HIGHLIGHT%% ==However, these prior works only focus on a specific part of AIGC. In this survey, we first providea review of foundation techniques commonly used in AIGC.== %%POSTFIX%%Then, we further offer a thorou*
>%%LINK%%[[#^ctpinjs8bcw|show annotation]]
>%%COMMENT%%
>what
>%%TAGS%%
>#what, #5w2h
^ctpinjs8bcw


>%%
>```annotation-json
>{"created":"2024-03-28T15:53:24.374Z","updated":"2024-03-28T15:53:24.374Z","document":{"title":"A Comprehensive Survey of AI-Generated Content (AIGC): A History of Generative AI from GAN to ChatGPTA Comprehensive Survey of AI-Generated Content (AIGC): A History of Generative AI from GAN to ChatGPT","link":[{"href":"urn:x-pdf:1fddab5321e4b18952d8023a71827114"},{"href":"vault:/pdfs/articles-ia/Historic230304226.pdf"}],"documentFingerprint":"1fddab5321e4b18952d8023a71827114"},"uri":"vault:/pdfs/articles-ia/Historic230304226.pdf","target":[{"source":"vault:/pdfs/articles-ia/Historic230304226.pdf","selector":[{"type":"TextPositionSelector","start":10170,"end":10207},{"type":"TextQuoteSelector","exact":"Section 2 reviews the history of AIGC","prefix":"survey is organized as follows. ","suffix":" mainly fromthe view of vision a"}]}]}
>```
>%%
>*%%PREFIX%%survey is organized as follows.%%HIGHLIGHT%% ==Section 2 reviews the history of AIGC== %%POSTFIX%%mainly fromthe view of vision a*
>%%LINK%%[[#^o8tcgtqpc9d|show annotation]]
>%%COMMENT%%
>
>%%TAGS%%
>
^o8tcgtqpc9d


>%%
>```annotation-json
>{"created":"2024-03-28T15:53:30.645Z","updated":"2024-03-28T15:53:30.645Z","document":{"title":"A Comprehensive Survey of AI-Generated Content (AIGC): A History of Generative AI from GAN to ChatGPTA Comprehensive Survey of AI-Generated Content (AIGC): A History of Generative AI from GAN to ChatGPT","link":[{"href":"urn:x-pdf:1fddab5321e4b18952d8023a71827114"},{"href":"vault:/pdfs/articles-ia/Historic230304226.pdf"}],"documentFingerprint":"1fddab5321e4b18952d8023a71827114"},"uri":"vault:/pdfs/articles-ia/Historic230304226.pdf","target":[{"source":"vault:/pdfs/articles-ia/Historic230304226.pdf","selector":[{"type":"TextPositionSelector","start":10263,"end":10355},{"type":"TextQuoteSelector","exact":"Section 3 introduces the basic components that arewidely used in nowadays GAI model training","prefix":"vision and language modalities. ","suffix":". Section 4 summarizes recent ad"}]}]}
>```
>%%
>*%%PREFIX%%vision and language modalities.%%HIGHLIGHT%% ==Section 3 introduces the basic components that arewidely used in nowadays GAI model training== %%POSTFIX%%. Section 4 summarizes recent ad*
>%%LINK%%[[#^uqjnrndb4za|show annotation]]
>%%COMMENT%%
>
>%%TAGS%%
>
^uqjnrndb4za


>%%
>```annotation-json
>{"created":"2024-03-28T15:53:36.705Z","updated":"2024-03-28T15:53:36.705Z","document":{"title":"A Comprehensive Survey of AI-Generated Content (AIGC): A History of Generative AI from GAN to ChatGPTA Comprehensive Survey of AI-Generated Content (AIGC): A History of Generative AI from GAN to ChatGPT","link":[{"href":"urn:x-pdf:1fddab5321e4b18952d8023a71827114"},{"href":"vault:/pdfs/articles-ia/Historic230304226.pdf"}],"documentFingerprint":"1fddab5321e4b18952d8023a71827114"},"uri":"vault:/pdfs/articles-ia/Historic230304226.pdf","target":[{"source":"vault:/pdfs/articles-ia/Historic230304226.pdf","selector":[{"type":"TextPositionSelector","start":10357,"end":10407},{"type":"TextQuoteSelector","exact":"Section 4 summarizes recent advances of GAI models","prefix":"in nowadays GAI model training. ","suffix":",among which, Section 4.1 review"}]}]}
>```
>%%
>*%%PREFIX%%in nowadays GAI model training.%%HIGHLIGHT%% ==Section 4 summarizes recent advances of GAI models== %%POSTFIX%%,among which, Section 4.1 review*
>%%LINK%%[[#^ajf44ifli5p|show annotation]]
>%%COMMENT%%
>
>%%TAGS%%
>
^ajf44ifli5p


>%%
>```annotation-json
>{"created":"2024-03-28T15:54:07.286Z","updated":"2024-03-28T15:54:07.286Z","document":{"title":"A Comprehensive Survey of AI-Generated Content (AIGC): A History of Generative AI from GAN to ChatGPTA Comprehensive Survey of AI-Generated Content (AIGC): A History of Generative AI from GAN to ChatGPT","link":[{"href":"urn:x-pdf:1fddab5321e4b18952d8023a71827114"},{"href":"vault:/pdfs/articles-ia/Historic230304226.pdf"}],"documentFingerprint":"1fddab5321e4b18952d8023a71827114"},"uri":"vault:/pdfs/articles-ia/Historic230304226.pdf","target":[{"source":"vault:/pdfs/articles-ia/Historic230304226.pdf","selector":[{"type":"TextPositionSelector","start":10843,"end":10915},{"type":"TextQuoteSelector","exact":"Section 5 and Section 6 introduce the applications of GAI models in AIGC","prefix":"aph models and text code models.","suffix":" and some other importantresearc"}]}]}
>```
>%%
>*%%PREFIX%%aph models and text code models.%%HIGHLIGHT%% ==Section 5 and Section 6 introduce the applications of GAI models in AIGC== %%POSTFIX%%and some other importantresearc*
>%%LINK%%[[#^d1ug9an1vib|show annotation]]
>%%COMMENT%%
>
>%%TAGS%%
>
^d1ug9an1vib


>%%
>```annotation-json
>{"created":"2024-03-28T15:54:44.508Z","updated":"2024-03-28T15:54:44.508Z","document":{"title":"A Comprehensive Survey of AI-Generated Content (AIGC): A History of Generative AI from GAN to ChatGPTA Comprehensive Survey of AI-Generated Content (AIGC): A History of Generative AI from GAN to ChatGPT","link":[{"href":"urn:x-pdf:1fddab5321e4b18952d8023a71827114"},{"href":"vault:/pdfs/articles-ia/Historic230304226.pdf"}],"documentFingerprint":"1fddab5321e4b18952d8023a71827114"},"uri":"vault:/pdfs/articles-ia/Historic230304226.pdf","target":[{"source":"vault:/pdfs/articles-ia/Historic230304226.pdf","selector":[{"type":"TextPositionSelector","start":10993,"end":11079},{"type":"TextQuoteSelector","exact":"Sections 7, 8 reveal the risk, open problems andfuture directions of AIGC technologies","prefix":"ated to this area. Furthermore, ","suffix":". Finally, we conclude our resea"}]}]}
>```
>%%
>*%%PREFIX%%ated to this area. Furthermore,%%HIGHLIGHT%% ==Sections 7, 8 reveal the risk, open problems andfuture directions of AIGC technologies== %%POSTFIX%%. Finally, we conclude our resea*
>%%LINK%%[[#^kmmx3a8i01|show annotation]]
>%%COMMENT%%
>
>%%TAGS%%
>
^kmmx3a8i01


>%%
>```annotation-json
>{"created":"2024-03-28T15:55:08.275Z","text":"First models","updated":"2024-03-28T15:55:08.275Z","document":{"title":"A Comprehensive Survey of AI-Generated Content (AIGC): A History of Generative AI from GAN to ChatGPTA Comprehensive Survey of AI-Generated Content (AIGC): A History of Generative AI from GAN to ChatGPT","link":[{"href":"urn:x-pdf:1fddab5321e4b18952d8023a71827114"},{"href":"vault:/pdfs/articles-ia/Historic230304226.pdf"}],"documentFingerprint":"1fddab5321e4b18952d8023a71827114"},"uri":"vault:/pdfs/articles-ia/Historic230304226.pdf","target":[{"source":"vault:/pdfs/articles-ia/Historic230304226.pdf","selector":[{"type":"TextPositionSelector","start":11212,"end":11288},{"type":"TextQuoteSelector","exact":"dating back to the 1950s with thedevelopment of Hidden Markov Models (HMMs) ","prefix":"ory in artificial intelligence, ","suffix":"[20] and Gaussian Mixture Models"}]}]}
>```
>%%
>*%%PREFIX%%ory in artificial intelligence,%%HIGHLIGHT%% ==dating back to the 1950s with thedevelopment of Hidden Markov Models (HMMs)== %%POSTFIX%%[20] and Gaussian Mixture Models*
>%%LINK%%[[#^qmlynjppd6m|show annotation]]
>%%COMMENT%%
>First models
>%%TAGS%%
>#history
^qmlynjppd6m


>%%
>```annotation-json
>{"created":"2024-03-28T15:55:47.726Z","text":"First models","updated":"2024-03-28T15:55:47.726Z","document":{"title":"A Comprehensive Survey of AI-Generated Content (AIGC): A History of Generative AI from GAN to ChatGPTA Comprehensive Survey of AI-Generated Content (AIGC): A History of Generative AI from GAN to ChatGPT","link":[{"href":"urn:x-pdf:1fddab5321e4b18952d8023a71827114"},{"href":"vault:/pdfs/articles-ia/Historic230304226.pdf"}],"documentFingerprint":"1fddab5321e4b18952d8023a71827114"},"uri":"vault:/pdfs/articles-ia/Historic230304226.pdf","target":[{"source":"vault:/pdfs/articles-ia/Historic230304226.pdf","selector":[{"type":"TextPositionSelector","start":11293,"end":11320},{"type":"TextQuoteSelector","exact":"and Gaussian Mixture Models","prefix":"idden Markov Models (HMMs) [20] ","suffix":" (GMMs) [21].These models genera"}]}]}
>```
>%%
>*%%PREFIX%%idden Markov Models (HMMs) [20]%%HIGHLIGHT%% ==and Gaussian Mixture Models== %%POSTFIX%%(GMMs) [21].These models genera*
>%%LINK%%[[#^d53hfjveiz|show annotation]]
>%%COMMENT%%
>First models
>%%TAGS%%
>#history
^d53hfjveiz


>%%
>```annotation-json
>{"created":"2024-03-28T16:02:41.894Z","text":"deep learning","updated":"2024-03-28T16:02:41.894Z","document":{"title":"A Comprehensive Survey of AI-Generated Content (AIGC): A History of Generative AI from GAN to ChatGPTA Comprehensive Survey of AI-Generated Content (AIGC): A History of Generative AI from GAN to ChatGPT","link":[{"href":"urn:x-pdf:1fddab5321e4b18952d8023a71827114"},{"href":"vault:/pdfs/articles-ia/Historic230304226.pdf"}],"documentFingerprint":"1fddab5321e4b18952d8023a71827114"},"uri":"vault:/pdfs/articles-ia/Historic230304226.pdf","target":[{"source":"vault:/pdfs/articles-ia/Historic230304226.pdf","selector":[{"type":"TextPositionSelector","start":11402,"end":11523},{"type":"TextQuoteSelector","exact":". However, it wasn’t untilthe advent of deep learning that generative models saw significant improvements in performance.","prefix":"a such as speech and time series","suffix":"In early years of deep generativ"}]}]}
>```
>%%
>*%%PREFIX%%a such as speech and time series%%HIGHLIGHT%% ==. However, it wasn’t untilthe advent of deep learning that generative models saw significant improvements in performance.== %%POSTFIX%%In early years of deep generativ*
>%%LINK%%[[#^d42yjronegg|show annotation]]
>%%COMMENT%%
>deep learning
>%%TAGS%%
>#history
^d42yjronegg


>%%
>```annotation-json
>{"created":"2024-03-28T16:03:20.964Z","text":"NLP","updated":"2024-03-28T16:03:20.964Z","document":{"title":"A Comprehensive Survey of AI-Generated Content (AIGC): A History of Generative AI from GAN to ChatGPTA Comprehensive Survey of AI-Generated Content (AIGC): A History of Generative AI from GAN to ChatGPT","link":[{"href":"urn:x-pdf:1fddab5321e4b18952d8023a71827114"},{"href":"vault:/pdfs/articles-ia/Historic230304226.pdf"}],"documentFingerprint":"1fddab5321e4b18952d8023a71827114"},"uri":"vault:/pdfs/articles-ia/Historic230304226.pdf","target":[{"source":"vault:/pdfs/articles-ia/Historic230304226.pdf","selector":[{"type":"TextPositionSelector","start":11620,"end":11653},{"type":"TextQuoteSelector","exact":"natural language processing (NLP)","prefix":"have much overlap in general.In ","suffix":", a traditional method to genera"}]}]}
>```
>%%
>*%%PREFIX%%have much overlap in general.In%%HIGHLIGHT%% ==natural language processing (NLP)== %%POSTFIX%%, a traditional method to genera*
>%%LINK%%[[#^n0kc5h9cycp|show annotation]]
>%%COMMENT%%
>NLP
>%%TAGS%%
>#NLP
^n0kc5h9cycp


>%%
>```annotation-json
>{"created":"2024-03-28T16:08:32.087Z","text":"neural Networks","updated":"2024-03-28T16:08:32.087Z","document":{"title":"A Comprehensive Survey of AI-Generated Content (AIGC): A History of Generative AI from GAN to ChatGPTA Comprehensive Survey of AI-Generated Content (AIGC): A History of Generative AI from GAN to ChatGPT","link":[{"href":"urn:x-pdf:1fddab5321e4b18952d8023a71827114"},{"href":"vault:/pdfs/articles-ia/Historic230304226.pdf"}],"documentFingerprint":"1fddab5321e4b18952d8023a71827114"},"uri":"vault:/pdfs/articles-ia/Historic230304226.pdf","target":[{"source":"vault:/pdfs/articles-ia/Historic230304226.pdf","selector":[{"type":"TextPositionSelector","start":11801,"end":11920},{"type":"TextQuoteSelector","exact":"However, this method cannot effectively adapt to long sentences. To solve this problem, recurrentneural networks (RNNs)","prefix":"en search for the best sequence.","suffix":" [23] were later introduced for "}]}]}
>```
>%%
>*%%PREFIX%%en search for the best sequence.%%HIGHLIGHT%% ==However, this method cannot effectively adapt to long sentences. To solve this problem, recurrentneural networks (RNNs)== %%POSTFIX%%[23] were later introduced for*
>%%LINK%%[[#^hfpb1ncnydb|show annotation]]
>%%COMMENT%%
>neural Networks
>%%TAGS%%
>#history
^hfpb1ncnydb


>%%
>```annotation-json
>{"created":"2024-03-28T16:09:18.130Z","text":"Memory","updated":"2024-03-28T16:09:18.130Z","document":{"title":"A Comprehensive Survey of AI-Generated Content (AIGC): A History of Generative AI from GAN to ChatGPTA Comprehensive Survey of AI-Generated Content (AIGC): A History of Generative AI from GAN to ChatGPT","link":[{"href":"urn:x-pdf:1fddab5321e4b18952d8023a71827114"},{"href":"vault:/pdfs/articles-ia/Historic230304226.pdf"}],"documentFingerprint":"1fddab5321e4b18952d8023a71827114"},"uri":"vault:/pdfs/articles-ia/Historic230304226.pdf","target":[{"source":"vault:/pdfs/articles-ia/Historic230304226.pdf","selector":[{"type":"TextPositionSelector","start":12067,"end":12096},{"type":"TextQuoteSelector","exact":"Long Short-TermMemory (LSTM) ","prefix":" followed by the development of ","suffix":"[24] and Gated Recurrent Unit (G"}]}]}
>```
>%%
>*%%PREFIX%%followed by the development of%%HIGHLIGHT%% ==Long Short-TermMemory (LSTM)== %%POSTFIX%%[24] and Gated Recurrent Unit (G*
>%%LINK%%[[#^e5d7lj1sny|show annotation]]
>%%COMMENT%%
>Memory
>%%TAGS%%
>#history
^e5d7lj1sny


>%%
>```annotation-json
>{"created":"2024-03-28T16:09:37.013Z","text":"Memory","updated":"2024-03-28T16:09:37.013Z","document":{"title":"A Comprehensive Survey of AI-Generated Content (AIGC): A History of Generative AI from GAN to ChatGPTA Comprehensive Survey of AI-Generated Content (AIGC): A History of Generative AI from GAN to ChatGPT","link":[{"href":"urn:x-pdf:1fddab5321e4b18952d8023a71827114"},{"href":"vault:/pdfs/articles-ia/Historic230304226.pdf"}],"documentFingerprint":"1fddab5321e4b18952d8023a71827114"},"uri":"vault:/pdfs/articles-ia/Historic230304226.pdf","target":[{"source":"vault:/pdfs/articles-ia/Historic230304226.pdf","selector":[{"type":"TextPositionSelector","start":12105,"end":12132},{"type":"TextQuoteSelector","exact":"Gated Recurrent Unit (GRU) ","prefix":"hort-TermMemory (LSTM) [24] and ","suffix":"[25], which leveraged gating mec"}]}]}
>```
>%%
>*%%PREFIX%%hort-TermMemory (LSTM) [24] and%%HIGHLIGHT%% ==Gated Recurrent Unit (GRU)== %%POSTFIX%%[25], which leveraged gating mec*
>%%LINK%%[[#^kfbfr6iet8|show annotation]]
>%%COMMENT%%
>Memory
>%%TAGS%%
>#history
^kfbfr6iet8


>%%
>```annotation-json
>{"created":"2024-03-28T16:11:41.523Z","text":"textures before deep learning","updated":"2024-03-28T16:11:41.523Z","document":{"title":"A Comprehensive Survey of AI-Generated Content (AIGC): A History of Generative AI from GAN to ChatGPTA Comprehensive Survey of AI-Generated Content (AIGC): A History of Generative AI from GAN to ChatGPT","link":[{"href":"urn:x-pdf:1fddab5321e4b18952d8023a71827114"},{"href":"vault:/pdfs/articles-ia/Historic230304226.pdf"}],"documentFingerprint":"1fddab5321e4b18952d8023a71827114"},"uri":"vault:/pdfs/articles-ia/Historic230304226.pdf","target":[{"source":"vault:/pdfs/articles-ia/Historic230304226.pdf","selector":[{"type":"TextPositionSelector","start":12355,"end":12553},{"type":"TextQuoteSelector","exact":"Meanwhile, in computer vision (CV), before the advent of deep learning-based methods, tra-ditional image generation algorithms used techniques such as texture synthesis [27] and texturemapping [28].","prefix":"pared to N-gram language models.","suffix":" These algorithms were based on "}]}]}
>```
>%%
>*%%PREFIX%%pared to N-gram language models.%%HIGHLIGHT%% ==Meanwhile, in computer vision (CV), before the advent of deep learning-based methods, tra-ditional image generation algorithms used techniques such as texture synthesis [27] and texturemapping [28].== %%POSTFIX%%These algorithms were based on*
>%%LINK%%[[#^pk9plxg93yn|show annotation]]
>%%COMMENT%%
>textures before deep learning
>%%TAGS%%
>#history
^pk9plxg93yn


>%%
>```annotation-json
>{"created":"2024-03-28T16:12:35.739Z","text":"Generative Adversarial Networks","updated":"2024-03-28T16:12:35.739Z","document":{"title":"A Comprehensive Survey of AI-Generated Content (AIGC): A History of Generative AI from GAN to ChatGPTA Comprehensive Survey of AI-Generated Content (AIGC): A History of Generative AI from GAN to ChatGPT","link":[{"href":"urn:x-pdf:1fddab5321e4b18952d8023a71827114"},{"href":"vault:/pdfs/articles-ia/Historic230304226.pdf"}],"documentFingerprint":"1fddab5321e4b18952d8023a71827114"},"uri":"vault:/pdfs/articles-ia/Historic230304226.pdf","target":[{"source":"vault:/pdfs/articles-ia/Historic230304226.pdf","selector":[{"type":"TextPositionSelector","start":12684,"end":12754},{"type":"TextQuoteSelector","exact":"In 2014, Generative Adversarial Networks (GANs) [29]was first proposed","prefix":"ate complex and diverse images. ","suffix":", which was a significant milest"}]}]}
>```
>%%
>*%%PREFIX%%ate complex and diverse images.%%HIGHLIGHT%% ==In 2014, Generative Adversarial Networks (GANs) [29]was first proposed== %%POSTFIX%%, which was a significant milest*
>%%LINK%%[[#^k16ks8fhiap|show annotation]]
>%%COMMENT%%
>Generative Adversarial Networks
>%%TAGS%%
>#history
^k16ks8fhiap


>%%
>```annotation-json
>{"created":"2024-03-28T16:15:31.325Z","text":"VAEs and Diffusion generative models","updated":"2024-03-28T16:15:31.325Z","document":{"title":"A Comprehensive Survey of AI-Generated Content (AIGC): A History of Generative AI from GAN to ChatGPTA Comprehensive Survey of AI-Generated Content (AIGC): A History of Generative AI from GAN to ChatGPT","link":[{"href":"urn:x-pdf:1fddab5321e4b18952d8023a71827114"},{"href":"vault:/pdfs/articles-ia/Historic230304226.pdf"}],"documentFingerprint":"1fddab5321e4b18952d8023a71827114"},"uri":"vault:/pdfs/articles-ia/Historic230304226.pdf","target":[{"source":"vault:/pdfs/articles-ia/Historic230304226.pdf","selector":[{"type":"TextPositionSelector","start":12858,"end":13086},{"type":"TextQuoteSelector","exact":"Variational Autoencoders (VAEs) [30] and other methods like diffusiongenerative models [31] have also been developed for more fine-grained control over the imagegeneration process and the ability to generate high-quality images.","prefix":"resultsin various applications. ","suffix":"The advancement of generative mo"}]}]}
>```
>%%
>*%%PREFIX%%resultsin various applications.%%HIGHLIGHT%% ==Variational Autoencoders (VAEs) [30] and other methods like diffusiongenerative models [31] have also been developed for more fine-grained control over the imagegeneration process and the ability to generate high-quality images.== %%POSTFIX%%The advancement of generative mo*
>%%LINK%%[[#^vz64g4gtipj|show annotation]]
>%%COMMENT%%
>VAEs and Diffusion generative models
>%%TAGS%%
>
^vz64g4gtipj


>%%
>```annotation-json
>{"created":"2024-03-28T16:21:50.039Z","text":"transformer is big","updated":"2024-03-28T16:21:50.039Z","document":{"title":"A Comprehensive Survey of AI-Generated Content (AIGC): A History of Generative AI from GAN to ChatGPTA Comprehensive Survey of AI-Generated Content (AIGC): A History of Generative AI from GAN to ChatGPT","link":[{"href":"urn:x-pdf:1fddab5321e4b18952d8023a71827114"},{"href":"vault:/pdfs/articles-ia/Historic230304226.pdf"}],"documentFingerprint":"1fddab5321e4b18952d8023a71827114"},"uri":"vault:/pdfs/articles-ia/Historic230304226.pdf","target":[{"source":"vault:/pdfs/articles-ia/Historic230304226.pdf","selector":[{"type":"TextPositionSelector","start":13248,"end":13868},{"type":"TextQuoteSelector","exact":"Introduced by Vaswani etal. for NLP tasks in 2017, Transformer has later been applied in CV and then become the dominantbackbone for many generative models in various domains [9, 33, 34]. In the field of NLP, manyprominent large language models, e.g., BERT and GPT, adopt the transformer architecture astheir primary building block, offering advantages over previous building blocks, i.e., LSTM andGRU. In CV, Vision Transformer (ViT) [35] and Swin Transformer [36] later takes this concepteven further by combining the transformer architecture with visual components, allowing it tobe applied to image based downstreams","prefix":" transformer architecture [32]. ","suffix":". Except for the improvement tha"}]}]}
>```
>%%
>*%%PREFIX%%transformer architecture [32].%%HIGHLIGHT%% ==Introduced by Vaswani etal. for NLP tasks in 2017, Transformer has later been applied in CV and then become the dominantbackbone for many generative models in various domains [9, 33, 34]. In the field of NLP, manyprominent large language models, e.g., BERT and GPT, adopt the transformer architecture astheir primary building block, offering advantages over previous building blocks, i.e., LSTM andGRU. In CV, Vision Transformer (ViT) [35] and Swin Transformer [36] later takes this concepteven further by combining the transformer architecture with visual components, allowing it tobe applied to image based downstreams== %%POSTFIX%%. Except for the improvement tha*
>%%LINK%%[[#^vc2ts31m6l|show annotation]]
>%%COMMENT%%
>transformer is big
>%%TAGS%%
>#history
^vc2ts31m6l


>%%
>```annotation-json
>{"created":"2024-03-28T16:23:20.556Z","text":"A view of a new locate","updated":"2024-03-28T16:23:20.556Z","document":{"title":"A Comprehensive Survey of AI-Generated Content (AIGC): A History of Generative AI from GAN to ChatGPTA Comprehensive Survey of AI-Generated Content (AIGC): A History of Generative AI from GAN to ChatGPT","link":[{"href":"urn:x-pdf:1fddab5321e4b18952d8023a71827114"},{"href":"vault:/pdfs/articles-ia/Historic230304226.pdf"}],"documentFingerprint":"1fddab5321e4b18952d8023a71827114"},"uri":"vault:/pdfs/articles-ia/Historic230304226.pdf","target":[{"source":"vault:/pdfs/articles-ia/Historic230304226.pdf","selector":[{"type":"TextPositionSelector","start":14549,"end":14874},{"type":"TextQuoteSelector","exact":"In recent years, researchers have also begun to introduce new techniques based on these models.For instance, in NLP, instead of fine-tuning, people sometimes prefer few-shot prompting [38],which refers to including a few examples selected from the dataset in the prompt, to help themodel better understand task requirements. ","prefix":"ibility of large-scale training.","suffix":"And in visual language, research"}]}]}
>```
>%%
>*%%PREFIX%%ibility of large-scale training.%%HIGHLIGHT%% ==In recent years, researchers have also begun to introduce new techniques based on these models.For instance, in NLP, instead of fine-tuning, people sometimes prefer few-shot prompting [38],which refers to including a few examples selected from the dataset in the prompt, to help themodel better understand task requirements.== %%POSTFIX%%And in visual language, research*
>%%LINK%%[[#^zcyla03sun|show annotation]]
>%%COMMENT%%
>A view of a new locate
>%%TAGS%%
>#history
^zcyla03sun


>%%
>```annotation-json
>{"created":"2024-03-28T16:30:22.436Z","text":"fig models","updated":"2024-03-28T16:30:22.436Z","document":{"title":"A Comprehensive Survey of AI-Generated Content (AIGC): A History of Generative AI from GAN to ChatGPTA Comprehensive Survey of AI-Generated Content (AIGC): A History of Generative AI from GAN to ChatGPT","link":[{"href":"urn:x-pdf:1fddab5321e4b18952d8023a71827114"},{"href":"vault:/pdfs/articles-ia/Historic230304226.pdf"}],"documentFingerprint":"1fddab5321e4b18952d8023a71827114"},"uri":"vault:/pdfs/articles-ia/Historic230304226.pdf","target":[{"source":"vault:/pdfs/articles-ia/Historic230304226.pdf","selector":[{"type":"TextPositionSelector","start":18299,"end":18746},{"type":"TextQuoteSelector","exact":"Fig. 4. Categories of pre-trained LLMs. Black line represents information flow in bidirectional models, whilegray line representas left-to-right information flow. Encoder models, e.g. BERT, are trained with context-awareobjectives. Decoder models, e.g. GPT, are trained with autoregressive objectives. Encoder-decoder models, e.g.T5 and BART, combines the two, which use context-aware structures as encoders and left-to-right structuresas decoders","prefix":"\"𝑇#...Encoder-Decoder (T5/BART)","suffix":".prediction tasks. RoBERTa [43],"}]}]}
>```
>%%
>*%%PREFIX%%"𝑇#...Encoder-Decoder (T5/BART)%%HIGHLIGHT%% ==Fig. 4. Categories of pre-trained LLMs. Black line represents information flow in bidirectional models, whilegray line representas left-to-right information flow. Encoder models, e.g. BERT, are trained with context-awareobjectives. Decoder models, e.g. GPT, are trained with autoregressive objectives. Encoder-decoder models, e.g.T5 and BART, combines the two, which use context-aware structures as encoders and left-to-right structuresas decoders== %%POSTFIX%%.prediction tasks. RoBERTa [43],*
>%%LINK%%[[#^8oylovz722i|show annotation]]
>%%COMMENT%%
>fig models
>%%TAGS%%
>
^8oylovz722i



>%%
>```annotation-json
>{"created":"2024-03-28T16:32:49.262Z","text":"Humans can interact","updated":"2024-03-28T16:32:49.262Z","document":{"title":"A Comprehensive Survey of AI-Generated Content (AIGC): A History of Generative AI from GAN to ChatGPTA Comprehensive Survey of AI-Generated Content (AIGC): A History of Generative AI from GAN to ChatGPT","link":[{"href":"urn:x-pdf:1fddab5321e4b18952d8023a71827114"},{"href":"vault:/pdfs/articles-ia/Historic230304226.pdf"}],"documentFingerprint":"1fddab5321e4b18952d8023a71827114"},"uri":"vault:/pdfs/articles-ia/Historic230304226.pdf","target":[{"source":"vault:/pdfs/articles-ia/Historic230304226.pdf","selector":[{"type":"TextPositionSelector","start":19537,"end":19936},{"type":"TextQuoteSelector","exact":"Despite being trained on large-scale data, the AIGC may not always produce output that alignswith the user’s intent, which includes considerations of usefulness and truthfulness. In order tobetter align AIGC output with human preferences, reinforcement learning from human feedback(RLHF) has been applied to fine-tune models in various applications such as Sparrow, InstructGPT,and ChatGPT [10, 46].","prefix":"ent Learning from Human Feedback","suffix":"Typically, the whole pipeline of"}]}]}
>```
>%%
>*%%PREFIX%%ent Learning from Human Feedback%%HIGHLIGHT%% ==Despite being trained on large-scale data, the AIGC may not always produce output that alignswith the user’s intent, which includes considerations of usefulness and truthfulness. In order tobetter align AIGC output with human preferences, reinforcement learning from human feedback(RLHF) has been applied to fine-tune models in various applications such as Sparrow, InstructGPT,and ChatGPT [10, 46].== %%POSTFIX%%Typically, the whole pipeline of*
>%%LINK%%[[#^s8ms1wz5xo|show annotation]]
>%%COMMENT%%
>Humans can interact
>%%TAGS%%
>#history
^s8ms1wz5xo
