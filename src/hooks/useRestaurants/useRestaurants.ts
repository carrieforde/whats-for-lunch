import { useEffect, useState } from "react";
import restaurants from "../../data/restaurants.json";

const useRestaurants = () => {
  const [restaurantList, updateRestaurantList] = useState<string[] | undefined>(
    undefined
  );
  const [selected, updatedSelected] = useState<string | undefined>(undefined);

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

  useEffect(() => {
    updateRestaurantList(restaurants);
  }, []);

  return {
    selected,
    selectRestaurant,
  };
};

export default useRestaurants;
