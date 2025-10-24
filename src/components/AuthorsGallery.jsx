import React from 'react'

import { Image, Heart } from 'lucide-react';
function AuthorsGallery() {
   const galleryItems = [
    { src: "@/../public/assets/1950.jpg", year: "1950" },
    { src: "@/../public/assets/1980.jpg", year: "1980" },
    { src: "@/../public/assets/manwithhorse.png", year: "", title: "" },
    { src: "@/../public/assets/1990.jpg", year: "1990", title: "Otie, OT, Old Truck" },
    { src: "@/../public/assets/nina.png", year: "", title: "Nina" },
    { src: "@/../public/assets/3510.jpg", year: "3510", title: "" },
    { src: "@/../public/assets/4210.jpg", year: "4210", title: "" },
    { src: "@/../public/assets/mertel.jpg", year: "2015", title: "" },
  ];


  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif text-stone-900 mb-6">
            Author's Gallery
          </h2>
          <div className="w-24 h-1 bg-amber-700 mx-auto mb-8" />
          <p className="text-lg text-stone-600">
            A visual journey through the years and experiences
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative from-amber-100 to-stone-200 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all"
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <Image className="w-16 h-16 text-stone-400 mb-4 group-hover:scale-110 transition-transform" />
                {item.year && (
                  <span className="text-3xl font-serif text-stone-700 mb-2">
                    {item.year}
                  </span>
                )}
                {item.title && (
                  <h3 className="text-lg font-semibold text-stone-900">{item.title}</h3>
                )}
                {item.description && (
                  <p className="text-sm text-stone-600 mt-2">{item.description}</p>
                )}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-red-50 to-stone-50 border-2 border-red-200 rounded-2xl p-8 sm:p-12">
          <div className="max-w-2xl mx-auto text-center">
            <Heart className="w-12 h-12 text-red-600 mx-auto mb-6" />
            <h3 className="text-2xl sm:text-3xl font-serif text-stone-900 mb-4">Regrets</h3>
            <p className="text-lg text-stone-700 italic leading-relaxed">
              "Sorry Donna Furry, you are the one mistake I regret most in life."
            </p>
          </div>
        </div>
      </div>
    </section>
 
  )
}

export default AuthorsGallery
