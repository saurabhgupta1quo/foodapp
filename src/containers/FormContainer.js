import React, {Component} from 'react';
// import CheckboxOrRadioGroup from '../components/Styles/CheckboxOrRadioGroup';
// import SingleInput from '../components/Styles/SingleInput';
// import Select from '../components/Styles/Select';
// import BasicTextField from '../components/Styles/BasicTextField';
// import SearchAppBar from '../components/Styles/SearchAppBar';
import Button from '@material-ui/core/Button';
// import Radio from '@material-ui/core/Radio';
// import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
// import InputLabel from '@material-ui/core/InputLabel';
// import Select from '@material-ui/core/Select';
// import { Link } from 'react-router-dom';
import '../containers/FormContainer.css';
import Item from '../components/Item/Item';
import AddItem from '../components/AddItem/AddItem';
// import RemoveItem from '../components/RemoveItem/RemoveItem';
import * as actionTypes from '../store/actions';
import { connect } from 'react-redux';
import * as itemAction from '../actions/itemAction';
import '../components/AddItem/AddItem.css';

class FormContainer extends Component {
	constructor(props) {
		super(props);
		// this.handleChange = this.handleChange.bind(this);

		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.handleClearForm = this.handleClearForm.bind(this);

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleKeyIngredientsSelection = this.handleKeyIngredientsSelection.bind(this);
        this.handleSpiceLevelSelection = this.handleSpiceLevelSelection.bind(this);
        this.handleTypeSelection = this.handleTypeSelection.bind(this);
		this.handleOriginSelection = this.handleOriginSelection.bind(this);
		this.state = {
            name: '',
            keyIngredients: '',
            spiceLevel: [],
            type: [],
            origin: []
		};
	}
	componentDidMount() {
		fetch('./fake_db.json')
			.then(res => res.json())
			.then(data => {
				this.setState({
                    name: data.name,
                    keyIngredients: data.keyIngredients,
                    spiceLevel: data.spiceLevel,
                    type: data.type,
					origin: data.origin,
				});
			});
	}
	handleNameChange = event => {
		this.setState({ 
            name: event.target.value }, 
            () => console.log('name:', this.state.name));
    }
    
    handleKeyIngredientsSelection = event => {
		this.setState({ 
            keyIngredients: event.target.value }, 
            () => console.log('KeyIngredients:', this.state.keyIngredients));
    }

    handleSpiceLevelSelection = event => {
		this.setState({ 
            spiceLevel: event.target.value }, 
            () => console.log('Spice Level', this.state.spiceLevel));
    }

	handleTypeSelection = event => {
		this.setState({ 
            type: event.target.value }, 
            () => console.log('Type', this.state.type));
    }
    
	handleOriginSelection = event => {
		this.setState({ 
            origin: event.target.value }, 
            () => console.log('origin', this.state.origin));
	}


	handleClearForm = event => {
		document.getElementById("myForm").reset();
		// event.preventDefault();
		this.setState({
            name: '',
            keyIngredients: '',
            spiceLevel: [],
            type: [],
            origin: []
		})
	}
	handleFormSubmit = event => {
		this.handleClearForm(event)
		event.preventDefault();
		console.log(this.state.name);

		const formPayload = {
			name: this.state.name,
			keyIngredients: this.state.keyIngredients,
			spiceLevel: this.state.spiceLevel,
			type: this.state.type,
			origin: this.state.origin
		    }
		this.setState({
			name: '',
			keyIngredients: '',
			spiceLevel: [],
			type: [],
			origin: []
		  });
        this.props.createItem(formPayload);
		console.log('Send this in a POST request:', formPayload);
		// const str = "You are moving to food list layout.";
		// alert(str.trim());
	}

	listView(data, index){
		return (	
		  <div className="row">
			<Button  variant="contained" color="secondary"  style={{float: 'right', width: "100px", margin: "5px"}}
			onClick={(e) => this.deleteItem(e, index)}>Remove
			</Button>
			<div className="InputElement">
			  <li key={index} className="list-group-item clearfix">&nbsp;&nbsp;
				<strong >
				{data.name}&nbsp;&nbsp;
				{data.keyIngredients}&nbsp;&nbsp;
				{data.spiceLevel}&nbsp;&nbsp;
				{data.type}&nbsp;&nbsp;
				{data.origin}&nbsp;&nbsp;
				</strong>
			  </li>
			</div>
		</div> 
		)
	  }
	
	  deleteItem(e, index){
		e.preventDefault();
		this.props.deleteItem(index);
	  }

	render() {
		return (
			<div style={{marginLeft: "10px"}} >
				<h1>Howdy! Namaste. Bonjour. Konichiwa!</h1>
                <p>Happy to see you here. Please add your food items here.</p>
				<hr/>
				<div>
				<h3>Add Item Form</h3>
			<form id="myForm" className="container" onSubmit={this.handleFormSubmit} style={{marginLeft: "10px"}}>
				{/* <h5>Add Food Item Form</h5> */}
                {/* <SearchAppBar/> */}
				<label className="Label">Name</label>     
					<input className="InputElement" 
					placeholder=" Type item name here" 
					type="text" 
					name="name" 
					value={this.state.name}
					onChange={this.handleNameChange} />
				<br/>
				<label className="Label">Key Ingredients</label>     
					<input className="InputElement" 
					placeholder=" Type key ingredients here" 
					type="text" 
					name="keyIngredients" 
					value={this.state.keyIngredients}
					onChange={this.handleKeyIngredientsSelection}/>
				<br/>
				<label className="Label">Select the spice level</label>
                    <div onChange={this.handleSpiceLevelSelection} className="Radio" name="spiceLevel" value={this.state.spiceLevel}>
                         <input type="radio" value = "Low" checked={this.state.spiceLevel === "Low"}/>Low
                         <input type="radio" value = "Medium" checked={this.state.spiceLevel === "Medium"}/>Medium
                         <input type="radio" value = "High" checked={this.state.spiceLevel === "High"}/>High
						 &nbsp;Selected Option is : <strong style={{color: 'blue'}}>{this.state.spiceLevel}</strong>
                    </div>
                <br/>
				<label className="Label">Select the type</label>
                    <div onChange={this.handleTypeSelection} className="Radio" name="type" value={this.state.type}>
                         <input type="radio" value = "Starter" checked={this.state.type === "Starter"}/>Starter
                         <input type="radio" value = "Main Course" checked={this.state.type === "Main Course"}/>Main Course
                         <input type="radio" value = "Desert" checked={this.state.type === "Desert"}/>Desert
						 &nbsp;Selected Option is : <strong style={{color: 'orange'}}>{this.state.type}</strong>
                    </div>
                <br/>
				<label className="Label">Select the origin</label>
                    <select onChange={this.handleOriginSelection} className="Option" value ={this.state.origin} name="origin">
                         <option value = "Select" checked={this.state.origin === ""}>Select</option>
						 <option value = "Asian" checked={this.state.origin === "Asian"}>Asian</option>
                         <option value = "Continental" checked={this.state.origin === "Continental"}>Continental</option>
                         <option value = "Italian" checked={this.state.origin === "Italian"}>Italian</option>
						 &nbsp;Selected Option is : <strong style={{color: 'red'}}>{this.state.value}</strong>
                    </select>
                <br/>
				{/* <label className="Label">Select the origin</label>
                    <div onChange={this.handleOriginSelection} className="Radio" name="origin">
                         <input type="radio" value = "Asian" checked={this.state.origin === "Asian"}/>Asian
                         <input type="radio" value = "Continental" checked={this.state.origin === "Continental"}/>Continental
                         <input type="radio" value = "Italian" checked={this.state.origin === "Italian"}/>Italian
						 &nbsp;Selected Option is : <strong style={{color: 'red'}}>{this.state.origin}</strong>
                    </div>
                <br/> */}
				{/* <input
					type="submit"
					className="btn btn-primary float-right"
					value="Submit"/>
                <br/> */}
				{/* <Link to={{pathname:'/'}}> */}
				<Button  variant="contained" color="primary"  style={{width: "130px", marginRight: "10px"}}
					className="btn btn-link float-left" type="submit" value="Submit" 
					>Add Item</Button>
				{/* </Link>                     */}
				<Button  variant="contained" color="secondary"  style={{width: "130px"}}
					className="btn btn-link float-left"
					onClick={this.handleClearForm}>Clear</Button>
			</form>
			<hr />
                {<ul className="list-group">
                {this.props.items.map((formPayload, i) => this.listView(formPayload, i))}
                </ul>}
			</div>
			</div>
		);
	}
}

// export default FormContainer;

const mapStateToProps = (state, ownProps) => {
    return {
        items: state.items
    };
};

const mapDispatchToProps = dispatch => {
    return {
        createItem: item => dispatch(itemAction.createItem(item)),
		deleteItem: index => dispatch(itemAction.deleteItem(index))
		// onAddedItem: () => dispatch({type: actionTypes.ADD_FOOD_ITEMS}),
        // onRemovedItem: (id) => dispatch({type: actionTypes.REMOVE_FOOD_ITEMS, itemId: id})
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
