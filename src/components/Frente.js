import styled from 'styled-components';
import virar from "../assets/virar.png";

export default function Frente(props) {

    function exibirVerso(number){
        props.setVerso([...props.verso,number]);
    }

    return (
        <div data-test="flashcard">
            <FrontFace>
                <span data-test="flashcard-text"> {props.question} </span>
                <img src={virar} alt="virar" data-test="turn-btn" onClick={() => exibirVerso(props.number)}/>
            </FrontFace>
        </div>
    )
}

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
    img {
    width: 30px;
    height: 20px;
    margin-left: 239px;
    }
`