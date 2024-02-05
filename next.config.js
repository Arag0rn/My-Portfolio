const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

module.exports = withNextIntl({
  basePath: '/my-portfolio', // Замените на ваш путь
  assetPrefix: '/my-portfolio', // Замените на ваш путь
});