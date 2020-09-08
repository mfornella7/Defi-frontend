import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { compose }          from 'redux';
import { withRouter }       from 'react-router-dom'

import Img_Logo         from '../../assets/image/home/logo.png';
import Img_Menu         from '../../assets/image/menu.png';
import Img_BTC          from '../../assets/image/borrow/btc.png';
import Img_QR           from '../../assets/image/borrow/QR.png';
import Img_QRCode       from '../../assets/image/home/QR.png';

import './Header.scss';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: false,
            tab: 0,
        };
    }

    renderMobile() {
        if (window.innerWidth < 1080) {
            return <img className="menu" src={Img_Menu} alt="" onClick={() => {
                this.props.history.push('/defi')
            }}/>
        }
        return(
            <div/>
        )
    }

    render() {
        return (
            <div className="Header">
                {this.renderMobile()}
                <div className="tabs">
                    <div className="tab active">
                        <img src={Img_Logo} alt=""/>
                        <div className="text">Dashboard</div>
                    </div>
                    <div className="tab">
                        <img src={Img_Logo} alt=""/>
                        <div className="text">Assets</div>
                    </div>
                </div>
                <div className="settings" onClick={() => {
                    this.setState({ isShow: true })
                }}>
                    <i className='fas fa-wallet'></i>
                </div>
                {this.state.isShow?
                    <div className="panel">
                        <div className="panel-header">
                            <div className="title">
                                <div className="text">My Balances</div>
                                <div className="bar"/>
                            </div>
                            <div onClick={() => {
                                this.setState({ isShow: false })
                            }}>
                                <i className='fa fa-times'></i>
                            </div>
                        </div>
                        <div className="panel-body">
                            <div className="ctrl-row">
                                <img src={Img_BTC} alt="" className="btc"/>
                                <div className="btc-detail">
                                    <div className="row">
                                        <div className="dark">Bitcon</div>
                                        <div className="dark">6.0944BTC</div>
                                    </div>
                                    <div className="row">
                                        <div className="light">Contract Balance</div>
                                        <div className="light">6.0944BTC</div>
                                    </div>
                                    <div className="row">
                                        <div className={this.state.tab === 0?"button active":"button"}
                                            onClick={() => {
                                                this.setState({tab: 0});
                                            }}
                                        >
                                            <i class="fa fa-paper-plane" aria-hidden="true"></i>
                                            Deposit</div>
                                        <div className={this.state.tab === 1?"button active":"button"}
                                            onClick={() => {
                                                this.setState({tab: 1});
                                            }}
                                        >
                                            <i class="fa fa-download" aria-hidden="true"></i>
                                            Withdraw</div>
                                        <div className={this.state.tab === 2?"button active":"button"}
                                            onClick={() => {
                                                this.setState({tab: 2});
                                            }}
                                        >
                                            <i class="fa fa-random" aria-hidden="true"></i>
                                            Exchange</div>
                                    </div>
                                    {this.state.tab === 0 ?
                                        <div className="deposit-block">
                                            <div className="db-header">
                                                <div className="title">Deposit</div>
                                                <i className='fa fa-times'></i>
                                            </div>
                                            <div className="send">send</div>
                                            <div className="btc-price">
                                                <img src={Img_BTC} alt=""/>
                                                <div className="btc-text">BTC</div>
                                                <div className="price">1.00000000</div>                                        
                                            </div>
                                            <img src={Img_QR} alt="" className="QR"/>
                                            <div className="copy">
                                                <div className="text">1M5vkVXeaEbyTdry2HnWXFnygBelYrvSp1</div>
                                                <i className='fa fa-clone'></i>                                       
                                            </div>
                                        </div>:(null)}
                                    {this.state.tab === 1 ?
                                        <div className="deposit-block">
                                        <div className="db-header">
                                            <div className="title">Withdraw</div>
                                            <i className='fa fa-times'></i>
                                        </div>
                                        <div className="send">balance</div>
                                        <div className="btc-price">
                                            <img src={Img_BTC} alt=""/>
                                            <div className="btc-text">BTC</div>
                                            <div className="price">1.00000000</div>                                        
                                        </div>
                                        <div className="btc-price single">
                                            <div className="price">1.00000000</div>                                        
                                        </div>
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
                                            <img src={Img_QRCode} alt="" className="qrcode"/>
                                        </div>
                                        <div className="withdraw-button">WITHDRAW</div>
                                    </div>:(null)}
                                    {this.state.tab === 2 ?
                                        <div className="deposit-block">
                                            <div className="db-header">
                                                <div className="title">Exchange</div>
                                                <i className='fa fa-times'></i>
                                            </div>
                                            <div className="send">I have 0.032221132 Bitcoin</div>
                                            <div className="btc-price noborder">
                                                <img src={Img_BTC} alt=""/>
                                                <div className="btc-text">BTC</div>
                                                <div className="price">1.00000000</div>                                        
                                            </div>
                                            <div className="sp-row">
                                                <div className="line"/>
                                                <div className="icon">
                                                    <i className='fa fa-random'></i>
                                                </div>
                                            </div>
                                            <div className="send">I want Tether USDT</div>
                                            <div className="btc-price noborder">
                                                <img src={Img_BTC} alt=""/>
                                                <div className="btc-text">USDT</div>
                                                <i className='fa fa-caret-down'></i>
                                                <div className="price">1.00000000</div>                                        
                                            </div>
                                            <div className="all-but">All</div>
                                            <div className="warning">
                                                <div className="timage"></div>
                                                <div className="text">You don't have enough funds to start this exchnage. you current balance is 0.32221132 BTC</div>
                                            </div>
                                            <div className="withdraw-button">EXCHANGE</div>
                                        </div>:(null)}
                                </div>
                            </div>
                            <div className="ctrl-row">
                                <img src={Img_BTC} alt="" className="btc"/>
                                <div className="btc-detail">
                                    <div className="row">
                                        <div className="dark">Bitcon</div>
                                        <div className="dark">6.0944BTC</div>
                                    </div>
                                    <div className="row">
                                        <div className="light">Contract Balance</div>
                                        <div className="light">6.0944BTC</div>
                                    </div>
                                    <div className="row">
                                        <div className="button">
                                            <i class="fa fa-paper-plane" aria-hidden="true"></i>
                                            Deposit</div>
                                        <div className="button">
                                            <i class="fa fa-download" aria-hidden="true"></i>
                                            Withdraw</div>
                                        <div className="button">
                                            <i class="fa fa-random" aria-hidden="true"></i>
                                            Exchange</div>
                                    </div>
                                </div>
                            </div>
                            <div className="ctrl-row">
                                <img src={Img_BTC} alt="" className="btc"/>
                                <div className="btc-detail">
                                    <div className="row">
                                        <div className="dark">Bitcon</div>
                                        <div className="dark">6.0944BTC</div>
                                    </div>
                                    <div className="row">
                                        <div className="light">Contract Balance</div>
                                        <div className="light">6.0944BTC</div>
                                    </div>
                                    <div className="row">
                                        <div className="button">
                                            <i class="fa fa-paper-plane" aria-hidden="true"></i>
                                            Deposit</div>
                                        <div className="button">
                                            <i class="fa fa-download" aria-hidden="true"></i>
                                            Withdraw</div>
                                        <div className="button">
                                            <i class="fa fa-random" aria-hidden="true"></i>
                                            Exchange</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>:(null)}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = {
};

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(Header);