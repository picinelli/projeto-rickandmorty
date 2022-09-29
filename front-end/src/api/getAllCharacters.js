import axios from "axios";

export default async function getAllCharacters(filter) {
  let searchFilter = `?`;
  if (filter?.name && filter?.species) {
    searchFilter = `?name=${filter.name}&species=${filter.species}`;
  } else if (filter?.name) {
    searchFilter = `?name=${filter.name}`;
  } else if (filter?.species) {
    searchFilter = `?species=${filter.species}`;
  }
  const { data } = await axios.get(
    `https://rickandmortyapi.com/api/character/${searchFilter}`
  );
  return data.results;
}
