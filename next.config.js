const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const path = require('path');
const fs = require('fs');

module.exports = withSass(withCSS({
    webpack(config, { defaultLoaders }) {
        config.module.rules.push({
              test: /\.(png|eot|otf|ttf|woff|woff2)$/,
              use: {
                  loader: 'url-loader',
              },
          },
          {
              enforce: 'pre',
              test: /.scss$/,
              loader: 'sass-resources-loader',
              options: {
                  resources: fs.readdirSync(path.join(process.cwd(), 'styles')).filter(file => file.match(/^_.*\.scss$/)).map(file => './styles/' + file),
              },
          });
        config.resolve.extensions = [".ts", ".js", ".jsx", ".tsx", ".svg"];
        config.resolve.alias['components'] = path.join(__dirname, 'components');
        config.resolve.alias['pages'] = path.join(__dirname, 'pages');
        config.resolve.alias['/'] = path.join(__dirname, 'public');
        config.resolve.alias['styles'] = path.join(__dirname, 'styles');
        config.resolve.alias['public'] = path.join(__dirname, 'public');
        config.resolve.alias['library'] = path.join(__dirname, 'library');

        return config;
    },
}));