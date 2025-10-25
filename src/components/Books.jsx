import { ExternalLink, BookOpen } from 'lucide-react';
import Image from 'next/image';
import src from "@/../public/assets/placeholder.jpg"
import { books } from '@/constant';
import BookCard from './BookCard';
export default function Books() {
  

  

  return (
    <section id="books" className="py-20 px-4 sm:px-6 lg:px-8 bg-stone-50">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif text-stone-900 mb-6">Books</h2>
          <div className="w-24 h-1 bg-amber-700 mx-auto mb-8" />
          <p className="text-lg text-stone-600">
            A collection of stories ranging from warm summer days to profound life experiences
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book, index) => ( 
            <BookCard data={book} key={index}/>
          ))}
        </div>
      </div>
    </section>
  );
}
