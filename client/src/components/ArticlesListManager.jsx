import React, { PureComponent } from 'react';
import { Link } from 'react-router';
import {Article} from './index';
import TextField from 'material-ui/TextField';

export default class ArticlesListManager extends PureComponent {
  render () {

      const styles = {
        root: {
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
        }
    }

    const { articles, searchBar, setSearchBar, toggleModal, deleteArticle } = this.props;
    return (

      <div>

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
                <Article
                  key={i}
                  index={i}
                  name={article.name ? article.name : "..."}
                  picture={article.picture}
                  description={article.description ? article.description : "..."}
                  myId={article._id.$oid}
                  toggleModal={toggleModal}
                  deleteArticle={deleteArticle}
                />
              );
            })
        }
        </div>
      </div>

    );
  }
}
