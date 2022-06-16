import React from "react";

const SearcPanel = () => {
    const searchText = 'type to search';
    const searchStyle = {
      fontSize: '2rem',
      color: 'green',
      fontWeight: 'bold'
    }
    return (
      <input 
      placeholder={searchText}
      style={searchStyle}
      disabled={true}
      ></input>
    )
  }

export default SearcPanel;