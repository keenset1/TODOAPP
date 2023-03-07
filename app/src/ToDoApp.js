
import React, { Component } from 'react';
import './style.css';

class ToDoApp extends Component {
  constructor(props) {
    super(props);

    // Define initial state with an empty array of items and an empty string for the new item text
    this.state = {
      items: [],
      newItemText: ''
    };

    // Bind event handlers to this instance of the component
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  // Event handler for input change updates the state with the new text input value
  handleInputChange(event) {
    this.setState({ newItemText: event.target.value });
  }

  // Event handler for form submission creates a new item object with a unique ID and the new text input value
  // The new item is added to the items array in state, and the new item text is reset to an empty string
  handleSubmit(event) {
    event.preventDefault();

    if (this.state.newItemText.trim() === '') {
      // If the new item text is empty or only whitespace, do nothing
      return;
    }

    const newItem = {
      id: Date.now(),
      text: this.state.newItemText
    };

    this.setState(prevState => ({
      items: [...prevState.items, newItem],
      newItemText: ''
    }));
  }

  // Event handler for item deletion filters out the item with the specified ID from the items array in state
  handleDelete(itemId) {
    this.setState(prevState => ({
      items: prevState.items.filter(item => item.id !== itemId)
    }));
  }

  render() {
    // Destructure the items and newItemText values from state
    const { items, newItemText } = this.state;

    return (
      <div className="todo">
        <h1>To-Do List</h1>
        <form onSubmit={this.handleSubmit}>
          {/* Input field for adding a new item */}
          <input
            type="text"
            placeholder="Add an item"
            value={newItemText}
            onChange={this.handleInputChange}
          />
          {/* Submit button for adding a new item */}
          <button type="submit">Add</button>
        </form>
        {/* List of items */}
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {/* Text of the item */}
              {item.text}
              {/* Button to delete the item */}
              <button onClick={() => this.handleDelete(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ToDoApp;


