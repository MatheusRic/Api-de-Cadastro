import express from "express";
import userRouter from "./routes/users.routes";
import loginRouter from "./routes/login.routes";
import "dotenv/config";
import { startDatabase } from "./database";

const app = express();

app.use(express.json());

app.use("/users", userRouter);
app.use("/login", loginRouter);

app.listen(process.env.PORT || 3000, () => {
  startDatabase();
  console.log("Server is running");
});

export default app;
