import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

export default function CarDetails() {
  const [car, setCar] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        setLoading(true)
        const response = await axios.get(`http://localhost:5050/cars/${id}`)
        setCar(response.data)
        setLoading(false)
      } catch (err) {
        setError('Failed to fetch car details. Please try again later.')
        setLoading(false)
      }
    }

    fetchCarDetails()
  }, [id])

  if (loading) {
    return <div className="text-center py-10">Loading...</div>
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">{error}</div>
  }

  if (!car) {
    return <div className="text-center py-10">Car not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
  <h1 className="text-3xl font-bold mb-6">{car.make} {car.model} ({car.year})</h1>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div>
      <div className="bg-gray-200 w-full h-64 rounded-lg shadow-md flex items-center justify-center">
        <h2 className="text-3xl font-bold text-gray-600">{car.make} {car.model}</h2>
      </div>
    </div>
    
    <div>
      <h2 className="text-2xl font-semibold mb-4">Car Details</h2>
      <p className="mb-2"><span className="font-semibold">Type:</span> {car.type}</p>
      <p className="mb-2"><span className="font-semibold">Price:</span> ${car.dailyRate}/day</p>
      <p className="mb-2"><span className="font-semibold">Transmission:</span> {car.transmission}</p>
      <p className="mb-2"><span className="font-semibold">Color:</span> {car.color}</p>
      <p className="mb-2"><span className="font-semibold">Capacity:</span> {car.capacity?.passengers} passengers, {car.capacity?.luggage || 'N/A'} luggage</p>
      <p className="mb-2"><span className="font-semibold">License Plate:</span> {car.licensePlate}</p>
      <p className="mb-2"><span className="font-semibold">VIN:</span> {car.vin}</p>
      <p className="mb-2"><span className="font-semibold">Availability:</span> {car.isAvailable ? 'Available' : 'Not Available'}</p>
      
      {/* You can add more details here based on your car schema */}
      
      <Link 
        to={`/rent/${car._id}`} 
        className="bg-slate-600 text-white px-6 py-3 rounded-full font-bold hover:bg-slate-700 transition duration-300 inline-block mt-6"
      >
        Rent This Car
      </Link>
    </div>
  </div>
</div>
  )
}