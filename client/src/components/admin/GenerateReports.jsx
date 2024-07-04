import React, { useState } from 'react'

export default function GenerateReports() {
  const [reportType, setReportType] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the report request to your backend
    console.log('Generating report:', { reportType, startDate, endDate })
    // You might want to show a loading indicator here
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Generate Reports</h1>
      <form onSubmit={handleSubmit} className="max-w-lg">
        <div className="mb-4">
          <label htmlFor="reportType" className="block text-gray-700 font-bold mb-2">Report Type</label>
          <select
            id="reportType"
            value={reportType}
            onChange={(e) => setReportType(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="">Select a report type</option>
            <option value="revenue">Revenue Report</option>
            <option value="rentals">Rental Activity Report</option>
            <option value="inventory">Inventory Report</option>
            <option value="customers">Customer Activity Report</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="startDate" className="block text-gray-700 font-bold mb-2">Start Date</label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="endDate" className="block text-gray-700 font-bold mb-2">End Date</label>
          <input
            type="date"
            id="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Generate Report
        </button>
      </form>
    </div>
  )
}
