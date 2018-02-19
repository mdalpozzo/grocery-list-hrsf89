import React from 'react';

class AddGrocery extends React.Component {
  constructor(props) {
    super(props);
  }

  addGrocery() {
    let description = document.getElementById('descriptionInput').value;
    let quantity = document.getElementById('quantityInput').value;
    this.props.onAddGrocery(quantity, description);
    // how to reset input fields on click

    document.getElementById('descriptionInput').value = '';
    document.getElementById('quantityInput').value = '';

  }

  render() {
    return (
      <div>
        Description: <input id="descriptionInput" placeholder="e.g. eggs, milk..." />
        Quantity: <input id="quantityInput" placeholder="e.g. 2" />
        <button type="button" onClick={this.addGrocery.bind(this)}>Add to List</button>
      </div>
    );
  }
}

export default AddGrocery;

