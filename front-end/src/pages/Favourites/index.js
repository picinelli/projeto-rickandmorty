import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import getAllCharacters from "../../api/getAllCharacters";
import CharacterCard from "../../components/CharacterCard";
import Header from "../../components/Header";
import DataContext from "../../providers/DataContext";
import * as S from "./style";

export default function Favourites() {
  const [favourited, setFavourited] = useState([]);
  const { data } = useContext(DataContext);

  useEffect(() => {
    async function fetchInfo() {
      try {
        if (data.token) {
          const characters = await axios.get(`${data.API}/favourites`, {
            headers: {
              Authorization: `Bearer ${data.token}`,
            },
          });
          setFavourited(characters.data);
        } else {
          toast("Você precisa criar uma conta para ter favoritos");
        }
      } catch (err) {
        toast("Erro interno! Tente novamente mais tarde.");
      }
    }
    fetchInfo();
  }, []);

  return (
    <>
      <Header />
      <S.Container>
        <S.CardsWrapper>
          {favourited.map((e) => {
            return <CharacterCard character={e} key={e.id} favourite={true} />;
          })}
        </S.CardsWrapper>
      </S.Container>
    </>
  );
}
