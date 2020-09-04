import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { compose }          from 'redux';
import { withRouter }       from 'react-router-dom'

import Img_Logo         from '../../assets/image/home/logo.png';
import Img_Setting      from '../../assets/image/home/configuration.png';
import Img_User         from '../../assets/image/home/user.png';
import Img_Menu         from '../../assets/image/menu.png';

import './Header.scss';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
                <div className="settings">
                    <img className="img-setting" src={Img_Setting} alt="" onClick={() => {
                        this.props.history.push('/market');}}/>
                    <img className="img-user" src={Img_User} alt="" onClick={() => {
                        this.props.history.push('/wallet');}}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = {
};

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(Header);