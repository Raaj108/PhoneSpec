angular.module('phoneSpecApp').filter('checkmark', function () {
  return function (input) {
    if (input === 'yes') {
      return '\u2713';
    } else if (input === 'no') {
      return '\u2718';
    }else{
      return input;
    }
  };
});