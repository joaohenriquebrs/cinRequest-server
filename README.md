# Sistema de requisilção

## Teste pratico 

1. clone o repositorio usando:
```bash 
git clone 
```
2. Instale as dependencias usando:
```bash 
yarn install
```
3. Na raiz do projeto crie o arquivo **.env**, no modelo abaixo:
```dotenv

```
  
4. Paro rodar o back end execute:
```bash
docker-compose up
```
caso queira tentar sem o docker, execute:
```bash
yarn dev
```

5. Para rodar as migrations, execute:
```bash
yarn migration
```
é possivel que seja necessario executar antes
```bash
yarn generate
```

6. Verifique se você tem **docker/docker-compose**, para executar os teste com jest, executando
```bash
yarn test
```
