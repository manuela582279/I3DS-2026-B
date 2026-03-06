import { useCallback, useEffect, useState } from "react";
import "./App.css";

import logo from "./assets/1.png";
import lupa from "./assets/Design sem nome.png";

import Rodape from "./components/Rodape/Rodape";
import MovieCard from "./components/MovieCard/MovieCard";
import Switch from "./components/Switch/Switch";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [isLight, setIsLight] = useState(true);
  const [language, setLanguage] = useState("pt");
  const languages = ["pt", "en", "es", "fr"];

  const texts = {
    pt: {
      searchPlaceholder: "Pesquise por filmes",
      searchAlt: "Botão de ação para pesquisa!",
      empty: "😢 Filme não encontrado 😢",
      langButton: "PT",
    },
    en: {
      searchPlaceholder: "Search for movies",
      searchAlt: "Search action button!",
      empty: "😢 Movie not found 😢",
      langButton: "EN",
    },
    es: {
      searchPlaceholder: "Busca películas",
      searchAlt: "¡Botón de búsqueda!",
      empty: "😢 Película no encontrada 😢",
      langButton: "ES",
    },
    fr: {
      searchPlaceholder: "Rechercher des films",
      searchAlt: "Bouton de recherche !",
      empty: "😢 Film introuvable 😢",
      langButton: "FR",
    },
  };

  //Utilizando uma CHAVE de API do arquivo .env
  const apiKey = import.meta.env.VITE_OMDB_API_KEY;
  const apiUrl = `https://omdbapi.com/?apikey=${apiKey}`;

  //Criando a conexão com a API e trazendo informações
  const searchMovies = useCallback(
    async (title) => {
      const response = await fetch(`${apiUrl}&s=${title}`);
      const data = await response.json();

      //Alimentando a variavel movies
      setMovies(data.Search);
    },
    [apiUrl],
  );

  useEffect(() => {
    (async () => {
      await searchMovies("Barbie"); // termo para pesquina ao carregar o site
    })();
  }, [searchMovies]);

  const troca = () => {
    setIsLight(!isLight);
  };

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const currentIndex = languages.indexOf(prev);
      const nextIndex = (currentIndex + 1) % languages.length;
      return languages[nextIndex];
    });
  };

  useEffect(() => {
    document.body.classList.toggle("light", isLight);
  }, [isLight]);

  return (
    <div id="App" className={isLight ? "light" : ""}>
      <button className="langButton" type="button" onClick={toggleLanguage}>
        {texts[language].langButton}
      </button>

      <img
        id="Logo"
        src={logo}
        alt="Logotipo do serviço de streaming Devflix, com letras vermelhas e fundo preto, promovendo conteúdo de séries, filmes e entretenimento online."
      />

      <Switch troca={troca} isLight={isLight} />

      <div className="search">
        <input
          onKeyDown={(e) => e.key === "Enter" && searchMovies(search)}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder={texts[language].searchPlaceholder}
        />
        <img
          onClick={() => searchMovies(search)}
          src={lupa}
          alt={texts[language].searchAlt}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie, index) => (
            <MovieCard key={index} {...movie} apiUrl={apiUrl} />
          ))}
        </div>
      ) : (
        <h2 className="empty">{texts[language].empty}</h2>
      )}

      <Rodape link={"https://github.com/manuela582279"}>
        Manuela Domingues
      </Rodape>
    </div>
  );
};

export default App;
