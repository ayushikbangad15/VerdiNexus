import React from 'react'
import bg from '../assets/graphic/about us.png'
const About = () => {
  return (<>
    <div style={{backgroundImage: `url(${bg})`, backgroundRepeat:'no-repeat' ,backgroundSize: 'cover', }} className={`relative min-h-screen dark:bg-[#0f2c2c] flex items-center justify-center px-4 `}>
      <div className="max-w-7xl w-full ">
        <div className="text-white mt-14 mx-9">
          <h2 className="text-7xl font-semibold">Verdi<span className="text-yellow-400">Nexus</span></h2>
          <p style={{ 
  textAlign: 'justify',       // Justify the paragraph text
  marginLeft: '-9%',          // Shift right by 10% of the container width
  marginRight: '10%'          // Shift left by 10% of the container width
}}className="mt-10 max-w-xl text-sm">VerdiNexus empowers small and medium-sized enterprises across Europe to navigate evolving ESG sustainability standards with agility and affordability. We provide actionable tools, expert guidance, and comprehensive services that make sustainable practices measurable, achievable, and aligned with regulatory compliance.
VerdiNexus empowers small and medium-sized enterprises across Europe to navigate evolving ESG sustainability standards with agility and affordability. We provide actionable tools, expert guidance, and comprehensive services that make sustainable practices measurable, achievable, and aligned with regulatory compliance.…</p>
        </div>
        {/* <div className="hex-grid">
          <div class="w-[29rem] h-[29rem]  absolute z-0 left-[40%] top-[20%] transform -translate-x-0 -translate-y-0  clip-hexagon">
            <img className='object-cover h-full w-full' src="https://w0.peakpx.com/wallpaper/400/1009/HD-wallpaper-travel-the-world-ultra-nature-mountains-travel-scenery-mountain-lake.jpg" alt="" />
          </div>
           <div class="w-[10rem] h-[10rem] bg-blue-500  absolute z-0 left-[68%] top-[10%] transform -translate-x-0 -translate-y-0  clip-hexagon">
            <img className='object-cover h-full w-full' src="https://previews.123rf.com/images/carloscastilla/carloscastilla1801/carloscastilla180100008/94280067-scenery-thailand-sea-and-island-adventures-and-travel-concept.jpg" alt="" />
           </div>
           <div class="w-[15rem] h-[15rem] bg-red-500  absolute z-0 left-[64%] top-[60%] transform -translate-x-0 -translate-y-0  clip-hexagon">
            <img className='object-cover h-full w-full' src="https://traveloncemore.com/wp-content/uploads/2021/05/Muthukoramala-by-TravelOnceMore-scaled.jpg.webp" alt="" />
           </div>
           <div class="w-[15rem] h-[15rem] bg-yellow-500  absolute z-0 left-[75%] top-[29%] transform -translate-x-0 -translate-y-0  clip-hexagon">
            <img className='object-cover h-full w-full' src="https://www.travelandleisure.com/thmb/ip03-TS_bwMVg8elPNZ8pKaEOO8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/mt-fuji-japan-MOSTBEAUTIFUL0921-413f7d67bb4f4539a336ebba14f74ed2.jpg" alt="" />
           </div>
            <div class="w-[20rem] h-[20rem] bg-green-500  absolute z-0 left-[85%] top-[58%] transform -translate-x-0 -translate-y-0  clip-hexagon">
              <img className='object-cover h-full w-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB0tB7-uh1N_yqs6t7yVW_dATfxYfw4Z2TkQ&s" alt="" />
            </div>
        </div> */}
      </div>
    </div>
  </>

  )
}

export default About