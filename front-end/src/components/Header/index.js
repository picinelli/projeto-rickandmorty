import * as S from "./style";
import { DebounceInput } from "react-debounce-input";
import { FaBars } from "react-icons/fa";
import getAllCharacters from "../../api/getAllCharacters";

export default function Header(props) {
  const { setCharacters, setFilterParams, filterParams } = props;

  async function handleInput(e) {
    console.log(e)
    await fetchInfo({ ...filterParams, name: e.target.value });
  }

  async function fetchInfo(filterParams) {
    setFilterParams(filterParams);
    setCharacters(await getAllCharacters(filterParams));
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
          <FaBars
            style={{
              color: "white",
              height: "25px",
              width: "25px",
              position: "absolute",
              right: "2rem",
            }}
          />
        </S.HeaderWrapper>
      </S.Container>
      <S.Divider />
    </>
  );
}
