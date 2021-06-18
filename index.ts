import { Product } from "./product/product.entity";
import { ProductFilter } from "./product/product.filter";
import {
  ColorSpecification,
  SizeSpecification,
  AndSpecification,
  OrSpecification,
} from "./product/product.specification";

const apple = Product.create({
  name: "Apple",
  color: "Green",
  size: "Small",
});

const tree = Product.create({
  name: "Tree",
  color: "Green",
  size: "Large",
});

const house = Product.create({
  name: "House",
  color: "Blue",
  size: "Large",
});

const products = [apple, tree, house];

const pf = new ProductFilter();

console.log("Large Blue Products: ");
pf.Filter(
  products,
  new OrSpecification(
    new SizeSpecification("Large"),
    new ColorSpecification("Blue"),
  ),
).forEach((item) => {
  console.log(` - ${item.name} is large or blue`);
});
