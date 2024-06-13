module.exports = {
    plugins: {
      'autoprefixer:': {},
      'postcss-import': {},
      'tailwindcss': {},
      'postcss-preset-env': {
        stage: 1,
        features: {
          'focus-within-pseudo-class': false
        }
      },
      'postcss-nested': {},
      'postcss-css-variables': {},
      'postcss-custom-media': {}
    }
  }
  
  