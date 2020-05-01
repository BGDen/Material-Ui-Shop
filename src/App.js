import React, { Component } from 'react';
import 'typeface-roboto';
import {SimpleContainer} from './components/main-container'
// import {AppHeader} from './components/header';
// import {AddButton} from './components/add-button';

export class App extends Component {

  render(){
    return (
      // <div>
        <SimpleContainer />
        /* <AppHeader />
        
        <AddButton edge="end"/> */
      // </div>    
    );
  }
}

export default App;
