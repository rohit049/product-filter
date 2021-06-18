import { ISpecification } from "./interfaces/specification.interface";

export abstract class Specification<T> implements ISpecification<T> {
  abstract isSatisfiedBy(target: T): boolean;
}
