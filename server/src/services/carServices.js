const Car = require('../models/carModel'); // Adjust the path as necessary

const carService = {
  // Get all cars
  getAllCars: async () => {
    try {
      return await Car.find();
    } catch (error) {
      console.error('Error fetching cars:', error);
      throw error;
    }
  },

  // Get a single car by ID
  getCarById: async (id) => {
    try {
      return await Car.findById(id);
    } catch (error) {
      console.error(`Error fetching car with id ${id}:`, error);
      throw error;
    }
  },

  // Create a new car
  createCar: async (carData) => {
    try {
      const newCar = new Car(carData);
      return await newCar.save();
    } catch (error) {
      console.error('Error creating car:', error);
      throw error;
    }
  },

  // Update an existing car
  updateCar: async (id, carData) => {
    try {
      return await Car.findByIdAndUpdate(id, carData, { new: true });
    } catch (error) {
      console.error(`Error updating car with id ${id}:`, error);
      throw error;
    }
  },

  // Delete a car
  deleteCar: async (id) => {
    try {
      return await Car.findByIdAndDelete(id);
    } catch (error) {
      console.error(`Error deleting car with id ${id}:`, error);
      throw error;
    }
  },

  // Search cars by name or email
  searchCars: async (query) => {
    try {
      return await Car.find({
        $or: [
          { firstName: { $regex: query, $options: 'i' } },
          { lastName: { $regex: query, $options: 'i' } },
          { email: { $regex: query, $options: 'i' } }
        ]
      });
    } catch (error) {
      console.error('Error searching cars:', error);
      throw error;
    }
  },

  // Check if email is already in use
  checkEmailAvailability: async (email) => {
    try {
      const car = await Car.findOne({ email: email.toLowerCase() });
      return !car;
    } catch (error) {
      console.error('Error checking email availability:', error);
      throw error;
    }
  },

  // Check if driver's license number is already in use
  checkDriverLicenseAvailability: async (licenseNumber) => {
    try {
      const car = await Car.findOne({ 'driverLicense.number': licenseNumber });
      return !car;
    } catch (error) {
      console.error('Error checking driver\'s license availability:', error);
      throw error;
    }
  },

  // Get cars with expiring driver's licenses
  getCarsWithExpiringLicenses: async (daysThreshold) => {
    try {
      const thresholdDate = new Date();
      thresholdDate.setDate(thresholdDate.getDate() + daysThreshold);
      
      return await Car.find({
        'driverLicense.expirationDate': { $lte: thresholdDate }
      });
    } catch (error) {
      console.error('Error fetching cars with expiring licenses:', error);
      throw error;
    }
  }
};

module.exports = carService;
