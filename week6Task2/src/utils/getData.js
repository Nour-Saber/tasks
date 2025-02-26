import { faker } from "@faker-js/faker";
import fs from "fs/promises";

const getData = async () => {
  try {
    const data = await fs.readFile("students.json", "utf-8");
    return json.parse(data);
  } catch (err) {
    console.log(`ERROR ${err.message}`);
  }
};
const getFakeData = () => {
  const fakeData = Array.from({ length: 20 }, (_, id) => {
    return {
      product_id: id + 1,
      product: faker.commerce.product(),
      product_name: faker.commerce.productName(),
      product_material: faker.commerce.productMaterial(),
    };
  });
  return fakeData;
};
export { getData, getFakeData };


