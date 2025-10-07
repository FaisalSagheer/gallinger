import { BookOpen, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-6 h-6 text-amber-500" />
              <h3 className="text-xl font-serif">E.L. Gallinger</h3>
            </div>
            <p className="text-stone-400 leading-relaxed">
              Author and storyteller from Bottineau, North Dakota, sharing stories of life, love, and the roads traveled.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-stone-400 hover:text-amber-500 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#books"
                  className="text-stone-400 hover:text-amber-500 transition-colors"
                >
                  Books
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-stone-400 hover:text-amber-500 transition-colors"
                >
                  Gallery
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="space-y-3">
              <a
                href="mailto:contact@elgallinger.com"
                className="flex items-center gap-2 text-stone-400 hover:text-amber-500 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>Contact</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 text-center">
          <p className="text-stone-400 text-sm">
            &copy; {new Date().getFullYear()} E.L. Gallinger. All rights reserved.
          </p>
          <p className="text-stone-500 text-xs mt-2 italic">
            "An Orator's words are seldom remembered, a writer's often last forever."
          </p>
        </div>
      </div>
    </footer>
  );
}
