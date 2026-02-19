import { useState } from "react";
import "./App.css";

import logo from "./assets/devflix.png";
import lupa from "./assets/search.svg";
import Rodape from "./components/Rodape/Rodape";


const App = () => {

  const [movies, setMovies] = useState([]);

  //UTILIZANDO CHAVE DE API DO ARQUIVO .ENV
  const apiKey = import.meta.env.VITE_OMDB_API_KEY;
  const apiUrl='https://omdbapi.com/?apikey=${apiKey}';

  //criando a conexão com API e trazendo informações
  const searchMovies = async (title) => {
    const response = await fetch ('${apiUrl} &s=${title}');
    const data = await response.json;

    //alimentando a variavel movies
    setMovies(data.Search);
  };
  useEffect(() => {
    
  })
  
  return (
    <div id="App">
      <img
        id="Logo"
        src={logo}
        alt="Logo do serviço de streaming DEVFLIX exibido em cores vibrantes, ideal para fãs de filmes e séries de TV"
      />

      <div className="search">
        <input type="text" placeholder="Pesquise por filmes e séries..." />
        <img src={lupa} alt="Botão para a pesquisa" />
      </div>

      <Rodape link={"https://github.com/manuela582279"}>Manuela Domingues</Rodape>
    </div>
  );
};



export default App

