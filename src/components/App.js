import React, { useState } from "react";
import Nav from "./Nav";
import Filter from "./Filter"
import TileContainer from "./TileContainer"
import hogs from "../porkers_data";

function App() {
  const [hogArray, setHogArray] = useState(hogs)
  const [isChecked, setIsChecked] = useState(false)

  const toggleGreased = hogArray.filter(hog => {
    if (!isChecked) {
      return true
    } else { 
      return (isChecked === hog.greased)
    } 
  })

  const handleCheckBox = () => {
    setIsChecked(isChecked => !isChecked)
  }

  return (
    <div className="App">
      <Nav />
      <Filter 
        onCheckClick={handleCheckBox}
        setHogArray={setHogArray}
        hogs={hogArray}
      />
      <TileContainer hogs={toggleGreased} />
    </div>
  );
}

export default App;