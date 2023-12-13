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

# Subindo o projeto

Para colocar o projeto em produção, é preciso primeiro preenchar as variáves de ambiente de acordo com as credenciais da Vtal e da senha definida para uso da Melhor Plano.

Para o próximo passo iremos precisar do Docker instalado na máquina.

O Docker é uma plataforma que utiliza contêineres para simplificar o desenvolvimento, distribuição e execução de aplicativos. Ele encapsula software e suas dependências, proporcionando consistência e portabilidade em vários ambientes. Os contêineres facilitam o desenvolvimento, colaboração e implantação eficiente de software.

Para instalar o Docker basta seguir os passos indicados no site oficial: https://docs.docker.com/engine/install/ubuntu/

Para montar e subir um container Docker, a partir do arquivo `docker-compose`, basta executar o seguinte comando:
```
$ docker-compose up -d --build
```

# [Opcional] Testando localmente

Caso exista a necessidade de testar o projeto localmente, será necessário ter o Node instalado na máquina. Após feita a configuração das variáveis de ambiente, basta executar os comandos abaixo:

```
$ npm i
$ npm run dev
```

