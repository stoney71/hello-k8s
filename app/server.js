const http = require('http');
const port = process.env.PORT || 8080;
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type':'text/plain'});
  res.end(`hello-k8s!!!!!!!  path=${req.url}\n`);
});
server.listen(port, () => console.log(`listening on ${port}`));
