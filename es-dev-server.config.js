// const proxy = require('koa-proxies');

// require('dotenv').config({
//     path: '.env.development'
// })

// module.exports = {
//     responseTransformers: [
//         function rewriteBasePath({ url, status, contentType, body }) {
//           if (url === '/' || url === '/index.html') {
//             const rewritten = body.replace(/<\/head>/, 
//                 `
//                     <script>
//                         window.process = ${JSON.stringify({
//                             env: process.env
//                         })}
//                     </script>
//                 </head>
//                 `)
//             return { body: rewritten };
//           }
//         },
//       ],
// };