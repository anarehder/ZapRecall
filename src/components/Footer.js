import styled from 'styled-components';
import cards from './cards';
import errado from "../assets/icone_erro.png";
import certo from "../assets/icone_certo.png";
import feliz from "../assets/party.png";
import triste from "../assets/sad.png";


export default function Footer(props) {
    return (
        <Rodape data-test="footer" ico={props.perguntasRespondidas}>
            <Resposta1 erros={props.errados.length} ico={props.perguntasRespondidas}>
                <h1 data-test="finish-text">
                    <img src={feliz} alt='feliz' /> Parabéns! 
                    <p>Você não esqueceu de nenhum flashcard!</p>
                </h1>
            </Resposta1>
            <Resposta2 erros={props.errados.length} ico={props.perguntasRespondidas}>
                <h1 data-test="finish-text">
                    <img src={triste} alt='triste' /> Putz! 
                    <p>Ainda faltam alguns... Mas não desanime!</p>
                </h1>
            </Resposta2>
            <Resultados>
                <h1 >{props.perguntasRespondidas}/{cards.length} CONCLUÍDOS</h1>
                <div >
                    {props.iconesRespostas.map((ico) => ( 
                    <img key={ico.index} src={ico} alt="ic"
                    data-test={ ico === errado ? "no-icon" : ico === certo ? "zap-icon" : "partial-icon"}/> 
                    ))}
                </div>
            </Resultados>
        </Rodape>
    );
}

const Rodape = styled.div`
    width: 375px;
    height: ${props => props.ico === 0 ? "60px" : props.ico === 8 ? "165px" : "80px"};
    padding-top: 5px;
    background-color: #FFFFFF;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
    font-family: 'Recursive', sans-serif;
    position: fixed;
    bottom: 0;
    font-weight: 400;
    font-size: 18px;
    text-align: center;
`
const Resultados = styled.div`
    h1{
        text-align: center;
        line-height: ${props => props.ico === 0 ? "60px" : "30px"};
        margin-bottom: 10px;
    }
    div{
        height: ${props => props.ico === 0 ? "1px" : "30px"};
        display: flex;
        justify-content: center;
        align-items: center;
    }
    img{
        margin-left: 4px;
    }
`

const Resposta1 = styled.div`
    display: ${props => props.ico !== 8 ? "none !important" : props.erros === 0 ? "flex" : "none !important"};
    h1{
        line-height: 30px;
        font-weight: 700;
        margin: 0;
    }
    p{
        line-height: 20px;
        margin-bottom: 10px;
        padding: 0 75px;
        font-weight: 400;
    }
    img{
        margin-right: 10px;
    }
`

const Resposta2 = styled.div`
    display: ${props => props.ico !== 8 ? "none !important" : props.erros > 0 ? "flex" : "none !important"};
    h1{
        line-height: 30px;
        font-weight: 700;
        margin: 0;
    }
    p{
        line-height: 20px;
        margin-bottom: 10px;
        padding: 0 71px;
        font-weight: 400;
    }
    img{
        margin-right: 10px;
    }
`