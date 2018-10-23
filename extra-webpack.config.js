const marked = require('marked')
const rendered = new marked.Renderer()

module.exports = {
  module: {
    rules: [
      {
        test: /\.md$/,
        use: [
          {
            loader: "html-loader"
          },
          {
            loader: "markdown-loader",
            options: {
              pedanctic: true,
              rendered
            }
          }
        ]
      }
    ]
  }
}
