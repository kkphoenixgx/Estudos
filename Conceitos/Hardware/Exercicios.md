# Exercícios Fundamentos de Rede


## Exercício de fixação - Aula 16

**R:**
12. Sim, pois depende da quantidade de interfaces do roteador
13. 
	1. 223.1.3.27 → 11011111.00000001.00000011.00011011
	2. 223 - 11011111
	3. 1 - 00000001
	4. 3 - 00000011
	5. 27 - 00011011
14. N/A
15. Cada roteador tem duas interfaces. Onde possui como primeiro digito a entrada do hospedeiro, o meio é o roteador e o último digito é a saída. Cada roteador tem uma tabela e são três tabelas para encaminhamento.
16. O cabeçalho TCP e o IP possuem 20 bytes e cada bloco tem 40 bytes. Portanto, a sobrecarga, TCP + IP, é 40 e o tamanho do datagrama, sobrecarga + dados aplicados = 40 + 40 = 80. Portanto vai ser: 40 / 80 = 0,5 ∴ 50% de sobrecarga.
17. O protocolo da camada superior de 8 bits usa: 6 para  TCP; 17 para UDP; 1 para ICMP.

**P:**
13. Prefixo: 223117/24
	1. REDE 1 - 60 interfaces: 2⁶ = 64 | 32 bits - 6 → 26 bits → 223.1.17.0/26 ∴ 223.1.17.0 à  223.1.17.0.63
	2. REDE 2 -90 interfaces: 2⁷ = 128 | 32 bits - 7 →  25 bits →  223.1.17.64/25 ∴ 223.1.17.64 à 223.1.17.191
	2. REDE 3 -12 interfaces: 2⁴ = 16 | 32 bits - 4 → 28 bits  → 223.1.17.192/28 ∴ 223.1.17.192 à 223.1.17.207
16. 4 blocos de 16: 
	1. 128.119.40.64/28
	2. 128.119.40.80/28
	3. 128.119.40.96/28
	4. 128.119.40.112/28
19. 700 bytes - cabeçalho = 20 = 680; Datagrama = 2400-20 = 2380 ∴ 2380/680 = 4 fragmentos.

**Outros exercícios sobre endereçamento IP:**

35. E
44. E

## Endereçamento IP CIDR

1. Sub-redes:
	1. 300 hosts: 2⁹ = 512 endereços ∴ 9 bits
	2. 1000 hosts: 2¹⁰ = 1024 ∴ 10 bits
	3. 10 hosts: 2⁴ = 16 ∴ 4 bits
	4. 60 hosts: 2⁶ = 64 ∴ 6 bits
2. Mascaras de sub-rede:
	1. 300 hosts: 32-9 = 23 bits
	2. 1000 hosts: 32-10 = 22 bits
	3. 10 hosts: 32-4 = 28 bits
	4. 60 hosts: 32-6 = 26 bits
3. Entendido, eu acho
4. Gateways:
	1. 300 hosts: 192.168.5.254/23
	2. N/A
	3. 10 hosts: 192.168.6.78/28
	4. 60 hosts:  192.168.6.62/26
5. Configurações de cada andar em ordem numérica 1-4:
	1. IP: 192.168.41; Mascara: 255.252.254.0; Gateway: 192.168.5.254;
	2. IP: 192.168.0.1; Mascara: 255.255.252.0; Gateway: 192.168.3.254;
	3. IP: 192.168.6.65; Mascara: 255.255.255.240; Gateway: 192.168.6.78;
	4. IP: 192.168.6.1; Mascara: 255.255.255.192; Gateway: 192.168.6.62;
6. Sim, é possível, mas tem que usar um roteador da 3° camada.

