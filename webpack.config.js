module.exports = {
  entry: './public/app.jsx',

  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },

  resolve: {
    root: __dirname,
    alias: {
      //main page components
      Main: 'public/components/Main.jsx',
      Nav: 'public/components/Nav.jsx',

      //subpages
      Weather: 'public/components/pages/Weather.jsx',
      About: 'public/components/pages/About.jsx',
      Examples: 'public/components/pages/Examples.jsx',

      //weatherpage components
      WeatherForm: 'public/components/WeatherForm.jsx',
      WeatherMessage: 'public/components/WeatherMessage.jsx'
    },

    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
        {
          loader:'babel-loader',
          query: {
            presets: ['react', 'es2015', 'stage-0']
          },
          test: /\.jsx?$/,
          exclude: /(node_modules | bower_components)/
        }
    ]
  }
}
