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

import './Wallet.scss';

class Wallet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            markets: [
                { name: 'Tether',     imgUrl: Img_Tether    , ts: ['$1,020.96M', '-0.37%'], sa: ['3.05%', '-0.07%'], tb: ['$812.17M', '-0.77%'], ba: ['4.0%', '-0.02']},
                { name: 'USD Coin',   imgUrl: Img_USDCoin   , ts: ['$1,020.96M', '-0.37%'], sa: ['3.05%', '-0.07%'], tb: ['$812.17M', '-0.77%'], ba: ['4.0%', '-0.02']},
                { name: 'Dai',        imgUrl: Img_Dai       , ts: ['$1,020.96M', '-0.37%'], sa: ['3.05%', '-0.07%'], tb: ['$812.17M', '-0.77%'], ba: ['4.0%', '-0.02']},
                { name: 'TrueUSD',    imgUrl: Img_TrueUSD   , ts: ['$1,020.96M', '-0.37%'], sa: ['3.05%', '-0.07%'], tb: ['$812.17M', '-0.77%'], ba: ['4.0%', '-0.02']},
                { name: 'Paxos',      imgUrl: Img_Paxos     , ts: ['$1,020.96M', '-0.37%'], sa: ['3.05%', '-0.07%'], tb: ['$812.17M', '-0.77%'], ba: ['4.0%', '-0.02']},
                { name: 'Binance USD',imgUrl: Img_Binance   , ts: ['$1,020.96M', '-0.37%'], sa: ['3.05%', '-0.07%'], tb: ['$812.17M', '-0.77%'], ba: ['4.0%', '-0.02']},
                { name: 'HUSD',       imgUrl: Img_HUSD      , ts: ['$1,020.96M', '-0.37%'], sa: ['3.05%', '-0.07%'], tb: ['$812.17M', '-0.77%'], ba: ['4.0%', '-0.02']},
            ],
        };
    }

    goBack() {
        this.props.history.push('/defi');
    }

    render() {
        return (
            <div className="Wallet">
                <div className="back"></div>
                <div className="gradient-back">
                    <img src={Img_Background} className="img_bg" alt=""/>
                </div>
                <div className="back-button" onClick={() => this.goBack()}>
                    <i className="fa fa-home" aria-hidden="true"></i>
                </div>
                <div className="market-text">
                    <div className="normal">0.0000</div>
                    <div className="secondary">00000</div>
                </div>
                <div className="sub-title">Subtitle</div>
                <div className="market-container">
                    <div className="voting-view">
                        <div className="header">
                            <div className="text">All Markets</div>
                        </div>
                        <div className="voting-block">
                            <div className="grey-text">COMP Balance</div>
                            <div className="price">
                                <div className="normal">0.0000</div>
                                <div className="secondary">00000</div>
                            </div>
                            <div className="separator"/>
                            <div className="grey-text">COMP Earned</div>
                            <div className="price">
                                <div className="normal">0.0000</div>
                                <div className="secondary">00000</div>
                            </div>
                            <div className="separator"/>
                            <div className="price">
                                <div className="normal">Setup Voting</div>
                            </div>
                            <div className="grey-text voting">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna sum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna .</div>
                            <div className="start-button">
                                Get Started
                            </div>
                        </div>
                    </div>
                    <div className="stock-view">
                        <div className="header">
                            <div className="text">All Markets</div>
                        </div>
                        <div className="header-row">
                            <div className="cell w20">Market</div>
                            <div className="cell w20">Total Supply</div>
                            <div className="cell w20">Supply APM</div>
                            <div className="cell w20">Total Borrow</div>
                            <div className="cell w10">Borrow APM</div>
                        </div>
                        {this.state.markets.map(row => {
                            return (
                                <div className="body-row" key={row.name}>
                                    <div className="cell w20">
                                        <img src={row.imgUrl} alt=""/>
                                        <div className="text"><div className="white">{row.name}</div></div>
                                    </div>
                                    <div className="cell w20">
                                        <div className="text">
                                            <div className="white">{row.ts[0]}</div>
                                            <div className="red">{row.ts[1]}</div>
                                        </div>
                                    </div>
                                    <div className="cell w20">
                                        <div className="text">
                                            <div className="white">{row.sa[0]}</div>
                                            <div className="red">{row.sa[1]}</div>
                                        </div>
                                    </div>
                                    <div className="cell w20">
                                        <div className="text">
                                            <div className="white">{row.tb[0]}</div>
                                            <div className="red">{row.tb[1]}</div>
                                        </div>
                                    </div>
                                    <div className="cell w10">
                                        <div className="text last">
                                            <div className="white">{row.ba[0]}</div>
                                            <div className="red">{row.ba[1]}</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
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

Wallet.defaultProps = {
    assetName: "Tether ",
    apm: 0
};
export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(Wallet);