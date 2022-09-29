import CharacterCard from "../../components/CharacterCard";
import Header from "../../components/Header";

import * as S from "./style";

export default function Home() {
  return (
    <>
      <Header />
      <S.Container>
        <S.CardsWrapper>
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
        </S.CardsWrapper>
      </S.Container>
    </>
  );
}
