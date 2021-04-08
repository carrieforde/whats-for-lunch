import { useEffect, useState } from "react";
import firebase from "firebase";
import {
  ICollectionState,
  UseFirebaseCollection,
} from "./useFirebaseCollection.interface";

const useFirebaseCollection = <T>(
  collection: string
): UseFirebaseCollection<T> => {
  const [state, setState] = useState<ICollectionState<T>>({
    isLoading: true,
    isError: false,
    data: null,
  });

  const addData = async (data: T) => {
    try {
      const docRef = await firebase
        .firestore()
        .collection(collection)
        .add(data); // TODO: really need to upsert here, may need to check restaurant name/address already exists and then add v update

      return docRef;
    } catch (error) {
      console.error(error);
    }
  };

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

  return { data: state, addData };
};

export default useFirebaseCollection;
