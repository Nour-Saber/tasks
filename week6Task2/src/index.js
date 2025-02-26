import express from "express";
import morgan from "morgan";
import { logger } from "./middlewares/logger.middleware.js";

import { productsRouter } from "./routes/products/products.router.js";

const app = express();

app.use(morgan("dev"));
app.use(logger);
app.use(productsRouter);

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Listen on port ${PORT}`);
});
