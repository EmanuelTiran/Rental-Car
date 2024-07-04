import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import HomePage from './components/pages/HomePage';
import CarList from './components/car/CarList';
import CarDetails from './components/car/CarDetails';
import RentalForm from './components/booking/RentalForm';
import CustomerRegistration from './components/customer/CustomerRegistration';
import CustomerLogin from './components/customer/CustomerLogin';
import CustomerProfile from './components/customer/CustomerProfile';
import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/ContactPage';
import AdminDashboard from './components/admin/AdminDashboard';
import AddCar from './components/admin/AddCar';
import ManageRentals from './components/admin/ManageRentals';
import GenerateReports from './components/admin/GenerateReports';
import CustomerList from './components/customer/CustomerList';

function App() {
  const [loginResult, setLoginResult] = useState(false);

  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cars" element={<CarList />} />
            <Route path="/car/:id" element={<CarDetails />} />
            <Route path="/rent/:id" element={<RentalForm />} />
            <Route path="/register" element={<CustomerRegistration />} />
            <Route path="/login" element={<CustomerLogin />} />
            <Route path="/profile" element={<CustomerProfile />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/admin" element={<AdminDashboard loginResult={loginResult} setLoginResult={setLoginResult}/>} />
            <Route path="/admin/add-car" element={<AddCar />} />
            <Route path="/admin/manage-rentals" element={<ManageRentals />} />
            <Route path="/admin/customer-list" element={<CustomerList />} />
            <Route path="/admin/reports" element={<GenerateReports />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
