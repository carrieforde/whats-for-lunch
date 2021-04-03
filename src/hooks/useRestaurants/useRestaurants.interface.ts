import { Restaurant } from "../../entities/restaurant.interface";

export interface UseRestaurants {
  selected: Restaurant | null;
  selectRestaurant: () => void;
  getRestaurantPhoto: () => string;
}
