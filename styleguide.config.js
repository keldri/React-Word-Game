module.exports = {
    title: "Wordle Clone",
    components: 'src/components/[A-Z]**/!(index.js)',
    webpackConfig: {
        module: {
          rules: [
            {
              test: /\.jsx?$/,
              exclude: /node_modules/,
              loader: 'babel-loader'
            }
          ]
        }
    }
}