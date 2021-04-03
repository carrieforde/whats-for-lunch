import { useState } from "react";
import { UsePlacesApi } from "./usePlacesApi.interface";

const usePlacesApi = (entityName: string): UsePlacesApi => {
  const [place, setPlace] = useState<any>(undefined);

  const findPlace = async () => {
    try {
      const res = await fetch(
        `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${encodeURIComponent(
          entityName
        )}&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=${
          process.env.REACT_APP_GOOGLE_API_KEY
        }`,
        {
          mode: "no-cors",
        }
      );
      const data = await res.json();
      setPlace(data);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    place,
    findPlace,
  };
};

export default usePlacesApi;
