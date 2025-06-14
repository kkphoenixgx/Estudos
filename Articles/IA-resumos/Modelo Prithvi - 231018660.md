---
annotation-target: 231018660.pdf
---

# IA generativa modelo Prithvi
tags: [-IA](-IA.md)


**Autores**: Jakubik, Johannes and Roy, Sujit and Phillips, C. E. and Fraccaro, Paolo and Godwin, Denys and Zadrozny, Bianca and Szwarcman, Daniela and Gomes, Carlos and Nyirjesy, Gabby and Edwards, Blair and Kimura, Daiki and Simumba, Naomi and Chu, Linsong and Mukkavilli, S. Karthik and Lambhate, Devyani and Das, Kamal and Bangalore, Ranjini and Oliveira, Dario and Muszynski, Michal and Ankur, Kumar and Ramasubramanian, Muthukumaran and Gurung, Iksha and Khallaghi, Sam and Li, Hanxi (Steve) and Cecil, Michael and Ahmadi, Maryam and Kordi, Fatemeh and Alemohammad, Hamed and Maskey, Manil and Ganti, Raghu and Weldemariam, Kommy and Ramachandran, Rahul

Data: oct 2023
## Notes

> Further, these task-specific models do not generalize well in space and time, necessitating the construction of a newmodel for each application


> OutputFig. 1: We propose a first-of-its-kind framework for the development of geospatial foun-  
dation models from raw satellite imagery, which we leverage to generate the Prithvi-100M  
model. The framework encompasses (1) the sampling, filtering, and pre-processing of raw  
geospatial data and the self-supervised foundation model pretraining, (2) the fine-tuning to  
specific downstream applications, and (3) the inference process.


![](../../../img/231018660-ai-training-model.png)


> Foundation models are generalist AI models that are pre-trained on large unlabeled  datasets through self-supervision and then fine-tuned for different downstream tasks. In  
recent years, they have been shown to be a very effective approach for natural language pro-cessing [2] and computer vision task


![](../../../img/231018660-encoder-decoder-example.png)

We leverage the pretrained foundation model across several downstream tasks. In this  paper, we focus on multi-temporal cloud gap imputation, the segmentation of the extent of floods, the segmentation of wildfire scars from wildfires, and multi-temporal crop segmen-tation. In the following, we introduce the tasks and the underlying data and then focus on modeling to apply the pretrained MAE model to downstream tasks.

![](../../../img/231018660-fine-turning.png)

Binary HLS cloud masks were taken from the Fmask channel to use as synthetic cloud  masks for the purposes of fine-tuning and inference, where cloudy pixels are represented as 1 and non-cloudy pixels as 0. Cloud masks are from identical regions of the United States as the image chips and encompass a 224 x 224 pixel region with a spatial resolution of 30   meters. 21,648 binary cloud masks were generated through this process.

![](../../../img/231018660-result.png)

![](../../../img/231018660-cloud-ai-resukt.png)

https://huggingface.co/ibm-nasa-geospatial/Prithvi-100M

https://huggingface.co
## Annotator

>%%
>```annotation-json
>{"text":"Why we need generic models","target":[{"source":"vault:/pdfs/articles-ia/231018660.pdf","selector":[{"type":"TextPositionSelector","start":4293,"end":4437},{"type":"TextQuoteSelector","exact":"Further, these task-specificmodels do not generalize well in space and time, necessitating the construction of a newmodel for each application [","prefix":"an be expensive to produce [1].","suffix":"1]. Foundation models have emerg"}]}],"created":"2024-03-28T14:22:00.839Z","updated":"2024-03-28T14:22:00.839Z","document":{"title":"231018660.pdf","link":[{"href":"urn:x-pdf:b3f777da802885eacee00c64780e1bfd"},{"href":"vault:/pdfs/articles-ia/231018660.pdf"}],"documentFingerprint":"b3f777da802885eacee00c64780e1bfd"},"uri":"vault:/pdfs/articles-ia/231018660.pdf"}
>```
>%%
>*%%PREFIX%%an be expensive to produce [1].%%HIGHLIGHT%% ==Further, these task-specificmodels do not generalize well in space and time, necessitating the construction of a newmodel for each application [== %%POSTFIX%%1]. Foundation models have emerg*
>%%LINK%%[[#^o10q2cxq31|show annotation]]
>%%COMMENT%%
>Why we need generic models
>%%TAGS%%
>#why, #5w2h
^o10q2cxq31


>%%
>```annotation-json
>{"created":"2024-03-28T14:28:51.706Z","text":"What they propose","updated":"2024-03-28T14:28:51.706Z","document":{"title":"231018660.pdf","link":[{"href":"urn:x-pdf:b3f777da802885eacee00c64780e1bfd"},{"href":"vault:/pdfs/articles-ia/231018660.pdf"}],"documentFingerprint":"b3f777da802885eacee00c64780e1bfd"},"uri":"vault:/pdfs/articles-ia/231018660.pdf","target":[{"source":"vault:/pdfs/articles-ia/231018660.pdf","selector":[{"type":"TextPositionSelector","start":5078,"end":5256},{"type":"TextQuoteSelector","exact":"we propose a first-of-its-kind framework for the creation of geospatial foun-dation models to accelerate the development and deployment of climate and sustainabilityapplications.","prefix":"variety of tasks.In this paper, ","suffix":" Our framework provides a distri"}]}]}
>```
>%%
>*%%PREFIX%%variety of tasks.In this paper,%%HIGHLIGHT%% ==we propose a first-of-its-kind framework for the creation of geospatial foun-dation models to accelerate the development and deployment of climate and sustainabilityapplications.== %%POSTFIX%%Our framework provides a distri*
>%%LINK%%[[#^5g2jdhcm7y8|show annotation]]
>%%COMMENT%%
>What they propose
>%%TAGS%%
>#what, #5w2h
^5g2jdhcm7y8


>%%
>```annotation-json
>{"created":"2024-03-28T14:31:31.056Z","text":"Áreas de pesquisa","updated":"2024-03-28T14:31:31.056Z","document":{"title":"231018660.pdf","link":[{"href":"urn:x-pdf:b3f777da802885eacee00c64780e1bfd"},{"href":"vault:/pdfs/articles-ia/231018660.pdf"}],"documentFingerprint":"b3f777da802885eacee00c64780e1bfd"},"uri":"vault:/pdfs/articles-ia/231018660.pdf","target":[{"source":"vault:/pdfs/articles-ia/231018660.pdf","selector":[{"type":"TextPositionSelector","start":5388,"end":5451},{"type":"TextQuoteSelector","exact":"geospatial data sources via intelligentdata discovery operators","prefix":"rence that connects directly to ","suffix":" (e.g., sampling and pre-process"}]}]}
>```
>%%
>*%%PREFIX%%rence that connects directly to%%HIGHLIGHT%% ==geospatial data sources via intelligentdata discovery operators== %%POSTFIX%%(e.g., sampling and pre-process*
>%%LINK%%[[#^anr00tjr9tu|show annotation]]
>%%COMMENT%%
>Áreas de pesquisa
>%%TAGS%%
>#search-area
^anr00tjr9tu


>%%
>```annotation-json
>{"created":"2024-03-28T14:32:32.373Z","updated":"2024-03-28T14:32:32.373Z","document":{"title":"231018660.pdf","link":[{"href":"urn:x-pdf:b3f777da802885eacee00c64780e1bfd"},{"href":"vault:/pdfs/articles-ia/231018660.pdf"}],"documentFingerprint":"b3f777da802885eacee00c64780e1bfd"},"uri":"vault:/pdfs/articles-ia/231018660.pdf","target":[{"source":"vault:/pdfs/articles-ia/231018660.pdf","selector":[{"type":"TextPositionSelector","start":5784,"end":5815},{"type":"TextQuoteSelector","exact":"multi-temporal cloud imputation","prefix":" downstream applicationssuch as ","suffix":", flood mapping, fire-scar segme"}]}]}
>```
>%%
>*%%PREFIX%%downstream applicationssuch as%%HIGHLIGHT%% ==multi-temporal cloud imputation== %%POSTFIX%%, flood mapping, fire-scar segme*
>%%LINK%%[[#^63xzfpo810n|show annotation]]
>%%COMMENT%%
>
>%%TAGS%%
>
^63xzfpo810n


>%%
>```annotation-json
>{"created":"2024-03-28T14:32:34.619Z","updated":"2024-03-28T14:32:34.619Z","document":{"title":"231018660.pdf","link":[{"href":"urn:x-pdf:b3f777da802885eacee00c64780e1bfd"},{"href":"vault:/pdfs/articles-ia/231018660.pdf"}],"documentFingerprint":"b3f777da802885eacee00c64780e1bfd"},"uri":"vault:/pdfs/articles-ia/231018660.pdf","target":[{"source":"vault:/pdfs/articles-ia/231018660.pdf","selector":[{"type":"TextPositionSelector","start":5817,"end":5830},{"type":"TextQuoteSelector","exact":"flood mapping","prefix":"ulti-temporal cloud imputation, ","suffix":", fire-scar segmentation, and mu"}]}]}
>```
>%%
>*%%PREFIX%%ulti-temporal cloud imputation,%%HIGHLIGHT%% ==flood mapping== %%POSTFIX%%, fire-scar segmentation, and mu*
>%%LINK%%[[#^7qvdquclxg|show annotation]]
>%%COMMENT%%
>
>%%TAGS%%
>
^7qvdquclxg


>%%
>```annotation-json
>{"created":"2024-03-28T14:32:37.643Z","updated":"2024-03-28T14:32:37.643Z","document":{"title":"231018660.pdf","link":[{"href":"urn:x-pdf:b3f777da802885eacee00c64780e1bfd"},{"href":"vault:/pdfs/articles-ia/231018660.pdf"}],"documentFingerprint":"b3f777da802885eacee00c64780e1bfd"},"uri":"vault:/pdfs/articles-ia/231018660.pdf","target":[{"source":"vault:/pdfs/articles-ia/231018660.pdf","selector":[{"type":"TextPositionSelector","start":5832,"end":5854},{"type":"TextQuoteSelector","exact":"fire-scar segmentation","prefix":"loud imputation, flood mapping, ","suffix":", and multi-temporal crop segmen"}]}]}
>```
>%%
>*%%PREFIX%%loud imputation, flood mapping,%%HIGHLIGHT%% ==fire-scar segmentation== %%POSTFIX%%, and multi-temporal crop segmen*
>%%LINK%%[[#^8o8huy2nvia|show annotation]]
>%%COMMENT%%
>
>%%TAGS%%
>
^8o8huy2nvia


>%%
>```annotation-json
>{"created":"2024-03-28T14:32:41.864Z","updated":"2024-03-28T14:32:41.864Z","document":{"title":"231018660.pdf","link":[{"href":"urn:x-pdf:b3f777da802885eacee00c64780e1bfd"},{"href":"vault:/pdfs/articles-ia/231018660.pdf"}],"documentFingerprint":"b3f777da802885eacee00c64780e1bfd"},"uri":"vault:/pdfs/articles-ia/231018660.pdf","target":[{"source":"vault:/pdfs/articles-ia/231018660.pdf","selector":[{"type":"TextPositionSelector","start":5860,"end":5892},{"type":"TextQuoteSelector","exact":"multi-temporal crop segmentation","prefix":"ng, fire-scar segmentation, and ","suffix":". We comprehensively study and e"}]}]}
>```
>%%
>*%%PREFIX%%ng, fire-scar segmentation, and%%HIGHLIGHT%% ==multi-temporal crop segmentation== %%POSTFIX%%. We comprehensively study and e*
>%%LINK%%[[#^fu8iw9mwi54|show annotation]]
>%%COMMENT%%
>
>%%TAGS%%
>
^fu8iw9mwi54


>%%
>```annotation-json
>{"created":"2024-03-28T14:45:46.277Z","text":"how","updated":"2024-03-28T14:45:46.277Z","document":{"title":"231018660.pdf","link":[{"href":"urn:x-pdf:b3f777da802885eacee00c64780e1bfd"},{"href":"vault:/pdfs/articles-ia/231018660.pdf"}],"documentFingerprint":"b3f777da802885eacee00c64780e1bfd"},"uri":"vault:/pdfs/articles-ia/231018660.pdf","target":[{"source":"vault:/pdfs/articles-ia/231018660.pdf","selector":[{"type":"TextPositionSelector","start":36745,"end":37166},{"type":"TextQuoteSelector","exact":"Binary HLS cloud masks were taken from the Fmask channel to use as synthetic cloudmasks for the purposes of fine-tuning and inference, where cloudy pixels are represented as1 and non-cloudy pixels as 0. Cloud masks are from identical regions of the United Statesas the image chips and encompass a 224 x 224 pixel region with a spatial resolution of 30meters. 21,648 binary cloud masks were generated through this process.","prefix":"rious types of downstream tasks.","suffix":"5.2 Downstream Modeling Consider"}]}]}
>```
>%%
>*%%PREFIX%%rious types of downstream tasks.%%HIGHLIGHT%% ==Binary HLS cloud masks were taken from the Fmask channel to use as synthetic cloudmasks for the purposes of fine-tuning and inference, where cloudy pixels are represented as1 and non-cloudy pixels as 0. Cloud masks are from identical regions of the United Statesas the image chips and encompass a 224 x 224 pixel region with a spatial resolution of 30meters. 21,648 binary cloud masks were generated through this process.== %%POSTFIX%%5.2 Downstream Modeling Consider*
>%%LINK%%[[#^kvhgkgac1c|show annotation]]
>%%COMMENT%%
>how
>%%TAGS%%
>#how
^kvhgkgac1c


>%%
>```annotation-json
>{"created":"2024-03-28T14:49:42.441Z","text":"how","updated":"2024-03-28T14:49:42.441Z","document":{"title":"231018660.pdf","link":[{"href":"urn:x-pdf:b3f777da802885eacee00c64780e1bfd"},{"href":"vault:/pdfs/articles-ia/231018660.pdf"}],"documentFingerprint":"b3f777da802885eacee00c64780e1bfd"},"uri":"vault:/pdfs/articles-ia/231018660.pdf","target":[{"source":"vault:/pdfs/articles-ia/231018660.pdf","selector":[{"type":"TextPositionSelector","start":7665,"end":8076},{"type":"TextQuoteSelector","exact":"We propose a first-of-its-kind framework for the development of geospatial foun-dation models from raw satellite imagery, which we leverage to generate the Prithvi-100Mmodel. The framework encompasses (1) the sampling, filtering, and pre-processing of rawgeospatial data and the self-supervised foundation model pretraining, (2) the fine-tuning tospecific downstream applications, and (3) the inference process.","prefix":"er/decoder weightsOutputFig. 1: ","suffix":"2 BackgroundFoundation models ar"}]}]}
>```
>%%
>*%%PREFIX%%er/decoder weightsOutputFig. 1:%%HIGHLIGHT%% ==We propose a first-of-its-kind framework for the development of geospatial foun-dation models from raw satellite imagery, which we leverage to generate the Prithvi-100Mmodel. The framework encompasses (1) the sampling, filtering, and pre-processing of rawgeospatial data and the self-supervised foundation model pretraining, (2) the fine-tuning tospecific downstream applications, and (3) the inference process.== %%POSTFIX%%2 BackgroundFoundation models ar*
>%%LINK%%[[#^28hka2bqt98|show annotation]]
>%%COMMENT%%
>how
>%%TAGS%%
>#how
^28hka2bqt98


>%%
>```annotation-json
>{"created":"2024-03-28T14:47:37.416Z","text":"how","updated":"2024-03-28T14:47:37.416Z","document":{"title":"231018660.pdf","link":[{"href":"urn:x-pdf:b3f777da802885eacee00c64780e1bfd"},{"href":"vault:/pdfs/articles-ia/231018660.pdf"}],"documentFingerprint":"b3f777da802885eacee00c64780e1bfd"},"uri":"vault:/pdfs/articles-ia/231018660.pdf","target":[{"source":"vault:/pdfs/articles-ia/231018660.pdf","selector":[{"type":"TextPositionSelector","start":31244,"end":31660},{"type":"TextQuoteSelector","exact":"We leverage the pretrained foundation model across several downstream tasks. In thispaper, we focus on multi-temporal cloud gap imputation, the segmentation of the extent offloods, the segmentation of wildfire scars from wildfires, and multi-temporal crop segmen-tation. In the following, we introduce the tasks and the underlying data and then focus onmodeling to apply the pretrained MAE model to downstream tasks.","prefix":"foundation-os95 Downstream Tasks","suffix":"5.1 DatasetsMulti-Temporal Cloud"}]}]}
>```
>%%
>*%%PREFIX%%foundation-os95 Downstream Tasks%%HIGHLIGHT%% ==We leverage the pretrained foundation model across several downstream tasks. In thispaper, we focus on multi-temporal cloud gap imputation, the segmentation of the extent offloods, the segmentation of wildfire scars from wildfires, and multi-temporal crop segmen-tation. In the following, we introduce the tasks and the underlying data and then focus onmodeling to apply the pretrained MAE model to downstream tasks.== %%POSTFIX%%5.1 DatasetsMulti-Temporal Cloud*
>%%LINK%%[[#^6bfuutdihmg|show annotation]]
>%%COMMENT%%
>how
>%%TAGS%%
>#how
^6bfuutdihmg


>%%
>```annotation-json
>{"created":"2024-03-28T14:50:42.293Z","text":"result","updated":"2024-03-28T14:50:42.293Z","document":{"title":"231018660.pdf","link":[{"href":"urn:x-pdf:b3f777da802885eacee00c64780e1bfd"},{"href":"vault:/pdfs/articles-ia/231018660.pdf"}],"documentFingerprint":"b3f777da802885eacee00c64780e1bfd"},"uri":"vault:/pdfs/articles-ia/231018660.pdf","target":[{"source":"vault:/pdfs/articles-ia/231018660.pdf","selector":[{"type":"TextPositionSelector","start":41447,"end":41561},{"type":"TextQuoteSelector","exact":"that the model successfully reconstructs RGB bands and infrared bands across time and fordifferent masking ratios.","prefix":"f images). Overall, we observe12","suffix":"0241e 4Learning Rate0 200 400 60"}]}]}
>```
>%%
>*%%PREFIX%%f images). Overall, we observe12%%HIGHLIGHT%% ==that the model successfully reconstructs RGB bands and infrared bands across time and fordifferent masking ratios.== %%POSTFIX%%0241e 4Learning Rate0 200 400 60*
>%%LINK%%[[#^egwk1h0wwlq|show annotation]]
>%%COMMENT%%
>result
>%%TAGS%%
>#result
^egwk1h0wwlq


>%%
>```annotation-json
>{"created":"2024-03-28T14:53:22.310Z","text":"result","updated":"2024-03-28T14:53:22.310Z","document":{"title":"231018660.pdf","link":[{"href":"urn:x-pdf:b3f777da802885eacee00c64780e1bfd"},{"href":"vault:/pdfs/articles-ia/231018660.pdf"}],"documentFingerprint":"b3f777da802885eacee00c64780e1bfd"},"uri":"vault:/pdfs/articles-ia/231018660.pdf","target":[{"source":"vault:/pdfs/articles-ia/231018660.pdf","selector":[{"type":"TextPositionSelector","start":42146,"end":42390},{"type":"TextQuoteSelector","exact":"Reconstruction results on images unseen during training (different locations) with Prithvi modelfor bands B06 and B07 for different masking ratios with ViT-base backbone. Here, we show a singletime step of an input image unseen during training.","prefix":" predicts B05, B06, and B07.(c) ","suffix":"Fig. 5: Pretraining results of P"}]}]}
>```
>%%
>*%%PREFIX%%predicts B05, B06, and B07.(c)%%HIGHLIGHT%% ==Reconstruction results on images unseen during training (different locations) with Prithvi modelfor bands B06 and B07 for different masking ratios with ViT-base backbone. Here, we show a singletime step of an input image unseen during training.== %%POSTFIX%%Fig. 5: Pretraining results of P*
>%%LINK%%[[#^m01mtb9k63a|show annotation]]
>%%COMMENT%%
>result
>%%TAGS%%
>#result
^m01mtb9k63a


>%%
>```annotation-json
>{"created":"2024-03-28T14:54:01.785Z","text":"result","updated":"2024-03-28T14:54:01.785Z","document":{"title":"231018660.pdf","link":[{"href":"urn:x-pdf:b3f777da802885eacee00c64780e1bfd"},{"href":"vault:/pdfs/articles-ia/231018660.pdf"}],"documentFingerprint":"b3f777da802885eacee00c64780e1bfd"},"uri":"vault:/pdfs/articles-ia/231018660.pdf","target":[{"source":"vault:/pdfs/articles-ia/231018660.pdf","selector":[{"type":"TextPositionSelector","start":44585,"end":44667},{"type":"TextQuoteSelector","exact":"Performance of Prithvi during fine tuning for multi-temporal cloud gap imputation.","prefix":"Validation SSIM (b) SSIMFig. 6: ","suffix":"We compared model effectiveness "}]}]}
>```
>%%
>*%%PREFIX%%Validation SSIM (b) SSIMFig. 6:%%HIGHLIGHT%% ==Performance of Prithvi during fine tuning for multi-temporal cloud gap imputation.== %%POSTFIX%%We compared model effectiveness*
>%%LINK%%[[#^jw1dcmdwcpn|show annotation]]
>%%COMMENT%%
>result
>%%TAGS%%
>#result
^jw1dcmdwcpn


>%%
>```annotation-json
>{"created":"2024-03-28T14:56:20.799Z","text":"incredible inovation","updated":"2024-03-28T14:56:20.799Z","document":{"title":"231018660.pdf","link":[{"href":"urn:x-pdf:b3f777da802885eacee00c64780e1bfd"},{"href":"vault:/pdfs/articles-ia/231018660.pdf"}],"documentFingerprint":"b3f777da802885eacee00c64780e1bfd"},"uri":"vault:/pdfs/articles-ia/231018660.pdf","target":[{"source":"vault:/pdfs/articles-ia/231018660.pdf","selector":[{"type":"TextPositionSelector","start":58073,"end":58357},{"type":"TextQuoteSelector","exact":"However, to the best of our knowledge, no large-scale modeldeals with raw satellite imagery, including handling cloud coverage and providing efficientdata sampling and loading. To address these challenges, we designed an innovative datapreparation pipeline for pre-training purposes. ","prefix":"isionto remedy this bottleneck. ","suffix":"This pipeline encompasses the co"}]}]}
>```
>%%
>*%%PREFIX%%isionto remedy this bottleneck.%%HIGHLIGHT%% ==However, to the best of our knowledge, no large-scale modeldeals with raw satellite imagery, including handling cloud coverage and providing efficientdata sampling and loading. To address these challenges, we designed an innovative datapreparation pipeline for pre-training purposes.== %%POSTFIX%%This pipeline encompasses the co*
>%%LINK%%[[#^tba2xlxi0f|show annotation]]
>%%COMMENT%%
>incredible inovation
>%%TAGS%%
>#result
^tba2xlxi0f
