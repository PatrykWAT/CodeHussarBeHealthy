const https = require('https');
const App = require('./App')


https.get('smile :) ', (resp) => {
  let data = '';

  resp.on('data', (chunk) => {
    data += chunk;
  });

  resp.on('end', () => {
    console.log(JSON.parse(data));
    App.start(JSON.parse(data))
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});