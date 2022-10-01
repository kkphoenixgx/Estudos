# Energias e Potência
2022-08-02
tags: [[Dinâmica]]

As energias e a potência contidas neste documento, são a maioria forças mecânicas, entenda o conceito de uma foça mecânica. Contudo, pelo bem estar do graph, não irei linkar-las.

* Quando a força e o deslocamento estão em um mesmo sentido, dizemos que é um **trabalho motor** (Valor positivo)
* E quando estão ao contrário, chamamos de **Trabalho Resistente** (Valor negativo)

* if(θ = 0){ return 0 } // Pois significa que a foça está indo para o eixo y e a distância para o eixo x, logo está parado.
$$W = |f|.d.\cosθ$$$$ W = ΔE → W = E_{final} - E_{inicial}$$$$I = ΔQ$$
$$Q_{i} + Q_{i} = V(MA + MB)$$

*Nota:  se tem cos é menor, o cos é sempre 0, algo ou 1*

* **Sistema mecanicamente isolado** = Sistema sem forças externas.

## Desenvolvimento

### Trabalho (τ)

$$W = |f|.d.\cosθ$$$$ W = ΔE → W = E_{final} - E_{inicial}$$

Trabalho é a capacidade de aplicar energia mecânica em algo. A grandeza que mede a transferência de força.

| Ângulo  | valor |
| ------- | ----- |
| 0-89    | +     |
| 90      | 0     |
| 91-180° | -     |

* O trabalho está intimamente ligado a energia, então podemos falar que:
$$W = ΔE = e_{final} - e_{inicial}$$

Work or τ = Force . distance

* W = J  
* F = |N| 
* d = m  

Perceba que podemos trabalhar essas forças em vetores e essas forças podem criar ângulos entre elas. _Cos0 = 1*_

![[Dinamica de forças em Trabalho.png]]

### Potência e Energia (P - E)

| Tipo de questão, qualquer coisa (em): | Potência a ser usada        |
| ------------------------------------- | --------------------------- |
| Eixo y                                | mkg → Emergia gravitacional |
| Eixo x                                | Ec = m.v²/2                 |
| que têm elasticidade                  | Eel = k.Δx/2                |

Podemos agrupar energia potencial em três categorias: Cinética, Potencial e elástica
	* Cinética = energia do movimento $$**Ec = \frac{m.v²}{2}** $$
	* Energia potencial (gravitacional) = $$E_{p} = mgh$$
	* Energia potencial elástica = $$E_{el} = \frac{K.Δx²}{2}$$
	* Energia potencial térmica, elétrica, nuclear, luminosa...


Importante entender que a **potência** será então a velocidade de conversão ou de uma transferência de algo. Tipo um secador. E → Energia térmica. 

$$P = P(Pu+Pd)$$
$$**P = \frac{ΔE}{Δt}**$$
$$ P = \frac{w}{Δt}$$
$$P = \frac{F.d}{Δt}$$
$$P = v.F$$

Tendo Si = **j/s, nm/s ou w**(wats) e P= Potência útil + Potência dissipada.

#### Conversão de w/Δt

$$ w = Δt.P $$

* divide por 1000 para kw/h

#### Forças conservativas

![[Em forças conservativas, não importa o d.png]]

Em forças conservativas, não importa o deslocamento. Como o peso, a eletricidade.

### Impulso ( I )

$$ I^{→} = F^{→}.Δt $$

Impulso nada mais é do que aplicar uma força durante um determinado tempo, é uma grandeza vetorial, Portanto é facilmente representada por um gráfico de força por tempo. Dessa forma, **o w(τ) do gráfico é justamente a área do gráfico (N) x (s).**

![[graph F x t (impulse)]]

Uma forma de achar a força do gráfico é achando a força média ou fazendo a média das forças. Continue lendo [[Energias e Potência#Momento linear Q]]


### Momento linear (Q)

O momento linear, a quantidade de movimento de um corpo é dita pela razão entre a massa e a velocidade do corpo: 
$$Q{→} = mv$$

|v| = m/s  
|m| = kg

Dessa forma, Q é uma grandeza que interage com I ([[Energias e Potência#Impulso I]]), pois Q mostra a variação da velocidade de um corpo e que varia a velocidade de um corpo, é a força exercida sobre ele. Portando, F = m.a.

**F = ma**  
**F =  m. Δv/Δt**  
**F.Δt = m.Δv** = m (vf - vi) = m.vf - m.vi
**I = ΔQ**

Portanto o impulso é a variação de movimento. **Esse é o teorema do Impulso**.
na prática:  [[Energias e Potência#I ΔQ]]

### Colisões 

**Em um sistema mecanicamente isolado, Q_inicial é igual ao Q_final**, em colisões mecanicamente isoladas, Qi = Qf.

$$Q_{i} = Q_{f}$$
Como falamos sobre corpos em movimento, que irão colidir, a quantidade de E do corpo é justamente a quantidade de Ec do corpo (**Ec = m . v²/2**) e quando falamos de colisão, estamos falando que Q_inicial = Q_final. 
Não somente isso, mas as colisões nunca perdem de fato energia, **a energia é transformada**, as colisões podem conter transformações de energia:

* Transformações sonoras
* Transformações térmicas
* Transformações absorvidas = transformaçõpes absorvidas pelo corpo B

![[Pasted image 20220822203119.png]]

#### Colisões Elásticas
* Há conservação de Q e de E

Para colisões elásticas, a **E_inicial é igual a E_final**, não há perda de energia
$$E_{i} = E_{f}$$
Elas acontecem em um cenário ideal, nunca na vida real.

![[Pasted image 20220822202436.png]]

##### Colisões perfeitamente elásticas

EA + EB = E'A + E?B

##### Colisões parcialmente elásticas


#### Colisões inelásticas
* Há conservação de Q mas n de E.

**Para colisões inelásticas, a Ec_inicial != Ec_final**, há uma perda de energia, a energia inicial é sempre maior que a final. Ocorre uma deformação

$$Ec_{i} > Ec_{f}$$

![[Pasted image 20220822202526.png]]

![[Pasted image 20220822202702.png]]


Tratando de dois corpos em colisão inelástica, podemos assumir a seguinte fórmula, levando A como bloco A e B como bloco B :
$$Q_{i} + Q_{i} = V(MA + MB)$$
Somente abrindo a expressão:
$$ MA.V_{i}A + MB.V_{i}B = mB.V_{r} + mA.V_{r} $$


##### Colisões perfeitamente inelásticas



##### Colisões parcialmente inelásticas


#### Coeficiente de Restituição

Velocidade relativa de A / Velocidade relativa de B. Ele é uma relação entre as velocidades. você tá dividindo a velocidade relativa final e a velocidade relativa inicial. Portanto podemos traçar um coeficiente, para comparações, entre colisões

$$e = V_{f}A - V{f}B/V{i}A - V{i}B $$

A Velocidade final de A - velocidade final de B dividido pela velocidade inicial de A menos a velocidade inicial de B. Falando sobre coeficiente de Restituição de uma colisão elástica, ele sempre será 1, pois não tem variação de velocidade.

![[Screenshot_20220824-195255_Obsidian.jpg]]

![[Screenshot_20220824-195644_Obsidian.jpg]]

### Formulinhas de bolso ⏰  

![[Pasted image 20220802023718.png]]

-----------------------------------------------
### Exercício de compreensão 🦾

#### I = ΔQ

* Usando impulso e movimento

![[Exercício de compreensão I=deltaQ.png]]

* Forma separada

![[Pasted image 20220817210746.png]]

#### Colisões

![[Screenshot_20220824-200345_Obsidian.jpg]]

#### Concluídos

![[Exercício 1 Impulso.png]]
![[Exercício 2 Impulso.png]]

* Colisão
![[Exercício Colisão (Bolinhas de sinuca)).png]]


## Bibliografia

https://plataforma.seliga.com.br/aula/ff586940-fcf8-11ea-98df-03bd73acda83;missao_id=e3ecd400-417d-11ec-aa86-d57528a4fb36;plano_id=83044210-4177-11ec-8f00-a746b13d8695

* _Cos0 = 1*_ = Isso pode ser explicado facilmente, se um triângulo possui ângulo beta = 0, significa que é uma linha reta, então a hipotenusa será  a mesma coisa que o cateto adjacente → H/CO → H/H  = 1 

https://plataforma.seliga.com.br/aula/427ceec0-fcf9-11ea-bdf7-f59dda50be63;missao_id=b29ce8a0-0c46-11ed-a3a6-1ba612c5231a;plano_id=eb89fc90-0c42-11ed-a5ea-fbda77f7ebb9

## Mapa Mental