import React from "react";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-200 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <button className="flex items-center gap-3 group">
            <img src="assets/book-open.svg" className="w-8" alt="/" />
            <div className="text-left">
              <h1 className="text-xl font-serif text-stone-900 group-hover:text-amber-900 transition-colors">
                E.L. Gallinger
              </h1>
              <p className="text-xs text-stone-500">Author & Storyteller</p>
            </div>
          </button>

          <nav className="hidden md:flex items-center gap-8 font-semibold text-black/80">
            <ul className="flex gap-4 text-[1rem] nav-links">
              <li>
                <a href="#home"> Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#books">Books</a>
              </li>
              <li>
                <a href="#gallery">Gallery</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>

          <div className="relative md:hidden">
            <button
              popovertarget="desktop-menu-solutions"
              className="inline-flex items-center gap-x-1 text-sm/6 font-semibold text-white"
            >
              <span>Menu</span>
              <img src="assets/menu.svg" alt="" />
            </button>

            <el-popover
              id="desktop-menu-solutions"
              anchor="bottom"
              popover
              className="w-screen max-w-max overflow-visible bg-transparent px-4 transition transition-discrete [--anchor-gap:--spacing(5)] backdrop:bg-transparent open:flex data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in mt-4"
            >
              <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-amber-200 text-sm/6 outline-1 -outline-offset-1 outline-white/10">
                <div className="p-4">
                  <div>
                    <nav className="flex items-center justify-center gap-8 font-semibold text-white">
                      <ul className="flex gap-8 text-[1rem] flex-col justify-center items-center nav-links">
                        <li>
                          <a href="#home"> Home</a>
                        </li>
                        <li>
                          <a href="#about">About</a>
                        </li>
                        <li>
                          <a href="#books">Books</a>
                        </li>
                        <li>
                          <a href="#gallery">Gallery</a>
                        </li>
                        <li>
                          <a href="#contact">Contact</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </el-popover>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
