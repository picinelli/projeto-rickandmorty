import { useContext, useEffect, useState } from "react";
import dayjs from "dayjs";
import Modal from "react-modal";
import { toast } from "react-toastify";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { IconContext } from "react-icons";

import { viewCard } from "../../styles/ModalStyle";
import * as S from "./style";
import axios from "axios";
import DataContext from "../../providers/DataContext";

export default function CharacterCard(props) {
  let { character, favourite, fetchInfo } = props;
  const { data } = useContext(DataContext);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (isFavorite !== favourite) {
      setIsFavorite(isFavorite);
    }
  }, []);

  function closeModal() {
    setIsOpen(!modalIsOpen);
  }

  function openModal() {
    setIsOpen(!modalIsOpen);
  }

  async function chooseFavourite(e) {
    e.stopPropagation();
    if (!data.token) {
      return toast("Você precisa estar logado para favoritar");
    }
    try {
      await axios.post(`${data.API}/favourite`, character, {
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      });
      fetchInfo();
    } catch (err) {
      return toast("Algum erro ocorreu! Tente novamente mais tarde.");
    }
  }

  return (
    <S.Container
      onClick={() => {
        openModal();
      }}
    >
      <img src={character.image} alt="character" />
      <S.InfoWrapper>
        <S.Name>{character.name}</S.Name>
        <S.Status>
          {character.status} - {character.species}
        </S.Status>
        <S.InfoDescription>Quantidade de episodios:</S.InfoDescription>
        <S.Info>{character.episode.length}</S.Info>
        <S.InfoDescription>Data de criação:</S.InfoDescription>
        <S.Info>{dayjs(character.created).format("DD/MM/YYYY")}</S.Info>
        {isFavorite || favourite ? (
          <IconContext.Provider
            value={{
              className: "selected-icon",
            }}
          >
            <AiFillStar
              onClick={(e) => {
                chooseFavourite(e);
              }}
            />
          </IconContext.Provider>
        ) : (
          <IconContext.Provider
            value={{
              className: "normal-icon",
            }}
          >
            <AiOutlineStar
              onClick={(e) => {
                chooseFavourite(e);
              }}
            />
          </IconContext.Provider>
        )}
      </S.InfoWrapper>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={viewCard}
        appElement={document.getElementsByClassName("root")}
        contentLabel="Character Info"
      >
        <S.ModalContainer>
          <img src={character.image} alt="character" />
          <S.ModalInfoWrapper>
            <h1>{character.name}</h1>
            <h2>Status:</h2>
            <p>{character.status}</p>
            <h2>Espécie:</h2>
            <p>{character.species}</p>
            <h2>Gênero:</h2>
            <p>{character.gender}</p>
            <h2>Quantidade de episodios:</h2>
            <p>{character.episode.length}</p>
            <h2>Data de criação:</h2>
            <p>{dayjs(character.created).format("DD/MM/YYYY")}</p>
          </S.ModalInfoWrapper>
        </S.ModalContainer>
      </Modal>
    </S.Container>
  );
}
