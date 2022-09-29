import { Dropdown } from "react-dropdown-now";
import "react-dropdown-now/style.css";
import getAllCharacters from "../../api/getAllCharacters";

import * as S from "./style";

export default function FilterDropdown(props) {
  const { setCharacters, setFilterParams, filterParams } = props;

  async function handleChange(e) {
    if (e.value === "Humanos") {
      await fetchInfo({ ...filterParams, species: "Human" });
    } else if (e.value === "Aliens") {
      await fetchInfo({ ...filterParams, species: "Alien" });
    } else if (e.value === "Todos") {
      await fetchInfo({ ...filterParams, species: null });
    }
  }

  async function fetchInfo(filterParams) {
    //TODO: COMMIT
    //FIXME: Colocar setFilterParams aqui
    setFilterParams(filterParams);
    setCharacters(await getAllCharacters(filterParams));
  }

  return (
    <S.DropdownWrapper>
      <Dropdown
        baseClassName="rdn"
        className="filter"
        placeholder="Todos"
        matcher={function noRefCheck() {}}
        menu="div"
        onChange={(e) => {
          handleChange(e);
        }}
        options={["Todos", "Humanos", "Aliens"]}
        value="Todos"
      />
    </S.DropdownWrapper>
  );
}
