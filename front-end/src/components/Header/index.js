import { DebounceInput } from "react-debounce-input";

import * as S from "./style";
import getAllCharacters from "../../api/getAllCharacters";
import Menu from "../Menu";

export default function Header(props) {
  const { setCharacters, setFilterParams, filterParams } = props;

  async function handleInput(e) {
    await fetchInfo({ ...filterParams, name: e.target.value });
  }

  async function fetchInfo(filterParams) {
    setFilterParams(filterParams);

    try {
      setCharacters(await getAllCharacters(filterParams));
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <S.Container>
        <S.HeaderWrapper>
          <S.SearchWrapper>
            <DebounceInput
              minLength={2}
              debounceTimeout={300}
              placeholder="Procure um personagem..."
              onChange={(e) => handleInput(e)}
            />
          </S.SearchWrapper>
          <Menu />
        </S.HeaderWrapper>
      </S.Container>
      <S.Divider />
    </>
  );
}
