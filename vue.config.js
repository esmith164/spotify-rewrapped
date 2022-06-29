module.exports = {
  devServer: {
 //   https: true,

    "proxy": {
      "/api/auth": {
        "target": 'https://accounts.spotify.com/api',
        "pathRewrite": { 
          '^/api/auth': ''
         },
        "changeOrigin": true,
        "secure": false
      },
      "/api": {
        "target": 'https://api.spotify.com/v1/',
        "pathRewrite": { 
          '^/api': ''
         },
        "changeOrigin": true,
        "secure": false
      },

    }
  }
}