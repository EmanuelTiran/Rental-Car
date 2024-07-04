import axios from 'axios'
import React, { useState, useEffect } from 'react'

export default function CustomerList() {
  const [rentals, setRentals] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchRentals()
  }, [])

  const fetchRentals = async () => {
    try {
      setLoading(true)
      const response = await axios.get('http://localhost:5050/customer/')
      setRentals(response.data)
      setLoading(false)
    } catch (err) {
      setError('Failed to fetch rentals. Please try again later.')
      setLoading(false)
      console.error('Error fetching rentals:', err)
    }
  }

  if (loading) return <div className="text-center py-8">Loading...</div>
  if (error) return <div className="text-center py-8 text-red-500">{error}</div>

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Manage Rentals</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Customer</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Phone</th>
            <th className="py-2 px-4 border-b">Start Date</th>
            <th className="py-2 px-4 border-b">End Date</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {rentals.map(rental => (
            <tr key={rental._id}>
              <td className="py-2 px-4 border-b">{rental._id}</td>
              <td className="py-2 px-4 border-b">{`${rental.firstName} ${rental.lastName}`}</td>
              <td className="py-2 px-4 border-b">{rental.email}</td>
              <td className="py-2 px-4 border-b">{rental.phoneNumber}</td>
              <td className="py-2 px-4 border-b">{new Date(rental.startDate).toLocaleDateString()}</td>
              <td className="py-2 px-4 border-b">{new Date(rental.endDate).toLocaleDateString()}</td>
              <td className="py-2 px-4 border-b">
                <button className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-1 px-2 rounded mr-2">
                  Edit
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}