const { override, fixBabelImports ,addWebpackAlias ,addDecoratorsLegacy , setWebpackPublicPath} = require('customize-cra');

const path  = require("path")

 module.exports = override(
     fixBabelImports('import', {
       libraryName: 'antd-mobile',
       style: 'css',
     }),
     addWebpackAlias({
      assets: path.resolve(__dirname,"./src/assets"),
      components:path.resolve(__dirname,"./src/components"),
      pages:path.resolve(__dirname,"./src/pages"),
      store:path.resolve(__dirname,"./src/store"),
      utils:path.resolve(__dirname,"./src/utils")
    }),
    addDecoratorsLegacy(),//支持修饰符
    // setWebpackPublicPath("/epet/")//出口文件路径
   );