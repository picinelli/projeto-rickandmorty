import { useContext, useEffect, useState } from "react";
import getAllCharacters from "../../api/getAllCharacters";
import CharacterCard from "../../components/CharacterCard";
import FilterDropdown from "../../components/FilterDropdown";
import { toast } from "react-toastify";
import Header from "../../components/Header";
import DataContext from "../../providers/DataContext";
import * as S from "./style";
import axios from "axios";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [favourited, setFavourited] = useState([]);
  const { data } = useContext(DataContext);
  const [filterParams, setFilterParams] = useState({
    species: null,
    name: null,
  });

  useEffect(() => {
    fetchInfo();
  }, []);

  async function fetchInfo() {
    try {
      const characters = await getAllCharacters();
      setCharacters(characters);
      if (data.token) {
        const request = await axios.get(`${data.API}/favourites`, {
          headers: {
            Authorization: `Bearer ${data.token}`,
          },
        });
        setFavourited(request.data);
      } else {
        setFavourited([]);
      }
    } catch (error) {
      toast("Erro interno! Tente novamente mais tarde.");
    }
  }

  function isFavourited(character) {
    if (favourited.length === 0) return false;
    for (let i = 0; i < favourited.length; i++) {
      if (character.id === favourited[i].id) {
        return true;
      }
    }
  }

  return (
    <>
      <Header
        setCharacters={setCharacters}
        setFilterParams={setFilterParams}
        filterParams={filterParams}
      />
      <S.Container>
        <FilterDropdown
          setCharacters={setCharacters}
          setFilterParams={setFilterParams}
          filterParams={filterParams}
        />
        <S.CardsWrapper>
          {characters.map((character) => {
            const favourite = isFavourited(character);
            return (
              <CharacterCard
                fetchInfo={fetchInfo}
                character={character}
                key={character.id}
                favourite={favourite}
              />
            );
          })}
        </S.CardsWrapper>
      </S.Container>
    </>
  );
}
