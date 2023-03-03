import styled from 'styled-components';
import cards from './cards';

export default function Footer({perguntasRespondidas}) {
    return (
        <Rodape data-test="footer">
            {perguntasRespondidas}/{cards.length} CONCLUÍDOS
        </Rodape>
    );
}

const Rodape = styled.div`
    width: 375px;
    height: 70px;
    background-color: #FFFFFF;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
    font-family: 'Recursive', sans-serif;
    position: fixed;
    bottom: 0;
    font-weight: 400;
    font-size: 18px;
    line-height: 70px;
    text-align: center;
`
  