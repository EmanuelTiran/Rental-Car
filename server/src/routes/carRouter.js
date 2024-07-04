const carService = require("../services/carServices");

const express = require("express"),
  router = express.Router();


router.get("/",  async (req, res) => {
  const cars = await carService.getAllCars();
  res.json(cars);
});
router.get("/:id",  async (req, res) => {
  const car = await carService.getCarById(req.params.id);
  res.json(car);
});

router.post("/creatNewCar", async (req, res) => { 
  console.log(req.body);
  const newCar = carService.createCar(req.body);
  res.status(201).json(newCar);
});

router.delete("/:id", async (req, res) => { });

router.get('/',  async (req, res) => {

});

module.exports = router;