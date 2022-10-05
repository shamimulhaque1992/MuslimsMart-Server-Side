import { products } from "./constants/data.js";
import Product from "./schemas/product-sechma.js";

const DefaultData = async () => {
  try {
    await Product.insertMany(products);
    console.log("data inserted successfully");
  } catch (e) {
    console.log(`Error while inserting data ${e.message}`);
  }
};
export default DefaultData;
