import express, { json, Request, Response } from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(json());

app.get("/", async (req: Request, res: Response) => {
  res.send("Hello World");
});

export default app;
