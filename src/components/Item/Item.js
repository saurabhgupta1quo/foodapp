import React from 'react';

import './Item.css';

const Item = (props) => (
    <div className="Item" onClick={props.clicked}>
        <p>Name:{props.name}</p>
        <p>Key Ingredients: {props.keyIngredients}</p>
        <p>Spice Level:{props.spiceLevel}</p>
        <p>Type: {props.type}</p>
        <p>origin: {props.origin}</p>
    </div>
);

export default Item;