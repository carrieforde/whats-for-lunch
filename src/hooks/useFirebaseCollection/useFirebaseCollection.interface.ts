export interface ICollectionState<T> {
  isLoading: boolean;
  isError: boolean;
  data: T[] | null;
}
