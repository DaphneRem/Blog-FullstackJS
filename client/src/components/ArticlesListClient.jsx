import React, { PureComponent } from 'react';
import { Link } from 'react-router';
import {ArticleClient} from './index';
import TextField from 'material-ui/TextField';

export default class ArticlesListClient extends PureComponent {
  render () {

      const styles = {
        root: {
          display: 'flex',
          width : '97%',
          flexWrap: 'wrap',
          justifyContent: 'flex-start',
        //   backgroundColor :'white',
      },
      container : {
          height : '100%',
          display: 'flex',
          justifyContent : 'center',
          flexDirection : 'column',
          alignItems :'center',
      }
    }

    const { articles, searchBar, setSearchBar, toggleModal } = this.props;
    return (

      <div style={styles.container}>

          <TextField
            type="search"
            floatingLabelText="Search by Name"
            hintText="Search"
            name="Search"
            onKeyUp={setSearchBar}
          />
          {/* <input
            type="search" placeholder="Search by Name" className="form-control search-bar" onKeyUp={setSearchBar} /> */}
        <div style={styles.root}>
        {
    // A Game is only shown if its name contains the string from the searchBar
          articles
            .filter(article => article.name.toLowerCase().includes(searchBar))
            .map((article, i) => {
              return (
                <ArticleClient
                  key={i}
                  index={i}
                  name={article.name ? article.name : "..."}
                  picture={article.picture}
                  description={article.description ? article.description : "..."}
                  myId={article._id.$oid}
                  toggleModal={toggleModal}
                />
              );
            })
        }
        </div>
      </div>

    );
  }
}
