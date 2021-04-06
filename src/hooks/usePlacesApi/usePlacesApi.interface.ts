import { PlaceApiResponse } from "../../entities/PlaceApi.interface";
export interface UsePlacesApi {
  places?: PlaceApiResponse[];
  findPlaceByName: (entityName: string) => void;
  selectedPlace?: PlaceApiResponse;
  setSelectedPlace: (index: number) => void;
}
