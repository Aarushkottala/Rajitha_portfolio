// import { useState } from "react";

// function Navbar() {

//   const [isOpen, setIsOpen] = useState(false);

//   const menuItems = [
//     "Home",
//     "About",
//     "Skills",
//     "Education",
//     "Projects",
//     "Contact",
//   ];

//   return (
//     <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/90 backdrop-blur-md border-b border-white/10">

//       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

//         {/* Logo */}
//         <a
//           href="#Home"
//           className="text-2xl font-bold text-white"
//         >
//           My<span className="text-cyan-400">Portfolio</span>
//         </a>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center gap-8">

//           {menuItems.map((item) => (
//             <a
//               key={item}
//               href={`#${item}`}
//               className="text-gray-300 hover:text-cyan-400 transition duration-300"
//             >
//               {item === "Contact" ? "Contact Me" : item}
//             </a>
//           ))}

//         </div>

//         {/* Mobile Button */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="md:hidden text-white text-2xl"
//         >
//           ☰
//         </button>

//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-slate-900 px-6 pb-5">

//           {menuItems.map((item) => (
//             <a
//               key={item}
//               href={`#${item}`}
//               onClick={() => setIsOpen(false)}
//               className="block py-3 text-gray-300 hover:text-cyan-400"
//             >
//               {item === "Contact" ? "Contact Me" : item}
//             </a>
//           ))}

//         </div>
//       )}

//     </nav>
//   );
// }

//export default Navbar;

////////////////////////////////////////////////

import { useEffect, useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    "Home",
    "About",
    "Skills",
    "Education",
    "Projects",
    "Contact",
  ];

  // Detect when the user scrolls
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Detect which section is currently visible
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50
        transition-all duration-300
        ${
          scrolled
            ? "bg-slate-950/95 shadow-lg shadow-black/20"
            : "bg-slate-950/70"
        }
        backdrop-blur-md border-b border-white/10`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <a
          href="#Home"
          onClick={() => setActiveSection("Home")}
          className="flex flex-col"
        >
          <span className="text-2xl font-bold text-white">
            Rajitha<span className="text-cyan-400">.</span>
          </span>

          <span className="text-[10px] uppercase tracking-[0.25em] text-gray-500">
            Front-End Developer
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`relative py-2 transition duration-300 ${
                activeSection === item
                  ? "text-cyan-400"
                  : "text-gray-300 hover:text-cyan-400"
              }`}
            >
              {item === "Contact" ? "Contact Me" : item}

              {activeSection === item && (
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-cyan-400"></span>
              )}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-2xl"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-950/95 border-t border-white/10 px-6 pb-5">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => {
                setActiveSection(item);
                setIsOpen(false);
              }}
              className={`block py-3 transition ${
                activeSection === item
                  ? "text-cyan-400"
                  : "text-gray-300 hover:text-cyan-400"
              }`}
            >
              {item === "Contact" ? "Contact Me" : item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;