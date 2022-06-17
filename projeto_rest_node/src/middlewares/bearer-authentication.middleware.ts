import { Request, Response, NextFunction } from "express";
import ForbiddenError from "../models/errors/forbidden.error.model";
import JWT from "jsonwebtoken";
import userRepository from "../repositories/user.repository";

async function bearerAuthenticationMiddleware(request: Request, response: Response, next: NextFunction) {
  try {
    const authorizationHeader = request.headers["authorization"];

    if (!authorizationHeader) {
      throw new ForbiddenError("Credentials not informed");
    }

    const [authenticationType, token] = authorizationHeader.split(" ");

    if (authenticationType !== "Bearer" || !token) {
      throw new ForbiddenError("Invalid authentication type");
    }

    const tokenPayload = JWT.verify(token, "my_secret_key");

    if (typeof tokenPayload !== "object" || !tokenPayload.sub) {
      throw new ForbiddenError("Invalid token!");
    }

    const user = {
      uuid: tokenPayload.sub,
      username: tokenPayload.username,
    };

    request.user = user;

    next();
  } catch (error) {
    next();
  }
}

export default bearerAuthenticationMiddleware;
