import React from 'react';

import './RemoveItem.css'
import Button from '@material-ui/core/Button';

const RemoveItem = (props) => (
    <div className="RemoveItem">
        <Button onClick={props.itemRemoved} variant="contained" color="secondary"  style={{width: "130px"}}>Remove Item</Button>
    </div>
);

export default RemoveItem;