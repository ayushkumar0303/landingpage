import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

import {UserInput} from './database.js'


const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", async(req, res) => {
  const {name, email, message} =req.body;
  await UserInput(name, email,message);
  res.sendFile(__dirname + "/public/thankyouPage.html");
});
app.post("/back", async(req, res) => {
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
