import styled from 'styled-components';
import play from "../assets/seta_play.png"
import virar from "../assets/virar.png"
import certo from "../assets/icone_certo.png"
import medio from "../assets/icone_quase.png"
import errado from "../assets/icone_erro.png"

export default function Questions() {
    return (
        <Perguntas>
            <div data-test="flashcard">
                <NumeroPergunta resposta={""} cor={"#333333"} exibir={""}>
                    <span data-test="flashcard-text">Pergunta 1 </span>
                    <img src={play} alt="play" data-test="play-btn"/>
                </NumeroPergunta>
                <FrontFace exibir={""}>
                    <span data-test="flashcard-text"> Frente </span>
                    <img src={virar} alt="virar" data-test="turn-btn"/>
                </FrontFace>
                <BackFace exibir={""}>
                    <span data-test="flashcard-text"> Verso </span>
                    <div>
                        <Botao cor={"#FF3030"} data-test="no-btn">Não lembrei</Botao>
                        <Botao cor={"#FF922E"} data-test="partial-btn">Quase não lembrei</Botao>
                        <Botao cor={"#2FBE34"} data-test="zap-btn">Zap!</Botao>
                    </div>
                </BackFace>
            </div>
            <NumeroPergunta resposta={"line-through"} cor={"#FF3030"}>
                <span data-test="flashcard-text">Pergunta 1 </span>
                <img src={errado} alt="errado" data-test="no-icon"/>
            </NumeroPergunta>
            <NumeroPergunta resposta={"line-through"} cor={"#FF922E"}>
                <span data-test="flashcard-text">Pergunta 1 </span>
                <img src={medio} alt="medio" data-test="partial-icon"/>
            </NumeroPergunta>
            <NumeroPergunta resposta={"line-through"} cor={"#2FBE34"}>
                <span data-test="flashcard-text">Pergunta 1 </span>
                <img src={certo} alt="certo" data-test="zap-icon"/>
            </NumeroPergunta>
        </Perguntas>
    );
}

const Perguntas = styled.div`
    height: 100vh;
    overflow-y: hidden;
    font-family: 'Recursive', sans-serif;
`

const NumeroPergunta = styled.div`
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
    color: ${props => props.cor};
    text-decoration-line: ${props => props.resposta};
    display: ${props => props.exibir};
`
const FrontFace = styled.div`
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
    justify-content: space-between;
    min-height: 105px;
    display: ${props => props.exibir};
    img {
    width: 30px;
    height: 20px;
    margin-left: 239px;
    }
`

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
    border: none;
    border-radius: 5px;
    color: #FFFFFF;
    text-align: center;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    background-color: ${props => props.cor};
`