import React from "react"
import Tile from "./Tile.js"

const TileContainer = ({hogs}) => {
    return (
        <div className="ui grid container">
           { hogs.map((hog) => 
            <Tile hog={hog}  key={hog.name} />          
            )}
        </div>
    )
}

export default TileContainer