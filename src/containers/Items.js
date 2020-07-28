import React, { Component } from 'react';
import { connect } from 'react-redux';

import Item from '../components/Item/Item';
import AddItem from '../components/AddItem/AddItem';
// import RemoveItem from '../components/RemoveItem/RemoveItem';
import * as actionTypes from '../store/actions';
import Button from '@material-ui/core/Button';
import FormContainer from './FormContainer';
// import { Link } from 'react-router-dom';
// import SearchAppBar from '../components/Styles/SearchAppBar';



class Items extends Component {
    
    render () {
        return (
            <div>
                {/* <SearchAppBar /> */}
                <FormContainer/>
                {/* <Link to={{pathname:'/FormContainer'}}> */}
                <AddItem itemAdded={this.props.onAddedItem} />
                {/* </Link> */}
                {this.props.items.map((item) => ( 
                    <div>
                <Button variant="contained" color="secondary" style={{float: 'right', width: "130px", margin: "5px"}} onClick={() => this.props.onRemovedItem(item.id)} >Delete Item</Button>
                    <Item 
                        key={item.id} 
                        name={item.name} 
                        keyIngredients={item.keyIngredients} 
                        spiceLevel={item.spiceLevel}
                        type={item.type} 
                        origin={item.origin}/>
                    </div>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        items: state.items
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddedItem: () => dispatch({type: actionTypes.ADD_FOOD_ITEMS}),
        onRemovedItem: (id) => dispatch({type: actionTypes.REMOVE_FOOD_ITEMS, itemId: id})
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Items);