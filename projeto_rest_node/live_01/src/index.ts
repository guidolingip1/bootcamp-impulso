import express, { Request, Response, NextFunction } from "express";

const PORT = process.env.PORT || 5000;

const app = express();

app.get("/status", (request: Request, response: Response, next: NextFunction) => {
  response.status(200).send({ foo: "Sucesso" });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running in http://localhost:${PORT}`);
});
