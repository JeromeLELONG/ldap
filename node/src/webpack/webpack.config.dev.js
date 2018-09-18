import path from 'path';
import webpack from 'webpack';
import qs from 'querystring';

const root = process.cwd();
const src  = path.join(root, 'src');

const clientSrc    = path.join(src, 'client');
const universalSrc = path.join(src, 'universal');


const clientInclude = [clientSrc, universalSrc];

const babelQuery = {
  "env": {
     "development": {
       "presets": ["react-hmre"],
       "plugins": [
         ["react-transform", {
           "transforms": [{
             "transform": "react-transform-hmr",
             "imports": ["react"],
             "locals": ["module"]
           }]
         }]
       ]
     }
   }
};


export default {
  devtool: 'eval',
  context: src,
  entry: {
    app: [
      'webpack-hot-middleware/client',
      './client/client.js',
      './server/server.babel.js'
    ]
  },
  output: {
    filename: 'app.js',
    chunkFilename: '[name]_[chunkhash].js',
    path: path.join(root, 'build'),
    publicPath: '/static/'
  },
  node: {
    fs: "empty",
    net: "empty",
    fsevents: "empty",
    module: "empty"
 },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      '__CLIENT__': true,
      '__PRODUCTION__': false,
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
  ],
  resolve: {
    extensions: ['.js','.jsx'],
    modules: [src, 'node_modules']
  },
  module: {
    loaders: [
      { test: /\.json$/, loader: "json-loader" },
      // Javascript
      
      {
        test: /\.jsx$/,
        loader: 'babel',
        exclude: /node_modules/,
        query:  ['es2015', 'react','stage-2'],
        include: clientInclude
      },
      
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react','stage-2']
        }
      },



      // CSS
      {
       test: /\.css$/,
       include: clientInclude,
       loader: 'style-loader!css-loader?' + qs.stringify({
         modules: true,
         importLoaders: 1,
         localIdentName: '[path][name]-[local]'
       })
     }
    ]
  }
};
