import React from 'react'

function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 text-center shadow-2xl border border-white/20 max-w-2xl w-full">
        <div className="flex items-center justify-center mb-6">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
            <span className="text-4xl">✨</span>
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Spandan
        </h1>
        <p className="text-yellow-400 text-xl md:text-2xl font-medium mb-6">
          Poll Question Generator
        </p>
        <div className="w-16 h-1 bg-yellow-400 mx-auto mb-6 rounded"></div>
        <p className="text-white/80 text-lg mb-8">
          Create engaging polls and questions for your classroom
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/auth"
            className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get Started
          </a>
          <a
            href="#features"
            className="px-8 py-3 border-2 border-white/30 hover:border-white/60 text-white font-semibold rounded-full transition-all duration-300"
          >
            Learn More
          </a>
        </div>
        <p className="text-white/50 mt-8 text-sm">
          By Rohit Sharma | Built by Spandan_Astra ⭐
        </p>
      </div>
    </div>
  )
}

export default HomePage