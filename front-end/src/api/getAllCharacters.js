import axios from "axios";

export default async function getAllCharacters() {
  const { data } = await axios.get("https://rickandmortyapi.com/api/character");
  return data.results;
}
