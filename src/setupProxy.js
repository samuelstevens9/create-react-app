const proxy = require('http-proxy-middleware')
const pkg = require('../package.json')
const target = process.env.PROXY || pkg.proxy
// tslint:disable-next-line:no-console
console.log("setupProxy",target);
module.exports = function(app) {
  // app.use(proxy({ target }));
  app.use(proxy('/api', { 
    // pathRewrite: { '^/api': '' },
  	secure: false,
  	target,
   }));
  
};
// module.exports = app => {
//   if(target){
//     app.use((req, res, next) =>{
//       // tslint:disable-next-line:no-console
//       console.log("setupProxy",target);
//       req.accepts('text/html') ? next() : proxy({ target })(req, res, next)
//     }
//   }
// }
  

