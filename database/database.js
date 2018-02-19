const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/groceries');

const groceryItemSchema = {
  id: { type: Number, unique: true },
  quantity: Number,
  description: { type: String, unique: true },
};

const GroceryItem = mongoose.model('GroceryItem', groceryItemSchema);

const makeGroceryItem = schemaData => new GroceryItem(schemaData);

const saveGroceryItem = (groceryItemObject) => {
  // grab necessary data to create a document/groceryitem
  const { id, quantity, description } = groceryItemObject;

  // create document
  const groceryItem = makeGroceryItem({
    id,
    quantity,
    description,
  });

  // store document (err) =>
  groceryItem.save((err) => {
    if (err) {
      throw err;
    } else {
      console.log('roger, roger');
    }
  });
};

const findGroceries = (callback) => {
  GroceryItem
    .find()
    .exec(callback);
};

module.exports.saveGroceryItem = saveGroceryItem;
module.exports.findGroceries = findGroceries;
