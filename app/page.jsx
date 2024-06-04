"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { TypingText } from "typing-text-animation";

export default function Home() {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    axios.get('/api/projects')
      .then(response => {
        if (response.data && Array.isArray(response.data)) {
          setWorks(response.data); // S'assurer que l'API renvoie un tableau
        } else {
          console.error('Data received is not an array:', response.data);
        }
      })
      .catch(error => {
        console.error('Error fetching projects:', error);
        setWorks([]); // Assurez-vous de gérer les états d'erreur proprement
      });
  }, []);


  return (
    <>
      <head>
        <title>Portfolio</title>
      </head>
      <body className='bg-[#1b1b1d] text-body-text'>
        <div className='flex flex-col lg:flex-row justify-between items-center h-screen px-4 md:px-10 lg:px-20 xl:px-40 mx-auto'>
          <div className='nav-left hidden lg:flex flex-col items-center justify-start fixed top-0 left-0 h-screen'>
            <Link
              href='https://www.linkedin.com/in/k%C3%A9vin-da-silva-069755258/'
              className='nav-left-item my-6 text-lg bg-body-bg font-grandstander text-body-text'>
              LI
            </Link>
            <Link
              href='https://www.linkedin.com/in/k%C3%A9vin-da-silva-069755258/'
              className='nav-left-item my-6 text-lg bg-body-bg font-grandstander text-body-text'>
              TW
            </Link>
            <Link
              href='https://www.linkedin.com/in/k%C3%A9vin-da-silva-069755258/'
              className='nav-left-item my-6 text-lg bg-body-bg font-grandstander text-body-text'>
              DR
            </Link>
            <div className='w-px h-24 bg-gray-600 my-8'></div>
            <div className='copyright text-xs text-body-text'>
              © 2023
            </div>
          </div>

          <div className='w-full lg:hidden flex justify-between items-center py-4'>
            <Link
              href='https://www.linkedin.com/in/k%C3%A9vin-da-silva-069755258/'
              className='text-lg bg-body-bg font-grandstander text-body-text'>
              LI
            </Link>
            <Link
              href='https://www.linkedin.com/in/k%C3%A9vin-da-silva-069755258/'
              className='text-lg bg-body-bg font-grandstander text-body-text'>
              TW
            </Link>
            <Link
              href='https://www.linkedin.com/in/k%C3%A9vin-da-silva-069755258/'
              className='text-lg bg-body-bg font-grandstander text-body-text'>
              DR
            </Link>
          </div>
          <div className='w-full lg:hidden bg-gray-600 h-px my-4'></div>
          <div className='hidden lg:hidden text-xs mb-4 text-body-text'>
            © 2023
          </div>

          <div className='flex flex-col items-center lg:items-start lg:w-1/2 space-y-2 lg:space-y-3 xl:space-y-4 mt-8 lg:mt-0 text-center lg:text-left'>
            <h2 className='text-4xl lg:text-5xl xl:text-6xl font-bold font-prompt text-body-text'>
              <TypingText
                text={[
                  "Kévin Da Silva",
                  "Web Developer",
                  "Portfolio",
                  "Thanks",
                ]}
              />
            </h2>
            <p className='text-base lg:text-lg xl:text-xl font-prompt text-body-text'>
              Product Designer / Webflow Developer / Framer Developer and Partner everything don't ask.
            </p>
            <p className='text-base lg:text-lg xl:text-xl font-prompt text-body-text'>
              Currently working full-time as a BOSS yeahhh Designer at Detail Technologies
            </p>
          </div>

          <div className='w-full lg:w-1/4 flex flex-col items-center lg:items-start space-y-9 lg:space-y-8 xl:space-y-10 mb-10 lg:mb-0 '>
          <div className='w-full lg:w-1/4 flex flex-col items-center lg:items-start space-y-9 lg:space-y-8 xl:space-y-10 mb-10 lg:mb-0 '>
  <h1 className='hover:animation-shake text-3xl lg:text-4xl xl:text-7xl font-bold font-prompt cursor-pointer bg-body-bg text-body-text hover:animation-shake'>
    <Link href='/gallery'>Works</Link>
  </h1>
  {/* Autres sections */}
</div>

            <h1 className='text-3xl lg:text-4xl xl:text-7xl font-bold font-prompt cursor-pointer bg-body-bg text-body-text hover:animation-shake'>
              About
            </h1>
            <h1 className='text-3xl lg:text-4xl xl:text-7xl font-bold font-prompt cursor-pointer bg-body-bg text-body-text hover:animation-shake'>
              Shop
            </h1>
            <div className='w-full lg:w-1/4 flex flex-col items-center lg:items-start space-y-9 lg:space-y-8 xl:space-y-10 mb-10 lg:mb-0 '>
  <h1 className='hover:animation-shake text-3xl lg:text-4xl xl:text-7xl font-bold font-prompt cursor-pointer bg-body-bg text-body-text hover:animation-shake'>
    <Link href='/contact'>Contact</Link>
  </h1>
  {/* Autres sections */}
</div>
          </div>
        </div>
      {/* Section Galerie pour afficher les projets */}
      <div className='py-12'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center'>
              <h2 className='text-3xl lg:text-4xl xl:text-7xl font-bold font-prompt cursor-pointer bg-body-bg text-body-text'></h2>
            </div>
            <div className='mt-10'>
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {works.map((work, i) => (
                  <Link key={i} href={`/works/${work.slug}`} passHref>
                    <div className='overflow-hidden shadow-lg rounded-lg cursor-pointer m-auto'>
                      <div className='w-full block h-full'>
                        <img
                          alt={work.titre}
                          src={work.image}
                          width={500}
                          height={300}
                          style={{ objectFit: "cover" }}
                          className='hover:scale-105 transition-transform duration-500 ease-in-out'
                        />
                        <div className='bg-[#1b1b1d] p-4'>
                          <p className='text-indigo-500 text-md font-medium'>
                            {work.titre}
                          </p>
                          <p className='text-white text-xs mt-2'>
                            {work.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Fin de la section Galerie */}
      </body>
    </>
  );
}
