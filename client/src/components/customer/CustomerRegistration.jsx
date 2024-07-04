import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

export default function RentalForm() {
    const { id } = useParams() // Get the car ID from the URL
    const [formData, setFormData] = useState({
        car: id,
        startDate: '',
        endDate: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        driverLicense: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await fetch('http://localhost:5050/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            if (!response.ok) {
                throw new Error('Failed to submit rental request')
            }

            const data = await response.json()
            console.log('Order created:', data)

            // Redirect to a confirmation page or show a success message
            navigate(`/rental-confirmation/${data._id}`)
        } catch (err) {
            setError(err.message)
            console.error('Error submitting rental request:', err)
        }
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Rent a Car</h1>
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                <div className="mb-4">
                    <label htmlFor="startDate" className="block text-gray-700 font-bold mb-2">Start Date</label>
                    <input
                        type="date"
                        id="startDate"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="endDate" className="block text-gray-700 font-bold mb-2">End Date</label>
                    <input
                        type="date"
                        id="endDate"
                        name="endDate"
                        value={formData.endDate}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="firstName" className="block text-gray-700 font-bold mb-2">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="lastName" className="block text-gray-700 font-bold mb-2">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Phone</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="driverLicense" className="block text-gray-700 font-bold mb-2">Driver's License Number</label>
                    <input
                        type="text"
                        id="driverLicense"
                        name="driverLicense"
                        value={formData.driverLicense}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Submit Rental Request
                    </button>
                </div>
            </form>
        </div>
    )
}
