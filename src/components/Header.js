import styled from 'styled-components';
import logo from "../assets/logo.png"

export default function Header() {
    return (
        <Topo>
            <img src={logo} alt="logo" />
            <h1> ZapRecall</h1>
        </Topo>
    );
}

const Topo = styled.div`
    padding: 30px 60px;
    font-family: 'Righteous', cursive;
    width: 255px;
    position: fixed;
    top: 0;
    background-color: #FB6B6B;
    z-index: 2;
    display: flex;
    justify-content: space-between;
    img{
    width: 52px;
    height: 60px;
    }
    h1{
    font-weight: 400;
    font-size: 36px;
    line-height: 60px;
    text-align: center;
    color: #FFFFFF;
    }
`