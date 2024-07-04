import React, { useState, useEffect } from 'react'

export default function CustomerProfile() {
  const [profile, setProfile] = useState(null)
  const [isEditing, setIsEditing] = useState(false)
  const [editedProfile, setEditedProfile] = useState({})

  useEffect(() => {
    // Fetch customer profile data
    fetchProfile()
  }, [])

  const fetchProfile = async () => {
    // This would typically be an API call to your backend
    // For this example, we'll use mock data
    const mockProfile = {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phoneNumber: '123-456-7890',
      driverLicense: 'DL12345678',
      driverLicenseExpiry: '2025-12-31'
    }
    setProfile(mockProfile)
    setEditedProfile(mockProfile)
  }

  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleCancel = () => {
    setIsEditing(false)
    setEditedProfile(profile)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setEditedProfile(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // This would typically be an API call to update the profile
    console.log('Updated profile:', editedProfile)
    setProfile(editedProfile)
    setIsEditing(false)
    // You might want to show a success message here
  }

  if (!profile) {
    return <div className="text-center py-10">Loading...</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Customer Profile</h1>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
              First Name
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${isEditing ? '' : 'bg-gray-100'}`}
              id="firstName"
              type="text"
              name="firstName"
              value={editedProfile.firstName}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
              Last Name
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${isEditing ? '' : 'bg-gray-100'}`}
              id="lastName"
              type="text"
              name="lastName"
              value={editedProfile.lastName}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100"
              id="email"
              type="email"
              value={profile.email}
              disabled
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
              Phone Number
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${isEditing ? '' : 'bg-gray-100'}`}
              id="phoneNumber"
              type="tel"
              name="phoneNumber"
              value={editedProfile.phoneNumber}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="driverLicense">
              Driver's License
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100"
              id="driverLicense"
              type="text"
              value={profile.driverLicense}
              disabled
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="driverLicenseExpiry">
              Driver's License Expiry
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${isEditing ? '' : 'bg-gray-100'}`}
              id="driverLicenseExpiry"
              type="date"
              name="driverLicenseExpiry"
              value={editedProfile.driverLicenseExpiry}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div className="flex items-center justify-between">
            {!isEditing ? (
              <button
                className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleEdit}
              >
                Edit Profile
              </button>
            ) : (
              <>
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Save Changes
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}