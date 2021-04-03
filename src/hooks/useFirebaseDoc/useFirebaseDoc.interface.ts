export interface IDocState<T> {
  isLoading: boolean;
  isError: boolean;
  data: T | null;
}
