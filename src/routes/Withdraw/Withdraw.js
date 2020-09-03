import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { compose }          from 'redux';
import { withRouter }       from 'react-router-dom'

import Img_Background       from '../../assets/image/home/bg.png';
import Img_Tether           from '../../assets/image/home/tether.png';
import Img_USDCoin          from '../../assets/image/home/usdcoin.png';
import Img_Dai              from '../../assets/image/home/dai.png';
import Img_TrueUSD          from '../../assets/image/home/trueusd.png';
import Img_Paxos            from '../../assets/image/home/paxos.png';
import Img_Binance          from '../../assets/image/home/binanceusd.png';
import Img_HUSD             from '../../assets/image/home/husd.png';
import Img_BTC              from '../../assets/image/borrow/btc.png';
import Img_Change           from '../../assets/image/borrowed/change.png';
import Img_QRCode           from '../../assets/image/borrowed/qrcode.png';

import './Withdraw.scss';

class Withdraw extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prgoress: 0,
        };
    }

    renderAsset() {
        let asset_image;
        switch (this.props.assetName) {
            case 'Tether': asset_image = Img_Tether; break;
            case 'USD Coin': asset_image = Img_USDCoin; break;
            case 'Dai': asset_image = Img_Dai; break;
            case 'TrueUSD': asset_image = Img_TrueUSD; break;
            case 'Paxos': asset_image = Img_Paxos; break;
            case 'Binance USD': asset_image = Img_Binance; break;
            default: asset_image = Img_HUSD;
        }
        return (
            <img src={asset_image} alt=""/>
        )
    }

    goBack() {
        if (this.state.prgoress) this.setState({ prgoress : 0 });
        else this.props.history.push('/defi');
    }

    render() {
        return (
            <div className="Withdraw">
                <div className="back"></div>
                <div className="gradient-back">
                    <img src={Img_Background} className="img_bg" alt=""/>
                </div>
                <div className="back-button" onClick={() => this.goBack()}>
                    <i className="fa fa-home" aria-hidden="true"></i>
                </div>
                <div className="borrow-text">Withdraw {this.props.assetName}</div>
                <div className="select-amount">Select the amount</div>
                <div className="block-header">
                    <div/>
                    {this.renderAsset()}
                    <i className="fa fa-times" aria-hidden="true"></i>
                </div>
                <div className="detail-block">
                    <div className="rate">1 BTC - 11.50000000</div>
                    <div className="group">send</div>
                    {this.props.withdraw === 'borrow' ?
                        <div className="btc-row">
                            <img src={Img_BTC} alt=""/>
                            <div className="btc-text">BTC</div>
                            <i className="fa fa-caret-down" aria-hidden="true"></i>
                            <div className="price">1.00000000</div>
                        </div>:
                        <div className="btc-row">
                            {this.renderAsset()}
                            <div className="btc-text">USDT</div>
                            <i className="fa fa-caret-down" aria-hidden="true"></i>
                            <div className="price">11.50000000</div>
                        </div>
                    }
                    <div className="textwithline">
                        <div className="border"/>
                        <div className="mid-text">
                            <img src={Img_Change} alt=""/>
                        </div>
                        <div className="border"/>
                    </div>
                    <div className="group">converted amount</div>
                    
                    {this.props.withdraw !== 'borrow' ?
                        <div className="btc-row">
                            <img src={Img_BTC} alt=""/>
                            <div className="btc-text">BTC</div>
                            <i className="fa fa-caret-down" aria-hidden="true"></i>
                            <div className="price">1.00000000</div>
                        </div>:
                        <div className="btc-row">
                            {this.renderAsset()}
                            <div className="btc-text">USDT</div>
                            <i className="fa fa-caret-down" aria-hidden="true"></i>
                            <div className="price">11.50000000</div>
                        </div>
                    }
                    <div className="all-but">All</div>
                    <div className="detail">
                        <div className="text">Network Fee</div>
                        <div className="text">0.00017276 BTC</div>
                    </div>
                    <div className="detail">
                        <div className="text">System Fee(0.5%)</div>
                        <div className="text">0.00037276 BTC</div>
                    </div>
                    <div className="seperator"/>
                    <div className="detail">
                        <div className="text">You will get:</div>
                        <div className="text bold">0.00037276 BTC</div>
                    </div>
                    <div className="paste-address">
                        <input placeholder="Tap to paste address..."/>
                        <img src={Img_QRCode} alt=""/>
                    </div>
                    <div className="withdraw-button">WITHDRAW</div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    assetName: state.asset.b_asset_name,
    apm: state.asset.b_apm,
    withdraw: state.asset.withdraw,
});

const mapDispatchToProps = {
};

Withdraw.defaultProps = {
    assetName: "Tether ",
    apm: 3.01,
};
export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(Withdraw);