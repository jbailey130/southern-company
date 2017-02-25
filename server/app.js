const express = require('express');
const app = express();

let staticPath = path.join(__dirname, '/public');
app.use(express.static(staticPath));

app.get('/*', (req, res) => res.redirect(staticPath + '/index.html'))


app.listen(3001, () => console.log('listening on server port 3001'));
