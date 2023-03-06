import play from "../assets/seta_play.png";
import certo from "../assets/icone_certo.png";
import medio from "../assets/icone_quase.png";
import errado from "../assets/icone_erro.png";
import styled from 'styled-components';

const icones = [play, certo, medio, errado];

export default function Cartao(props) {
    function exibirFrente(number, resultado){
        if (resultado === "play"){
            props.setFrente([...props.frente,number]);
        }
        
    }

    return (
        <div data-test="flashcard">
            <NumPergunta 
            cor={props.resultado === "play" ? "#333333" : props.resultado === "errado" ? "#FF3030" : props.resultado === "medio" ? "#FF922E" : "#2FBE34"}
            decoration={props.resultado === "play" ? "none" : "line-through"} >
                <span data-test="flashcard-text">Pergunta {props.number} </span>
                <img src={props.resultado === "play" ? icones[0] : props.resultado === "errado" ? icones[3] : props.resultado === "medio" ? icones[2] : icones[1]} alt="icone" 
                data-test={props.resultado === "play" ? "play-btn" : props.resultado === "errado" ? "no-icon" : props.resultado === "medio" ? "partial-icon" : "zap-icon"} 
                onClick={() => exibirFrente(props.number, props.resultado)}/>
            </NumPergunta>
        </div>
    )
}

const NumPergunta = styled.div`
    margin: 10px auto;
    width: 270px;
    height: 23px;
    padding: 21px 15px;
    background: #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-weight: 700;
    font-size: 16px;
    line-height: 23px;
    display: flex;
    justify-content: space-between;
    color: #333333;
    color: ${props => props.cor};
    text-decoration-line: ${props => props.decoration};
`