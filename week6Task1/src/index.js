import express from "express";

import morgan from "morgan";
import { logger } from "./middlewares/logger.js";
import { getStudentsData, getUsersData } from "./utils/getData.js";

const PORT = 3000;
const app = express();

app.use(morgan("dev"));
app.use(logger);
app.use(express.json());
app.listen(PORT, () => {
  console.log(`listen on port ${PORT}`);
});

app.get("/students", async (req, res) => {
  const students = await getStudentsData();
  res.status(200).send(students);
});
app.get("/students/:id", async (req, res) => {
  const students = await getStudentsData();
  const id = req.params.id;
  const student = students.find((stud) => stud.id === +id);
  if (!student) return res.status(400).send(`Not student found!`);
  res.status(200).send(student);
});
app.post("/auth/login", async (req, res) => {
  const { email, password } = req.body;
  const users = await getUsersData();
  const user = users.find((user) => user.email === email);
  if (!user) return res.status(400).send(`not found user`);
  if (user.password !== password)
    return res.status(400).send(`invalid password!`);
  res.status(200).send(user);
});
