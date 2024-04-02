// See https://github.com/typicode/json-server#module
// const jsonServer = require('json-server')

// const server = jsonServer.create()

// // Comment out to allow write operations
// const router = jsonServer.router('db.json')

// const middlewares = jsonServer.defaults()

// server.use(middlewares)
// // Add this before server.use(router)
// server.use(jsonServer.rewriter({
//     '/api/*': '/$1',
//     '/blog/:resource/:id/show': '/:resource/:id'
// }))
// server.use(router)
// server.listen(3000, () => {
//     console.log('JSON Server is running')
// })

// // Export the Server API
// module.exports = server
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults({ static: "./build" });
const port = process.env.PORT || 3000;
server.use(middlewares);
server.use(router);
server.listen(port);
