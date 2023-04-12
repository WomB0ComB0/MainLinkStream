
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-present-env': {
      stage: 3,
      features: {
        'nesting-rules': true,
      },
    }
  },
};