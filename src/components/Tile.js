import React, { useState } from "react"

const Tile = ({hog}) => {
  const [isClicked, setIsClicked] = useState(false)

  const handlePigClick = () => {
    setIsClicked(isClicked => !isClicked)
  }

  return (
  <div className= "ui eight wide column">
    <span className="pigTile" onClick={handlePigClick}>
    <div>
      <img src={hog.image} alt={hog.name} width="200" height="200" />
      <h2 className="hoggyText">{hog.name}</h2>
    </div>
    <div className={isClicked ? "" : "hidden"}>
      <p>Specialty: {hog.specialty}</p>
      <p>Greased: {hog.greased ? "Yes": "No"}</p>
      <p>Weight: {hog.weight}</p>
      <p>Highest Medal Achieved: {hog["highest medal achieved"]}</p>
    </div>
    </span>
  </div>
  )
}


export default Tile