module.exports = {
    // lintOnSave: false,
    lintOnSave: 'warning',
    //代理服务器
    devServer: {
        proxy: {
            '/api': {
                target: 'http://182.92.128.115',
                changeOrigin: true,
                /* pathRewrite: { 
                  '^/api': ''
                } */
            }
        }
    },
}