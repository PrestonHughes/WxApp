const express = require('express')
const app = express()
const port = 3000

const bodyParser = require('body-parser');

const scrapers = require('./scrapers');

app.use(bodyParser.json())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // disabled for security on local
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});

app.get('/weather', async (req, res) => {
    const weatherData = await scrapers.scrapeGoogleWx('https://www.google.com/search?q=5+day+forecast+Tuscaloosa+AL')
    res.send(weatherData)
})

app.get('/verbose', async (req, res) => {    
    const verboseFC = await scrapers.scrapeForVerboseForecast('https://www.localconditions.com/weather-tuscaloosa-alabama/35401/forecast.php');
    res.send(verboseFC)
})



app.listen(port, () => console.log(`Weather app listening on port ${port}!`))
