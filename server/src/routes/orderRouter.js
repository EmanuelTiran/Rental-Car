const orderService = require("../services/orderServices");

const express = require("express"),
  router = express.Router();


router.get("/",  async (req, res) => {
  const cars = await orderService.getAllOrders();
  res.json(cars);
});
router.get("/:id",  async (req, res) => {
  const car = await orderService.getOrderById(req.params.id);
  res.json(car);
});

router.post("/", async (req, res) => {
  console.log(req.body)
  const order = await orderService.createOrder(req.body);
  res.status(201).json(order);
 });

router.delete("/:id", async (req, res) => { });

router.get('/',  async (req, res) => {

});

module.exports = router;