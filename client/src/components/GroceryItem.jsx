import React from 'react';

const GroceryItem = props => (
  <div className="groceryItem">
    {props.groceryItem.description}: {props.groceryItem.quantity}
  </div>
);


export default GroceryItem;
