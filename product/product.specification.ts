import { ISpecification } from "../specification/common/interfaces/specification.interface";
import { Product } from "./product.entity";

export class ColorSpecification implements ISpecification<Product> {
  constructor(private color: string) {}
  isSatisfiedBy(target: Product): boolean {
    return target.color === this.color;
  }
}

export class SizeSpecification implements ISpecification<Product> {
  constructor(private size: string) {}

  isSatisfiedBy(target: Product): boolean {
    return target.size === this.size;
  }
}

export class AndSpecification implements ISpecification<Product> {
  constructor(
    private first: ISpecification<Product>,
    private second: ISpecification<Product>,
  ) {}

  isSatisfiedBy(target: Product): boolean {
    return (
      this.first.isSatisfiedBy(target) && this.second.isSatisfiedBy(target)
    );
  }
}

export class OrSpecification implements ISpecification<Product> {
  constructor(
    private first: ISpecification<Product>,
    private second: ISpecification<Product>,
  ) {}

  isSatisfiedBy(target: Product): boolean {
    return (
      this.first.isSatisfiedBy(target) || this.second.isSatisfiedBy(target)
    );
  }
}
