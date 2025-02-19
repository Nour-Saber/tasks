import express from "express";
import { getDataFromFile, getFakeData } from "./getData.js";


const app = express();
const PORT = 5000;

app.get("/products", async (req, res) => {
  const products = await getDataFromFile();
  res.send(products);
});

app.get("/products/:name", async (req, res) => {
  const name = req.params.name;
  const products = await getDataFromFile();
  const prods = products.find((prod) => prod.title === name);
  if (!prods) return res.send("NO products found");
  res.send(prods);
});

app.get("/food", (req, res) => {
  const data = getFakeData();
  res.send(data);
});

app.get("/food/description", (req, res) => {
  const data = getFakeData();
  const description = data.map((item) => item.description);
  res.send(description);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

