import React, { Component } from 'react';
import 'typeface-roboto';
import {AppHeader} from './components/header';


export class App extends Component {

  render(){
    return (
      <div>
        <AppHeader />
      </div>    
    );
  }
}

export default App;
