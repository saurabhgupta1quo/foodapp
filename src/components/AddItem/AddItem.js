import React from 'react';
import Button from '@material-ui/core/Button';
// import { Link } from 'react-router-dom';


import './AddItem.css'

const AddItem = (props) => (
    <div className="AddItem">
        <Button onClick={props.itemAdded} variant="contained" color="primary"  style={{width: "130px"}}>Add Item</Button>
    </div>
);

export default AddItem;