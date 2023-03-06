import styled from 'styled-components';
import errado from "../assets/icone_erro.png";
import certo from "../assets/icone_certo.png";
import medio from "../assets/icone_quase.png";

export default function Verso(props) {

    function exibirErrado(number){
        props.setErrados([...props.errados,number]);
        somarRespotas();
        props.setIconesRespostas([...props.iconesRespostas, errado]);
    }

    function exibirMedio(number){
        props.setMedios([...props.medios,number]);
        somarRespotas();
        props.setIconesRespostas([...props.iconesRespostas, medio]);
    }

    function exibirCertos(number){
        props.setCertos([...props.certos,number]);
        somarRespotas();
        props.setIconesRespostas([...props.iconesRespostas, certo]);
    }

    function somarRespotas(){
        let total = props.perguntasRespondidas;
        props.setPerguntasRespondidas(total+1);
    }

    return (
        <div data-test="flashcard">
            <BackFace >
                <span data-test="flashcard-text"> {props.answer} </span>
                <div>
                    <Botao cor={"#FF3030"} data-test="no-btn" onClick={() => exibirErrado(props.number)}>Não lembrei</Botao>
                    <Botao cor={"#FF922E"} data-test="partial-btn" onClick={() => exibirMedio(props.number)}>Quase não lembrei</Botao>
                    <Botao cor={"#2FBE34"} data-test="zap-btn" onClick={() => exibirCertos(props.number)}> Zap!</Botao>
                </div>
            </BackFace>
        </div>
    )
}

const BackFace = styled.div`
    margin: 10px auto;
    width: 270px;
    min-height: 105px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color:#333333;
    padding: 18px 15px 10px;
    display: flex;
    flex-direction: column;
    min-height: 105px;
    justify-content: space-between;
    display: ${props => props.exibir};
    div{
    display: flex;
    justify-content: space-between;
    }
`
const Botao = styled.button`
    width: 85px;
    height: 37px;
    margin-top: 10px;
    border: none;
    border-radius: 5px;
    color: #FFFFFF;
    text-align: center;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    background-color: ${props => props.cor};
`
