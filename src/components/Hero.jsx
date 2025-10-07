import { Quote } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-amber-50 to-stone-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif text-stone-900 leading-tight">
                E.L. Gallinger
              </h1>
              <p className="text-xl sm:text-2xl text-stone-600 font-light">
                Author & Storyteller from Bottineau, North Dakota
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-stone-200 shadow-sm">
              <Quote className="w-8 h-8 text-amber-700 mb-4" />
              <blockquote className="space-y-3">
                <p className="text-lg text-stone-700 italic leading-relaxed">
                  "Some people try to turn back their odometers. I want people to know why I look the way I do. I've traveled a long way and some of the roads weren't paved."
                </p>
              </blockquote>
            </div>

            <div className="bg-amber-100 border border-amber-200 p-6 rounded-lg">
              <Quote className="w-8 h-8 text-amber-900 mb-4" />
              <blockquote className="space-y-3">
                <p className="text-lg text-amber-900 font-medium leading-relaxed">
                  "Words. An Orator's are seldom remembered, a writer's often last forever."
                </p>
              </blockquote>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[3/4] bg-gradient-to-br from-amber-200 to-stone-300 rounded-2xl shadow-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <div className="w-32 h-32 mx-auto bg-white rounded-full flex items-center justify-center shadow-lg">
                    <Quote className="w-16 h-16 text-amber-700" />
                  </div>
                  <p className="text-stone-700 text-sm max-w-xs mx-auto">
                    Intelligent, clear-headed and bold with his words, bringing warm summer days, nostalgic memories, loss and heartbreak to life.
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-amber-600/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-stone-400/10 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
