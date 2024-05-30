import express from "express";
import path from "path";
import cors from "cors";
import morgan from "morgan";
import userRoute from "routes/user";
const app = express();

app.use(cors());
app.use(morgan("combined"));
app.use("/", express.static(path.join(__dirname, "/public")));
app.use(express.json());

app.use("/user", userRoute);
app.all("*", (req, res) => {
  res.status(404);
  res.json({ message: "404 Not Found" });
});
export default app;
