import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [url, setUrl] = useState("https://rickandmortyapi.com/api/character");

  const handleGetCharacters = () => {
    axios.get(url).then((res) => {
      setUrl(res.data.info.next);
      setCharacters([...characters, ...res.data.results]);
    });
  };

  // Todo componente tem seu ciclo de vida (o App é um componente)
  // O que é ciclo de vida?
  // Nasce (MONTAGEM), cresce (ATUALIZAÇÃO) e morre (DESMONTAGEM) <<

  // No react, podemos usar o ciclo de vida dos componentes para
  // automatizar chamadas de funções ou qualquer coisa que quisermos
  // fazer e for possível fazer com lógica de programação em JS/TS

  // Use Effect de MONTAGEM (array vazio)
  useEffect(() => {
    handleGetCharacters();
  }, []);

  // Use Effect de ATUALIZAÇÃO (algum state no array, ele chamara a função quando o state atualizar)
  useEffect(() => {
    if (url !== null) handleGetCharacters();
  }, [characters]);

  return (
    <div>
      <div>Personagens</div>
      <button onClick={handleGetCharacters}>Get Personagens</button>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        {characters.map((element) => (
          <Card characters={characters} character={element} key={element.id} />
        ))}
      </div>
    </div>
  );
};

export default App;
