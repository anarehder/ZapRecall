import styled from 'styled-components';
import cards from './cards';
import Cartao from './Cartao';
import Frente from './Frente';
import Verso from './Verso';
import { useState } from "react";

export default function Questions(props) {
    const[frente,setFrente] = useState([]);
    const[verso,setVerso] = useState([]);
  
    const[errados,setErrados] = useState([]);
    const[certos,setCertos] = useState([]);
    const[medios,setMedios] = useState([]);

    const layout = []

    cards.forEach((card) =>{
        if (errados.includes(card.number)){
            layout.push(<Cartao key={card.number} number={card.number} resultado={"errado"} setFrente={setFrente} frente={frente}/>);
        } else if (certos.includes(card.number)){
            layout.push(<Cartao key={card.number} number={card.number} resultado={"certo"} setFrente={setFrente} frente={frente}/>);
        } else if (medios.includes(card.number)){
            layout.push(<Cartao key={card.number} number={card.number} resultado={"medio"} setFrente={setFrente} frente={frente}/>);
        } else if  (verso.includes(card.number)){
            layout.push(<Verso key={card.answer} number={card.number} answer={card.answer} errados={errados} setErrados={setErrados}
            certos={certos} setCertos={setCertos} medios={medios} setMedios={setMedios}
            setPerguntasRespondidas={props.setPerguntasRespondidas} perguntasRespondidas={props.perguntasRespondidas}/>);
        } else if  (frente.includes(card.number)){
            layout.push(<Frente key={card.question} number={card.number} question={card.question} setVerso={setVerso} verso={verso}/>);
        } else {
            layout.push(<Cartao key={card.number} number={card.number} resultado={"play"} setFrente={setFrente} frente={frente}/>);
        }
    });

    return (
        <Perguntas>
            {layout}
        </Perguntas>
    );
}

const Perguntas = styled.div`
    min-height: 100vh;
    overflow-y: hidden;
    font-family: 'Recursive', sans-serif;
    margin-bottom: 75px;
    margin-top: 120px;
`