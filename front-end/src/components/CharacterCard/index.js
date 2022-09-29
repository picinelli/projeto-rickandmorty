import { useState } from "react";
import Modal from "react-modal";

import { viewCard } from "../../styles/ModalStyle";
import * as S from "./style";

export default function CharacterCard() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(!modalIsOpen);
    console.log(modalIsOpen);
  }

  function openModal() {
    setIsOpen(!modalIsOpen);
  }

  return (
    <S.Container onClick={openModal}>
      <img
        src="https://rickandmortyapi.com/api/character/avatar/320.jpeg"
        alt="character"
      />
      <S.InfoWrapper>
        <S.Name>Shnoopy Bloopers</S.Name>
        <S.Status>Alive - Alien</S.Status>
        <S.InfoDescription>Quantidade de episodios:</S.InfoDescription>
        <S.Info>294</S.Info>
        <S.InfoDescription>Data de criação:</S.InfoDescription>
        <S.Info>15/08/2020</S.Info>
      </S.InfoWrapper>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={viewCard}
        appElement={document.getElementsByClassName("root")}
        contentLabel="Character Info"
      >
        <S.ModalContainer>
          <img
            src="https://rickandmortyapi.com/api/character/avatar/320.jpeg"
            alt="character"
          />
          <S.ModalInfoWrapper>
            <h1>Shnoopy Bloopers</h1>
            <h2>Status:</h2>
            <p>Alive</p>
            <h2>Espécie:</h2>
            <p>Alien</p>
            <h2>Gênero:</h2>
            <p>Desconhecido</p>
            <h2>Quantidade de episodios:</h2>
            <p>294</p>
            <h2>Data de criação:</h2>
            <p>15/08/2020</p>
          </S.ModalInfoWrapper>
        </S.ModalContainer>
      </Modal>
    </S.Container>
  );
}
