module.exports.articles_get = (req, res, next) => {
    res.send('art get');
};

module.exports.articles_post = (req, res, next) => {
    res.send('art post');
};

module.exports.article_get = (req, res, next) => {
    res.send('art getid');
};

module.exports.article_put = (req, res, next) => {
    res.put('art getput');
};

module.exports.article_delete = (req, res, next) => {
    res.send('art del id');
};