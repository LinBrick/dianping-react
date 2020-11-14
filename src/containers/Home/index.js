import React, { Component } from 'react';
import Category from './components/Category';
import Headline from './components/Headline';

class index extends Component {
  render() {
    return (
      <div>
        <Category></Category>
        <Headline></Headline>
      </div>
    );
  }
}

export default index;