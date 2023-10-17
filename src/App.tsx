import React from "react";

import { Header } from "components/Header/Header";
import { Main } from "components/Main/Main";
import { MainBlock } from "components/MainBlock/MainBlock";
import { TeamBlock } from "components/TeamBlock/TeamBlock";
import { CasesBlock } from "components/CasesBlock/CasesBlock";
import { BackgroundBlock } from "components/BackgroundBlock/BackgroundBlock";

function App() {
  return (
    <>
      <Header />
      <Main>
        <BackgroundBlock />
        <MainBlock />
        <TeamBlock />
        <CasesBlock />
      </Main>
    </>
  );
}

export default App;
