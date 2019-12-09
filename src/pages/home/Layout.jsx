import React , { Component } from "react"
//组件
import { TabBar } from 'antd-mobile';
import Selection  from "./selection/Selection"
import Classify   from "./classify/Classify"
import SmallBook  from "./smallBook/SmallBook"
import Cart       from "./cart/Cart"
import Mine       from "./mine/Mine"
//静态资源
import NavIco from "assets/images/nav-ico.png"

import { LayoutWrap } from "./layoutStyled"

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'selection'
    };
  }

  render() {
    return (
      <LayoutWrap>
        <TabBar
          barTintColor="#f3f4f5"
          prerenderingSiblingsNumber={0}
        >
          <TabBar.Item
            icon={
              <div style={{
              width: '45px',
              height: '45px',
              background: `url(${NavIco}) 0 -2px /  385px auto no-repeat` }}
              />
            }
            selectedIcon={
              <div style={{
              width: '45px',
              height: '45px',
              background: `url(${NavIco}) 0px -59px /  385px auto no-repeat` }}
              />
            }
            key="selection"
            selected={this.state.selectedTab === 'selection'}
            onPress={() => {
              this.setState({
                selectedTab: 'selection',
              });
            }}
            >
         
            <Selection showNav={true}></Selection>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '45px',
                height: '45px',
                background: `url(${NavIco}) -52px -2px /  385px auto no-repeat` }}
                />
            }
            selectedIcon={
              <div style={{
                width: '45px',
                height: '45px',
                background: `url(${NavIco}) -55px -58px /  385px auto no-repeat` }}
                />
            }
            title=""
            key="classify"
            selected={this.state.selectedTab === 'classify'}
            onPress={() => {
              this.setState({
                selectedTab: 'classify',
              });
            }}
            >
              <Classify></Classify>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '45px',
                height: '45px',
                background: `url(${NavIco}) -181px -2px /  385px auto no-repeat` }}
                />
            }
            selectedIcon={
              <div style={{
                width: '45px',
                height: '45px',
                background: `url(${NavIco}) -181px -58px /  385px auto no-repeat` }}
                />
            }
            title=""
            key="smallBook"
            selected={this.state.selectedTab === 'smallBook'}
            onPress={() => {
              this.setState({
                selectedTab: 'smallBook',
              });
            }}
            >
            <SmallBook></SmallBook>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '45px',
                height: '45px',
                background: `url(${NavIco}) -113px -2px /  385px auto no-repeat` }}
                />
            }
            selectedIcon={
              <div style={{
                width: '45px',
                height: '45px',
                background: `url(${NavIco}) -111px -58px /  385px auto no-repeat` }}
                />
            }
            title=""
            key="cart"
            selected={this.state.selectedTab === 'cart'}
            onPress={() => {
              this.setState({
                selectedTab: 'cart',
              });
            }}
            >
              <Cart></Cart>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '45px',
                height: '45px',
                background: `url(${NavIco}) -255px -2px /  385px auto no-repeat` }}
                />
            }
            selectedIcon={
              <div style={{
                width: '45px',
                height: '45px',
                background: `url(${NavIco}) -255px -58px /  385px auto no-repeat` }}
                />
            }
            title=""
            key="mine"
            selected={this.state.selectedTab === 'mine'}
            onPress={() => {
              this.setState({
                selectedTab: 'mine',
              });
            }}
            >
              <Mine></Mine>
          </TabBar.Item>
        </TabBar>
      </LayoutWrap>
    );
  }
}

export default Layout 



