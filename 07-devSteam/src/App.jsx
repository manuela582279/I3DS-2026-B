import logo from './assets/logo.png'

import dotaPng from './assets/dota-2.png'
import valorantPng from './assets/valorant.png'
import lolPng from './assets/league-of-legends.png'
import csgoPng from './assets/counter-strike.png'
import GameCard from'./components/GameCard'
import './App.css'


function App() {
  return (
    <>
      
      {/* HEADER */}
      <header className="header-container">

        <div className="logo-area">
          <img src={logo} className="logo" alt="Logo" />
          <h2 className="title">DevSteam</h2>
        </div>

        <div className="search-container">
          <input
            type="text"
            placeholder="Buscar"
            className="search"
          />
        </div>

        <div className="cart">🛒</div>

      </header>

      {/* CONTEÚDO */}
      <section id="center">

        {/* PROMOÇÕES */}
        <h2 className="promo-title">PROMOÇÕES</h2>

       <div className="promo">

  <GameCard
    image={lolPng}
    discount="-50%"
    preco="R$199,80"
    novopreco="R$99,90"
  />

  <GameCard
    image={dotaPng}
    discount="-30%"
    preco="R$149,90"
    novopreco="R$79,90"
  />

  <GameCard
    image={valorantPng}
    discount="-70%"
    preco="R$299,90"
    novopreco="R$89,90"
  />

</div>

        {/* OUTROS JOGOS */}
        <div className="games-section">

          <h3>OUTROS JOGOS</h3>

          <div className="OutrosJogos">

            <img
              src={csgoPng}
              className="base"
              width="180"
              height="90"
              alt="CSGO"
            />

            <img
              src={csgoPng}
              className="base"
              width="180"
              height="90"
              alt="CSGO"
            />

            <img
              src={csgoPng}
              className="base"
              width="180"
              height="90"
              alt="CSGO"
            />

            <img
              src={csgoPng}
              className="base"
              width="180"
              height="90"
              alt="CSGO"
            />

          </div>

        </div>

      </section>
    </>
  )
}

export default App