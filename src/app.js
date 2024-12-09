const express = require('express');
const app = express();
const appName = process.env.APP_NAME



app.get('/', (req, res) => {
  res.send(`
    <h1>Hello from deployment ${appName}!</h1>
    <p>This deployment was made using helm charts and argocd!</p>
    <p>Try sending a request to /error and see what happens</p>
  `);
});

app.get('/error', (req, res) => {
  process.exit(1);
});

app.listen(8080);
