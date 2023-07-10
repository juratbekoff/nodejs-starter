import { Router } from "express";

// v1 routes
import example from "./example";

export default Router()
    .use("/example", example);
