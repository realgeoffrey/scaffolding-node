// 入口文件，可以随意修改
process.title = process.env.NODE_ENV === "development" ? "dev-scaffolding-node" : "scaffolding-node";

console.log("可加任意插件", process.env.NODE_ENV);

const http = require("http");

http
  .createServer(function (req: any, res: any) {
    console.log("Request: " + req.method + " to " + req.url);
    res.writeHead(200, "OK");
    res.write("<h1>Hello</h1>Node.js is working");
    res.end();
  })
  .listen(8080);
