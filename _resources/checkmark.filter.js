angular.module('phoneSpecApp').filter('checkmark', function () {
  return function (input) {
    if (input === 'true') {
      return '\u2713';
    } else if (input === 'false') {
      return '\u2718';
    }else{
      return input;
    }
  };
});