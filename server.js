const http = require('http');
const fs   = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;

http.createServer((req, res) => {
  const htmlFile = fs.existsSync(path.join(__dirname, 'index.html'))
    ? 'index.html' : 'ai-agent-scanner.html';
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(fs.readFileSync(path.join(__dirname, htmlFile)));
}).listen(PORT, '0.0.0.0', () => {
  console.log('AI Agent Scanner listening on port ' + PORT);
});
