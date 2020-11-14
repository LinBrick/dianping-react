import React, { Component } from 'react';
import LikeItem from "../LikeItem";
import dataSource from './dataSource.json';
import "./style.css";

class LikeList extends Component {
  render() {
    console.log(dataSource)
    return (
      <div className="likeList">
        <div className="likeList__header">猜你喜欢</div>
        <div className="likeList__list">
          {
            dataSource.map((item, index) => {
              return <LikeItem key={item.id} data={item}/>
            })
          }
        </div>
      </div>
    );
  }
}

export default LikeList;