import { faker } from "@faker-js/faker";

function createLogin(passwordLength = 17) {
  const password = faker.internet.password(passwordLength);
  return {
    name: faker.internet.userName(),
    password,
    passwordConfirmation: password,
  };
}

function createUser( passwordLength = 17) {
  const password = faker.internet.password(passwordLength);
  return {
    id: 1,
    name: "teste",
    password,
    passwordConfirmation: password,
    createdAt: new Date(Date.now()),
    updatedAt: new Date(Date.now()),
  };
}

const userFactory = {
  createLogin,
  createUser
};

export default userFactory;
