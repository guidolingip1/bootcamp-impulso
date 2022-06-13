import styled from "styled-components";
import { string } from "prop-types";
import { Button } from "../Button/Button";

export const Quotes = ({ quote, speaker, onUpdate }) => {
  return (
    <Wrapper>
      <Quote>{quote}</Quote>
      <Speaker>- {speaker}</Speaker>
      <Button onClick={onUpdate}>Quote No Justu</Button>
    </Wrapper>
  );
};

Quotes.propTypes = {
  quote: string,
  speaker: string,
};

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Quote = styled.p`
  font-size: 2em;
  margin: 0;
`;

const Speaker = styled(Quote)`
  text-align: right;
  margin-bottom: 50px;
`;
