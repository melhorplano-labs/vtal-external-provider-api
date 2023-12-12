# Vtal External Provider API

Vtal External Provider API é um servidor HTTP simples que consome e serve os
resultados da API da [Vtal](https://www.vtal.com/). O pricipal objetivo do projeto
é facilitar o fornecimento de informações de cobertura para o Melhor Plano.

# Variáveis de ambiente

O arquivo `.env` possui um esqueleto de variáveis de ambiente que deverão
ser configuradas e armazenadas em um local seguro.

- **MP_AUTH**: uma senha aleatória e segura que precisará ser usada pelo Melhor Plano para fazer consultas na API
- **VTAL_USERNAME**: Usuário da Vtal
- **VTAL_PASSWORD**: Senha da Vtal
- **VTAL_SCOPE**: Escopo/Modalidade da API da Vtal

# Começando

Para executar o repositório localmente durante o desenvolvimento, será necessário ter o Node instalado na máquina. Após feita a configuração das variáveis de ambiente, basta executar os comandos abaixo:

```
$ npm i
$ npm run dev
```
