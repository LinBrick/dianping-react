import React, { Component } from 'react';
import LikeItem from "../LikeItem";
import Loading from '../../../../components/Loading';
import dataSource from './dataSource.json';
import "./style.css";

class LikeList extends Component {
  constructor(props){
    super(props)
    this.myRef = React.createRef()
    this.state = {
      data: dataSource,
      loadTimes: 1
    }
    this.removeListener = false
  }

  render() {
    const { data, loadTimes } = this.state;
    return (
      <div ref={this.myRef} className="likeList">
        <div className="likeList__header">猜你喜欢</div>
        <div className="likeList__list">
          {
            data.map((item, index) => {
              return <LikeItem key={index} data={item}/>
            })
          }
        </div>
        {
          loadTimes < 3 ? (<Loading />) : (<a className="likeList__viewAll  " href="">查看更多</a>)
        }
      </div>
    );
  }

  // 生命周期函数：组件第一次渲染完成，此时dom节点已经生成
  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll)
  }
  
  // 生命周期函数：组件更新完毕后，react只会在第一次初始化成功会进入componentDidmount,之后每次重新渲染后都会进入这个生命周期，这里可以拿到prevProps和prevState，即更新前的props和state。
  componentDidUpdate() {
    if(this.state.loadTimes >= 3 && !this.removeListener) {
      document.removeEventListener('scroll', this.handleScroll)
      this.removeListener = true
    }
  }

  // 生命周期函数：在此处完成组件的卸载和数据的销毁
  componentWillUnmount() {
    if(!this.removeListener) {
      document.removeEventListener('scroll', this.handleScroll)
    }
  }

  // 滚动事件
  handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    // 屏幕可视区域高度
    const screenHeight = document.documentElement.clientHeight
    // 组件距离顶部的距离
    const likeListTop = this.myRef.current.offsetTop
    // 组件的内容高度
    const likeListHeight = this.myRef.current.offsetHeight
    if(scrollTop >= likeListHeight + likeListTop - screenHeight) {
      const newData  = this.state.data.concat(dataSource)
      const newLoadTimes = this.state.loadTimes + 1
      setTimeout(() => {
        this.setState({
          data: newData,
          loadTimes: newLoadTimes
        })
      }, 1000)
    }
  }
}

export default LikeList;