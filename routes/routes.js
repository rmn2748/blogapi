var express = require('express');
var router = express.Router();
const authController = require('../controllers/authController');
const articlesController = require('../controllers/articlesController');
const commentsController = require('../controllers/commentsController')

/* LOG IN. */
router.get('/login', authController.login_get);

router.post('/login', authController.login_post);

/* SIGN UP. */
router.get('/signup', authController.signup_get);

router.post('/signup', authController.signup_post)

/* POSTS */

router.get('/articles', articlesController.articles_get)

router.post('/articles', articlesController.articles_post)

router.get('/articles/:id', articlesController.article_get)

router.put('/articles/:id', articlesController.article_put)

router.delete('/articles/:id', articlesController.article_delete)

/* COMMENTS */

// router.get('/comments', commentsController.comments_get)

router.get('/articles/:articleId/comments', commentsController.comments_get)

router.get('/articles/:articleId/comments/:commentId', commentsController.comment_get)

router.post('/articles/:articleId/comments/:commentId', commentsController.comment_post)

router.put('/articles/:articleId/comments/:commentId', commentsController.comment_put)

router.delete('/articles/:articleId/comments/:commentId', commentsController.comment_del)

module.exports = router;
