var path=require('path');

module.exports={
    entry:'./src/app.js',  //入口文件
    output:{
        path:path.resolve(__dirname,"./"),
        filename:'index.js'
    },    //出口文件
    module:{
        rules:[
            {
                test:/\.js$/,   //解析的文件是谁
                exclude:/node_modules/,    //不包含哪个文件的解析
                use:{
                    loader:"babel-loader",   //用的什么转换器
                    options:{
                        presets:['es2015','stage-0','react'],   //安装了当前转换器的哪些包
                        plugins:[[
                            "transform-runtime",
                            {
                                "helpers":false,
                                "polyfill":false,
                                "regenerator":true,
                                "moduleName":"babel-runtime"
                            }
                        ]]
                    }
                }
            }
        ]
    }
}