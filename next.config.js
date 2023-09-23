/** @type {import('next').NextConfig} */

const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin")
const monacoRules = [
  {
    test: /\.ttf$/,
    type: "asset/resource",
  },
]

module.exports = {
  webpack: (config, { isServer }) => {
    // Modify config and then return it
    if (!isServer) {
      config.plugins.push(
        new MonacoWebpackPlugin({
          languages: ["javascript", "markdown", "yaml"],
          filename: "static/[name].worker.js",
        })
      )
      config.module.rules.push(...monacoRules)
    }

    // https://github.com/vercel/next.js/discussions/41189
    config["resolve"] = {
      ...config.resolve,
      extensionAlias: {
        /* eslint-disable @typescript-eslint/naming-convention */
        ".js": [".js", ".ts"],
        ".jsx": [".jsx", ".tsx"],
        /* eslint-enable @typescript-eslint/naming-convention */
      },
    }

    // config.module.rules.push(...shikijiRules)
    return config
  },
}
