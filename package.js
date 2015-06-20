Package.describe({
  name: 'pbastowski:require',
  version: '0.0.3',
  // Brief, one-line summary of the package.
  summary: 'Simple require stub',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/pbastowski/require',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('require.js', ['client']);
  api.export(['require', 'exports', 'module']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('pbastowski:require');
  api.addFiles('require-tests.js');
});
