import { ISpecification } from "./specification.interface";

export interface IFilter<T> {
  Filter: (items: T[], spec: ISpecification<T>) => T[];
}
