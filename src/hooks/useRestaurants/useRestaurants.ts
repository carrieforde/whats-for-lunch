import { useState } from "react";
import restaurant from "../../data/resturant.json";
import { Restaurant } from "../../entities/restaurant.interface";
import useFirebaseCollection from "../useFirebaseCollection/useFirebaseCollection";

const useRestaurants = () => {
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
    return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${restaurant.photo}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`;
  };

  return {
    selected,
    selectRestaurant,
    getRestaurantPhoto,
  };
};

export default useRestaurants;
