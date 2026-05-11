import React, { useState } from 'react'

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [formData, setFormData] = useState({ name: '', email: '', password: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`${isLogin ? 'Login' : 'Sign Up'} functionality coming soon!`)
  }

  return (
    <div className="min-h-screen flex" style={{ fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>
      {/* Left Side - Branding Panel */}
      <div style={{
        display: 'none',
        width: '0%',
        background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
        padding: '0'
      }} className="md:flex md:w-1/2">
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '60px',
          textAlign: 'center'
        }}>
          <div style={{
            width: '120px',
            height: '120px',
            background: 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(10px)',
            borderRadius: '30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '30px',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
          }}>
            <span style={{ fontSize: '60px' }}>✨</span>
          </div>
          <h1 style={{
            fontSize: '48px',
            fontWeight: '700',
            color: 'white',
            marginBottom: '10px',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
          }}>
            Spandan
          </h1>
          <p style={{
            fontSize: '20px',
            color: 'rgba(255, 255, 255, 0.9)'
          }}>
            Poll Question Generator
          </p>
          <div style={{
            width: '60px',
            height: '4px',
            background: '#ffd700',
            margin: '25px auto',
            borderRadius: '2px'
          }}></div>
          <p style={{
            fontSize: '16px',
            color: 'rgba(255, 255, 255, 0.7)',
            maxWidth: '400px',
            lineHeight: '1.6'
          }}>
            Transform your classroom with interactive polls and AI-powered question generation
          </p>
        </div>
      </div>

      {/* Right Side - Auth Form */}
      <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 20px',
        background: 'linear-gradient(135deg, #f8f9fb 0%, #e0e7ff 100%)'
      }}>
        <div style={{
          width: '100%',
          maxWidth: '420px'
        }}>
          {/* Mobile Logo */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '30px'
          }} className="md:hidden">
            <div style={{
              width: '60px',
              height: '60px',
              background: 'linear-gradient(135deg, #1e3c72, #2a5298)',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '16px'
            }}>
              <span style={{ fontSize: '30px', color: 'white' }}>✨</span>
            </div>
            <h1 style={{
              fontSize: '32px',
              fontWeight: '700',
              color: '#1e3c72'
            }}>
              Spandan
            </h1>
          </div>

          {/* Form Card */}
          <div style={{
            background: 'white',
            borderRadius: '24px',
            padding: '40px',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
            border: '1px solid rgba(0, 0, 0, 0.05)'
          }}>
            <h2 style={{
              fontSize: '28px',
              fontWeight: '700',
              color: '#1f2937',
              textAlign: 'center',
              marginBottom: '8px'
            }}>
              {isLogin ? 'Welcome Back' : 'Create Account'}
            </h2>
            <p style={{
              fontSize: '14px',
              color: '#6b7280',
              textAlign: 'center',
              marginBottom: '32px'
            }}>
              {isLogin ? 'Sign in to continue to Spandan' : 'Join Spandan today'}
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {!isLogin && (
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#374151',
                    marginBottom: '8px'
                  }}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      fontSize: '16px',
                      border: '2px solid #e5e7eb',
                      borderRadius: '12px',
                      outline: 'none',
                      transition: 'border-color 0.3s'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                    onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                  />
                </div>
              )}

              <div>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#374151',
                  marginBottom: '8px'
                }}>
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    fontSize: '16px',
                    border: '2px solid #e5e7eb',
                    borderRadius: '12px',
                    outline: 'none',
                    transition: 'border-color 0.3s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#374151',
                  marginBottom: '8px'
                }}>
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    fontSize: '16px',
                    border: '2px solid #e5e7eb',
                    borderRadius: '12px',
                    outline: 'none',
                    transition: 'border-color 0.3s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                />
              </div>

              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '16px',
                  fontSize: '16px',
                  fontWeight: '600',
                  color: 'white',
                  background: 'linear-gradient(135deg, #1e3c72, #2a5298)',
                  border: 'none',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  boxShadow: '0 4px 15px rgba(30, 60, 114, 0.3)',
                  marginTop: '8px'
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = 'translateY(-2px)'
                  e.target.style.boxShadow = '0 6px 20px rgba(30, 60, 114, 0.4)'
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'translateY(0)'
                  e.target.style.boxShadow = '0 4px 15px rgba(30, 60, 114, 0.3)'
                }}
              >
                {isLogin ? 'Sign In' : 'Create Account'}
              </button>
            </form>

            <div style={{ marginTop: '24px', textAlign: 'center' }}>
              <p style={{ color: '#6b7280', fontSize: '14px' }}>
                {isLogin ? "Don't have an account? " : 'Already have an account? '}
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#1e3c72',
                    fontWeight: '600',
                    cursor: 'pointer',
                    fontSize: '14px'
                  }}
                >
                  {isLogin ? 'Sign Up' : 'Sign In'}
                </button>
              </p>
            </div>
          </div>

          {/* Footer */}
          <div style={{ marginTop: '24px', textAlign: 'center' }}>
            <p style={{ color: '#6b7280', fontSize: '13px' }}>
              By Rohit Sharma | Built by Spandan_Astra ⭐
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthPage