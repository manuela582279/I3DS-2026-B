import "./App.css";

import logo from "./assets/devflix.png";
import lupa from "./assets/search.svg";
import Rodape from "./components/Rodape/Rodape";

const App = () => {
  return (
    <div id="App">
      <img className="logo" src={logo} alt="Logotipo da plataforma de streaming Devflix em destaque, com letras vermelhas e pretas, promovendo conteúdo diversificado em streaming." />


      <div className="search">
        <input
          type="text"
          placeholder="pesquise por filmes e séries..."
        />
        <img src={lupa} alt="Botão de ação para pesquisa!" />

      </div>
      <Rodape link={"https://github.com/manuela582279"}>Manuela Domingues</Rodape>
    </div>
  );
};




export default App
