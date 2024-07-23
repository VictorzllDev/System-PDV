# Sistema PDV

Esta documentação fornece um resumo do progresso e das funcionalidades do Sistema PDV, desenvolvido em Electron.js.

## Funcionalidades

O aplicativo suporta as seguintes funcionalidades:

- Login
- Gerenciamento de Produtos (ADM)
- Registro de Vendas (PDV)

## Status do Desenvolvimento

Aqui está um resumo das funcionalidades do aplicativo e o status atual de cada uma:

### Login

| Funcionalidade     | Status                | Descrição                                                                           |
| ------------------ | --------------------- | ----------------------------------------------------------------------------------- |
| Autenticar usuário | 🚧 Em desenvolvimento | Permite login dos usuários, redirecionando para a tela correspondente (ADM ou PDV). |

## Funcionalidades do Administrador (ADM)

| Funcionalidade      | Status          | Descrição                                                                          |
| ------------------- | --------------- | ---------------------------------------------------------------------------------- |
| Cadastrar usuário   | ❌ Não iniciado | Permite que administradores criem novos usuários com nível de acesso (ADM ou PDV). |
| Cadastrar produtos  | ❌ Não iniciado | Permite que administradores cadastrem novos produtos.                              |
| Visualizar produtos | ❌ Não iniciado | Permite que administradores visualizem produtos.                                   |
| Atualizar produtos  | ❌ Não iniciado | Permite que administradores atualizem informações dos produtos.                    |
| Deletar produtos    | ❌ Não iniciado | Permite que administradores removam produtos.                                      |
| Visualizar vendas   | ❌ Não iniciado | Permite que administradores visualizem vendas registradas.                         |

## Funcionalidades do Ponto de Venda (PDV)

| Funcionalidade      | Status          | Descrição                                |
| ------------------- | --------------- | ---------------------------------------- |
| Registrar venda     | ❌ Não iniciado | Permite que PDVs registrem novas vendas. |
| Visualizar produtos | ❌ Não iniciado | Permite que PDVs visualizem produtos.    |

## Fluxo de Navegação

- **Tela de Login:** Usuários inserem suas credenciais para acessar o sistema.
- **Redirecionamento:** Após autenticação, o usuário é redirecionado para a tela correspondente:
  - **Tela ADM:** Se o usuário tiver nível de acesso ADM, ele é redirecionado para a tela de administração.
  - **Tela PDV:** Se o usuário tiver nível de acesso PDV, ele é redirecionado para a tela de ponto de venda.

## Como Contribuir

Se você deseja contribuir para o desenvolvimento do Sistema PDV ou relatar um problema, por favor, envie um pull request ou abra uma issue no repositório.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
