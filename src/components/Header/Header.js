import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { compose }          from 'redux';
import { withRouter }       from 'react-router-dom'

import Img_Logo         from '../../assets/image/home/logo.png';
import Img_Menu         from '../../assets/image/menu.png';
import Img_QR           from '../../assets/image/borrow/QR.png';
import Img_QRCode       from '../../assets/image/home/QR.png';

import Img_BTC          from '../../assets/image/borrow/btc.png';
import Img_Tether           from '../../assets/image/home/tether.png';
import Img_USDCoin          from '../../assets/image/home/usdcoin.png';
import Img_Dai              from '../../assets/image/home/dai.png';
import Img_TrueUSD          from '../../assets/image/home/trueusd.png';
import Img_Paxos            from '../../assets/image/home/paxos.png';
import Img_Binance          from '../../assets/image/home/binanceusd.png';
import Img_HUSD             from '../../assets/image/home/husd.png';

import './Header.scss';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: false,
            tab: -1,
            assets: [
                {img: Img_BTC, name: 'Bitcoin'},
                {img: Img_Tether, name: 'Tether'},
                {img: Img_USDCoin, name: 'USD Coin'},
                {img: Img_Dai, name: 'Dai'},
                {img: Img_TrueUSD, name: 'TrueUSD'},
                {img: Img_Paxos, name: 'Paxos'},
                {img: Img_Binance, name: 'Binance USD'},
                {img: Img_HUSD, name: 'HUSD'},
            ],
            assetName: '',
        };
        this.wrapperRef = React.createRef();
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    handleClickOutside(event) {
        if (this.wrapperRef && this.wrapperRef.current && !this.wrapperRef.current.contains(event.target)) {
            if (this.state.isShow)
                this.setState({
                    isShow: false,
                })
        }
    }

    renderMobile() {
        return <img className="menu" src={Img_Menu} alt="" onClick={() => {
            this.props.history.push('/market')
        }}/>
    }

    openCamera() {

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
                </div>
                <div className="settings" onClick={() => {
                    this.setState({ isShow: true })
                }}>
                    <i className='fas fa-wallet'></i>
                </div>
                {this.state.isShow?
                    <div className="panel" ref={this.wrapperRef}>
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
                            {this.state.assets.map(asset => {
                                return (
                                    <div className="ctrl-row" key={asset.name}>
                                        <img src={asset.img} alt="" className="btc"/>
                                        <div className="btc-detail">
                                            <div className="row">
                                                <div className="dark">{asset.name}</div>
                                                <div className="dark">6.0944BTC</div>
                                            </div>
                                            <div className="row">
                                                <div className="light">Contract Balance</div>
                                                <div className="light">6.0944BTC</div>
                                            </div>
                                            <div className="row">
                                                <div className={this.state.tab === 0 && this.state.assetName === asset.name?"button active":"button"}
                                                    onClick={() => {
                                                        this.setState({
                                                            tab: 0,
                                                            assetName: asset.name
                                                        });
                                                    }}
                                                >
                                                    <i className="fa fa-paper-plane" aria-hidden="true"></i>
                                                    Deposit</div>
                                                <div className={this.state.tab === 1 && this.state.assetName === asset.name?"button active":"button"}
                                                    onClick={() => {
                                                        this.setState({
                                                            tab: 1,
                                                            assetName: asset.name
                                                        });
                                                    }}
                                                >
                                                    <i className="fa fa-download" aria-hidden="true"></i>
                                                    Withdraw</div>
                                                <div className={this.state.tab === 2 && this.state.assetName === asset.name?"button active":"button"}
                                                    onClick={() => {
                                                        this.setState({
                                                            tab: 2,
                                                            assetName: asset.name
                                                        });
                                                    }}
                                                >
                                                    <i className="fa fa-random" aria-hidden="true"></i>
                                                    Exchange</div>
                                            </div>
                                            {this.state.tab === 0 && this.state.assetName === asset.name ?
                                                <div className="deposit-block">
                                                    <div className="db-header">
                                                        <div className="title">Deposit</div>
                                                        <i className='fa fa-times' onClick={() => {
                                                            this.setState({tab: -1})
                                                        }}></i>
                                                    </div>
                                                    <div className="send">send</div>
                                                    <div className="btc-price">
                                                        <img src={asset.img} alt=""/>
                                                        <div className="btc-text">{asset.name}</div>
                                                        <div className="price">1.00000000</div>                                        
                                                    </div>
                                                    <img src={Img_QR} alt="" className="QR"/>
                                                    <div className="copy">
                                                        <div className="text">1M5vkVXeaEbyTdry2HnWXFnygBelYrvSp1</div>
                                                        <i className='fa fa-clone'></i>                                       
                                                    </div>
                                                </div>:(null)}
                                            {this.state.tab === 1 && this.state.assetName === asset.name ?
                                                <div className="deposit-block">
                                                <div className="db-header">
                                                    <div className="title">Withdraw</div>
                                                    <i className='fa fa-times' onClick={() => {
                                                        this.setState({tab: -1})
                                                    }}></i>
                                                </div>
                                                <div className="send">balance</div>
                                                <div className="btc-price">
                                                    <img src={asset.img} alt=""/>
                                                    <div className="btc-text">{asset.name}</div>
                                                    <div className="price">1.00000000</div>                                        
                                                </div>
                                                <div className="btc-price single">
                                                    <div className="price single">1.00000000</div>                                        
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
                                                <div className="paste-address" onClick={() => this.openCamera()}>
                                                    <input placeholder="Tap to paste address..."/>
                                                    <img src={Img_QRCode} alt="" className="qrcode"/>
                                                </div>
                                                <div className="withdraw-button">WITHDRAW</div>
                                            </div>:(null)}
                                            {this.state.tab === 2 && this.state.assetName === asset.name ?
                                                <div className="deposit-block">
                                                    <div className="db-header">
                                                        <div className="title">Exchange</div>
                                                        <i className='fa fa-times' onClick={() => {
                                                            this.setState({tab: -1})
                                                        }}></i>
                                                    </div>
                                                    <div className="send">I have 0.032221132 Bitcoin</div>
                                                    <div className="btc-price noborder">
                                                        <img src={asset.img} alt=""/>
                                                        <div className="btc-text">{asset.name}</div>
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
                                    </div>);
                            })}
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