Package.describe({
  name: 'fish:sox',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'sox audio utilities',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/fishdude/Meteor-sox.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});


Npm.depends({
  'sox-audio': '0.3.0'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.addFiles('sox.js', 'server');

  api.export('sox');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('fish:sox');
  api.addFiles('sox-tests.js');
});
