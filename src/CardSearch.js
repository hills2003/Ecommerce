import React from 'react';
import "./App.css";

function CardSearch({item}) {
    return (
        <>
          <div className="individual-item">
              <img src={item.image} alt="" />
              <span>${item.price}</span>
          </div>              
        </>
    );
}

export default CardSearch;