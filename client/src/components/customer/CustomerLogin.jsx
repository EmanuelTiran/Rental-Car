import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function CustomerRegistration() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        phoneNumber: '',
    })

    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const validateForm = () => {
        let tempErrors = {}
        if (!formData.firstName.trim()) tempErrors.firstName = "First name is required"
        if (!formData.lastName.trim()) tempErrors.lastName = "Last name is required"
        if (!formData.email.trim()) tempErrors.email = "Email is required"
        else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = "Email is invalid"
        if (!formData.password) tempErrors.password = "Password is required"
        else if (formData.password.length < 6) tempErrors.password = "Password must be at least 6 characters"
        if (formData.password !== formData.confirmPassword) tempErrors.confirmPassword = "Passwords do not match"
        if (!formData.phoneNumber.trim()) tempErrors.phoneNumber = "Phone number is required"
        setErrors(tempErrors)
        return Object.keys(tempErrors).length === 0
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (validateForm()) {
            // Here you would typically send the form data to your backend
            console.log('Form submitted:', formData)
            // You might want to show a success message or redirect the user after successful registration
        }
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6 text-center">Customer Registration</h1>
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
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
                    {errors.firstName && <p className="text-red-500 text-xs italic">{errors.firstName}</p>}
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
                    {errors.lastName && <p className="text-red-500 text-xs italic">{errors.lastName}</p>}
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
                    {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                    {errors.password && <p className="text-red-500 text-xs italic">{errors.password}</p>}
                </div>
                <div className="mb-4">
                    <label htmlFor="confirmPassword" className="block text-gray-700 font-bold mb-2">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                    {errors.confirmPassword && <p className="text-red-500 text-xs italic">{errors.confirmPassword}</p>}
                </div>
                <div className="mb-4">
                    <label htmlFor="phoneNumber" className="block text-gray-700 font-bold mb-2">Phone Number</label>
                    <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                    {errors.phoneNumber && <p className="text-red-500 text-xs italic">{errors.phoneNumber}</p>}
                </div>
                               <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Register
                    </button>
                    <Link to="/login" className="inline-block align-baseline font-bold text-sm text-slate-500 hover:text-slate-800">
                        Already have an account? Login
                    </Link>
                </div>
            </form>
        </div>
    )
}
