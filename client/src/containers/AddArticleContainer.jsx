import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import { Form } from '../components/index';
import RaisedButton from 'material-ui/RaisedButton';

export default class AddArticleContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {
        showForm: false,
        newArticle: {}
    };
    this.submit = this.submit.bind(this);
    this.uploadPicture = this.uploadPicture.bind(this);
    this.setArticle = this.setArticle.bind(this);
    this.modal = this.modal.bind(this);
  }

  submit () {
    const newArticle = Object.assign({}, { picture: document.getElementById('picture').src }, this.state.newArticle);
    fetch('http://localhost:8080/articles', {
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      method: 'POST',
      body: JSON.stringify(newArticle)
    })
    .then(response => response.json())
  //   .then(data => {
  //     console.log(data.message);
  //     // We go back to the games list view
  //     hashHistory.push('/api/articles');
  //   });
  }

  uploadPicture () {
    filepicker.pick (
      {
        mimetype: 'image/*', // Cannot upload other files but images
        container: 'modal',
        services: ['COMPUTER', 'FACEBOOK', 'INSTAGRAM', 'URL', 'IMGUR', 'PICASA'],
        openTo: 'COMPUTER' // First choice to upload files from
      },
      function (Blob) {
        console.log(JSON.stringify(Blob));
        document.getElementById('picture').src = Blob.url;
      },
      function (FPError) {
        console.log(FPError.toString());
      }
    );
  }

  setArticle () {
    const newArticle = {
      name: document.getElementById('name').value,
      description: document.getElementById('description').value,
      year: document.getElementById('year').value
    };
    this.setState({ newArticle });
  }


  modal() {
              this.setState({ showForm: !this.state.showForm,});
              console.log({ showForm: !this.state.showForm,})
  };

  render () {
    return (
        <div>
    <RaisedButton className="btn" label="Ajouter un Article" primary={true} onClick={this.modal} />
            <div>
                {this.state.showForm ?
                    <Form submit={this.submit} uploadPicture={this.uploadPicture} setArticle={this.setArticle} />
                    : null }
            </div>
        </div>

    );
  }
}
