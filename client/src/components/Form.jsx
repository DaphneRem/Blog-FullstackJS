import React, { PureComponent } from 'react';
import { Link } from 'react-router';

import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default class Form extends PureComponent {
  render () {
    return (
      <Card className="container">

                <form name="product-form" action="" onSubmit={() => this.props.submit()} noValidate>

                    <div className="field-line">
                      <TextField
                        id="name"
                        floatingLabelText="Titre"
                        name="Titre"
                        onChange={() => this.props.setArticle()}
                      />
                    </div>

                    <div className="field-line">
                        <TextField
                          id="description"
                          floatingLabelText="Contenu"
                          name="Contenu"
                          onChange={() => this.props.setArticle()}
                          multiLine={true}
                          rows={7}
                          rowsMax={300}
                          fullWidth={true}
                        />
                    </div>

                    <div className="field-line">
                      <TextField
                        id="year"
                        floatingLabelText="Année"
                        name="Année"
                        onChange={() => this.props.setArticle()}
                      />
                    </div>

                    <div className="button-line">
                      <RaisedButton
                          type="button"
                          label="Télécharger"
                          onClick={() => this.props.uploadPicture()}
                          primary />
                    </div>

                    <img id="picture"/>

                      <RaisedButton type="submit" label="Ajouter" primary />

                </form>
    </Card>
    );
  }
}
