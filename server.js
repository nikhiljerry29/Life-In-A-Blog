const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("./data/db.json");
const middlewares = jsonServer.defaults({
   static: "./build",
});

const port = process.env.port || 8000;
server.use(middlewares);

server.use(router);
server.listen(port, () => {
   console.log(`Server is running on ${port}`);
});