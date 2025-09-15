import React, { useState } from "react";
import Nav from "./Nav";
import HogCard from "./HogCard";
import HogForm from "./HogForm";
import FilterSortBar from "./FilterSortBar";
import hogs from "../porkers_data";

function App() {
  const [hogList, setHogList] = useState(hogs);
  const [filterGreased, setFilterGreased] = useState(false);
  const [sortBy, setSortBy] = useState("");

  function handleAddHog(newHog) {
    setHogList([...hogList, newHog]);
  }

  function handleHideHog(name) {
    setHogList(hogList.filter(hog => hog.name !== name));
  }

  function handleFilterChange(e) {
    setFilterGreased(e.target.checked);
  }

  function handleSortChange(e) {
    setSortBy(e.target.value);
  }

  function getDisplayedHogs() {
    let filtered = [...hogList];

    if (filterGreased) {
      filtered = filtered.filter(hog => hog.greased);
    }

    if (sortBy === "name") {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "weight") {
      filtered.sort((a, b) => a.weight - b.weight);
    }

    return filtered;
  }

  return (
    <div className="App">
      <Nav />
      <HogForm onAddHog={handleAddHog} />
      <FilterSortBar
        filterGreased={filterGreased}
        sortBy={sortBy}
        onFilterChange={handleFilterChange}
        onSortChange={handleSortChange}
      />
      <div className="ui grid container">
        {getDisplayedHogs().map((hog) => (
          <HogCard key={hog.name} hog={hog} onHide={() => handleHideHog(hog.name)} />
        ))}
      </div>
    </div>
  );
}

export default App;
