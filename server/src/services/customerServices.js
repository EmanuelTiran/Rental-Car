const Customer = require('../models/customerModel'); // Adjust the path as necessary

const customerService = {
  // Get all customers
  getAllCustomers: async () => {
    try {
      return await Customer.find();
    } catch (error) {
      console.error('Error fetching customers:', error);
      throw error;
    }
  },

  // Get a single customer by ID
  getCustomerById: async (id) => {
    try {
      return await Customer.findById(id);
    } catch (error) {
      console.error(`Error fetching customer with id ${id}:`, error);
      throw error;
    }
  },

  // Create a new customer
  createCustomer: async (customerData) => {
    try {
      const newCustomer = new Customer(customerData);
      return await newCustomer.save();
    } catch (error) {
      console.error('Error creating customer:', error);
      throw error;
    }
  },

  // Update an existing customer
  updateCustomer: async (id, customerData) => {
    try {
      return await Customer.findByIdAndUpdate(id, customerData, { new: true });
    } catch (error) {
      console.error(`Error updating customer with id ${id}:`, error);
      throw error;
    }
  },

  // Delete a customer
  deleteCustomer: async (id) => {
    try {
      return await Customer.findByIdAndDelete(id);
    } catch (error) {
      console.error(`Error deleting customer with id ${id}:`, error);
      throw error;
    }
  },

  // Search customers by name or email
  searchCustomers: async (query) => {
    try {
      return await Customer.find({
        $or: [
          { firstName: { $regex: query, $options: 'i' } },
          { lastName: { $regex: query, $options: 'i' } },
          { email: { $regex: query, $options: 'i' } }
        ]
      });
    } catch (error) {
      console.error('Error searching customers:', error);
      throw error;
    }
  },

  // Check if email is already in use
  checkEmailAvailability: async (email) => {
    try {
      const customer = await Customer.findOne({ email: email.toLowerCase() });
      return !customer;
    } catch (error) {
      console.error('Error checking email availability:', error);
      throw error;
    }
  },

  // Check if driver's license number is already in use
  checkDriverLicenseAvailability: async (licenseNumber) => {
    try {
      const customer = await Customer.findOne({ 'driverLicense.number': licenseNumber });
      return !customer;
    } catch (error) {
      console.error('Error checking driver\'s license availability:', error);
      throw error;
    }
  },

  // Get customers with expiring driver's licenses
  getCustomersWithExpiringLicenses: async (daysThreshold) => {
    try {
      const thresholdDate = new Date();
      thresholdDate.setDate(thresholdDate.getDate() + daysThreshold);
      
      return await Customer.find({
        'driverLicense.expirationDate': { $lte: thresholdDate }
      });
    } catch (error) {
      console.error('Error fetching customers with expiring licenses:', error);
      throw error;
    }
  }
};

module.exports = customerService;
