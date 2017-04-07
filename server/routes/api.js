const express = require('express');

const router = new express.Router();

router.get('/articles', (req, res) => {
  res.status(200).json({
    message: 'coucoucoco'
  });
});

module.exports = router;
