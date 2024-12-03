// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Specials } from './components/Specials';
import Booking from './components/Booking';
import { OrderOnline } from './components/OrderOnline';
import { Footer } from './components/Footer';
import UnderConstruction from './components/UnderConstruction';
import LoginForm from './components/LoginForm'; // Importing LoginForm
import SignupForm from './components/SignupForm'; // Importing SignupForm
import { AboutUs } from './components/AboutUs'; // Importing AboutUs

function App() {
  const handleLogin = (email: string, password: string) => {
    console.log('Login:', email, password);
    // Perform login logic
  };

  const handleSignup = (name: string, email: string, password: string) => {
    console.log('Signup:', name, email, password);
    // Perform signup logic
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<AboutUs />} /> {/* Updating AboutUs route */}
            <Route path="/menu" element={<UnderConstruction />} />
            <Route path="/reservations" element={<Booking />} />
            <Route path="/order" element={<OrderOnline />} />
            <Route path="/login" element={<LoginForm onLogin={handleLogin} />} /> {/* Adding LoginForm route */}
            <Route path="/signup" element={<SignupForm onSignup={handleSignup} />} /> {/* Adding SignupForm route */}
          </Routes>
          <Specials />
          <section className="py-16 bg-white">
            {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center mb-12">Make a Reservation</h2>
              <BookingForm />
            </div> */}
          </section>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
