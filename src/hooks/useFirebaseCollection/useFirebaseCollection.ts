import { useEffect, useState } from "react";
import firebase from "firebase";
import { ICollectionState } from "./useFirebaseCollection.interface";

const useFirebaseCollection = <T>(collection: string): ICollectionState<T> => {
  const [state, setState] = useState<ICollectionState<T>>({
    isLoading: true,
    isError: false,
    data: null,
  });

  useEffect(() => {
    const docs: T[] = [];
    let unsubscribe;

    try {
      unsubscribe = firebase
        .firestore()
        .collection(collection)
        .onSnapshot((snapshot) => {
          snapshot.forEach((doc) => docs.push(doc.data() as T));

          setState({
            isLoading: false,
            isError: false,
            data: docs,
          });
        });
    } catch (error) {
      setState({
        isError: true,
        isLoading: false,
        data: null,
      });
    }

    return unsubscribe;
  }, [collection]);

  return state;
};

export default useFirebaseCollection;
