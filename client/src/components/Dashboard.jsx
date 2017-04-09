import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import {ArticlesContainer, AddArticleContainer} from '../containers/index';


const Dashboard = ({ secretData }) => (
  <div>
      <h1>Dashboard</h1>
      <p>Welcome in your BackOffice Admin !</p>

     <AddArticleContainer/>
     <ArticlesContainer/>
     
     {/* {secretData && <CardText style={{ fontSize: '16px', color: 'green' }}>{secretData}</CardText>} */}

  </div>
);

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Dashboard;
