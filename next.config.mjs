export default {
  reactStrictMode: true,

  webpack(config) {
    // Add the rule to handle SVG as React components using @svgr/webpack
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/, // Only apply this rule for .tsx or .jsx files
      use: ["@svgr/webpack"], // Use @svgr/webpack to convert SVG to React components
    });

    // Ensure that Next.js's default file loader doesn't handle SVGs
    config.module.rules.forEach((rule) => {
      if (rule.test?.test?.(".svg")) {
        rule.exclude = /\.svg$/i;
      }
    });

    return config;
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
};
