import React, { useState } from 'react';
import './Card.css'; // Mantenha este arquivo CSS

function Card({ item }) {
  // `useState` para controlar se o card está expandido ou não
  const [isExpanded, setIsExpanded] = useState(false);

  // Função para abrir o card
  // Esta função será chamada ao clicar no card quando ele NÃO estiver expandido
  const handleOpenCard = () => {
    if (!isExpanded) { // Garante que só tentamos abrir se ele já não estiver aberto
      setIsExpanded(true);
      // Opcional: Adicionar classe ao body para esconder o scroll quando o card abre em tela cheia
      document.body.classList.add('overlay-active');
    }
  };

  // Função para fechar o card
  // Esta função será chamada APENAS ao clicar no botão "X"
  const handleCloseCard = (e) => {
    // e.stopPropagation() é CRUCIAL aqui!
    // Ele impede que o evento de clique "borbulhe" para o elemento pai (o próprio card),
    // que também tem um onClick para abrir. Sem isso, clicar no 'X' fecharia
    // e imediatamente reabriria o card.
    e.stopPropagation();
    setIsExpanded(false);
    // Opcional: Remover classe do body quando o card fecha
    document.body.classList.remove('overlay-active');
  };

  return (
    <div
      className={`card ${isExpanded ? 'expanded' : ''}`}
      onClick={handleOpenCard} // Este onClick AGORA SÓ ABRE o card (se não estiver aberto)
    >
      <div className="card-header">
        {item.image && (
          <img src={item.image} alt={item.name} className="card-image" />
        )}
        <h3 className="card-name">{item.name}</h3>
      </div>

      {isExpanded && ( // Renderiza os detalhes e o botão 'X' apenas se isExpanded for true
        <>
          {/* Botão 'X' para fechar o card */}
          <button className="close-button" onClick={handleCloseCard}>X</button>

          <div className="card-details">
            {item.rarity && <p><strong>Raridade:</strong> {item.rarity}</p>}
            {item.description && (
              <div className="card-description"> {/* Adicione um container para a descrição */}
                {item.description.map((line, index) => (
                  <p key={index}>{line}</p> // Renderiza cada linha em um novo parágrafo
                ))}
              </div>
            )}
            {/* Adicione mais detalhes aqui conforme o item. Ex: "Tempo de crescimento", "Alimento" */}
          </div>
        </>
      )}
    </div>
  );
}

export default Card;