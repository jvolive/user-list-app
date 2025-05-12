# Lista de Usuários - Next.js + Tailwind CSS

Este projeto foi desenvolvido utilizando **Next.js (App Router)** com **TypeScript** e **Tailwind CSS**. A aplicação consome a API pública [JSONPlaceholder](https://jsonplaceholder.typicode.com/users) para exibir uma lista de usuários e seus detalhes.

## Funcionalidades

- Lista de usuários com:
  - Nome
  - E-mail
  - Telefone
- Campo de pesquisa para filtrar usuários por nome
- Ao clicar no nome, expande o card para mostrar mais informações do usuário
  - Nome
  - Username
  - E-mail
  - Telefone
  - Website
  - Empresa
  - Endereço (rua e cidade)

## Tecnologias Utilizadas

- [Next.js 14 (App Router)](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [JSONPlaceholder API](https://jsonplaceholder.typicode.com/)

## Como rodar localmente

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo

# Instale as dependências
npm install

# Inicie o projeto
npm run dev

# Acesse o app em:
http://localhost:3000
```

## Estrutura de Pastas

```bash
src/
├── api/
│   └── api.ts           ← Funções para consumir a API de usuários
├── app/
│   ├── globals.css      ← Estilos globais da aplicação
│   ├── layout.tsx       ← Componente de layout
│   └── page.tsx         ← Página principal (lista de usuários)
├── components/
│   ├── SearchInput.tsx  ← Componente de busca
│   └── UserCard.tsx     ← Componente de card de usuário
└── lib/
    └── types.ts         ← Tipos TypeScript para dados de usuários
```

## Licença

Este projeto é open source e está sob a licença MIT.
