import express from "express";
import dotenv from "dotenv"
import conn from "./db.js"
import pageRoute from "./routers/pageRoute.js";

dotenv.config()
conn()
const app = express();

//Template engine
app.set("view engine", "ejs");
//Middleware
app.use(express.static("public"));

app.use("/", pageRoute);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`App started on the ${port} port`);
});
