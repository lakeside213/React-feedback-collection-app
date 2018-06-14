import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }
  renderSurveys() {
    if (this.props.surveys.length > 1) {
      return this.props.surveys.reverse().map(survey => {
        return (
          <div className="card blue-grey darken-1" key={survey._id}>
            <div className="card-content white-text">
              <span className="card-title">{survey.title}</span>
              <p>{survey.subject}</p>
              <p>{survey.body}</p>
              <p className="right">
                Sent On: {new Date(survey.dateSent).toLocaleDateString()}
              </p>
            </div>
          </div>
        );
      });
    } else {
      return (
        <div>
          <h6>Please Create a new survey</h6>
        </div>
      );
    }
  }
  render() {
    return <div>{this.renderSurveys()}</div>;
  }
}

function mapStateToProps({ surveys }) {
  console.log(surveys);
  return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
