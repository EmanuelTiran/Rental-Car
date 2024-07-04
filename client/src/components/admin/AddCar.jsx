import axios from 'axios'
import React, { useState } from 'react'

export default function AddCar() {
  const [carData, setCarData] = useState({
    make: '',
    model: '',
    year: '',
    licensePlate: '',
    type: '',
    dailyRate: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setCarData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const fetchCars = async (dataForm) => {
    try {
      await axios.post('http://localhost:5050/cars/creatNewCar', dataForm)
      alert("Success to create new car")
    } catch (err) {
      console.log(err)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the car data to your backend
    console.log('New car data:', carData)
    fetchCars(carData)
    // Reset form after submission
    setCarData({ make: '', model: '', year: '', licensePlate: '', type: '', dailyRate: '' })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Add New Car</h1>
      <form onSubmit={handleSubmit} className="max-w-lg">
        <div className="mb-4">
          <label htmlFor="make" className="block text-gray-700 font-bold mb-2">Make</label>
          <input
            type="text"
            id="make"
            name="make"
            value={carData.make}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="model" className="block text-gray-700 font-bold mb-2">Model</label>
          <input
            type="text"
            id="model"
            name="model"
            value={carData.model}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="year" className="block text-gray-700 font-bold mb-2">Year</label>
          <input
            type="number"
            id="year"
            name="year"
            value={carData.year}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="licensePlate" className="block text-gray-700 font-bold mb-2">License Plate</label>
          <input
            type="text"
            id="licensePlate"
            name="licensePlate"
            value={carData.licensePlate}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="type" className="block text-gray-700 font-bold mb-2">Type</label>
          <select
            id="type"
            name="type"
            value={carData.type}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="">Select a type</option>
            <option value="Sedan">Sedan</option>
            <option value="SUV">SUV</option>
            <option value="Truck">Truck</option>
            <option value="Van">Van</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="dailyRate" className="block text-gray-700 font-bold mb-2">Daily Rate</label>
          <input
            type="number"
            id="dailyRate"
            name="dailyRate"
            value={carData.dailyRate}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Car
        </button>
      </form>
    </div>
  )
}