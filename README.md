## estrutura de pastas

```
grow-a-garden-wiki/
├── node_modules/         # Gerenciado pelo npm, contém as dependências (não precisa mexer)
├── public/
│   └── vite.svg          # Ícone padrão do Vite (você pode substituir por favicon.ico)
├── src/
│   ├── assets/           # Para imagens e outros recursos estáticos que você pode importar
│   │   ├── react.svg
│   │   ├── images/       # SUAS IMAGENS VÃO AQUI
│   │   │   ├── plants/
│   │   │   │   ├── tomato.png
│   │   │   │   └── ...
│   │   │   ├── pets/
│   │   │   │   └── ...
│   │   │   ├── weather/
│   │   │   │   └── ...
│   │   │   └── events/
│   │   │       └── ...
│   ├── components/       # NOVA PASTA: Seus componentes React personalizados
│   │   ├── Card.jsx      # Componente para um único card (ex: planta, pet)
│   │   ├── CardList.jsx  # Componente que renderiza a coleção de cards
│   │   ├── SearchBar.jsx # Componente para a barra de pesquisa
│   │   ├── FilterGroup.jsx # Componente para agrupar os filtros
│   │   └── ... (outros componentes que você criar)
│   ├── data/             # NOVA PASTA: Seus arquivos JSON com os dados do jogo
│   │   ├── plants.json
│   │   ├── pets.json
│   │   ├── weather.json
│   │   └── events.json
│   ├── App.jsx           # O componente principal da sua aplicação React
│   ├── main.jsx          # Ponto de entrada do React (renderiza App.jsx na página)
│   ├── index.css         # Seus estilos CSS globais
│   ├── App.css           # Estilos específicos do componente App (opcional, pode ser removido)
│   └── favicon.ico       # (Você pode mover ou adicionar seu favicon aqui ou em `public/`)
├── index.html            # O arquivo HTML principal (bem simples, React injeta o conteúdo aqui)
├── .eslintrc.cjs         # Configurações do linter (para manter o código limpo)
├── .gitignore            # Git ignorará esta pasta (node_modules, etc.)
├── package.json          # Lista de dependências do projeto e scripts npm
├── postcss.config.js     # Configuração do PostCSS (usado pelo Tailwind CSS, se instalar)
├── README.md             # Informações sobre o seu projeto
├── vite.config.js        # Configuração do Vite
└── tailwind.config.js    # Se você decidir instalar e usar Tailwind CSS (altamente recomendado!)

```