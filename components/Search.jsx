import React from "react";

const Search = ({ filteredData, handleChange }) => {
  return (
    <div className="search">
      <input
        type={"text"}
        placeholder="Search..."
        onChange={(e) => handleChange(e.target.value)}
      />
      <div className="search-results">
        {filteredData.isSearch && !filteredData.resultFound && (
          <p>No results found..</p>
        )}
        {filteredData.data.map((data) => {
          return (
            <a className="data" key={data} target="_blank">
              <p>{data}</p>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Search;
