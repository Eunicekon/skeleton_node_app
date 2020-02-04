const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const request = require('request');
const hbs = require('express-handlebars');

require('dotenv').config({ path: __dirname + '/.env' });

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'hbs');
app.engine('hbs', hbs({
  extname: 'hbs',
  defaultView: 'index',
  defaultLayout: null,
  // partialsDir: path.join(__dirname, 'views/partials'),
  // layoutsDir: path.join(__dirname, 'views/layouts')
}));

app.get('/', (req, res) => {
  request("https://pokeapi.co/api/v2/pokemon/", function (error, response, body) {
    console.error('error:', error); 
    console.log('statusCode:', response && response.statusCode);
    const parsedData = JSON.parse(body);
    console.log(parsedData["name"]); 
    console.log(parsedData.results);
    res.render("index", {
      "pokemon": JSON.stringify(parsedData.results, null, 4)
    })
  });
});

app.listen(port, () => console.log(`App is listening on port ${port}!`));