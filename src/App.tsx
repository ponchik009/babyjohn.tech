import React from "react";

import { Header } from "components/Header/Header";
import { Main } from "components/Main/Main";
import { MainBlock } from "components/MainBlock/MainBlock";
import { TeamBlock } from "components/TeamBlock/TeamBlock";

function App() {
  return (
    <>
      <Header />
      <Main>
        <MainBlock />
        <TeamBlock />
      </Main>
    </>
  );
}

export default App;
