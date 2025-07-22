## SOLID aplicado ao React

## 🔨 Funcionalidades do Projeto

- Listagem de categorias e produtos.
- Exibição do detalhes do produto.
- Detalhes do carrinho de compras.

## ✔️ Técnicas e Tecnologias Utilizadas

As principais técnicas e tecnologias abordadas são:

- `SRP (Responsabilidade Única)`: componentes Button e Input apenas renderizam a label, sem lógica extra.
- `OCP (Aberto/Fechado)`: extensível para novos comportamentos sem alterar o código base dos componentes.
- `LSP (Substituição de Liskov)`: componentes podem ser trocados por versões especializadas sem quebrar a lógica.
- `ISP (Segregação de Interfaces)`: interfaces de props incluem apenas o necessário, mantendo os componentes leves.
- `DIP (Inversão de Dependência)`: hooks customizados dependem de abstrações, não de implementações concretas.

## 🛠️ Abrir e Rodar o Projeto

Após baixar o projeto, você pode abrir com seu editor de código preferido. Siga estes passos:

- Abra o terminal no diretório do projeto.
- Execute `npm install` para instalar as dependências.
- Inicie o servidor de desenvolvimento com `npm run dev`.
- Acesse `http://localhost:5173` no navegador para ver o projeto ou o endereço que for exibido no terminal.
