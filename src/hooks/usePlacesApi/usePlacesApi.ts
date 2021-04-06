import axios from "axios";
import { useState, useEffect } from "react";
import { UsePlacesApi } from "./usePlacesApi.interface";
import {
  PlaceApiResponse,
  PlaceWithDetail,
} from "../../entities/PlaceApi.interface";
import { createRestaurantRecord } from "../../utilities/place";

const PLACES_ENDPOINT = "/maps/api/place/findplacefromtext/json";
const PLACES_DETAIL_ENDPOINT = "/maps/api/place/details/json";

const usePlacesApi = (): UsePlacesApi => {
  const [places, setPlaces] = useState<PlaceApiResponse[] | undefined>(
    undefined
  );
  const [selectedPlace, setSelected] = useState<PlaceApiResponse | undefined>(
    undefined
  );
  const [selectedPlaceWithDetail, setPlaceDetails] = useState<
    PlaceWithDetail | undefined
  >(undefined);

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
      console.log(error);
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
        detail: data.data?.candidates,
      });
    } catch (error) {
      console.log(error);
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
      console.log(restaurant);
      // insert restaurant into firebase
    }
  }, [selectedPlaceWithDetail]);

  // useEffect(() => {
  //   if (selectedPlace) {
  //     const selectedPlaceDetails = findPlaceDetailByPlaceID(selectedPlace);
  //     const processed = createRestaurantRecord();
  //     // Save processed to state
  //   }
  // }, [selectedPlace]);

  // useEffect(
  //   () => {
  //     // Create res
  //     // send data to firebase. probably use something from one of the firebase hooks.
  //   },
  //   [
  //     // whatever the name of the state variable is for a processed record
  //   ]
  // );

  return {
    places,
    findPlaceByName,
    selectedPlace,
    setSelectedPlace,
  };
};

export default usePlacesApi;
