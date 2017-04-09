import React, { PureComponent } from 'react';
import { Link } from 'react-router';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


      const styles = {
        articleCard : {
          width: 350,
          height: 460,
          overflowY: 'auto',
          margin : '10px'
        },
        image : {
            width: 300,
            height: 300,
        }
      };


export default class ArticleClient extends PureComponent {
  render () {

    const { myId,index, name, description, picture, toggleModal} = this.props;
    return (
        <Card style={styles.articleCard}>
            <CardMedia
                overlay={<CardTitle title={name} subtitle="by Daphné" />}>
                <img src={picture} alt="..." style={styles.image} />
            </CardMedia>
            {/* <CardTitle title={name} subtitle="Card subtitle" /> */}
            <CardText>
                {`${description.substring(0, 150)}...`}
            </CardText>
            <CardActions>
                <FlatButton label="View" onClick={() => toggleModal(index)}/>
            </CardActions>
        </Card>
    );
  }
}
