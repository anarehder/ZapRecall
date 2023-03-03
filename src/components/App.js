import styled from 'styled-components';
import GlobalStyle from '../styles/GlobalStyle';
import Footer from "./Footer";
import Header from "./Header";
import Questions from "./Questions";
import { useState } from "react";
import BoasVindas from './BoasVindas';

export default function App() {

  const[perguntasRespondidas,setPerguntasRespondidas] = useState(0);
  const[telaInicial,setTelaInicial] = useState("inicio");

  function iniciarJogo(){
    console.log("ligar");
    setTelaInicial("jogo");
  }

  return (
    <TelaInteira>
      <TelaInicio telaInicial={telaInicial}>
        <BoasVindas key={iniciarJogo} iniciarJogo={iniciarJogo}/>
      </TelaInicio>
      <TelaJogo telaInicial={telaInicial}>
        <GlobalStyle />
        <Header />
        <Questions key={setPerguntasRespondidas} setPerguntasRespondidas={setPerguntasRespondidas} perguntasRespondidas={perguntasRespondidas}/>
        <Footer key={perguntasRespondidas} perguntasRespondidas={perguntasRespondidas}/>
      </TelaJogo>
    </TelaInteira>
  );
}

const TelaInteira = styled.div`
  width: 375px;
  margin: 0 auto;
  background-color: #FB6B6B;
  border: 1px solid #DBDBDB;
`

const TelaInicio = styled.div`
  width: 375px;
  margin: 0 auto;
  background-color: #FB6B6B;
  border: 1px solid #DBDBDB;
  display: ${props =>props.telaInicial === "inicio" ?  "" : "none"};
`

const TelaJogo = styled.div`
  width: 375px;
  margin: 0 auto;
  background-color: #FB6B6B;
  border: 1px solid #DBDBDB;
  display: ${props =>props.telaInicial  === "inicio" ?  "none" : ""};;
`