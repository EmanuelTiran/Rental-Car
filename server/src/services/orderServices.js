const Order = require('../models/orderModel'); // Adjust the path as necessary

const orderService = {
  // Create a new order
  createOrder: async (orderData) => {
    try {
      const newOrder = new Order(orderData);
      return await newOrder.save();
    } catch (error) {
      console.error('Error creating order:', error);
      throw error;
    }
  },

  // Get all orders
  getAllOrders: async () => {
    try {
      return await Order.find().populate('car');
    } catch (error) {
      console.error('Error fetching orders:', error);
      throw error;
    }
  },

  // Get a single order by ID
  getOrderById: async (id) => {
    try {
      return await Order.findById(id).populate('car');
    } catch (error) {
      console.error(`Error fetching order with id ${id}:`, error);
      throw error;
    }
  },

  // Update an existing order
  updateOrder: async (id, orderData) => {
    try {
      return await Order.findByIdAndUpdate(id, orderData, { new: true }).populate('car');
    } catch (error) {
      console.error(`Error updating order with id ${id}:`, error);
      throw error;
    }
  },

  // Delete an order
  deleteOrder: async (id) => {
    try {
      return await Order.findByIdAndDelete(id);
    } catch (error) {
      console.error(`Error deleting order with id ${id}:`, error);
      throw error;
    }
  },

  // Get orders by status
  getOrdersByStatus: async (status) => {
    try {
      return await Order.find({ status: status }).populate('car');
    } catch (error) {
      console.error(`Error fetching orders with status ${status}:`, error);
      throw error;
    }
  },

  // Get orders for a specific car
  getOrdersForCar: async (carId) => {
    try {
      return await Order.find({ car: carId }).populate('car');
    } catch (error) {
      console.error(`Error fetching orders for car ${carId}:`, error);
      throw error;
    }
  },

  // Get orders for a specific customer (by email)
  getOrdersForCustomer: async (email) => {
    try {
      return await Order.find({ email: email }).populate('car');
    } catch (error) {
      console.error(`Error fetching orders for customer ${email}:`, error);
      throw error;
    }
  },

  // Check if a car is available for a given date range
  checkCarAvailability: async (carId, startDate, endDate) => {
    try {
      const conflictingOrders = await Order.find({
        car: carId,
        $or: [
          { startDate: { $lte: endDate }, endDate: { $gte: startDate } },
          { startDate: { $gte: startDate, $lte: endDate } },
          { endDate: { $gte: startDate, $lte: endDate } }
        ],
        status: { $in: ['Pending', 'Confirmed'] }
      });
      return conflictingOrders.length === 0;
    } catch (error) {
      console.error(`Error checking availability for car ${carId}:`, error);
      throw error;
    }
  },

  // Get all orders within a date range
  getOrdersInDateRange: async (startDate, endDate) => {
    try {
      return await Order.find({
        $or: [
          { startDate: { $lte: endDate }, endDate: { $gte: startDate } },
          { startDate: { $gte: startDate, $lte: endDate } },
          { endDate: { $gte: startDate, $lte: endDate } }
        ]
      }).populate('car');
    } catch (error) {
      console.error('Error fetching orders in date range:', error);
      throw error;
    }
  },

  // Update order status
  updateOrderStatus: async (id, status) => {
    try {
      return await Order.findByIdAndUpdate(id, { status: status }, { new: true }).populate('car');
    } catch (error) {
      console.error(`Error updating status for order ${id}:`, error);
      throw error;
    }
  },

  // Get total revenue for a given period
  getTotalRevenue: async (startDate, endDate) => {
    try {
      const orders = await Order.find({
        startDate: { $gte: startDate },
        endDate: { $lte: endDate },
        status: 'Completed'
      }).populate('car');

      return orders.reduce((total, order) => {
        const rentalDays = (order.endDate - order.startDate) / (1000 * 60 * 60 * 24);
        return total + (rentalDays * order.car.dailyRate);
      }, 0);
    } catch (error) {
      console.error('Error calculating total revenue:', error);
      throw error;
    }
  }
};

module.exports = orderService;
