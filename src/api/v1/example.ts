import { Router } from "express";
import { create } from "../../controllers";

export default Router()
    .post("/", create);
