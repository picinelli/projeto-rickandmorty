import * as S from "./style";
import { DebounceInput } from "react-debounce-input";
import { FaBars } from "react-icons/fa";

export default function Header() {
  function handleInput(e) {
    console.log("Procurando...");
  }

  return (
    <>
      <S.Container>
        <S.HeaderWrapper>
          <S.SearchWrapper>
            <DebounceInput
              minLength={3}
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
