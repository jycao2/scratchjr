module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { browsers: ['last 3 versions', 'Safari >= 8', 'iOS >= 8'] } }],
    '@babel/preset-react'
  ]
};
