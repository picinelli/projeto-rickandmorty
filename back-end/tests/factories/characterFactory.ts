import { faker } from "@faker-js/faker";

function createCharacterInfo() {
  return {
    id: Math.floor(Math.random() * 10),
    name: faker.internet.userName(),
    status: faker.internet.userName(),
    species: faker.internet.userName(),
    gender: faker.internet.userName(),
    type: faker.internet.userName(),
    origin: {
      name: faker.internet.userName(),
      url: faker.internet.userName(),
    },
    location: {
      name: faker.internet.userName(),
      url: faker.internet.userName(),
    },
    image: faker.internet.userName(),
    episode: [faker.internet.userName()],
    url: faker.internet.userName(),
    created: faker.date.past(),
  };
}

const characterFactory = {
  createCharacterInfo,
};

export default characterFactory;
