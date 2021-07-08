import { Router } from "express";
import github from "./controller/github";


const routes = Router();

routes.get('/users', github.index);


export default routes;