import express from "express";
import pageRoute from "./routers/pageRoute.js";
import dotenv from "dotenv"

dotenv.config()
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
