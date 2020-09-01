import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { compose }          from 'redux';

import './Home.scss';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <div className="Home">
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = {
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(Home);