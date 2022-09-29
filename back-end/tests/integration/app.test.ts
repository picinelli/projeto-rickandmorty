import supertest from "supertest";
import app from "../../src/app.js";
import prisma from "../../src/database.js";

const connect = supertest(app);

describe("integration test", () => {
  // beforeEach(async () => {
  //   //await prisma.something.deleteMany();
  // })

  it("should have a test", async () => {});
});
