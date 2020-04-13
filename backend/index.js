require("dotenv").config();

/*
.env
ADMIN_NAME=
ADMIN_PASSWORD=
SECRET=
PORT=
*/

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const path = require("path");

const mongoose = require("mongoose");
const auth = require("./auth.js");

const QuestionService = require("./QuestionService.js");

const app = express();
app.use(bodyParser.json());
app.use(cookieParser());

// DB Connection
mongoose
  .connect("mongodb://localhost:27017/caravana-educationala", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((err) => {
    console.log(":::" + err);
  });

app.post("/questions/new", async (req, res) => {
  try {
    await QuestionService.postQuestion(req.body.email, req.body.question);
    res.status(201).send();
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.patch("/questions/resolve/:id", auth, async (req, res) => {
  try {
    await QuestionService.resolveQuestion(req.params.id);
    res.status(200).send();
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get("/questions/all", auth, async (req, res) => {
  try {
    const questions = await QuestionService.getQuestions();
    res.status(200).send(questions);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get("/questions/:id", auth, async (req, res) => {
  try {
    const question = await QuestionService.getQuestion(req.params.id);

    if (!question) {
      throw new Error("Question not found");
    }

    res.status(200).send(question);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get("/admin/dashboard", auth, async (req, res) => {
  res.sendFile(path.join(__dirname + "/views/dashboard.html"));
});

app.get("/admin/login", async (req, res) => {
  res.sendFile(path.join(__dirname + "/views/login.html"));
});

app.post("/admin/login", async (req, res) => {
  const matched = await bcrypt.compare(
    req.body.password,
    process.env.ADMIN_HASH
  );

  if (!matched) {
    return res.status(403).send("Invalid password");
  }

  const token = await jwt.sign(
    {
      exp: Math.floor(Date.now() / 1000) + 60 * 60, // 1 hour
      data: process.env.ADMIN_NAME + new Date(),
    },
    process.env.SECRET
  );

  res.status(200).send({ token });
});

const port = process.env.PORT || 3000;

app.listen(port, async () => {
  process.env.SALT = bcrypt.genSaltSync(10);

  process.env.ADMIN_HASH = await bcrypt.hash(
    process.env.ADMIN_PASSWORD,
    process.env.SALT
  );

  console.log(`Server running on port ${port}`);
});
