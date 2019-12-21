const proxy = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/v3',
    proxy({
      target: 'https://mallcdn.api.epet.com',
      changeOrigin: true,
    })
  );
  app.use(
    '/v8',
    proxy({
      target: 'https://mall.api.epet.com',
      changeOrigin: true,
      pathRewrite:{
        "^/v8":"/v3"
      }
    })
  );
}; 