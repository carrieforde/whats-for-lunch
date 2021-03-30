import React from 'react';
import './App.css';
import Button from './components/Button/Button';
import useRestaurants from './hooks/useRestaurants/useRestaurants';

function App() {
  const { selected, selectRestaurant } = useRestaurants();
  return (
    <div className="App">
      <main>
        {selected && (
          <>
            <h1>On today's menu...</h1>
            <p>{selected}</p>
          </>
        )}
        {!selected && (
          <>
            <h1>Click for restaurant</h1>
            <Button onClick={selectRestaurant}>Find Lunch</Button>
          </>
        )}
      </main>
    </div>
  );
}

export default App;
