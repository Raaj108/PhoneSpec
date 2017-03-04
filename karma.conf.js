//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: '',

    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      '**/*.module.js',
      '*!(.module|.spec).js',
      '!(bower_components)/**/*!(.module|.spec).js',
      '!(bower_components)/**/*.js',
      '*.spec.js'
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',      
      'karma-jasmine'
    ]

  });
};
