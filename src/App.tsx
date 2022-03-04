import { useEffect, useState } from "react";
import useApi from "./hooks/useApi.js";

function App() {
  const { getNumberOfSpaceships } = useApi();
  let [numberOfSpaceships, setNumberOfSpaceships] = useState(0);

  useEffect(() => {
    (async () => {
      const numberOfSpaceships = await getNumberOfSpaceships();
      setNumberOfSpaceships(numberOfSpaceships);
    })();
  }, []);
  console.log(numberOfSpaceships);

  return (
    <div id="background-container">
      <header id="header-title">Star Wars Test</header>
      <main id="main-container">
        <h2>Starships:</h2>
        <p id="total-ships">Total ships: {numberOfSpaceships}</p>
        <h2>Starships by class:</h2>
      </main>
    </div>
  );
}

export default App;
