import React from 'react';
import CardList from './components/CardList'; // Importa o CardList
import './App.css'; // Seus estilos CSS para o App
import './index.css'; // Importa estilos globais

// Importa os dados
import plantsData from './data/plants.json';
// import petsData from './data/pets.json'; // Descomente quando criar pets.json
// import weatherData from './data/weather.json'; // Descomente quando criar weather.json
// import eventsData from './data/events.json'; // Descomente quando criar events.json

function App() {
  // Exemplo de filtros de raridade para plantas. Você pode criar arrays similares para pets, etc.
  const plantRarities = ["Comum", "Incomum", "Rara", "Épico", "Lendário"];

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Grow a Garden Wiki</h1>
      </header>

      <main className="app-main">
        {/* Seção de Plantas */}
        <CardList 
          items={plantsData} 
          title="Plantas" 
          filters={plantRarities} 
        />

        {/* // Descomente e duplique a estrutura abaixo quando tiver os dados para pets, climas e eventos
        <CardList 
          items={petsData} 
          title="Pets" 
          // filters={["Comum", "Raro", "Mítico"]} // Exemplo de filtros para pets
        />

        <CardList 
          items={weatherData} 
          title="Climas" 
          // filters={["Chuvoso", "Ensolarado", "Nevando"]}
        />

        <CardList 
          items={eventsData} 
          title="Eventos" 
          // filters={["Sazonal", "Comunitário"]}
        /> 
        */}
      </main>

      <footer className="app-footer">
        <p>&copy; 2025 Grow a Garden Wiki. Este site é um projeto de uma fã e não é afiliado ao jogo Grow a Garden. Todos os direitos sobre o jogo pertencem aos seus criadores.
        </p>
        <p>Confira o projeto no GitHub: <a href="https://github.com/Lauragpse" target="_blank">Lauragpse</a></p>
      </footer>
    </div>
  );
}

export default App;