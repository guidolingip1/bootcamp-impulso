import { Router, Request, Response, NextFunction } from "express";
import { request } from "http";
import { StatusCodes } from "http-status-codes";

const usersRoute = Router();

usersRoute.get("/users", (request: Request, response: Response, next: NextFunction) => {
  const users = [{ userName: "Renan" }];
  response.status(StatusCodes.OK).send(users);
});

usersRoute.get("/users/:uuid", (request: Request<{ uuid: string }>, response: Response, next: NextFunction) => {
  const uuid = request.params.uuid;

  response.status(StatusCodes.OK).send({ uuid });
});

usersRoute.post("/users", (request: Request, response: Response, next: NextFunction) => {
  const newUser = request.body;
  response.status(StatusCodes.CREATED).send(newUser);
});

usersRoute.put("/users/:uuid", (request: Request<{ uuid: string }>, response: Response, next: NextFunction) => {
  const uuid = request.params.uuid;
  const modifiedUser = request.body;
  modifiedUser.uuid = uuid;

  response.status(StatusCodes.OK).send(modifiedUser);
});

usersRoute.delete("/users/:uuid", (request: Request<{ uuid: string }>, response: Response, next: NextFunction) => {
  response.sendStatus(StatusCodes.OK);
});

export default usersRoute;
