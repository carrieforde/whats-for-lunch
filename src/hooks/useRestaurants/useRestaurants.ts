import { useState } from "react";
import { Restaurant } from "../../entities/restaurant.interface";
import useFirebaseCollection from "../useFirebaseCollection/useFirebaseCollection";
import { UseRestaurants } from "./useRestaurants.interface";

const useRestaurants = (): UseRestaurants => {
  const {
    data: restaurantList,
  }: { data: Restaurant[] | null } = useFirebaseCollection("restaurants");

  const [selected, updatedSelected] = useState<Restaurant | null>(null);

  const selectRestaurant = () => {
    if (!restaurantList) {
      return undefined;
    }

    // generate a random number between 0 and list length - 1.
    const min = 0;
    const max = Math.floor(restaurantList?.length - 1);
    const index = Math.floor(Math.random() * (max - min + 1));

    updatedSelected(restaurantList[index]);
  };

  const getRestaurantPhoto = () => {
    return selected?.photo
      ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${selected.photo}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
      : "";
  };

  return {
    selected,
    selectRestaurant,
    getRestaurantPhoto,
  };
};

export default useRestaurants;
