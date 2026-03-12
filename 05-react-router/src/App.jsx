import "./App.css";
import Sobre from "./pages/Sobre";
import Home from "./pages/Home";
import { Route, Routes } from "react-router";
import Header from "./components/header/Header";
import Contato from "./pages/Contato";
import Rodape from "./components/rodape/rodape";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
      <Rodape link={"https://github.com/manuela582279"}>Manuela</Rodape>
    </>
  );
}

export default App;
