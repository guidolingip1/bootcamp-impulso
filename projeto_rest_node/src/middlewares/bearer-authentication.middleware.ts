import { Request, Response, NextFunction } from "express";
import ForbiddenError from "../models/errors/forbidden.error.model";

function bearerAuthenticationMiddleware(request: Request, response: Response, next: NextFunction) {
  try {
    const authorizationHeader = request.headers["authorization"];

    if (!authorizationHeader) {
      throw new ForbiddenError("Credentials not informed");
    }

    const [authenticationType, token] = authorizationHeader.split(" ");

    next();
  } catch (error) {
    next();
  }
}

export default bearerAuthenticationMiddleware;
