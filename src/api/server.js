require('dotenv').config()
const express = require('express')
const serverless = require('serverless-http')
const bodyParser = require('body-parser')
const yelp = require('yelp-fusion')
const client = yelp.client(process.env.API_KEY)


const app = express()
const router = express.Router()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


//API calls
router.get('/api/hello', (req, res) => {
    client.reviews('papa-bears-restaurant-lake-havasu-city')
            .then(response => {
                res.send(filterReviews(response.jsonBody.reviews))})
            .catch(e => console.log(e))
});

function filterReviews(unfilteredReviews) {
    let finishedArray = []
    //gets back filtered reviews array
    const filteredReviews = unfilteredReviews.filter(review => review.rating >= 4)
    for(let x = 0; x < filteredReviews.length; x++){
        const { text,time_created, rating, user } = filteredReviews[x]
        const { profile_url, image_url, name } = user

        let newReviewObject = {
            text : text,
            date: time_created,
            rating: rating,
            profile_url: profile_url,
            image_url: image_url,
            name: name
        }

        finishedArray.push(newReviewObject)
    }

    return finishedArray
}


app.use('/.netlify/functions/server', router)

module.exports = app;
module.exports.handler = serverless(app)