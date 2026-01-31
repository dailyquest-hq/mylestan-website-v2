import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    // Handle figma:asset imports by aliasing them to actual file paths
    config.resolve.alias = {
      ...config.resolve.alias,
      'figma:asset/b8f78dd8dc270e5f9737537d99a3a5e1cf6ee83a.png': resolve(__dirname, 'src/assets/b8f78dd8dc270e5f9737537d99a3a5e1cf6ee83a.png'),
      'figma:asset/f8a15c9bbe2cd8cb14e753e8e4a59ff2fbafe0ef.png': resolve(__dirname, 'src/assets/f8a15c9bbe2cd8cb14e753e8e4a59ff2fbafe0ef.png'),
      'figma:asset/1b7b9ed06e53fa11ed934b127bbe0f87cc647900.png': resolve(__dirname, 'src/assets/1b7b9ed06e53fa11ed934b127bbe0f87cc647900.png'),
      'figma:asset/d6dbe12a4a1ae670adbb682f9f3bb7e083e7f65e.png': resolve(__dirname, 'src/assets/d6dbe12a4a1ae670adbb682f9f3bb7e083e7f65e.png'),
      'figma:asset/c1e57017c54c3f6bc788abd25e0ed91bbe87351e.png': resolve(__dirname, 'src/assets/c1e57017c54c3f6bc788abd25e0ed91bbe87351e.png'),
      'figma:asset/7d78fafec50ff790a2dda5404c27187528d40c17.png': resolve(__dirname, 'src/assets/7d78fafec50ff790a2dda5404c27187528d40c17.png'),
      'figma:asset/6795e162202e3c0307963e5e15999946d0dee112.png': resolve(__dirname, 'src/assets/6795e162202e3c0307963e5e15999946d0dee112.png'),
      'figma:asset/f78360e4be7e9a1661cfa0c498def3203380ef51.png': resolve(__dirname, 'src/assets/f78360e4be7e9a1661cfa0c498def3203380ef51.png'),
      'figma:asset/56973181793d0559b0124604344bd6ba5c4d241e.png': resolve(__dirname, 'src/assets/56973181793d0559b0124604344bd6ba5c4d241e.png'),
      'figma:asset/f87f649b3b2f23aa77df960c560df6bb0216f4a5.png': resolve(__dirname, 'src/assets/f87f649b3b2f23aa77df960c560df6bb0216f4a5.png'),
      'figma:asset/ff0ad59b66b4aca8a3cf065d2b0d597d335772cf.png': resolve(__dirname, 'src/assets/ff0ad59b66b4aca8a3cf065d2b0d597d335772cf.png'),
      'figma:asset/9cd8da70bc103b52b37ed5fd3e7136829a3c6e01.png': resolve(__dirname, 'src/assets/9cd8da70bc103b52b37ed5fd3e7136829a3c6e01.png'),
      'figma:asset/b253e82081540176b3d882f6bb3f15d69992b182.png': resolve(__dirname, 'src/assets/b253e82081540176b3d882f6bb3f15d69992b182.png'),
      'figma:asset/d0934957009cfd03eb06d63d25a8976b37965681.png': resolve(__dirname, 'src/assets/d0934957009cfd03eb06d63d25a8976b37965681.png'),
      'figma:asset/d72ebac6f1b8c46df9e9709b6ed9aee6ae235822.png': resolve(__dirname, 'src/assets/d72ebac6f1b8c46df9e9709b6ed9aee6ae235822.png'),
      'figma:asset/1f193e0016cf4f0a417249bad529f1b793ba72e8.png': resolve(__dirname, 'src/assets/1f193e0016cf4f0a417249bad529f1b793ba72e8.png'),
      'figma:asset/a2b57061ef1fc4bd06444663d7a9380524d86d73.png': resolve(__dirname, 'src/assets/a2b57061ef1fc4bd06444663d7a9380524d86d73.png'),
      'figma:asset/28a4f614d987694196ce41b965605d10f4a1cf87.png': resolve(__dirname, 'src/assets/28a4f614d987694196ce41b965605d10f4a1cf87.png'),
      'figma:asset/404f996a0d5304ca66d9a3b9ac6681a1b136837f.png': resolve(__dirname, 'src/assets/404f996a0d5304ca66d9a3b9ac6681a1b136837f.png'),
    };
    return config;
  },
};

export default nextConfig;
