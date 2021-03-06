module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/bower_components/angular-ui-router/release/angular-ui-router.js',
      'app/bower_components/angular-touch/angular-touch.js',
      'app/bower_components/lodash/lodash.js',
      'app/bower_components/restangular/dist/restangular.min.js',
      'app/bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
      'app/app.js',
      'app/services/**/*.js',
      'app/controllers/**/*.js',
      'tests/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
