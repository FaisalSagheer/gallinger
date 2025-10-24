import React from 'react'

function Hero() {
  return (
       <section
      id="home"
      className="pt-30 lg:pt-34 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-amber-50 to-stone-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1
                className="text-5xl sm:text-6xl lg:text-7xl text-stone-900 leading-tight font-serif"
              >
                E.L. Gallinger
              </h1>
              <p className="text-xl sm:text-2xl text-stone-600 font-light">
                Author & Storyteller
              </p>
            </div>

            <div
              className="bg-white p-6 rounded-lg border border-stone-200 shadow-sm"
            >
              {/* <!-- Quote icon replaced with SVG --> */}
              <svg
                className="w-8 h-8 text-amber-700 mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"
                />
              </svg>
              <blockquote className="space-y-3">
                <p className="text-lg text-stone-700 italic leading-relaxed">
                  "Some people try to turn back their odometers. I want people
                  to know why I look the way I do. I've traveled a long way and
                  some of the roads weren't paved."
                </p>
              </blockquote>
            </div>

            <div className="bg-amber-100 border border-amber-200 p-6 rounded-lg">
              {/* <!-- Quote icon replaced with SVG --> */}
              <svg
                className="w-8 h-8 text-amber-900 mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"
                />
              </svg>
              <blockquote className="space-y-3">
                <p className="text-lg text-amber-900 font-medium leading-relaxed">
                  "Words. An Orator's are seldom remembered, a writer's often
                  last forever."
                </p>
              </blockquote>
            </div>
          </div>

          <div className="relative">
            <div
              className="bg-gradient-to-br from-amber-200 to-stone-300 rounded-2xl shadow-2xl overflow-hidden aspect-[4/4]"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <img src="assets/author.jpg" className="rounded w-[35rem]" alt="" />
                {/* <!-- <div className="text-center space-y-4 p-8">
                  <div
                    className="w-32 h-32 mx-auto bg-white rounded-full flex items-center justify-center shadow-lg"
                  >
                    <svg
                      className="w-16 h-16 text-amber-700"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"
                      />
                    </svg>
                  </div>
                  <p className="text-stone-700 text-sm max-w-xs mx-auto">
                    Intelligent, clear-headed and bold with his words, bringing
                    warm summer days, nostalgic memories, loss and heartbreak to
                    life.
                  </p>
                  <div
                    className="absolute -bottom-6 -right-6 w-48 h-48 bg-amber-600/10 rounded-full blur-3xl -z-10"
                  ></div>
                </div> --> */}
              </div>
            </div>
            <div
              className="absolute -top-6 -left-6 w-48 h-48 bg-stone-400/10 rounded-full blur-3xl -z-10"
            ></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
