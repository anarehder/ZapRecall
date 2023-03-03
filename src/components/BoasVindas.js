import styled from 'styled-components';
import logo from "../assets/logo.png"

export default function BoasVindas({iniciarJogo}) {

    return(
        <ContainerInicio>
            <img src={logo} alt="logo" />
            <h1> ZapRecall</h1>
            <button onClick={iniciarJogo} data-test="start-btn">Iniciar Recall!</button>
        </ContainerInicio>
    )
}

const ContainerInicio = styled.div`
    height: 100vh;
    width: 375px;
    img{
        margin: 150px 117px 20px 117px;
        width: 140px;
        height: 160px;
    }
    h1{
        margin: 0 auto;
        font-family: 'Righteous', cursive;
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        text-align: center;
        color: #FFFFFF;
    }
    button{
        margin: 30px 65px;
        width: 245px;
        height: 54px;
        background: #FFFFFF;
        border: 1px solid #D70900;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        color: #D70900;
        font-family: 'Recursive', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        text-align: center;
    }
`