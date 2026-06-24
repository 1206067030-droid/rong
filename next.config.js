/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    unoptimized: true,
    formats: ['image/webp'],
  },
  output: 'export',
  trailingSlash: true,
  
  // 性能优化
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // 压缩配置
  compress: true,
  
  // 生成Etags
  generateEtags: true,
  
  // 优化打包
  poweredByHeader: false,
  
  // 严格模式
  reactStrictMode: true,
  
  // 优化字体加载
  optimizeFonts: true,
}

module.exports = nextConfig