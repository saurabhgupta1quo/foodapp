import React from 'react';
import Button from '@material-ui/core/Button';

import './AddItem.css'

const AddItem = (props) => (
    <div className="AddItem">
        <Button onClick={props.itemAdded} variant="contained" color="secondary"  style={{width: "130px"}}>Add Item</Button>
    </div>
);

export default AddItem;