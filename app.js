const express = require('express');
const bodyParser = require('body-parser');        //middleware to allow me use the info stored in my req and res
const app = express();
const port = 3000;
const request = require('request');

app.use(bodyParser.urlencoded({ extended: true }));  
app.use(express.static('public'));                

app.get('/', (req, res) => {
  request("https://pokeapi.co/api/v2/pokemon/?offset=", function (error, response, body) {
    if(!error && response.statusCode == 200){
      const countData = JSON.parse(body)
      res.render("index", {countData: countData});
    }
  });
});

app.get('/bulbasaur', function (req, res){
  request("https://pokeapi.co/api/v2/pokemon/bulbasaur", function(error, response, body){
  if(!error && response.statusCode == 200){
    const gameData = JSON.parse(body)
    res.render("result", {gameData: gameData});
  }
  })
});

//defining my route to call the html file
app.set('view engine', 'ejs');                   

app.post('/', function (req, res) {            
  res.render('index');

  console.log(req.body.pokemon);           
});
  
app.listen(port, () => console.log(`Example app listening on port ${port}!`));