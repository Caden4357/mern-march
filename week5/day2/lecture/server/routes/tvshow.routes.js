const TvShowController = require('../controllers/tvshow.controller');

module.exports = app => {
    app.get('/api/allShows', TvShowController.findAllShows);
    app.post('/api/newShow', TvShowController.createShow);
}