export interface Page<T> {
  content: T[],
  last: boolean,
  first: boolean,
  empty: boolean,
  totalPages: number,
  size: number,
  totalElements: number,
  number: number,
  numberOfElements: number,
}
