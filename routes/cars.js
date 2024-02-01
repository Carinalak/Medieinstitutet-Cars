var express = require('express');
var router = express.Router();



/* GET users listing. */
router.get('/', function(req, res, next) {

    req.app.locals.db.collection("cars").find().toArray()

    .then(results => {
      console.log(results);

      let printCars = "<div><h2>Våra bilar</h2>"

      for (car in results) {
        printCars += "<div>" + results[car].carVin + "|" + results[car].carMake + "-" + results[car].carModel + " (" + results[car].modelYear + ") " + results[car].carColor + "</div>" 
      }

      printCars += "</div>"

      res.send(printCars);

    });

    req.app.locals.db.collection("cars").countDocuments()
    .then(results => {
      console.log(results);
    })
});

router.post("/", (req, res) => {
  let newCar = req.body;
  console.log("new car", newCar);
  res.json(newCar); 
});


/* // Jannes kod fungerar inte hos mig än:

router.post("/add", function(req, res) {

  req.app.locals.db.collection("cars").insertMany(req.body)
  .then(result => {
    console.log(result);
    res.json({"status": "ok"});
  })

});
*/
module.exports = router;
