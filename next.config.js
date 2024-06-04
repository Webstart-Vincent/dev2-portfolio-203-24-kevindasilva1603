const path = require("path");

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ["res.cloudinary.com"],
    },
    webpack: (config) => {
        config.resolve.alias["@"] = path.resolve(__dirname);
        return config;
    },
    experimental: {
        esmExternals: "loose",
    },
};

module.exports = nextConfig;
