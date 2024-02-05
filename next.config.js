const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

module.exports = withNextIntl({
  basePath: '',
  assetPrefix: '',
  outDir: 'out', // Указывает путь к выходной директории
});