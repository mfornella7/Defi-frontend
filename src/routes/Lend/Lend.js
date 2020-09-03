import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { compose }          from 'redux';
import { withRouter }       from 'react-router-dom'

import Img_Background       from '../../assets/image/home/bg.png';
import Img_LendBalance    from '../../assets/image/lend/lend2up.png';
import Img_Tether           from '../../assets/image/home/tether.png';
import Img_USDCoin          from '../../assets/image/home/usdcoin.png';
import Img_Dai              from '../../assets/image/home/dai.png';
import Img_TrueUSD          from '../../assets/image/home/trueusd.png';
import Img_Paxos            from '../../assets/image/home/paxos.png';
import Img_Binance          from '../../assets/image/home/binanceusd.png';
import Img_HUSD             from '../../assets/image/home/husd.png';
import Img_Lend             from '../../assets/image/lend/lend2.png';
import Img_BTC              from '../../assets/image/borrow/btc.png';
import Img_QR               from '../../assets/image/borrow/QR.png';
import Img_Change           from '../../assets/image/borrowed/change.png';

import './Lend.scss';

class Lend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prgoress: 0,
        };
    }

    goBorrowed() {
        this.props.history.push('/interest');
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

    renderBorrowBlock() {
        if (this.state.prgoress === 1) return;
        return (
            <div className="block-body">
                <div className="apm-text">
                    <div className="text">{this.props.apm}</div>
                    <div className="percent">%</div>
                </div>
                <div className="grey-text">Variable APM</div>
                <div className="borrow-button" onClick={() => { this.setState({prgoress: 1}) }}>
                    <img src={Img_Lend} alt="" />
                    <div className="text">Lend</div>
                </div>
            </div>
        );
    }

    renderBorrowDetail() {
        if (this.state.prgoress === 0) return;
        return (
            <div className="detail-block">
                <div className="rate">1 BTC - 11.50000000</div>
                <div className="group">send</div>
                <div className="btc-row">
                    <img src={Img_BTC} alt=""/>
                    <div className="btc-text">BTC</div>
                    <i className="fa fa-caret-down" aria-hidden="true"></i>
                    <div className="price">1.00000000</div>
                </div>
                <div className="textwithline">
                    <div className="border"/>
                    <div className="mid-text">
                        <img src={Img_Change} alt=""/>
                    </div>
                    <div className="border"/>
                </div>
                <div className="group">converted amount</div>
                <div className="btc-row">
                    {this.renderAsset()}
                    <div className="btc-text">USDT</div>
                    <i className="fa fa-caret-down" aria-hidden="true"></i>
                    <div className="price">11.50000000</div>
                </div>
                <div className="btc_text">1.00000000 BTC</div>
                <div className="img-QR" onClick={() => this.goBorrowed()}>
                    <img src={Img_QR}  alt=""/>
                </div>
                <div className="address-row">
                    <div className="address">1M5vkVXeaEbyTdry2HnXWFnybGeLYrvSp1</div>
                    <i className="fa fa-clone" aria-hidden="true"></i>
                </div>
            </div>
        )

    }

    render() {
        return (
            <div className="Lend">
                <div className="back"></div>
                <div className="gradient-back">
                    <img src={Img_Background} className="img_bg" alt=""/>
                </div>
                <div className="back-button" onClick={() => this.goBack()}>
                    <i className="fa fa-chevron-left" aria-hidden="true"></i>
                </div>
                <img src={Img_LendBalance} className="img-borrow" alt=""/>
                <div className="borrow-text">Lend {this.props.assetName}</div>
                <div className="block-header">
                    <div/>
                    {this.renderAsset()}
                    <i className="fa fa-times" aria-hidden="true"></i>
                </div>
                {this.renderBorrowBlock()}
                {this.renderBorrowDetail()}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    assetName: state.asset.b_asset_name,
    apm: state.asset.b_apm
});

const mapDispatchToProps = {
};

Lend.defaultProps = {
    assetName: "Tether ",
    apm: 3.01,
};
export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(Lend);