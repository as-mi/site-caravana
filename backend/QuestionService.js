const Question = require("./Question.js");

async function postQuestion(email, question) {
  const newQuestion = new Question({
    email,
    question,
  });

  await newQuestion.save();
}

async function getQuestions() {
  const questions = await Question.find();

  return questions;
}

async function getQuestion(id) {
  const question = await Question.findById(id);

  return question;
}

async function resolveQuestion(id) {
  const question = await getQuestion(id);

  question.resolved = !question.resolved;

  await question.save();
}

async function deleteQuestion(id) {
  await Question.findByIdAndDelete(id);
}

module.exports = {
  postQuestion,
  getQuestions,
  getQuestion,
  resolveQuestion,
  deleteQuestion,
};
