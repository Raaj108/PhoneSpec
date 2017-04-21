angular.module('phoneDetails').filter('addspace', function () {
  return function (input) {
    var string = input;
    var newString = string.charAt(0).toUpperCase() + string.slice(1);
    var result = newString.replace(/([a-z](?=[A-Z]))/g, '$1 ');
    return result;
  }
});
