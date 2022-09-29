import * as S from "./style";

export default function CharacterCard() {
  return (
    <S.Container>
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
    </S.Container>
  );
}
