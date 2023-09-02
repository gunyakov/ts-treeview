const path = require('path');
var webpack = require("webpack");

module.exports = {
    devtool: 'inline-source-map',
    entry: './build/index.js',
    mode: 'development',
    output: {
        // export itself to a global var
        libraryTarget: "var",
        library: "TreeList",
        filename: 'ts-treeview.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['', '.js'],
        alias: {
          'treeview': path.resolve(__dirname, './build/index.js')  // <-- When you build or restart dev-server, you'll get an error if the path to your utils.js file is incorrect.
        }
      },
    plugins: [

        // ...
    
        new webpack.ProvidePlugin({
          'TreeView': 'treeview'
        })
      ]  
};