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
import Img_Deposit          from '../../assets/image/lend/deposit.png';
import Img_Withdraw         from '../../assets/image/lend/withdraw.png';

import { updateWithdraw }   from '../../store/reducers/asset';


import './Interest.scss';

class Interest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [
                { id: 0, asset: 'Deposit', date: 'Jul 13, 2020', t_id: '0x204832kj2h423940293847987sd87fsd879ssb879fs98ax3f', amount: '+120.23232341 USDT', status: 'Pending'},
                { id: 1, asset: 'Withdraw', date: 'Jul 13, 2020', t_id: '0x204832kj2h423940293847987sd87ssd879ssb879fs98ax3f', amount: '40.23923949 USDT', status: 'Confirmed'},
                { id: 2, asset: 'Deposit', date: 'Jul 13, 2020', t_id: '0x204832kj2h423940293847987sd87fsd879ssb879fs98ax3f', amount: '+120.23232341 USDT', status: 'Confirmed'}
            ],
            status:[false, false, false]
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

    onRow(id) {
        let s = [...this.state.status]
        s[id] = !s[id];
        this.setState({ status: s});
    }

    render() {
        return (
            <div className="Interest">
                <div className="back"></div>
                <div className="gradient-back">
                    <img src={Img_Background} className="img_bg" alt=""/>
                </div>
                <div className="back-button" onClick={() => this.goBack()}>
                    <i className="fa fa-home" aria-hidden="true"></i>
                </div>
                {/* <div className="notification">
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
                </div> */}
                <div className="interest-text">Total Funds Earning Interest</div>
                <div className="interest-price">
                    <div className="usdt-mobile">USDT</div>
                    <div className="price">122.00000300</div>
                    <div className="usdt">USDT</div>
                </div>
                <div className="interest-detail-container">
                    <div className="apm-block">
                        <div className="usdt-apm">USDT APM</div>
                        <div className="apm">                            
                            <div className="value">{this.props.apm}</div>
                            <div className="percent">%</div>
                        </div>
                        <div className="variable-apm">Variable APM</div>
                    </div>
                    <div className="option-block">
                        <div className="top-back"/>
                        {this.renderAsset()}
                        <div className="balance">YOUR LIFETIME EARNINGS</div>
                        <div className="balance-price">
                            <div className="value">+0.000003000</div>
                        </div>
                        <div className="buttons">                            
                            <div className="borrow-button" onClick={() => { 
                                this.props.history.push('/lend')}}>DEPOSIT</div>        
                            <div className="withdraw-button" onClick={() => { 
                                this.props.updateWithdraw({withdraw: 'lend'})
                                this.props.history.push('/withdraw')}}>WITHDRAW</div>
                        </div>
                    </div>
                    <div className="apm-block mobile">
                        <div className="usdt-apm">USDT APM</div>
                        <div className="apm">
                            <div className="value">{this.props.apm}</div>
                            <div className="percent">%</div>
                        </div>
                        <div className="variable-apm">Variable APM</div>
                    </div>
                    <div className="gas-block">
                        <div className="gas-text">GAINS PROJECTION</div>
                        <div className="month-button">
                            1 MONTH
                            <i className="fa fa-caret-down" aria-hidden="true"></i>
                        </div>
                        <div className="balance-price">
                            <div className="value">0.00078300</div>
                            <div className="usdt">USDT</div>
                        </div>

                    </div>
                </div>
                <div className="table-header">
                    <div className="cell w15">Asset</div>
                    <div className="cell w15">Date</div>
                    <div className="cell w40 desktop">Transaction ID</div>
                    <div className="cell w15 desktop">Amount</div>
                    <div className="cell w15">Status</div>
                </div>
                {this.state.history.map(row => {
                    return (
                        <div className="table-row" key={row.id}>
                            <div className={row.id === 2?"row last":"row"}  onClick={() => this.onRow(row.id)}>
                                <div className="cell w15">
                                    <img src={row.asset === "Deposit" ? Img_Deposit:Img_Withdraw} alt=""/>
                                    <div className="text">{row.asset}</div>
                                </div>
                                <div className="cell w15">
                                    <div className="text">{row.date}</div>
                                </div>
                                <div className="cell w40 desktop">
                                    <div className="text tid">{row.t_id}</div>
                                </div>
                                <div className="cell w15 desktop">
                                    <div className="text amount">{row.amount}</div>
                                </div>
                                <div className="cell w15">
                                    {row.status==='Pending'?
                                        <div className="text pending">{row.status}</div>:
                                        <div className="text confirmed">{row.status}</div>
                                    }
                                    {this.state.status[row.id]?
                                        <i className="fa fa-chevron-up" aria-hidden="true"></i>:
                                        <i className="fa fa-chevron-down" aria-hidden="true"></i>
                                    }
                                </div>
                            </div>
                            {this.state.status[row.id]?
                                <div className="row-detail">
                                    <div className="item mobile">
                                        <div className="line"/>
                                        <div className="detail">
                                            <div className="dis">Amount</div>
                                            <div className="amount">{row.amount}</div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="line"/>
                                        <div className="detail">
                                            <div className="dis">To</div>
                                            <div className="address">0x58dscf8393547fsd9878sdsf9fsc8d7csd87</div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="line"/>
                                        <div className="detail">
                                            <div className="dis">Fee</div>
                                            <div className="address">0.001812323 ETH</div>
                                        </div>
                                    </div>
                                    <div className="item mobile">
                                        <div className="line"/>
                                        <div className="detail">
                                            <div className="dis">Transaction ID</div>
                                            <div className="id">{row.t_id.slice(0, 30) + '...'}</div>
                                        </div>
                                    </div>
                                </div>:
                                <div/>
                            }
                        </div>
                    )
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

Interest.defaultProps = {
    assetName: "Tether ",
    apm: 0
};
export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(Interest);