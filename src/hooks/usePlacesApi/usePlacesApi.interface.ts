import { PlaceApiResponse } from "../../entities/PlaceApi.interface";
import { Restaurant } from "../../entities/restaurant.interface";
export interface UsePlacesApi {
  places?: PlaceApiResponse[];
  findPlaceByName: (entityName: string) => void;
  selectedPlace?: PlaceApiResponse;
  setSelectedPlace: (index: number) => void;
  newRestaurant?: Restaurant;
  setNewRestaurant: (retaurant: Restaurant) => void;
}
