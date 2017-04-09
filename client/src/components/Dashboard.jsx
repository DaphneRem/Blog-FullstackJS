import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import {ArticlesContainer, AddArticleContainer} from '../containers/index';


const styles = {
  archiveContent: {
    width : '80%',
    height : '100%',
    display: 'flex',
    justifyContent : 'center',
    flexDirection : 'column',
    backgroundColor : '#393536',
    alignItems :'center'
},
    backgroundImage : {
        // backgroundImage : `url(${ background })`,
        backgroundSize : 'cover',
        backgroundRepeat : 'no-repeat',
        height : 600,
        width : '100%',

        display : 'flex',
        justifyContent : 'center',
        verticalAlign: 'baseline'
    },
    titre : {
        color : 'white',
        fontSize : '60px',
        alignSelf :'center'


    }
};


const Dashboard = ({ secretData }) => (
  <div style={styles.archiveContent}>
      <h1 style={styles.titre}>My Back Office</h1>

     <AddArticleContainer/>
     <ArticlesContainer/>
     
  </div>
);

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Dashboard;
