import React, { PureComponent } from 'react';
// import { Card, CardTitle } from 'material-ui/Card';
import Link from 'react-router';

import home from '../images/home.jpg';


const styles = {
    background : {
        backgroundImage : `url(${ home })`,
        backgroundSize : 'cover',
        backgroundRepeat : 'no-repeat',
        marginTop : '-65px',
        height : '100vh',
        width : '100%',

        display : 'flex',
        justifyContent : 'flex-end',
        verticalAlign: 'middle'
    },
    liens : {
    	display :'flex',
    	justifyContent : 'center',
    	flexDirection : 'column',
    	verticalAlign : 'middle',
    	alignSelf :'center',
    	marginRight : '100px',
    	color : 'white',
    	fontSize : '50px'
    }
};

export default class HomePage extends PureComponent {
  render () {
    return (
      <div style={styles.background}>

      		<div style={styles.liens}>
                  <h1>Welcome</h1>
                  <h2>Code is Fun</h2>
                  <h3>Code is poetry</h3>
           </div>

      </div>
    );
  }
}
