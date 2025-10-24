import { Heart, Smile, Mountain, Moon } from 'lucide-react';

export default function About() {
  const traits = [
    {
      icon: Mountain,
      title: 'Non-conformist',
      description: 'Passionately curious and comfortable being alone',
    },
    {
      icon: Smile,
      title: 'Warm Spirit',
      description: 'Attempts to make people smile and avoids conflict',
    },
    {
      icon: Heart,
      title: 'Genuine',
      description: 'Talks to himself, animals, and inanimate objects',
    },
    {
      icon: Moon,
      title: 'Night Owl',
      description: 'Goes to bed late and gets up late',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif text-stone-900 mb-6">About the Author</h2>
          <div className="w-24 h-1 bg-amber-700 mx-auto mb-8" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="prose prose-lg prose-stone max-w-none">
            <p className="text-stone-700 leading-relaxed">
              Elwood Lawrence Gallinger is located in Bottineau, North Dakota. He has two adult daughters, a lovely house, and loves writing books and experiencing new things.
            </p>
            <p className="text-stone-700 leading-relaxed">
              He has an avid delight for all the new and lovely things in the world, and is always looking for things to put into his books. He says he's been a lot of places, been with a lot of folks, seen a lot, done a lot and doesn't remember most of it.
            </p>
            <p className="text-stone-700 leading-relaxed">
              Intelligent, clear-headed and bold with his words, he brings a warm, simple feel to his books, detailing stories with warm summer days, nostalgic memories, loss and heartbreak.
            </p>
            <p className="text-amber-900 font-medium text-xl">
              His books are a must read for women everywhere.
            </p>
          </div>

          <div className="space-y-4">
            {traits.map((trait, index) => {
              const Icon = trait.icon;
              return (
                <div
                  key={index}
                  className="bg-stone-50 border border-stone-200 rounded-lg p-6 hover:border-amber-300 hover:bg-amber-50 transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white rounded-lg border border-stone-200 group-hover:border-amber-300 group-hover:bg-amber-100 transition-all">
                      <Icon className="w-6 h-6 text-amber-700" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-stone-900 mb-1">
                        {trait.title}
                      </h3>
                      <p className="text-stone-600 text-sm">{trait.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-2xl p-8 sm:p-12 text-white shadow-xl">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl sm:text-3xl font-serif mb-6">Achievements</h3>
            <p className="text-stone-300 text-lg leading-relaxed">
              He allows his achievements to stand on their own, letting his work speak for itself through the pages of his many books and the stories he continues to tell.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}