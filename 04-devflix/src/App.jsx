import "./App.css";

import logo from "./assets/devflix.png";
import lupa from "./assets/search.svg";
import Rodape from "./components/Rodape/Rodape";

const App = () => {
  return (
    <div id="App">
      <img
        className="logo"
        src={logo}
        alt="Logotipo da plataforma de streaming DEVFLIX em cores vermelha e preta, ideal para quem busca filmes e séries de alta qualidade."
      />

      <div className="saerch">
        <input type="text" placeholder="Pesquise por filmes e séries.." />
        <img src={lupa} alt="botão para a pesquisa" />

      </div>
      <Rodape>Manuela Domingues</Rodape>
    </div>
  );
};

export default App;
