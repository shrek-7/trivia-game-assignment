const proxy = require('http-proxy-middleware');
// for cross origin
// https://create-react-app.dev/docs/proxying-api-requests-in-development
module.exports = function(app) {
  app.use(proxy('/api',
    { target: 'localhost',
      secure: false,
      changeOrigin: true }
  ));
};