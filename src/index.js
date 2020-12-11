console.log("loaded")

const NEWS_URL = `https://api.currentsapi.services/v1/latest-news?`
const API_KEY = config.API_KEY

fetch(NEWS_URL + API_KEY)
.then(res => res.json())
.then(console.log)
