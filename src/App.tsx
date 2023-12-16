import React from "react";

import { Header } from "components/Header/Header";
import { Main } from "ui/Main/Main";
import { MainBlock } from "components/MainBlock/MainBlock";
import { TeamBlock } from "components/TeamBlock/TeamBlock";
import { CasesBlock } from "components/CasesBlock/CasesBlock";
import { BackgroundBlock } from "components/BackgroundBlock/BackgroundBlock";

function App() {
  const [mainRef, setMainRef] = React.useState<HTMLDivElement | null>(null);

  return (
    <>
      <Header />
      <Main ref={(ref) => setMainRef(ref)}>
        <BackgroundBlock
          parentHeight={mainRef ? mainRef.clientHeight : undefined}
        />
        <MainBlock />
        <TeamBlock />
        <CasesBlock />
      </Main>
    </>
  );
}

export default App;
