import { useEffect, useState } from "react";
import { IDocState } from "./useFirebaseDoc.interface";
import firebase from "firebase";

const useFirebaseDoc = <T>(path: string): IDocState<T> => {
  const [state, setState] = useState<IDocState<T>>({
    isLoading: true,
    isError: false,
    data: null,
  });

  useEffect(() => {
    let unsubscribe;

    try {
      unsubscribe = firebase
        .firestore()
        .doc(path)
        .onSnapshot((snapshot) => {
          setState({
            isLoading: false,
            isError: false,
            data: snapshot.data() as T,
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
  }, [path]);

  return state;
};

export default useFirebaseDoc;
