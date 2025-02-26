import { Router } from "express";
import {
  getAllproductsController,
  getproductController,
} from "../../controllers/products/products.controllers.js";

const router = Router();

router.get("/products", getAllproductsController);

router.get("/products/:id", getproductController);

export { router as productsRouter };
