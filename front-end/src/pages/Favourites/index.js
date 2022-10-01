import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import getAllCharacters from "../../api/getAllCharacters";
import CharacterCard from "../../components/CharacterCard";
import Header from "../../components/Header";
import DataContext from "../../providers/DataContext";
import * as S from "./style";

export default function Favourites() {
  const { data, setData } = useContext(DataContext);

  useEffect(() => {
    if (!data.token) {
      toast("Você precisa estar logado para ver os favoritos");
      return setData({ ...data, favourited: [] });
    }
    fetchInfo();
  }, []);

  async function fetchInfo() {
    try {
      const characters = await axios.get(`${data.API}/favourites`, {
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      });
      setData({ ...data, favourited: characters.data });
    } catch (err) {
      toast("Erro interno! Tente novamente mais tarde.");
    }
  }

  return (
    <>
      <Header />
      <S.Container>
        <S.CardsWrapper>
          {data.favourited.map((e) => {
            return (
              <CharacterCard
                character={e}
                key={e.id}
                favourite={true}
                fetchInfo={fetchInfo}
              />
            );
          })}
        </S.CardsWrapper>
      </S.Container>
    </>
  );
}
