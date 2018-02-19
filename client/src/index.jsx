import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import AddGrocery from './components/AddGrocery.jsx';
import GroceryList from './components/GroceryList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      // list: [
      //   { id: 1, quantity: 5, description: 'frozen pizza' },
      //   { id: 2, quantity: 10, description: 'greek yogurt' },
      //   { id: 3, quantity: 2, description: 'wine' },
      //   { id: 4, quantity: 1, description: 'iced coffee' },
      // ],
    };
  }

  componentDidMount() {
    console.log('component mounted');
    $.get('/groceries', (data) => {
      console.log(data);
      this.setState({ list: data });
    });
  }

  onAddGrocery(quantity, description) {
    const newGroceryItem = {
      id: this.state.list.length + 1,
      quantity,
      description,
    };

    console.log(`${newGroceryItem} was added`);

    $.post('/groceries', newGroceryItem);
    // const newItem = { id: this.state.list.length + 1, quantity, description };
    // this.setState({ list: this.state.list.concat(newItem) });
    // console.log(this.state);
  }


  render() {
    return (
      <div>
        <AddGrocery onAddGrocery={this.onAddGrocery.bind(this)} />
        <GroceryList groceries={this.state.list} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
