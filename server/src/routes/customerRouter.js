const customerService = require("../services/customerServices");

const express = require("express"),
  router = express.Router();


router.get("/",  async (req, res) => {
  const customers = await customerService.getAllCustomers();
  res.json(customers);
});
router.post("/",  async (req, res) => {
  console.log(req.body);
  const customer = await customerService.createCustomer(req.body);
  res.json(customer);
});

router.put("/:id", async (req, res) => { });

router.delete("/:id", async (req, res) => { });

router.get('/',  async (req, res) => {

});

module.exports = router;