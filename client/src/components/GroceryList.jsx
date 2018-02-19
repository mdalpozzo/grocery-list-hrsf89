import React from 'react';
import GroceryItem from './GroceryItem.jsx';

const GroceryList = props => (
  <div className="groceries">
    {props.groceries.map(groceryItem =>

      <GroceryItem groceryItem={groceryItem} key={groceryItem.id} />)}
  </div>
);

export default GroceryList;
