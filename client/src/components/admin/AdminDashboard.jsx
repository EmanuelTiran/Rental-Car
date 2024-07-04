import React from 'react'
import { Link } from 'react-router-dom'
import LoginForm from './LoginForm'

export default function AdminDashboard({loginResult ,setLoginResult}) {
  // Dummy data - replace with actual data from your backend
  const stats = {
    totalCars: 50,
    availableCars: 35,
    activeRentals: 15,
    totalCustomers: 200,
    revenueThisMonth: 15000
  }

  return (
    loginResult ?
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
        
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Total Cars</h2>
            <p className="text-3xl font-bold">{stats.totalCars}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Available Cars</h2>
            <p className="text-3xl font-bold">{stats.availableCars}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Active Rentals</h2>
            <p className="text-3xl font-bold">{stats.activeRentals}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Total Customers</h2>
            <p className="text-3xl font-bold">{stats.totalCustomers}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Revenue This Month</h2>
            <p className="text-3xl font-bold">${stats.revenueThisMonth}</p>
          </div>
        </div>
        
        {/* Quick Actions */}
        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <h2 className="text-2xl font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link to="/admin/add-car" className="bg-slate-500 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded text-center">
              Add New Car
            </Link>
            <Link to="/admin/manage-rentals" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded text-center">
              Manage Rentals
            </Link>
            <Link to="/admin/customer-list" className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded text-center">
              View Customers
            </Link>
            <Link to="/admin/reports" className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded text-center">
              Generate Reports
            </Link>
          </div>
        </div>
        
        {/* Recent Activity */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">Recent Activity</h2>
          <ul className="divide-y divide-gray-200">
            <li className="py-3">New rental: John Doe rented Toyota Corolla (5 minutes ago)</li>
            <li className="py-3">Car returned: Honda Civic by Jane Smith (1 hour ago)</li>
            <li className="py-3">New customer registered: Mike Johnson (3 hours ago)</li>
            <li className="py-3">Maintenance scheduled: Ford Mustang (Yesterday)</li>
          </ul>
        </div>
      </div>
    </div> : <LoginForm loginResult={loginResult} setLoginResult={setLoginResult}/>
  )
}
