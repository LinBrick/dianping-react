import React, { Component } from 'react';
import HomeHeader from './components/HomeHeader';
import Category from './components/Category';
import Headline from './components/Headline';
import Discount from './components/Discount';
import LikeList from './components/LikeList';
import Footer from '../../components/Footer';
import Banner from './components/Banner';
import Activity from './components/Activity';

class index extends Component {
  render() {
    return (
      <div>
        <HomeHeader />
        <Banner />
        <Category />
        <Headline />
        <Activity />
        <Discount />
        <LikeList />
        <Footer />
      </div>
    );
  }
}

export default index;