import styled from 'styled-components';
import GlobalStyle from '../styles/GlobalStyle';
import Footer from "./Footer";
import Header from "./Header";
import Questions from "./Questions";
import { useState } from "react";

export default function App() {

  const[perguntasRespondidas,setPerguntasRespondidas] = useState(0);

  return (
    <TelaInteira>
      <GlobalStyle />
      <Header />
      <Questions key={setPerguntasRespondidas} setPerguntasRespondidas={setPerguntasRespondidas} perguntasRespondidas={perguntasRespondidas}/>
      <Footer key={perguntasRespondidas} perguntasRespondidas={perguntasRespondidas}/>
    </TelaInteira>
  );
}

const TelaInteira = styled.div`
  width: 375px;
  margin: 0 auto;
  background-color: #FB6B6B;
  border: 1px solid #DBDBDB;
`