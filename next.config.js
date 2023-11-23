/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/api/(.*)', // 定义需要自定义跨域处理的 API 路由
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*', // 设置允许跨域请求的来源，可以是具体的域名或通配符 *
          },
        ],
      },
    ];
  },
}

module.exports = nextConfig
