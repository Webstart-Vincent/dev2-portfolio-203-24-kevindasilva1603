import React from 'react';
import Link from 'next/link';
import { CldImage } from 'next-cloudinary';

export default function Portfolio({ works }) {
  return (
    <section id='projets' name='portfolio' className='h-full grid gap-14 px-10 sm:mb-15 sm:px-10'>
      <div className='header grid gap-4'>
        <h3 className='text-3xl font-bold text-center sm:text-left '>Mes derniers projets</h3>
        <p className='text-gray sm:text-center'>
          Découvrez une sélection de mes derniers projets, conçus avec passion et expertise pour des clients variés ou pour des projets personnels. Explorez mon portfolio et plongez dans l'univers de mes créations, où chaque projet raconte une histoire unique et témoigne de mon engagement envers l'excellence et l'innovation dans le domaine du développement web.
        </p>
      </div>
      <div name='gallery' className='sm:pb-8'>
        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {works.length > 0 ? (
            works.map((work) => (
              <li key={work._id} className='relative border border-white shadow-lg rounded-lg hover:scale-105 transition-transform duration-500 ease-in-out'>
                <Link href={`/works/${work.slug}`} passHref>
                  <span name='title-projet' className="absolute top-5 left-5 bg-blackbg p-2 rounded text-gray font-bold">{work.titre}</span>
                  <CldImage
                    src={work.image}
                    alt={work.titre}
                    width={500}
                    height={350}
                    className="rounded-lg border-double hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                </Link>
              </li>
            ))
          ) : (
            <li>Aucun projet à afficher</li>
          )}
        </ul>
      </div>
    </section>
  );
}
