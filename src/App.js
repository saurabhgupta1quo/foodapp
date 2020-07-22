import React, { Component } from 'react';
// import './App.css';
import Items from './containers/Items';

function App() {
  return (
    <div className="App">
      <ol>
          <li>Display list of food items</li>
          <li>Give an option form to add a new food item using a form</li>
          <li>Every row should have a button to delete the item.for now, there is no API to call. You only have to use react redux to manage the state.</li>  
        </ol>
        <Items/>
    </div>
  );
}

export default App;
