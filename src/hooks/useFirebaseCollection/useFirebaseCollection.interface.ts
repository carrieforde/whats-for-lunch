import firebase from "firebase";

export interface ICollectionState<T> {
  isLoading: boolean;
  isError: boolean;
  data: T[] | null;
}

export interface UseFirebaseCollection<T> {
  data: ICollectionState<T>;
  addData: (
    data: T
  ) => Promise<
    | firebase.firestore.DocumentReference<firebase.firestore.DocumentData>
    | undefined
  >;
}
