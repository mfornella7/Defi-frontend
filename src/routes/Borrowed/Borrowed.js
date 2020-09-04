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
import Img_CoinChange       from '../../assets/image/borrowed/coinchange.png';

import { updateWithdraw }   from '../../store/reducers/asset';


import './Borrowed.scss';

class Borrowed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openContracts: [
                {id: 0, orderId: 121212, date: 'Jul 13, 2020', time: '10 Days', fund: '122.00000300 USDT', collateral: 0.00000300, width: 74},
                {id: 1, orderId: 121212, date: 'Jul 13, 2020', time: '10 Days', fund: '122.00000300 USDT', collateral: 0.00000300, width: 12},
                {id: 2, orderId: 121212, date: 'Jul 13, 2020', time: '10 Days', fund: '122.00000300 USDT', collateral: 0.00000300, width: 42}
            ]
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
        this.props.history.push('/defi');
    }

    render() {
        let k = 0;
        return (
            <div className="Borrowed">
                <div className="back"></div>
                <div className="gradient-back">
                    <img src={Img_Background} className="img_bg" alt=""/>
                </div>
                <div className="back-button" onClick={() => this.goBack()}>
                    <i className="fa fa-home" aria-hidden="true"></i>
                </div>
                <div className="notification">
                    <div className="left">
                        <div className="top">
                            {this.renderAsset()}
                            <div className="white-text">Confirmed</div>
                            <div className="green-text">122.0000300 USDT</div>
                        </div>
                        <div className="bottom">See {this.props.assetName} balance</div>
                    </div>
                    <div className="right">
                        <i className="fa fa-times" aria-hidden="true"></i>
                    </div>
                </div>
                <div className="borrowed-text">Total Funds Borrowed</div>
                <div className="borrowed-price">
                    <div className="usdt-mobile">USDT</div>
                    <div className="price">122.00000300</div>
                    <div className="usdt">USDT</div>
                </div>
                <div className="borrowed-detail-container">
                    <div className="option-block">
                        <div className="top-back"/>
                        {this.renderAsset()}
                        <div className="balance">Balance</div>     
                        {window.innerWidth < 1080?
                            <div className="balance-price">
                                <div className="usdt">USDT</div>
                                <div className="value">0.000003000</div>
                            </div>:
                            <div className="balance-price">
                                <div className="value">0.000003000</div>
                                <div className="usdt">USDT</div>
                            </div>
                        }
                        <div className="buttons">                            
                            <div className="borrow-button" onClick={() => { this.props.history.push('/borrow')}}>BORROW</div>
                            <div className="withdraw-button" onClick={() => { 
                                this.props.updateWithdraw({withdraw: 'borrow'})
                                this.props.history.push('/withdraw')}}>WITHDRAW</div>
                        </div>
                    </div>
                    <div className="apm-block">
                        <div className="usdt-apm">USDT APM</div>
                        <div className="apm">                            
                            <div className="value">{this.props.apm}</div>
                            <div className="percent">%</div>
                        </div>
                        <div className="variable-apm">Variable APM</div>
                    </div>
                </div>
                <div className="table-title">
                    <div className="icon">
                        <span className="iconify" data-icon="fa-solid:file-contract" data-inline="false"></span>
                    </div>
                    <div className="title">Open Contracts</div>
                </div>
                <div className="table-header">
                    {window.innerWidth < 1080?(null):
                    <div className="cell w10">Coin Change</div>}
                    <div className="cell w10">Order Id</div>
                    <div className="cell w15">Open Date</div>
                    <div className="cell w15">Contract Time</div>
                    <div className="cell w20">Contract Fund</div>
                    <div className="cell w15">Collateral</div>
                    <div className="cell w15">Status</div>
                </div>
                {this.state.openContracts.map(row => {
                    return (
                        <div className="table-row" key={row.id}>
                            <div className="row" >
                                {window.innerWidth < 1080?(null):
                                <div className="cell w10">
                                    <img src={Img_CoinChange} alt=""/>
                                </div>}
                                <div className="cell w10">{row.orderId}</div>
                                <div className="cell w15">{row.date}</div>
                                <div className="cell w15">{row.time}</div>
                                <div className="cell w20">{row.fund}</div>
                                <div className="cell w15">{row.collateral}</div>
                                <div className="cell w15 close">Close</div>
                            </div>
                            <div className="width-text">{row.width}%</div>
                            <div className="bot-border">
                                <div className="fill" style={{width: row.width + '%'}}></div>
                            </div>
                        </div>
                    );
                })}

                <div className="table-title">
                    <div className="icon">
                        <span className="iconify" data-icon="fa-solid:file-contract" data-inline="false"></span>
                    </div>
                    <div className="title">Closed Contracts</div>
                </div>
                <div className="table-header">
                    {window.innerWidth < 1080?(null):
                    <div className="cell w10">Coin Change</div>}
                    <div className="cell w10">Order Id</div>
                    <div className="cell w15">Open Date</div>
                    <div className="cell w15">Contract Time</div>
                    <div className="cell w20">Contract Fund</div>
                    <div className="cell w15">Collateral</div>
                    <div className="cell w15">Status</div>
                </div>
                {this.state.openContracts.map(row => {
                    k ++;
                    return (
                        <div className="table-row" key={row.id}>
                            <div className={k === this.state.openContracts.length?
                                "row completed last":"row completed"} >
                                {window.innerWidth < 1080?(null):
                                <div className="cell w10">
                                    <img src={Img_CoinChange} alt=""/>
                                </div>}
                                <div className="cell w10">{row.orderId}</div>
                                <div className="cell w15">{row.date}</div>
                                <div className="cell w15">{row.time}</div>
                                <div className="cell w20">{row.fund}</div>
                                <div className="cell w15">{row.collateral}</div>
                                <div className="cell w15">Completed</div>
                            </div>
                        </div>
                    );
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    assetName: state.asset.b_asset_name,
    apm: state.asset.b_apm
});

const mapDispatchToProps = {
    updateWithdraw: updateWithdraw
};

Borrowed.defaultProps = {
    assetName: "Tether ",
    apm: 0
};
export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(Borrowed);