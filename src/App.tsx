import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-dark-primary flex flex-col">
          <Navbar />
          <main className="flex-grow pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              {/* Placeholder routes for other pages */}
              <Route path="/services" element={<div className="min-h-screen bg-dark-primary flex items-center justify-center"><h1 className="text-white text-2xl">Servicios - En construcción</h1></div>} />
              <Route path="/gallery" element={<div className="min-h-screen bg-dark-primary flex items-center justify-center"><h1 className="text-white text-2xl">Galería - En construcción</h1></div>} />
              <Route path="/about" element={<div className="min-h-screen bg-dark-primary flex items-center justify-center"><h1 className="text-white text-2xl">Nosotros - En construcción</h1></div>} />
              <Route path="/contact" element={<div className="min-h-screen bg-dark-primary flex items-center justify-center"><h1 className="text-white text-2xl">Contacto - En construcción</h1></div>} />
              <Route path="/login" element={<div className="min-h-screen bg-dark-primary flex items-center justify-center"><h1 className="text-white text-2xl">Login - En construcción</h1></div>} />
              <Route path="/register" element={<div className="min-h-screen bg-dark-primary flex items-center justify-center"><h1 className="text-white text-2xl">Registro - En construcción</h1></div>} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App
