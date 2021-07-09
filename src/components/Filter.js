import React from "react";

const Filter = ({ onCheckClick, hogs, setHogArray }) => {
  const sortByName = [...hogs].sort((a,b) => {
    const nameA = a.name.toUpperCase()
    const nameB = b.name.toUpperCase()
    if(nameA < nameB){
      return -1;
      }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  })
  const sortByWeight = [...hogs].sort((a, b) => a.weight - b.weight )

  const handleSortByName = () => {
    setHogArray(sortByName)
  }
  const handleSortByWeight = () => {
    setHogArray(sortByWeight)
  }

  return (
    <div className="FilterContainer">
      <label>Greased</label>
      <input type="checkbox" onClick={onCheckClick} />
      <button onClick={handleSortByName}>Name</button>
      <button onClick={handleSortByWeight}>Weight</button>
    </div>
  )
}

export default Filter
  