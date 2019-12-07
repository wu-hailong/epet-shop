const proxy = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/v3',
    proxy({
      target: 'https://mallcdn.api.epet.com',
      changeOrigin: true,
    })
  );
}; 