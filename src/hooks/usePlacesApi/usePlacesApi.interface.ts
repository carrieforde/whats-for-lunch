export interface UsePlacesApi {
  places: any;
  findPlace: () => void;
  selected: any;
  setSelectedPlace: (index: number) => void;
}
