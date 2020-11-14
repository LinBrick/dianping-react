import React, { Component } from 'react';
import Category from './components/Category';
import Headline from './components/Headline';
import Discount from './components/Discount';
import LikeList from './components/LikeList';

class index extends Component {
  render() {
    return (
      <div>
        <Category></Category>
        <Headline></Headline>
        <Discount></Discount>
        <LikeList></LikeList>
      </div>
    );
  }
}

export default index;