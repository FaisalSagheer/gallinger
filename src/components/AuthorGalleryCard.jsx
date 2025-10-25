'use client'
import React from 'react'

function AuthorGalleryCard(props) {
    const {title, src, year} = props.data
    return (
        <div className='group relative aspect-[4/5] bg-gradient-to-br from-amber-100 to-stone-200 rounded-xl overflow-hidden shadow-md gallery-item'>
          <div className='absolute inset-0 flex flex-col items-center justify-center p-6 text-center'>
            <img src={src} alt={title} className='rounded w-[20rem]'/>
               <span className='text-3xl font-serif text-stone-700 mb-2'>{year}</span>
          </div>
          <div className='absolute inset-0 bg-gradient-to-t from-stone-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity'/>
        </div>
    )
}

export default AuthorGalleryCard;
