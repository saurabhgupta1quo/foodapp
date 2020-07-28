import React from 'react';

import './Item.css';

const Item = (props) => (
    <div className="Item" onClick={props.clicked}>
        {/* <p>Name:{props.name}</p>
        <p>Key Ingredients: {props.keyIngredients}</p>
        <p>Spice Level:{props.spiceLevel}</p>
        <p>Type: {props.type}</p>
        <p>origin: {props.origin}</p> */}

        <strong><p>Name &nbsp;&nbsp; Key Ingredients &nbsp;&nbsp; Spice Level &nbsp;&nbsp; Type &nbsp;&nbsp; origin</p></strong>
        <p>{props.name} &nbsp;&nbsp;&nbsp;&nbsp; {props.keyIngredients} &nbsp;&nbsp;&nbsp;&nbsp; {props.spiceLevel} &nbsp;&nbsp;&nbsp;&nbsp; {props.type} &nbsp;&nbsp;&nbsp;&nbsp; {props.origin}</p>
    </div>
);

export default Item;