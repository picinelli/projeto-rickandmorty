import { useEffect, useState } from "react";
import getAllCharacters from "../../api/getAllCharacters";
import CharacterCard from "../../components/CharacterCard";
import FilterDropdown from "../../components/FilterDropdown";
import Header from "../../components/Header";
import * as S from "./style";

export default function Favourites() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function fetchInfo() {
      setCharacters(await getAllCharacters());
    }
    fetchInfo();
  }, []);

  return (
    <>
      <Header />
      <S.Container>
        <S.CardsWrapper>
          {characters.map((e) => {
            return <CharacterCard character={e} key={e.id} />;
          })}
        </S.CardsWrapper>
      </S.Container>
    </>
  );
}
