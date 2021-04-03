import { useState } from "react";
import { UsePlacesApi } from "./usePlacesApi.interface";

import axios from "axios";

const usePlacesApi = (entityName: string): UsePlacesApi => {
  const [place, setPlace] = useState<UsePlacesApi>();

  const PLACES_PATH = `/maps/api/place/findplacefromtext/json`;

  const findPlace = async () => {
    try {
      const res = await axios({
        method: "get",
        url: PLACES_PATH,
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
      console.log(data);
      setPlace(data);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    place,
    findPlace,
  };
};

export default usePlacesApi;
