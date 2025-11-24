import React from 'react'

const Sample = () => {
  return (
  <>
  
<section className="relative h-[90vh] bg-cover bg-center text-white" style={{ backgroundImage: `url('/hero-bg.jpg')` }}>
  <div className="absolute inset-0 bg-black/60"></div>
  <div className="relative z-10 max-w-4xl mx-auto text-center pt-32">
    <h1 className="text-5xl font-bold leading-tight">Empowering European SMEs</h1>
    <p className="mt-4 text-xl text-gray-200">Smarter ESG tools for sustainable success</p>
    <button className="mt-6 px-6 py-3 bg-green-500 hover:bg-green-600 rounded-lg shadow-lg text-white font-semibold">
      Start Your ESG Journey
    </button>
  </div>
</section>
<section className="bg-white py-20 px-6">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
    <div>
      <h2 className="text-4xl font-bold mb-6">Why We Exist</h2>
      <p className="text-gray-600 leading-relaxed">The EU’s evolving regulatory landscape ...</p>
    </div>
    <img src="/team.jpg" className="rounded-xl shadow-md" />
  </div>
</section>
  </>
  )
}

export default Sample