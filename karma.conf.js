var webpackConfig = require("./webpack.config.js");

module.exports = function(config){
    config.set({
        browsers: ['PhantomJS'],
        hostname: process.env.IP,
        port: process.env.PORT,
        runnerPort: 0,
        singleRun: true,
                               //es6-shim allows for testing on es6 syntax
        frameworks: ['mocha', 'es6-shim'],
        files: [
          'node_modules/jquery/dist/jquery.min.js',
          'node_modules/foundation-sites/dist/foundation.min.js',
          'app/tests/**/*.test.jsx'
        ],
        preprocessors: {
                                                   //sourcemap = load the app and show up the source code not bundle.js
            'app/tests/**/*.test.jsx': ['webpack', 'sourcemap']
        },
        reporters: ['mocha'],
        client: {
            mocha: {
                timeout: '5000'
            }
        },
        webpack: webpackConfig,
        webpackServer: {
            noInfo: true
        },
        phantomjsLauncher: {
      // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom)
        exitOnResourceError: true
    },

    })
}