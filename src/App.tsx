import React from "react";
import Button from "./components/Button/Button";
import useRestaurants from "./hooks/useRestaurants/useRestaurants";

function App() {
  const { selected, selectRestaurant } = useRestaurants();
  return (
    <div className="App">
      <main>
        {selected && (
          <>
            <h1>On today&apos;s menu...</h1>
            <p>{selected}</p>
          </>
        )}
        {!selected && (
          <>
            <h1>Click for restaurant</h1>
            <Button
              style="flat"
              bgColor="--color-secondary-300"
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
