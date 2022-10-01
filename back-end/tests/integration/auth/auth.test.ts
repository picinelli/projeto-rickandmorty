import supertest from "supertest";
import app from "../../../src/app";
import prisma from "../../../src/database.js";
import userFactory from "../../factories/userFactory.js";

const login = userFactory.createLogin();

beforeEach(async () => {
  await prisma.$executeRaw`DELETE FROM favourites`;
  await prisma.$executeRaw`DELETE FROM users`;
});

describe("POST /signup", () => {
  it("given valid name and password, should return 201 on 1st req and 409 on 2nd req", async () => {
    const result = await supertest(app).post("/signup").send(login);
    expect(result.statusCode).toBe(201);

    const result2 = await supertest(app).post("/signup").send(login);
    expect(result2.statusCode).toBe(409);
  });

  it("given wrong name schema format, should return 400", async () => {
    const login = userFactory.createLogin();
    login.name = "<5";
    const result = await supertest(app).post("/signup").send(login);
    expect(result.statusCode).toBe(400);
  });

  it("given wrong password schema format, should return 400", async () => {
    const login = userFactory.createLogin();
    login.password = "<5";
    const result = await supertest(app).post("/signup").send(login);
    expect(result.statusCode).toBe(400);
  });

  it("given wrong passwordConfirmation, should return 400", async () => {
    const login = userFactory.createLogin();
    login.passwordConfirmation = "notSame";
    const result = await supertest(app).post("/signup").send(login);
    expect(result.statusCode).toBe(400);
  });
});

describe("POST /signin", () => {
  it("given non-existent name, should return 404", async () => {
    const login = userFactory.createLogin();
    delete login.passwordConfirmation;

    const result = await supertest(app).post("/signin").send(login);
    expect(result.statusCode).toBe(404);
  });

  it("given wrong credencials, should return 403", async () => {
    const login = userFactory.createLogin();
    await supertest(app).post("/signup").send(login);

    delete login.passwordConfirmation;

    const result = await supertest(app)
      .post("/signin")
      .send({ ...login, password: login.password + "wrongpass" });

    expect(result.statusCode).toBe(403);
  });

  it("given valid credencials, should return 200", async () => {
    const login = userFactory.createLogin();
    await supertest(app).post("/signup").send(login);
    delete login.passwordConfirmation;

    const result = await supertest(app).post("/signin").send(login);

    expect(result.statusCode).toBe(200);
  });

  it("given wrong name schema format, should return 400", async () => {
    const login = userFactory.createLogin();
    login.name = "<5";
    const result = await supertest(app).post("/signin").send(login);
    expect(result.statusCode).toBe(400);
  });

  it("given wrong password schema format, should return 400", async () => {
    const login = userFactory.createLogin();
    login.password = "<5";
    const result = await supertest(app).post("/signin").send(login);
    expect(result.statusCode).toBe(400);
  });
});
