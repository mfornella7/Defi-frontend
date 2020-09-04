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

import './Market.scss';

class Market extends Component {
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
            <div className="Market">
                <div className="back"></div>
                <div className="gradient-back">
                    <img src={Img_Background} className="img_bg" alt=""/>
                </div>
                <div className="back-button" onClick={() => this.goBack()}>
                    <i className="fa fa-home" aria-hidden="true"></i>
                </div>
                <div className="market-text">Market Overview</div>
                <div className="sub-title">Subtitle</div>
                <div className="market-container">
                    <div className="supply-row">
                        <div className="supply-block">
                            <div className="header">
                                <div className="supply-text">Totaly Supply</div>
                                <div className="price">
                                    <div className="total">$1,741,233,396.15</div>
                                    <div className="discount">-0.03%</div>
                                </div>
                            </div>
                            <div className="body-block">
                                <div className="text-row">
                                    <div className="grey-text">Top 3 Markets</div>
                                </div>
                                <div className="text-row">
                                    <div className="grey-text">DAI</div>
                                    <div className="green-text">58.63%</div>
                                </div>
                                <div className="progress">
                                    <div className="fill" style={{width: '58.63%'}}/>
                                </div>
                                <div className="text-row">
                                    <div className="grey-text">ETH</div>
                                    <div className="green-text">21.73%</div>
                                </div>
                                <div className="progress">
                                    <div className="fill" style={{width: '21.73%'}}/>
                                </div>
                                <div className="text-row">
                                    <div className="grey-text">USDC</div>
                                    <div className="green-text">11.27%</div>
                                </div>
                                <div className="progress">
                                    <div className="fill" style={{width: '11.27%'}}/>
                                </div>
                                <div className="separator"/>
                                <div className="text-row">
                                    <div className="grey-text">24H Supply Volume</div>
                                    <div className="grey-text"># of Suppliers</div>
                                </div>
                                <div className="text-row">
                                    <div className="white-text">-$447,318.52</div>
                                    <div className="white-text">35297</div>
                                </div>
                            </div>
                        </div>
                        <div className="supply-block">
                            <div className="header">
                                <div className="supply-text">Totaly Supply</div>
                                <div className="price">
                                    <div className="total">$1,741,233,396.15</div>
                                    <div className="discount">-0.03%</div>
                                </div>
                            </div>
                            <div className="body-block">
                                <div className="text-row">
                                    <div className="grey-text">Top 3 Markets</div>
                                </div>
                                <div className="text-row">
                                    <div className="grey-text">DAI</div>
                                    <div className="green-text">58.63%</div>
                                </div>
                                <div className="progress">
                                    <div className="fill" style={{width: '58.63%'}}/>
                                </div>
                                <div className="text-row">
                                    <div className="grey-text">ETH</div>
                                    <div className="green-text">21.73%</div>
                                </div>
                                <div className="progress">
                                    <div className="fill" style={{width: '21.73%'}}/>
                                </div>
                                <div className="text-row">
                                    <div className="grey-text">USDC</div>
                                    <div className="green-text">11.27%</div>
                                </div>
                                <div className="progress">
                                    <div className="fill" style={{width: '11.27%'}}/>
                                </div>
                                <div className="separator"/>
                                <div className="text-row">
                                    <div className="grey-text">24H Supply Volume</div>
                                    <div className="grey-text"># of Suppliers</div>
                                </div>
                                <div className="text-row">
                                    <div className="white-text">-$4,887,152.52</div>
                                    <div className="white-text">5194</div>
                                </div>
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

Market.defaultProps = {
    assetName: "Tether ",
    apm: 0
};
export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(Market);