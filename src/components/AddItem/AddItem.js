import React from 'react';

import './AddItem.css'

const AddItem = (props) => (
    <div className="AddItem">
        <button onClick={props.itemAdded}>Add Item</button>
    </div>
);

export default AddItem;