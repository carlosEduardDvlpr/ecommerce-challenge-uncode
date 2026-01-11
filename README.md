# UNCommerce - desafio técnico Uncode

Objetivo: construir um miniecommerce com home, detalhes dos produtos e carrinho
> [clique aqui](https://ecommerce-challenge-uncode.vercel.app/) para acessar o projeto online

### Setup
Para executar local, utilize:

```
git clone https://github.com/carlosEduardDvlpr/ecommerce-challenge-uncode.git
npm install
npm run dev
```

### Stack

- Next.js com Typescript <br />
- TailwindCSS

\*\* Decidi me utilizar da lib ShadcnUI como base para construção da interfaces e components, para mais velocidade no desenvolvimento

### Arquitetura
Padrão Next.js AppRouter, com components locais em subspastas renomeadas com _ na propria pasta da page:</br>

```
home/
---->_components/ 'componentsAquiPorPage'<br/>
---->page.tsx
```

** O mesmo se aplicaria com "_actions" caso estivesse usando funções server, dessa forma cada "modulo" da aplicação tem suas dependencias de components e funções mais próximas, e apenas components/funções globais vão para pastas de niveis acima /actions, /components.

### Organização dos components - MVVM

Para os components utilizei separação MVVM (MODEL, VIEW, VIEWMODEL), basicamente nesse modelo extraimos todas as props que a interface precisa para uma função MODEL que cuidará das regras de negócios , e a VIEW tem apenas o papel de renderizar essas props, a junção das duas é feita pelo VIEWMODEL:<br/>
Há também um arquivo type, que compartilha a interface das props desse component.<br/><br/>

```
header/
------ 'header.view.tsx' > apenas renderiza e usa as props
------ 'header.model.tsx' > retorna as props
------ 'header.viewModel.tsx' > une os 2, passando as props para interface
------ 'header.type.ts' > exporta a interface das props
------ 'index.ts' > export default do component viewModel
```

### Decisão de Design

CORES -> Tema Laranja para combinar com a cor da Uncode <br/>
NOME -> trocadilho de "Uncode com E-commerce": UNCommerce :) <br />
Padronização dos paddings com um estilo customizado no arquivo globals.css ".p-pattern"
Nicho: produtos tecnológicos, lista para pesquisa:

Categoria Compotadures
- Notebook casual
- MacBook
- PC Gamer
- All-in-One

Categoria Periféricos
- Teclado Mecânico RGB
- Mouse Gamer
- Headset Gamer
- Monitor Full HD 24'

Categoria Acessórios
- SSD 1TB
- HD Externo 2TB
- Hub USB-C 6 em 1
- Base para Notebook

### Rotas e suas principais funcionalidas:

- HOME -> banner inicial da loja e grid de produtos com skeleton e filtragem por categorias<br/><br/>
- PRODUCT/[ID] -> tela do produto, renderiza no server fazendo a filtragem pelo parametro ID do produto com informações completas, sessão de sugestão de produtos (baseadas na mesma categoria), carousel de imagens<br/><br/>
- SEARCH/[SEARCH] -> tela de pesquisa, renderiza no server fazendo a filtragem dos itens pelo parametro SEARCH (string inclusa) com filtro por categoria e preço<br/><br/>
- not-found -> redirecionando para HOME quando usuário acessa rota não existente<br/><br/>
- API/MOCK -> API Fake com 12 produtos com route handler com unica rota GET, que pode receber queryParams para filtragem por categoria, id e nome, delay simulado de 100ms

### Components compartilhados

- HEADER -> aparece em todas as rotas, abre o carrinho de itens e contem o input de pesquisa de itens por nome<br/><br/>
- CARD PRODUCT -> responsavel por renderizar os itens na grid, contem função de "ver mais" (que abre a tela do produto) e adicionar ao carrinho<br/><br/>
- CART SHEET -> Carrinho em menu lateral, com funções de adicionar e diminuir quantidades, excluir item e total geral

### Contextos

- FilterContext -> Responsavel por compartilhar os produtos corretos na rota SEARCH após interagir com os inputs de filtros<br/><br/>
- CartContext -> responsavel por gerenciar o localStorage adicionando, removendo, editando quantidade e subtotal dos itens, e compartilhar o estado atualizado

### Utils

- Função para formatar number para BRL

### Constants

- url.ts -> exporta a URL base da api : **/api/mocks/products

### Action

- getBaseUrl() -> Para montar a url base no servidor (rota SEARCH e PRODUCT)
