import styled from 'styled-components';
import GlobalStyle from '../styles/GlobalStyle';
import Footer from "./Footer";
import Header from "./Header";
import Questions from "./Questions";
import { useState } from "react";
import BoasVindas from './BoasVindas';

export default function App() {
  const[errados,setErrados] = useState([]);
  const[perguntasRespondidas,setPerguntasRespondidas] = useState(0);
  const[telaInicial,setTelaInicial] = useState("inicio");
  const[iconesRespostas, setIconesRespostas] = useState([]);

  function iniciarJogo(){
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
        <Questions key={setPerguntasRespondidas} setPerguntasRespondidas={setPerguntasRespondidas} perguntasRespondidas={perguntasRespondidas}
        iconesRespostas={iconesRespostas} setIconesRespostas={setIconesRespostas} errados={errados} setErrados={setErrados}/>
        <Footer key={perguntasRespondidas} perguntasRespondidas={perguntasRespondidas}
        iconesRespostas={iconesRespostas} errados={errados}/>
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