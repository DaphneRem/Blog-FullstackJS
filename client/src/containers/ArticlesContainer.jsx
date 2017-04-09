import React, { Component } from 'react';
import { Modal, ArticlesListManager } from '../components/index';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';



const styles = {
  customContentStyle : {
      width: '70%',
      maxWidth: 'none',
      height : '70vh'
  },
  image : {
      width: '80%',
      height: '70vh',
  }
};

export default class ArticlesContainer extends Component {

  constructor (props) {
    super(props);
    this.state = {
        articles : [],
        selectedArticle: {},
        searchBar: '',
        open: false
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.deleteArticle = this.deleteArticle.bind(this);
    this.setSearchBar = this.setSearchBar.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }


  componentDidMount () {
    this.getArticles();
  }

  toggleModal (index) {
    this.setState({ selectedArticle: this.state.articles[index] });
    this.setState({open : true});
  }

  handleClose(){
    this.setState({open: false});
  };

  getArticles () {
    fetch('https://api.mlab.com/api/1/databases/myblog/collections/articles?apiKey=bSt7cG45Z9CV_QNtP8wOf5JQ6ul1zyPS', {
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
    .then(response => response.json())
    .then(data => this.setState({ articles: data }));
    console.log(this.state.articles);
  }

  deleteArticle (myId) {
    fetch(`https://api.mlab.com/api/1/databases/myblog/collections/articles/${myId}?apiKey=bSt7cG45Z9CV_QNtP8wOf5JQ6ul1zyPS`, {
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      method: 'DELETE',
    })
    .then(response => response.json())
    .then(response => {
      console.log(this.state.articles);
      this.setState({ articles: this.state.articles.filter(article => article._id.$oid !== myId) });
      console.log(this.state.articles[0]._id.$oid);

    });
  }

  setSearchBar (event) {
    this.setState({ searchBar: event.target.value.toLowerCase() });
  }

  render () {

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}/>,
    ];

    const { articles, selectedArticle, searchBar } = this.state;

    return (
      <div>

        <Dialog
          article={selectedArticle}
          title={selectedArticle.name}
          actions={actions}
          modal={true}
          open={this.state.open}
          autoScrollBodyContent={true}
          contentStyle={styles.customContentStyle}>

            <img src={selectedArticle.picture} style={styles.image} alt='...'/>
            <h1>{selectedArticle.name}</h1>
            <p>{selectedArticle.description}</p>

        </Dialog>

        <ArticlesListManager
          articles={articles}
          searchBar={searchBar}
          setSearchBar={this.setSearchBar}
          toggleModal={this.toggleModal}
          deleteArticle={this.deleteArticle}/>

      </div>
    );
  }
}
