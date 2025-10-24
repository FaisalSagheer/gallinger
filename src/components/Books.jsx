import { ExternalLink, BookOpen } from 'lucide-react';

export default function Books() {
  const books = [
    {
      title: 'A Mid October In Kansas',
      subtitle: 'An unexpected vacation',
      status: 'published',
      amazonUrl: '#',
    },
    {
      title: 'A Place of My Own',
      subtitle: 'Building an off-grid cabin',
      status: 'published',
      amazonUrl: '#',
    },
    {
      title: 'A Year And A Half',
      subtitle: 'Recovering from an accident',
      status: 'published',
      amazonUrl: '#',
    },
    {
      title: 'Florida Story Tellers',
      subtitle: 'An accumulation of characters',
      status: 'published',
      amazonUrl: '#',
    },
    {
      title: 'The Evolution Of A Relationship',
      subtitle: 'Discovering anal sex',
      status: 'published',
      amazonUrl: '#',
    },
    {
      title: 'Chapter 14, Connie',
      subtitle: 'A two-way erotic encounter',
      status: 'published',
      amazonUrl: '#',
    },
    {
      title: 'A Week-End In Virginia',
      subtitle: 'A toy story',
      status: 'published',
      amazonUrl: '#',
    },
    {
      title: 'A Visitor From Indiana',
      subtitle: 'Taking a walk on the wild side',
      status: 'published',
      amazonUrl: '#',
    },
    {
      title: 'Hannah',
      subtitle: '',
      status: 'in-process',
    },
    {
      title: "Life's Been Good To Me",
      subtitle: '',
      status: 'nearing-completion',
    },
    {
      title: 'An Off Grid Experience',
      subtitle: '',
      status: 'in-process',
    },
    {
      title: 'Price Lake Stories',
      subtitle: '',
      status: 'in-process',
    },
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case 'published':
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200">
            Published
          </span>
        );
      case 'in-process':
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200">
            In Process
          </span>
        );
      case 'nearing-completion':
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800 border border-amber-200">
            Nearing Completion
          </span>
        );
      default:
        return null;
    }
  };

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
            <div
              key={index}
              className="bg-white border border-stone-200 rounded-xl p-6 hover:shadow-lg hover:border-amber-300 transition-all group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 group-hover:bg-amber-100 transition-colors">
                  <BookOpen className="w-6 h-6 text-amber-700" />
                </div>
                <div className="flex-1">
                  {getStatusBadge(book.status)}
                </div>
              </div>

              <h3 className="text-xl font-semibold text-stone-900 mb-2 leading-snug">
                {book.title}
              </h3>

              {book.subtitle && (
                <p className="text-stone-600 text-sm mb-4 italic">{book.subtitle}</p>
              )}

              {book.amazonUrl && (
                <a
                  href={book.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-900 font-medium text-sm transition-colors group/link"
                >
                  View on Amazon
                  <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
