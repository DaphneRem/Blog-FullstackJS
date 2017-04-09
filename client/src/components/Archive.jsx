import React, { PureComponent } from 'react';
import {ArticlesContainerClient} from '../containers/index';
import background from '../images/background.jpg';

import { Link } from 'react-router';



const styles = {
  archiveContent: {
    width : '80%',
    height : '100%',
    display: 'flex',
    justifyContent : 'center',
    flexDirection : 'column',
    backgroundColor : '#f0e6da',
    alignItems :'center'
},
    backgroundImage : {
        backgroundImage : `url(${ background })`,
        backgroundSize : 'cover',
        backgroundRepeat : 'no-repeat',
        height : 600,
        width : '100%',
        display : 'flex',
        justifyContent : 'center',
        verticalAlign: 'baseline'
    }
};
export default class Archive extends PureComponent {



  render () {
    return (
      <div style={styles.archiveContent}>
          <div style={styles.backgroundImage}>
              <p>ARTICLES</p>
          </div>

          <div><ArticlesContainerClient/></div>
      </div>
    );
  }
}
