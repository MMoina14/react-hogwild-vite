import React from "react";

function FilterSortBar({ filterGreased, sortBy, onFilterChange, onSortChange }) {
  return (
    <div className="ui form" style={{ margin: "20px" }}>
      <div className="inline field">
        <label htmlFor="greased">Show only greased pigs</label>
        <input id="greased" type="checkbox" checked={filterGreased} onChange={onFilterChange} />
      </div>
      <div className="inline field">
        <label htmlFor="sort">Sort By</label>
        <select id="sort" value={sortBy} onChange={onSortChange}>
          <option value="">-- None --</option>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </div>
    </div>
  );
}

export default FilterSortBar;
