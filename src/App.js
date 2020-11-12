import React from "react";
import styled from "styled-components";
import TicTacToe from "./TicTacToe";
import "papercss/dist/paper.min.css";


function App() {
  return (
    <main>
      <Main>
      <h1>Game Tic tac Toe</h1>
        <TicTacToe />
      </Main>
      <Footer>
        <FooterInner>
        Ahmad Nurul Musthopa<br></br>
        <center>1119101771</center><br></br>
         Download Code di{" "}
          <a href="https://github.com/Clarity-89/React_tic_tac_toe">Github</a>
        </FooterInner>
      </Footer>
    </main>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 0 auto;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  width: 100%;
  flex: 0 0 auto;
`;

const FooterInner = styled.div`
  padding: 16px 0;
`;

export default App;


