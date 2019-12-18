var express = require('express'),
  mongoose = require("mongoose")
var router = express.Router();

const beerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  brewery: {
    type: String,
    required: true
  },
  streetAddress: String,
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  zip: String,
  latitude: String,
  longitude: String,
  image: String,
  website: String,
  beerType: String,
  beerColor: String,
  glassware: String,
  abv: String,
  ibu: String,
  rating: String
})

const Beer = mongoose.model("Beer", beerSchema)

// /* Get Beer */
// router.get('/', function (req, res) {
//   console.log("Get req.query: ", req.query)
//   User.findOne(req.query, function (err, foundUser) {
//     if (err) {
//       console.error("User Get Route Error: ", err)
//       res.send(err)
//     }
//     else {
//       console.log("User Get Route foundUser", foundUser)
//       res.send(foundUser)
//     }
//   })
// });

/* Add A New Beer */
router.post("/", function (req, res) {
  console.log("User Post Route req.body", req.body)
  Beer.create(req.body, (err, newUser) => {
    if (err) {
      console.error("User Post Route Error: ", err)
      res.send(err)
    }
    else {
      console.log("User Post Route newUser", newUser)
      res.send(newUser)
    }
  })
})

module.exports = router;
