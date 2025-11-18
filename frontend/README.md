# Catálogo de Carros

Listagem de carros, onde ao clicar no card consigo ver detalhes e preencher um formulário de contato.

## Tecnologias

- React 19.2.0
- TypeScript 5.9.3
- Vite 7.2.2
- Tailwind CSS 4.1.17
- React Router DOM 7.9.6
- TanStack Query 5.90.2
- React Hook Form 7.66.1
- Zod 4.1.12
- Axios 1.13.2
- Zustand 5.0.8

## Estrutura do Projeto

```
src/
├── assets/           # Estilos e recursos estáticos
├── core/             # Componentes e lógica compartilhada
│   ├── components/   # Componentes UI genéricos
│   ├── contexts/     # Contextos globais
│   └── lib/          # Bibliotecas e configurações
├── domain/           # Domínios de negócio
├── layouts/          # Layouts da aplicação
├── pages/            # Páginas da aplicação
├── router/           # Configuração de rotas
├── App.tsx           # Componente raiz
└── main.tsx          # Ponto de entrada
```

## Configuração

1. Instale as dependências:
```bash
npm install
```

2. Configure as variáveis de ambiente:
```bash
cp .env.example .env
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

## Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Compila o projeto para produção
- `npm run preview` - Visualiza a build de produção
- `npm run lint` - Executa o linter

## Funcionalidades

- **Listagem de carros**: Exibição de todos os veículos disponíveis no catálogo
- **Visualização de detalhes**: Página com informações detalhadas do veículo
- **Formulário de contato**: Formulário para manifestar interesse no veículo

## API

O frontend se conecta com a API REST em:
- Base URL: `http://localhost:3000/api/v1`
- Endpoints públicos: `/external`
- Endpoints autenticados: `/internal`