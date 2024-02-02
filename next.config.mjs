/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    // ... другие конфигурации ...
  
    // Используйте новый способ экспорта вместо команды next export
    // Добавьте этот блок конфигурации
    exportPathMap: async function (
      defaultPathMap,
      { dev, dir, outDir, distDir, buildId }
    ) {
      return {
        // Укажите пути, которые вы хотите экспортировать
        '/': { page: '/' },
        '/about': { page: '/about' },
        // ... добавьте другие пути, если необходимо
      };
    },
  
    // ... другие конфигурации ...
  };
  
  module.exports = nextConfig;