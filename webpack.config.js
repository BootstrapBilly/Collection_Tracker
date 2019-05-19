module.exports = {
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
       ]
    },
    entry: {
        app: ['./src/js/Book.js', './src/js/Shelf.js', './src/js/test.js', './src/js/Utility.js', './src/js/UI.js']
    }
  };
