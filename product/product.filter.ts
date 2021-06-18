import { IFilter } from "../specification/common/interfaces/filter.interface";
import { ISpecification } from "../specification/common/interfaces/specification.interface";
import { Product } from "./product.entity";

export class ProductFilter implements IFilter<Product> {
  Filter(items: Product[], spec: ISpecification<Product>): Product[] {
    return items.filter((item) => spec.isSatisfiedBy(item));
  }
}
