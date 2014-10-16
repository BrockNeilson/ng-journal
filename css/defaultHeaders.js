var app = angular.module('blog');

app.factory('httpRequestInterceptor', function () {
  return {
    request: function (config) {
      config.headers = {'X-Parse-Application-Id': 'odI3uSoKefF26Dxc5wTJxCHWqG4u2SLt2L4q4pRA', 'X-Parse-REST-API-Key': 'FmuvMNJhySycLC9R7Ap8jXoB04EfhFxAUbzAzzcu'}
      return config;
    }
  };
});