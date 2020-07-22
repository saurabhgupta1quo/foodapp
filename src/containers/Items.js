import React, { Component } from 'react';
import { connect } from 'react-redux';

import Item from '../components/Item/Item';
import AddItem from '../components/AddItem/AddItem';
import * as actionTypes from '../store/actions';


class Items extends Component {
    
    render () {
        return (
            <div>
                <AddItem itemAdded={this.props.onAddedItem} />
                {this.props.prs.map(item => (
                    <Item 
                        key={item.id}
                        name={item.name} 
                        keyIngredients={item.keyIngredients} 
                        spiceLevel={item.spiceLevel} 
                        type={item.type} 
                        origin={item.origin}
                        clicked={() => this.props.onRemovedItem(item.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        prs: state.items
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddedItem: () => dispatch({type: actionTypes.ADD_FOOD_ITEMS}),
        onRemovedItem: (id) => dispatch({type: actionTypes.REMOVE_FOOD_ITEMS, itemId: id})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Items);