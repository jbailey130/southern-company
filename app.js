const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const app = express();

let staticPath = path.join(__dirname, '/public');
app.use(express.static(staticPath));

app.use(favicon(__dirname + '/public/assets/favicon.ico'));

app.get('/*', (req, res) => res.redirect(staticPath + '/index.html'))

let port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log('listening on server port ' + port);
});
