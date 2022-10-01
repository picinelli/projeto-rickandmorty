import supertest from "supertest";
import app from "../../../src/app";
import prisma from "../../../src/database.js";
import characterFactory from "../../factories/characterFactory";
import userFactory from "../../factories/userFactory";

beforeEach(async () => {
  await prisma.$executeRaw`DELETE FROM favourites`;
  await prisma.$executeRaw`DELETE FROM users`;
});

describe("POST /favourite", () => {
  it("given wrong schema format, should return error 400", async () => {
    const result = await supertest(app).post("/favourite").send({});
    expect(result.statusCode).toBe(400);
  });

  it("given correct schema format with no token, should receive error", async () => {
    const character = characterFactory.createCharacterInfo();
    const result = await supertest(app).post("/favourite").send(character);
    expect(result.statusCode).toBe(400);
  });

  it("given correct schema format with correct token, should post successfully", async () => {
    const character = characterFactory.createCharacterInfo();
    const token = await __SignUpSignInAndReturnToken();
    const result = await supertest(app)
      .post("/favourite")
      .send(character)
      .set({ Authorization: `Bearer ${token}` });
    expect(result.statusCode).toBe(201);
  });
});

describe("GET /favourites", () => {
  it("given no token, should receive error", async () => {
    const character = characterFactory.createCharacterInfo();
    const result = await supertest(app).get("/favourites").send(character);
    expect(result.statusCode).toBe(400);
  });

  it("given correct correct token, should get info successfully", async () => {
    const character = characterFactory.createCharacterInfo();
    const token = await __SignUpSignInAndReturnToken();
    const result = await supertest(app)
      .get("/favourites")
      .send(character)
      .set({ Authorization: `Bearer ${token}` });
    expect(result.statusCode).toBe(200);
  });
});

async function __SignUpSignInAndReturnToken() {
  const login = userFactory.createLogin();
  const signUp = await supertest(app).post("/signup").send(login);
  expect(signUp.statusCode).toBe(201);

  delete login.passwordConfirmation;

  const signInToken = await supertest(app).post("/signin").send(login);

  expect(signInToken.statusCode).toBe(200);

  return signInToken.body.token;
}
