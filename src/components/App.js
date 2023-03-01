import styled from 'styled-components';
import GlobalStyle from '../styles/GlobalStyle';
import Footer from "./Footer";
import Header from "./Header";
import Questions from "./Questions";


export default function App() {
  return (
    <TelaInteira>
      <GlobalStyle />
      <Header />
      <Questions />
      <Footer />
    </TelaInteira>
  );
}

const TelaInteira = styled.div`
  width: 375px;
  margin: 0 auto;
  background-color: #FB6B6B;
  border: 1px solid #DBDBDB;
`