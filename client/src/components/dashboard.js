import React from 'react';
import SurveyList from './surveys/SurveyList';
import { Link } from 'react-router-dom';
const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <SurveyList />
      <div class="fixed-action-btn">
        <Link to="/surveys/new" class="btn-floating btn-large red">
          <i class="large material-icons">add</i>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
