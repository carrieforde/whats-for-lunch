import React, { ReactElement, useEffect } from "react";
import Button from "./components/Button/Button";
import Card from "./components/Card/Card";
import LinkButton from "./components/LinkButton/LinkButton";
import useRestaurants from "./hooks/useRestaurants/useRestaurants";

import usePlacesApi from "./hooks/usePlacesApi/usePlacesApi";
import useRestaurants from "./hooks/useRestaurants/useRestaurants";

function App(): ReactElement {
  const { selected, selectRestaurant } = useRestaurants();
  const { places, findPlaceByName, setSelectedPlace } = usePlacesApi();

  useEffect(() => {
    findPlaceByName("blue bottle");
  }, []);

  useEffect(() => {
    if (Array.isArray(places)) {
      setSelectedPlace(0);
    }
  }, [places]);

  return (
    <div className="App">
      <main>
        {selected && (
          <Card title={selected.name} imageUrl={getRestaurantPhoto()}>
            <address>
              {selected.address.street}
              <br />
              {selected.address.city}, {selected.address.state}{" "}
              {selected.address.zipcode}
            </address>
            <p>
              <a href={`tel:${selected.phone}`}>{selected.phone}</a>
            </p>
            <LinkButton
              href={selected.website}
              style="flat"
              bgColor="--color-primary-800"
              color="--color-primary-100"
            >
              Order Now
            </LinkButton>
          </Card>
        )}
        {!selected && (
          <>
            <h1>Click for restaurant</h1>
            <Button
              style="flat"
              bgColor="--color-secondary-200"
              color="--color-secondary-900"
              onClick={selectRestaurant}
            >
              Find Lunch
            </Button>
          </>
        )}
      </main>
    </div>
  );
}

export default App;
