var webpack = require("webpack");
var path = require("path");

module.exports={
    entry: [
        'script!jquery/dist/jquery.min.js',
        'script!foundation-sites/dist/foundation.min.js',
        './app/app.jsx',
    ],
    externals: {
        jquery: 'jQuery'
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery'
        })
    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve:{
        //root and alias used for shortcutting naming on require
        root: __dirname,
        //moudle Directories make it so you dont have to make an alias for every file
        modulesDirectories: [
            'node_modules',
            "./app/components"
        ],
        alias: {
            applicationStyles: 'app/styles/app.scss'
            //ex:
            // Greeter: 'public/components/Greeter.jsx',
            // GreeterMessage: 'public/components/GreeterMessage.jsx',
            // GreeterForm: 'public/components/GreeterForm.jsx'
        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    sassLoader: {
        includePaths: [
            path.resolve(__dirname, './node_modules/foundation-sites/scss')
        ]
    },
    devtool: 'cheap-module-eval-source-map'
};