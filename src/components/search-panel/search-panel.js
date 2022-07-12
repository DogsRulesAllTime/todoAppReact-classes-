import React from "react";
import './search-panel.css'

const SearchPanel = () => {
    const searchText = 'type to search';
    const searchStyle = {
      fontSize: '2rem',
      color: 'green',
      fontWeight: 'bold'
    }
    return (
      <input
      className="form-control search-input" 
      placeholder={searchText}
      // style={searchStyle}
      disabled={false}
      ></input>
    )
  }

export default SearchPanel;