import Article from '../models/article';

const getArticles = (req, res) => {
    Article.find(null, null, { sort: { postDate : 1 } }, (err, articles) => {
        if (err) {
            res.send(err);
        }
        res.json(articles);
    });
}

const getArticle = (req, res) => {
    const { id } = req.params;
    Article.findById(id, (err, article) => {
        if (err) {
            res.send(err);
        }
        res.json(article);
    });
}

const postArticle = (req, res) => {

  let article = Object.assign(new Article(), req.body);

  article.save(err => {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'article created' });
  });
};


const deleteArticle = (req, res) => {

  Article.remove(
    { _id: req.params.id },
    err => {
      if (err) {
        res.send(err);
      }
      res.json({ message: 'successfully deleted' });
    }
  );
};

export { getArticles, getArticle, postArticle, deleteArticle };
