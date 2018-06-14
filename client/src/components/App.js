import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from './Header';
import '../style/style.css';
import Landing from './landing';
import Dashboard from './dashboard';
import SurveyNew from './surveys/SurveyNew';
class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    if (this.props.auth == null) {
      return (
        <div className="preloader-wrapper big active loader">
          <div className="spinner-layer spinner-red-only">
            <div className="circle-clipper left">
              <div className="circle" />
            </div>
            <div className="gap-patch">
              <div className="circle" />
            </div>
            <div className="circle-clipper right">
              <div className="circle" />
            </div>
          </div>
        </div>
      );
    }
    return (
      <BrowserRouter>
        <div>
          <Header />

          <Route exact path="/" component={Landing} />
          <Route exact path="/surveys" component={Dashboard} />
          <Route path="/surveys/new" component={SurveyNew} />
        </div>
      </BrowserRouter>
    );
  }
}
function mapStateToProps(state) {
  return { auth: state.auth };
}
export default connect(mapStateToProps, actions)(App);
