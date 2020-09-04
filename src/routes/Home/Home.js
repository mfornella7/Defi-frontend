import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { compose }          from 'redux';

import Img_Background       from '../../assets/image/home/bg.png';
import Img_LendBalance      from '../../assets/image/home/lendbalance.png';
import Img_BorrowBalance    from '../../assets/image/home/borrowbalance.png';
import Img_Lend             from '../../assets/image/home/lend.png';
import Img_Borrow           from '../../assets/image/home/borrow.png';
import Img_Tether           from '../../assets/image/home/tether.png';
import Img_USDCoin          from '../../assets/image/home/usdcoin.png';
import Img_Dai              from '../../assets/image/home/dai.png';
import Img_TrueUSD          from '../../assets/image/home/trueusd.png';
import Img_Paxos            from '../../assets/image/home/paxos.png';
import Img_Binance          from '../../assets/image/home/binanceusd.png';
import Img_HUSD             from '../../assets/image/home/husd.png';

import { updateBorrowAsset } from '../../store/reducers/asset';

import './Home.scss';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      assets_lend: [
        { name: 'Tether', apm: 0.13, wallet: 1010.22, liquidity: 9.15, imgUrl: Img_Tether},
        { name: 'USD Coin', apm: 2.45, wallet: 1010.22, liquidity: 120.12, imgUrl: Img_USDCoin},
        { name: 'Dai', apm: 0.03, wallet: 1010.22, liquidity: 9.15, imgUrl: Img_Dai},
        { name: 'TrueUSD', apm: 2.13, wallet: 1010.22, liquidity: 120.12, imgUrl: Img_TrueUSD},
        { name: 'Paxos', apm: 0.43, wallet: 1010.22, liquidity: 190.12, imgUrl: Img_Paxos},
        { name: 'Binance USD', apm: 4.13, wallet: 1010.22, liquidity: 9.15, imgUrl: Img_Binance},
        { name: 'HUSD', apm: 1.13, wallet: 1010.22, liquidity: 9.15, imgUrl: Img_HUSD},
      ],
      assets_borrow: [
        { name: 'Tether', apm: 0.13, wallet: 1010.22, collateral: '0 USDT', imgUrl: Img_Tether},
        { name: 'USD Coin', apm: 2.45, wallet: 1010.22, collateral: '0 USDC', imgUrl: Img_USDCoin},
        { name: 'Dai', apm: 0.03, wallet: 1010.22, collateral: '0 DAI', imgUrl: Img_Dai},
        { name: 'TrueUSD', apm: 2.13, wallet: 1010.22, collateral: '0 TUSD', imgUrl: Img_TrueUSD},
        { name: 'Paxos', apm: 0.43, wallet: 1010.22, collateral: '0 PAX', imgUrl: Img_Paxos},
        { name: 'Binance USD', apm: 4.13, wallet: 1010.22, collateral: '0 BUSD', imgUrl: Img_Binance},
        { name: 'HUSD', apm: 1.13, wallet: 1010.22, collateral: '0 HUSD', imgUrl: Img_HUSD},
      ],
    }
  }

  goBorrowPage(asset) {
    this.props.updateBorrowAsset({
      b_asset_name: asset.name,
      b_apm: asset.apm
    })
    this.props.history.push('/borrow');
  }
  goLendPage(asset) {
    this.props.updateBorrowAsset({
      b_asset_name: asset.name,
      b_apm: asset.apm
    })
    this.props.history.push('/lend');
  }

  render() {
    return (
      <div className="Home">
        <div className="back"></div>
        <div className="gradient-back">
          <img src={Img_Background} className="img_bg" alt=""/>
        </div>
        <div className="balances-container">
          <div className="half-block">
            <div className="balance-block">
              <div className="balance-detail">
                <img src={Img_LendBalance} alt = ""/>
                <div className="description">Lend Balance</div>
                <div className="price-lg">$1,454.44</div>
                <div className="description">Lend Profit</div>
                <div className="price-sm">$543.00</div>
              </div>
              <div className="balance-circle">
                <div className="big-circle">
                  <div className="inner-circle">
                    <div className="limit">Lend Limit</div>
                    <div className="p-value">0% | $0</div>
                  </div>                
                </div>
              </div>
            </div>
            <div className="detail-block">
            <div className="header">
              <img src={Img_Lend} alt=""/>
              <div className="lend-text">LEND</div>
            </div>
            <div className="table-header">
              <div className="cell w30">Asset</div>
              <div className="cell w20">APM</div>
              <div className="cell w30">Lend Wallet</div>
              <div className="cell w20">Liquidity</div>
            </div>
            <div className="table-body">
              {this.state.assets_lend.map(asset => {
                return (
                  <div className={asset.name === "HUSD"?"table-row noborder":"table-row"} key={asset.name}
                    onClick={() => this.goLendPage(asset)}
                  >
                    <div className="cell w30">
                      <img src={asset.imgUrl} alt=""/>
                      <div className="text">{asset.name}</div>
                    </div>
                    <div className="cell w20">
                      <div className="text green">{asset.apm}%</div>
                    </div>
                    <div className="cell w30">
                      <div className="text">{asset.wallet}USDT</div>
                    </div>
                    <div className="cell w20">
                      <div className="text grey">${asset.liquidity}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          </div>
          <div className="half-block">
            <div className="gradient-back mobile-back">
              <img src={Img_Background} className="img_bg" alt=""/>
            </div>
            <div className="balance-block">
                <div className="balance-detail">
                  <img src={Img_BorrowBalance} alt = ""/>
                  <div className="description">Borrow Balance</div>
                  <div className="price-lg">$10,000.33</div>
                  <div className="description">Collateral Value</div>
                  <div className="price-sm">$12,443.00</div>
                </div>
                <div className="balance-circle">
                  <div className="big-circle">
                    <div className="inner-circle">
                      <div className="pie-wrapper progress-45">
                        <div className="pie">
                          <div className="left-side half-circle"></div>
                          <div className="right-side half-circle"></div>
                        </div>
                      </div>
                      <div className="limit">Borrow Limit</div>
                      <div className="p-value">75% | $434</div>
                    </div>
                  </div>
                </div>
              </div>
            <div className="detail-block">
              <div className="header">
                <img src={Img_Borrow} alt=""/>
                <div className="borrow-text">Borrow</div>
              </div>
              <div className="table-header">
                <div className="cell w30">Asset</div>
                <div className="cell w20">APM</div>
                <div className="cell w30">Borrow Wallet</div>
                <div className="cell w20">Collateral Wallet</div>
              </div>
              <div className="table-body">
                {this.state.assets_borrow.map(asset => {
                  return (
                    <div className={asset.name === "HUSD"?"table-row noborder":"table-row"} key={asset.name}
                      onClick={() => this.goBorrowPage(asset)}
                    >
                      <div className="cell w30">
                        <img src={asset.imgUrl} alt=""/>
                        <div className="text">{asset.name}</div>
                      </div>
                      <div className="cell w20">
                        <div className="text green">{asset.apm}%</div>
                      </div>
                      <div className="cell w30">
                        <div className="text">{asset.wallet}USDT</div>
                      </div>
                      <div className="cell w20">
                        <div className="text grey">{asset.collateral}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = {
  updateBorrowAsset: updateBorrowAsset
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(Home);