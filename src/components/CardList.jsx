import React, { useState, useEffect } from 'react';
import Card from './Card'; // Importa o componente Card
import SearchBar from './SearchBar'; // Importa o SearchBar
import './CardList.css'; // Vamos criar este arquivo CSS depois

function CardList({ items, title, filters = [] }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilters, setActiveFilters] = useState([]);

  // Lógica de filtragem e pesquisa
  const filteredItems = items.filter(item => {
    // Transforma o termo de pesquisa para minúsculas uma vez
    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    // Garante que item.name seja uma string e transforma para minúsculas
    // Isso evita erros se item.name for nulo ou undefined
    const itemName = (item.name || '').toLowerCase();

    // Trata item.description: se for um array, junta em uma string para a busca;
    // caso contrário, usa como está (ou string vazia se for nulo/undefined)
    const itemDescription = Array.isArray(item.description)
      ? item.description.join(' ').toLowerCase() // Junta as linhas do array em uma única string
      : (item.description || '').toLowerCase(); // Se não for array, trata como string normal

    // Verifica se o nome ou a descrição correspondem ao termo de pesquisa
    const matchesSearch = itemName.includes(lowerCaseSearchTerm) ||
                          itemDescription.includes(lowerCaseSearchTerm);

    const matchesFilters = activeFilters.length === 0 ||
                           activeFilters.some(filter =>
                             item.rarity && item.rarity.toLowerCase() === filter.toLowerCase()
                             // Adicione outras propriedades para filtrar aqui, se necessário
                           );
    return matchesSearch && matchesFilters;
  });

  // Função para alternar filtros
  const toggleFilter = (filterValue) => {
    setActiveFilters(prevFilters =>
      prevFilters.includes(filterValue)
        ? prevFilters.filter(f => f !== filterValue) // Remove se já estiver ativo
        : [...prevFilters, filterValue] // Adiciona se não estiver ativo
    );
  };

  return (
    <section className="card-list-section">
      <h2>{title}</h2>
      <div className="controls">
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        {filters.length > 0 && (
          <div className="filter-buttons">
            {filters.map(filter => (
              <button
                key={filter}
                className={`filter-button ${activeFilters.includes(filter) ? 'active' : ''}`}
                onClick={() => toggleFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="card-grid">
        {filteredItems.length > 0 ? (
          filteredItems.map(item => (
            <Card key={item.id} item={item} />
          ))
        ) : (
          <p>Nenhum item encontrado.</p>
        )}
      </div>
    </section>
  );
}

export default CardList;