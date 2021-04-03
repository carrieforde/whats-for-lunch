import axios from "axios";
import { useState } from "react";
import { UsePlacesApi } from "./usePlacesApi.interface";

const ENDPOINT = "/maps/api/place/findplacefromtext/json";

const usePlacesApi = (entityName: string): UsePlacesApi => {
  const [places, setPlaces] = useState<any>(undefined);
  const [selected, setSelected] = useState<any>(undefined);

  const findPlace = async () => {
    try {
      const data = await axios({
        method: "GET",
        url: ENDPOINT,
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

      if (data) {
        setPlaces(data.data?.candidates);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const setSelectedPlace = (index: number) => {
    const _selected = places[index];
    setSelected(_selected);
  };

  return {
    places,
    findPlace,
    selected,
    setSelectedPlace,
  };
};

export default usePlacesApi;
