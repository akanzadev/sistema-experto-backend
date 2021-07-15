const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const config = require("./config/config");
const { getConnection } = require("./db/connection");
const questionRouter = require("./questions/question.routes");
const userRouter = require("./user/user.routes");
const evaluationRouter = require("./evaluation/evaluation.routes");
const authRouter = require("./auth/auth.routes");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(questionRouter);
app.use(userRouter);
app.use(evaluationRouter);
app.use(authRouter);
// Conectando a mongodb
getConnection();

app.listen(config.api.PORT, (e) => {
  e
    ? console.log("Error al iniciar servidor", e)
    : console.log("Servidor iniciado en el puerto", config.api.PORT);
});
