import fs from "fs/promises";

export const getStudentsData = async () => {
  try {
    const studentsData = await fs.readFile("students.json", "utf-8");

    return JSON.parse(studentsData);
  } catch (err) {
    console.log(`error`);
  }
};

export const getUsersData = async () => {
  try {
    const usersData = await fs.readFile("users.json", "utf-8");

    return JSON.parse(usersData);
  } catch (err) {
    console.log(`error`);
  }
};
