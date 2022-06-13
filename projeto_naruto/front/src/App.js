import styled from "styled-components";
import narutoImg from "./images/naruto.png";
import { Quotes } from "./components/Quotes";
import jutsoSound from "./sounds/jutso.mp3";
import { getQuote } from "./services";
import { useState } from "react";

const audio = new Audio(jutsoSound);

function App() {
  const [quote, setQuote] = useState({ speaker: "Speaker", quote: "OK" });

  const onUpdate = async () => {
    const newQuote = await getQuote();
    setQuote({ quote: newQuote.mensagem });
    audio.play();
  };

  return (
    <Content>
      <Quotes {...quote} onUpdate={onUpdate} />
      <NarutoImg src={narutoImg} alt="Naruto with a kunai" />
    </Content>
  );
}

const Content = styled.div`
  height: 100vh;
  padding: 0 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NarutoImg = styled.img`
  max-width: 50vw;
  align-self: flex-end;
`;
export default App;
