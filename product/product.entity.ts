import { Entity } from "../interfaces/entity.interface";

export enum typeColor {
  Red,
  Green,
  Blue,
}

export enum typeSize {
  Small,
  Medium,
  Large,
  Yuge,
}

export type Color = keyof typeof typeColor;
export type Size = keyof typeof typeSize;

export interface ProductProps {
  name: string;
  color: Color;
  size: Size;
}

export class Product extends Entity<ProductProps> {
  private constructor(props: ProductProps) {
    super(props);
  }

  get name(): string {
    return this.props.name;
  }

  get color(): string {
    return this.props.color;
  }

  get size(): string {
    return this.props.size;
  }

  public static create(props: ProductProps): Product {
    return new Product(props);
  }
}
