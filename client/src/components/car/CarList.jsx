import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function CarList() {
  const [cars, setCars] = useState([])
  const [loading, setLoading] = useState(true)
  const [filterType, setFilterType] = useState('All')
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchCars()
  }, [])

  const fetchCars = async () => {
    try {
      setLoading(true)
      const response = await axios.get('http://localhost:5050/cars/')
      setCars(response.data)
      setLoading(false)
    } catch (err) {
      setError('Failed to fetch cars. Please try again later.')
      setLoading(false)
    }
  }

  const filterCars = (type) => {
    setFilterType(type)
    if (type === 'All') {
      fetchCars()
    } else {
      const filteredCars = cars.filter(car => car.type === type)
      setCars(filteredCars)
    }
  }

  if (loading) return <div className="text-center py-8">Loading...</div>
  if (error) return <div className="text-center py-8 text-red-500">{error}</div>

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Available Cars</h1>
      
      {/* Filter Buttons */}
      <div className="mb-6">
        <span className="mr-2">Filter by:</span>
        {['All', 'Sedan', 'SUV', 'Truck', 'Van', 'Luxury', 'Economy'].map(type => (
          <button
            key={type}
            onClick={() => filterCars(type)}
            className={`mr-2 px-4 py-2 rounded ${
              filterType === type 
                ? 'bg-slate-600 text-white' 
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Car Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map(car => (
          <div key={car._id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={`https://via.placeholder.com/300x200?text=${car.make}+${car.model}`} alt={`${car.make} ${car.model}`} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="font-bold text-xl mb-2">{car.make} {car.model}</h2>
              <p className="text-gray-600 mb-2">Year: {car.year}</p>
              <p className="text-gray-600 mb-2">Type: {car.type}</p>
              <p className="text-gray-600 mb-4">Price: ${car.dailyRate}/day</p>
              <Link 
                to={`/car/${car._id}`} 
                className="bg-slate-600 text-white px-4 py-2 rounded hover:bg-slate-700 transition duration-300"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}