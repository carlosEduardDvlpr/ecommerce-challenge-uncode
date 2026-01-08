# UNCommerce - desafio técnico uncode

Essa documentação tem como objetivo mostrar a minha experiencia com o desenvolvimento do projeto, decisões técnicas, etc

## 1 - Pontapé Inicial
### API FAKE - Produtos

Iniciei o desenvolvimento pela API, desenvolvendo o fluxo de busca do route handler
decidi usar queryparams para filtragem dos produtos (por ID, nome e categoria), já visando as situações onde posso precisar desses filtros

estrutura:
> app/api/mock/products
              > route.ts    ** route handle com unico endepoint GET, responsavel por recuperar o valor do filtros
              > products.ts    ** constante contendo os dados estáticos de 12 produtos
              /utils
              > product-filters.ts    ** funções de filtro na constante products