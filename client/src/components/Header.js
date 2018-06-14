import React, { Component } from 'react';
import { connect } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min.js';
import { Link } from 'react-router-dom';
import Payments from './payments';
class Header extends Component {
  componentDidMount() {
    var elem = document.querySelector('.sidenav');
    var instance = M.Sidenav.init(elem, {
      edge: 'left',
      inDuration: 250
    });
  }
  renderContent() {
    switch (this.props.auth) {
      case false:
        return (
          <li>
            <a href="/auth/google">Login</a>
          </li>
        );
      default:
        return [
          <li key="1">
            <Payments />
          </li>,

          <li key="3" style={{ margin: '0 10px', color: 'green' }}>
            <button className="btn waves-effect waves-light">
              My Credits: {this.props.auth.credits}
            </button>
          </li>,

          <li key="2">
            <a href="/api/logout">Logout</a>
          </li>
        ];
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to={this.props.auth ? '/surveys' : '/'} className="brand-logo">
            QuickSurveys
          </Link>
          <a href="#" data-target="mobile-demo" class="sidenav-trigger">
            <i class="material-icons">menu</i>
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>{this.renderContent()}</li>
          </ul>
          <ul class="sidenav" id="mobile-demo">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}
function mapStateToProps(state) {
  return { auth: state.auth };
}
export default connect(mapStateToProps)(Header);
