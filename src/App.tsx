import React from "react";

import { Header } from "components/Header/Header";
import { Main } from "components/Main/Main";
import { MainBlock } from "components/MainBlock/MainBlock";
import { TeamBlock } from "components/TeamBlock/TeamBlock";
import { CasesBlock } from "components/CasesBlock/CasesBlock";

function App() {
  return (
    <>
      <Header />
      <Main>
        <MainBlock />
        <TeamBlock />
        <CasesBlock />
      </Main>
    </>
  );
}

export default App;
