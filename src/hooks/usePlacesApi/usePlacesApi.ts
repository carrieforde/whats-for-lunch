import axios from "axios";
import { useState, useEffect } from "react";
import { UsePlacesApi } from "./usePlacesApi.interface";
import {
  PlaceApiResponse,
  PlaceWithDetail,
} from "../../entities/PlaceApi.interface";
import { createRestaurantRecord } from "../../utilities/place";
import { Restaurant } from "../../entities/restaurant.interface";
import useFirebaseCollection from "../useFirebaseCollection/useFirebaseCollection";

const PLACES_ENDPOINT = "/maps/api/place/findplacefromtext/json";
const PLACES_DETAIL_ENDPOINT = "/maps/api/place/details/json";

const usePlacesApi = (): UsePlacesApi => {
  const { addData } = useFirebaseCollection("restaurants");
  const [places, setPlaces] = useState<PlaceApiResponse[] | undefined>(
    undefined
  );

  const [selectedPlace, setSelected] = useState<PlaceApiResponse | undefined>(
    undefined
  );

  const [selectedPlaceWithDetail, setPlaceDetails] = useState<
    PlaceWithDetail | undefined
  >(undefined);

  const [newRestaurant, setNewRestaurant] = useState<Restaurant | undefined>(
    undefined
  );

  // Add state to hold place details for use outside hook.
  // Add state to hold processed record.

  const findPlaceByName = async (entityName: string) => {
    try {
      const res = await axios({
        method: "get",
        url: PLACES_ENDPOINT,
        baseURL: process.env.REACT_APP_PLACES_BASE_URL,
        params: {
          input: entityName,
          inputtype: "textquery",
          fields:
            "business_status,formatted_address,geometry,icon,name,place_id,plus_code,types,opening_hours,price_level,rating,user_ratings_total",
          key: process.env.REACT_APP_GOOGLE_API_KEY,
          type: "restaurant",
          location_bias: "circle:5000@37.579200,-122.319430",
        },
      });
      const data = res.data;
      setPlaces(data?.candidates);
    } catch (error) {
      console.error(error);
    }
  };

  const setSelectedPlace = (index: number) => {
    const _selected = places ? places[index] : undefined;
    setSelected(_selected);
  };

  const findPlaceDetailByPlaceID = async (placeId: PlaceApiResponse) => {
    try {
      const res = await axios({
        method: "get",
        url: PLACES_DETAIL_ENDPOINT,
        baseURL: process.env.REACT_APP_PLACES_BASE_URL,
        params: {
          place_id: placeId.place_id,
          key: process.env.REACT_APP_GOOGLE_API_KEY,
          fields:
            "address_component,adr_address,photo,formatted_phone_number,opening_hours,website",
        },
      });
      const data = res.data;
      setPlaceDetails({
        place: placeId,
        detail: data,
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (selectedPlace) {
      findPlaceDetailByPlaceID(selectedPlace);
    }
  }, [selectedPlace]);

  useEffect(() => {
    if (selectedPlaceWithDetail) {
      const restaurant = createRestaurantRecord(selectedPlaceWithDetail);
      const newDocRef = addData(restaurant);
      console.log(newDocRef);
    }
  }, [selectedPlaceWithDetail]);

  return {
    places,
    findPlaceByName,
    selectedPlace,
    setSelectedPlace,
    newRestaurant,
    setNewRestaurant,
  };
};

export default usePlacesApi;
