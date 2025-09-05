import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Menu, X, Zap } from 'lucide-react'
import useScrollDirection from '../hooks/useScrollDirection'
import { useAuth } from '../contexts/AuthContext'

const Navbar: React.FC = () => {
  const { user, signOut, loading } = useAuth()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isVisible } = useScrollDirection(10)
  const navigate = useNavigate()

  const handleSignOut = async () => {
    try {
      await signOut()
      navigate('/')
    } catch (error) {
      console.error('Error al cerrar sesión:', error)
    }
  }

  return (
    <nav className={`bg-gradient-dark border-b border-elegant shadow-elegant fixed top-0 left-0 right-0 z-50 backdrop-blur-sm transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center group transition-all duration-300 hover:scale-105">
              <div className="p-2 bg-gradient-primary rounded-lg mr-3 transition-all duration-300 group-hover:shadow-elegant">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <span className="text-2xl font-bold text-white font-accent">
                FABI <span className="text-primary">PRO</span>
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-primary transition-all duration-300 font-medium relative group">
              <span className="relative z-10">INICIO</span>
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
            <Link to="/services" className="text-white hover:text-primary transition-all duration-300 font-medium relative group">
              <span className="relative z-10">SERVICIOS</span>
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
            <Link to="/contact" className="text-white hover:text-primary transition-all duration-300 font-medium relative group">
              <span className="relative z-10">CONTACTO</span>
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
            <Link to="/admin" className="text-white hover:text-primary transition-all duration-300 font-medium relative group">
              <span className="relative z-10">ADMIN</span>
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
            
            <Link to={user ? "/dashboard" : "/login"} className="btn-primary px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105">
              MI CUENTA
            </Link>
            
            {user && (
              <button onClick={handleSignOut} disabled={loading} className="btn-secondary px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 disabled:opacity-50">
                {loading ? 'CERRANDO...' : 'SALIR'}
              </button>
            )}
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white hover:text-primary p-2 border border-elegant rounded-lg hover:bg-gradient-primary transition-all duration-300">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden animate-slide-up">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gradient-dark border-t border-elegant">
            <Link to="/" className="text-white hover:text-primary block px-3 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-gradient-primary" onClick={() => setIsMenuOpen(false)}>
              INICIO
            </Link>
            <Link to="/services" className="text-white hover:text-primary block px-3 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-gradient-primary" onClick={() => setIsMenuOpen(false)}>
              SERVICIOS
            </Link>
            <Link to="/contact" className="text-white hover:text-primary block px-3 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-gradient-primary" onClick={() => setIsMenuOpen(false)}>
              CONTACTO
            </Link>
            <Link to="/admin" className="text-white hover:text-primary block px-3 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-gradient-primary" onClick={() => setIsMenuOpen(false)}>
              ADMIN
            </Link>
            
            <Link to={user ? "/dashboard" : "/login"} className="btn-primary block px-3 py-2 rounded-lg font-medium mx-3 text-center transition-all duration-300" onClick={() => setIsMenuOpen(false)}>
              MI CUENTA
            </Link>
            
            {user && (
              <button onClick={() => { handleSignOut(); setIsMenuOpen(false) }} disabled={loading} className="text-white hover:text-secondary block px-3 py-2 rounded-lg font-medium w-full text-left transition-all duration-300 hover:bg-gray-800 disabled:opacity-50">
                {loading ? 'CERRANDO...' : 'SALIR'}
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar