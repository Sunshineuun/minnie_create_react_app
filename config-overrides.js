 const {
     injectBabelPlugin
 } = require('react-app-rewired');

 const rewireLess = require('react-app-rewire-less');

 module.exports = function override(config, env) {
     config = injectBabelPlugin(['import', {
         libraryName: 'antd',
         libraryDirectory: 'es',
         style: true
     }], config);

     // do stuff with the webpack config...
     return config;
 };
