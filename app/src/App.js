// App.js
import React, { Component } from 'react'
import NavBar from './NavBar';
import ToDoApp from './ToDoApp';
import SignUp from './SignUp';
export default class App extends Component {
  render() {
    return (
      <div>
         
         <NavBar/>
         <ToDoApp/>
         <SignUp/>
         
      </div>
    );
  };
};

