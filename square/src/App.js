import { BoxData } from "./Data/BoxData.js";
import Box from "./Components/Box.js";
import { useState } from "react";

export default function App() {
  const [squares, setSquares] = useState(BoxData);

  function toggle(id) {
    setSquares((prevSquares) =>
      prevSquares.map((square) => {
        return square.id === id ? { ...square, on: !square.on } : square;
      })
    );
  }

  const boxDisplay = squares.map((square) => {
    return (
      <Box key={square.id} On={square.on} toggle={() => toggle(square.id)} />
    );
  });

  return <div className="App">{boxDisplay}</div>;
}
