import styled from "styled-components";
import narutoImg from "./images/naruto.png";
import { Quotes } from "./components/Quotes";
import { getQuote } from "./services";
import { useState } from "react";

function App() {
  const [quoteState, setQuoteState] = useState({ quote: "OK", speaker: "Speaker" });

  const onUpdate = async () => {
    const quote = await getQuote();

    setQuoteState(quote);
  };

  return (
    <Content>
      <Quotes quote={quoteState.quote} speaker={quoteState.speaker} onUpdate={onUpdate} />
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
