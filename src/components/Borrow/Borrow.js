import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { compose }          from 'redux';
import { withRouter }       from 'react-router-dom'

import Img_BorrowBalance    from '../../assets/image/home/borrowbalance.png';
import Img_Tether           from '../../assets/image/home/tether.png';
import Img_USDCoin          from '../../assets/image/home/usdcoin.png';
import Img_Dai              from '../../assets/image/home/dai.png';
import Img_TrueUSD          from '../../assets/image/home/trueusd.png';
import Img_Paxos            from '../../assets/image/home/paxos.png';
import Img_Binance          from '../../assets/image/home/binanceusd.png';
import Img_HUSD             from '../../assets/image/home/husd.png';

import './Borrow.scss';

class Borrow extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    renderAsset() {
        return (
            <img src={Img_Tether} alt=""/>
        )
    }

    render() {
        return (
            <div className="Borrow">
                <img src={Img_BorrowBalance} className="img-borrow" alt=""/>
                <div className="borrow-text">Borrow {this.props.assetName}</div>
                <div className="block-header">
                    <div/>
                    {this.renderAsset()}
                    <i className="fa fa-times" aria-hidden="true"></i>
                </div>
                <div className="block-body">
                    <div className="apm-text">
                        <div className="text">{this.props.apm}</div>
                        <div className="percent">%</div>
                    </div>
                    <div className="grey-text">Variable APM</div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = {
};

Borrow.defaultProps = {
    assetName: "Tether ",
    apm: 3.01,
};
export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(Borrow);