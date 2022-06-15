import express, { NextFunction, Request, Response } from "express";
import statusRoute from "./routes/status.route";
import usersRoute from "./routes/users.route";

const PORT = process.env.PORT || 5000;

// App config
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes config
app.use(statusRoute);
app.use(usersRoute);

app.get("/status", (request: Request, response: Response, next: NextFunction) => {
  response.status(200).send({ foo: "Sucesso" });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running in http://localhost:${PORT}`);
});
