import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, ArrowLeft } from 'lucide-react'
import { toast } from 'sonner'

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [emailSent, setEmailSent] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email.trim()) {
      toast.error('Por favor ingresa tu correo electrónico')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      toast.error('Por favor ingresa un correo electrónico válido')
      return
    }

    try {
      setIsSubmitting(true)
      // Simulación de envío de email sin funcionalidad real
      await new Promise(resolve => setTimeout(resolve, 1000))
      setEmailSent(true)
      toast.success('¡Enlace de recuperación enviado! Revisa tu correo electrónico.')
      console.log('Recuperación de contraseña simulada para:', email)
    } catch (error) {
      toast.error('Error inesperado al enviar el enlace de recuperación')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-dark-primary bg-gradient-to-br from-dark-primary via-dark-secondary to-dark-primary flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse"></div>
      
      <div className="max-w-md w-full space-y-8 relative z-10">
        <div className="bg-gradient-dark backdrop-blur-sm rounded-2xl border border-elegant shadow-elegant p-8">
          <div className="text-center mb-8">
            <h2 className="text-h1 text-white mb-2 uppercase tracking-wider">RECUPERAR <span className="text-primary">CONTRASEÑA</span></h2>
            <p className="text-text-secondary uppercase tracking-wide">INGRESA TU EMAIL PARA RECUPERAR TU CUENTA</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-primary uppercase tracking-wider">
                CORREO ELECTRÓNICO
              </label>
              <div className="flex items-center space-x-3 bg-dark-tertiary border border-elegant rounded-lg p-3 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary/20">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 bg-transparent text-white placeholder-text-secondary uppercase tracking-wider focus:outline-none"
                  placeholder="TU@EMAIL.COM"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting || emailSent}
              className="btn-primary w-full py-3 px-4 font-semibold uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 shadow-subtle hover:shadow-elegant transition-all duration-300 disabled:hover:scale-100"
            >
              {isSubmitting ? 'ENVIANDO...' : emailSent ? 'ENLACE ENVIADO' : 'ENVIAR ENLACE DE RECUPERACIÓN'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link 
              to="/login" 
              className="inline-flex items-center space-x-2 text-primary hover:text-blue-dark font-medium transition-colors uppercase tracking-wider"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>VOLVER AL LOGIN</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword