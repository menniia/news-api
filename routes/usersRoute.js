import { Router } from "express";
import { login, signUp } from "../controllers/usersController.js";

const usersRoute = Router()

usersRoute.post("users/auth/sign-in", signUp);

usersRoute.post("users/auth/login", login);


export default usersRoute;