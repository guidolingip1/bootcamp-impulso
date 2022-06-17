import { NextFunction, Request, Response } from "express";
import ForbiddenError from "../models/errors/forbidden.error.model";
import userRepository from "../repositories/user.repository";

async function basicAuthenticationMiddleware(request: Request, response: Response, next: NextFunction) {
  try {
    const authorizationHeader = request.headers["authorization"];

    if (!authorizationHeader) {
      throw new ForbiddenError("User not authenticated");
    }

    // Basic 19d1j98edj1 = token de autenticação http = usuario:senha

    const [authenticationType, token] = authorizationHeader.split(" ");

    if (authenticationType !== "Basic" || !token) {
      throw new ForbiddenError("Invalid authentication type");
    }

    // Pegamos o token e descriptografamos e atribuimos a os valores username e senha
    const tokenContent = Buffer.from(token, "base64").toString("utf-8");

    const [username, password] = tokenContent.split(":");

    if (!username || !password) {
      throw new ForbiddenError("Credentials not included");
    }

    const user = await userRepository.findByUsernameAndPassword(username, password);

    if (!user) {
      throw new ForbiddenError("Invalid user or password");
    }

    request.user = user;
    next();
  } catch (error) {}
}

export default basicAuthenticationMiddleware;
