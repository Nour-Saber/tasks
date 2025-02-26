import { getData, getFakeData } from "../../utils/getData.js";

export const getAllproductsController = async (req, res) => {
  const allproducts = await getFakeData();
  res.send(allproducts);
};
export const getproductController = async (req, res) => {
  const id = req.params.id;
  const products = getFakeData();
  const product = products.find((prod) => prod.product_id === +id);
  if (!product) return res.status(400).send(`No product! found`);
  res.send(product);
};
