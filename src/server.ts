import express from "express";
import cors from "cors";
import { serverConfig } from "./configs";
import router from "./api/router";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api", router);

app.listen(serverConfig.port, () => {
  serverConfig.info();
});
