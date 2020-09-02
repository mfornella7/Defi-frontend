import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { compose }          from 'redux';

import Img_Background       from '../../assets/image/home/bg.png';
import Img_LendBalance      from '../../assets/image/home/lendbalance.png';

import './Home.scss';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <div className="Home">
        <div className="gradient-back">
          <img src={Img_Background} className="img_bg" alt=""/>
        </div>
        <div className="balances-container">
          <div className="balance-block">
            <div className="balance-detail">
              <img src={Img_LendBalance} alt = ""/>
              <div className="description">Lend Balance</div>
              <div className="price-lg">$1,454.44</div>
              <div className="description">Lend Profit</div>
              <div className="price-sm">$543.00</div>
            </div>
            <div className="balance-circle">
              <div className="pie-wrapper progress-45 style-2">
                <span className="label">45<span className="smaller">%</span></span>
                <div className="pie">
                  <div className="left-side half-circle"></div>
                  <div className="right-side half-circle"></div>
                </div>
                <div className="shadow"></div>
              </div>
            </div>
          </div>
          <div className="balance-block">
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = {
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(Home);