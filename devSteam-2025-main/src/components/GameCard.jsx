import React from 'react'

const GameCard = (props) => {

  const { game } = props;

  return (
    <div className="game-card"> 
      
      <img src={game.imagem} alt={game.titulo} width="30%" />
      
      <h3>{game.titulo}</h3>
      
      <div className="precos">
        <span>R$ {game.preco}</span>
        <small>{game.desconto}% OFF</small>
      </div>

      <button>Adicionar ao carrinho</button>
    </div>
  )
}

export default GameCard


