import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingContacts from './components/FloatingContacts';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Advertise from './pages/Advertise';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/advertise" element={<Advertise />} />
          </Routes>
        </main>
        <Footer />
        <FloatingContacts />
      </div>
    </Router>
  );
}

export default App;