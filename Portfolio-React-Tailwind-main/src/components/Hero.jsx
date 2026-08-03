import React from 'react'
import HeroImage from '../assets/Profile-Img.jpeg'

const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-16'>
      <img src={HeroImage} alt=""
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105'/>
      <h1 className='text-4xl font-bold'>
        I'm {" "}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Nipun Warnakulasooriya</span>
        , UI/UX Designer & Frontend Developer
      </h1>
      <p className='mt-4 text-lg text-gray-300'>
        I specialize in crafting intuitive and visually engaging user
        experiences through thoughtful design and user-centered research.
      </p>
      <div className='mt-8 space-x-4'>
        <button
          className='bg-gradient-to-r from-green-400 to-blue-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'
          onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Contact With Me</button>
        <button
          className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white
                transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
          onClick={async () => {
            const response = await fetch('/W.N.C.K.%20Warnakulasooriya%20Resume.pdf');
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'W.N.C.K. Warnakulasooriya Resume.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
          }}
        >
          Resume
        </button>

      </div>

    </div>
  )
}

export default Hero