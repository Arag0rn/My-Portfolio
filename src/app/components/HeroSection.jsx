"use client";
import React from 'react'
import Image from "next/image"
import { TypeAnimation } from 'react-type-animation';
import { useTranslations } from 'next-intl';


export const HeroSection = () => {
  const t = useTranslations("Hero");

  const handleDownload = () => {

    const pdfPath = './Habuzov_S_SV.pdf';
 

    const link = document.createElement('a');
    link.href = pdfPath;
    link.target = '_blank';
    link.download = 'Khabuzov_S.CV';


    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section>
        <div className='grid grid-cols-1 lg:grid-cols-12'>
            <div className='col-span-7 place-self-center text-center sm:text-left'>
                <h1 className="text-white mb-4 text-3xl sm:text-5xl lg:text-6xl font-extrabold">
                 <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>{t("title")}{" "} </span>
                 <br></br>
                 <TypeAnimation
      sequence={[
        'Serhii',
        1000, 
        'Fullstack Developer',
        1000, 
        'React Developer',
        1000,
        'Next.js Developer',
        1000,
        'Node.js Developer',
        1000
  
      ]}
      wrapper="span"
      speed={30}
      repeat={Infinity}
    />
                  </h1>
                <p className='text-[#ABB7BE] text-base sm:text-lg mb-6 lg:text-xl'>{t("text")}
                </p>

                <div>
                  <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500  hover:bg-slate-200 text-white'>Hire Me</button>
                  <button  onClick={handleDownload} className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500  via-purple-500 to-pink-500  hover:bg-slate-800 text-white mt-3'>
                    <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span></button>
                </div>
         </div>
            <div className='col-span-5 place-self-center mt-4 lg:mt-0 overflow-hidden'>
            <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
                {/* <Image
                  src='../../../public/hero-img.png'
                  alt='hero-img'
                  width={300}
                  height={300}
                  className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                /> */}
              </div>
                
            </div>

         </div>
    </section>
  )
}
