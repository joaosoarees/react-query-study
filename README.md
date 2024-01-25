# Como rodar?
Instale o node na versão 20 LTS;

Use yarn como gerenciador de pacotes e rode o comando `yarn` para instalar as dependências;

Use `yarn dev` para iniciar o projeto;

Use `yarn dev:server` para iniciar o json-server simulando nossa API;

## React Query - Anotações
Loading States:
- isPeding (bool) -> true quando o valor no cache for undefined(não houver valor no cache);
- isFetching (bool) -> true sempre que a queryFn estiver executando, tanto na primeira ou nas subsequentes
- isLoading (boold) -> true quando for o initalLoading da queryFn -> isLoading = isPending && isFetching

Time: -1:30:25
