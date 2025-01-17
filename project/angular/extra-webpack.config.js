const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;

module.exports = (config, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(config, options);

  singleSpaWebpackConfig['externals'].push('rxjs');

  // The public github path where the bundles are going to be served needs to be added as follows
  singleSpaWebpackConfig['output']['publicPath'] = 'https://cdn.jsdelivr.net/gh/contribution-model/bwce/';
  // Feel free to modify this webpack config however you'd like to
  return singleSpaWebpackConfig;
};
