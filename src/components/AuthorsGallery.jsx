'use client'
import React from 'react'

import { Image, Heart } from 'lucide-react';
import { books, galleryItems } from '@/constant';
import AuthorGalleryCard from './AuthorGalleryCard';

function AuthorsGallery() {


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
          {galleryItems.map((book, index) => ( 
            <AuthorGalleryCard data={book} key={index}/>
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
