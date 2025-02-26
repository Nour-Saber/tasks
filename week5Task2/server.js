import express from 'express';
import { getStudentsData , getUsersData } from './src/utils/getData.js';

const app = express();
const PORT = 3000;
  app.listen(PORT,()=>{
    console.log(`listen on port ${PORT}`);
  });

app.get("/students" , async(req,res)=>{
    const students = await getStudentsData();
    res.send(students);
})

app.get("/students/:id" , async (req,res)=>{
    const students = await  getStudentsData();
    const id = req.params.id;
    const student = students.find( std => std.id === +id);
    if(!student) return res.send(`not student found!`)
    res.send(student);
})

app.post("/auth/login", async (req, res) => {
    const { email, password } = req.body;
    const users = await getUsersData();
    const user = users.find((user) => user.email === email);
    if (!user) return res.status(400).send(`not found user`);
    if (user.password !== password)
      return res.status(400).send(`invalid password!`);
    res.status(200).send(user);
  });