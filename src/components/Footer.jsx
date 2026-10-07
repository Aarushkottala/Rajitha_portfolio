// function Footer() {
//   return (
//     <footer className="bg-slate-950 text-white border-t border-white/10">
//       <div className="max-w-7xl mx-auto px-6 py-10">

//         {/* Main Footer */}
//         <div className="flex flex-col md:flex-row justify-between items-center gap-6">

//           {/* Logo */}
//           <div>
//             <h2 className="text-2xl font-bold">
//               Rajitha<span className="text-cyan-400">.</span>
//             </h2>

//             <p className="text-gray-400 text-sm mt-2">
//               Front-End React Developer
//             </p>
//           </div>

//           {/* Social Links */}
//           <div className="flex gap-4">

//             <a
//               href="https://github.com/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-11 h-11 flex items-center justify-center rounded-full
//                          border border-white/10
//                          text-gray-400
//                          hover:text-cyan-400
//                          hover:border-cyan-400
//                          hover:-translate-y-1
//                          transition-all duration-300"
//             >
//               Git
//             </a>

//             <a
//               href="https://www.linkedin.com/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-11 h-11 flex items-center justify-center rounded-full
//                          border border-white/10
//                          text-gray-400
//                          hover:text-cyan-400
//                          hover:border-cyan-400
//                          hover:-translate-y-1
//                          transition-all duration-300"
//             >
//               in
//             </a>

//             <a
//               href="mailto:your-email@gmail.com"
//               className="w-11 h-11 flex items-center justify-center rounded-full
//                          border border-white/10
//                          text-gray-400
//                          hover:text-cyan-400
//                          hover:border-cyan-400
//                          hover:-translate-y-1
//                          transition-all duration-300"
//             >
//               @
//             </a>

//           </div>

//         </div>

//         {/* Divider */}
//         <div className="border-t border-white/10 my-8"></div>

//         {/* Copyright */}
//         <div className="text-center text-gray-500 text-sm">
//           © {new Date().getFullYear()} Rajitha Kottala. All rights reserved.
//         </div>

//       </div>
//     </footer>
//   );
// }

// export default Footer;

/////////////////////////


import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-950 text-green-500 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-8">

        {/* Center Content */}
        <div className="flex flex-col items-center text-center">

          {/* Name */}
          <h2 className="text-3xl md:text-4xl font-bold tracking-wide">
            Rajitha Kottala
          </h2>

          {/* Profession */}
          <p className="text-gray-400 text-base md:text-lg mt-2">
            Front-End React Developer
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-5 mt-7">


            {/* GitHub */}
            <a
              href="https://github.com/aarushkottala"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-12 h-12 flex items-center justify-center
                         rounded-full
                         border border-white/10
                         bg-white/5
                         text-gray-400
                         hover:text-white
                         hover:bg-cyan-500
                         hover:border-cyan-400
                         hover:-translate-y-1
                         hover:shadow-lg hover:shadow-cyan-500/30
                         transition-all duration-300"
            >
              <FaGithub className="text-xl" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/rajitha-kottala/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-12 h-12 flex items-center justify-center
                         rounded-full
                         border border-white/10
                         bg-white/5
                         text-gray-400
                         hover:text-white
                         hover:bg-cyan-500
                         hover:border-cyan-400
                         hover:-translate-y-1
                         hover:shadow-lg hover:shadow-cyan-500/30
                         transition-all duration-300"
            >
              <FaLinkedinIn className="text-xl" />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/RajithaReddykottala/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-12 h-12 flex items-center justify-center
                         rounded-full
                         border border-white/10
                         bg-white/5
                         text-gray-400
                         hover:text-white
                         hover:bg-cyan-500
                         hover:border-cyan-400
                         hover:-translate-y-1
                         hover:shadow-lg hover:shadow-cyan-500/30
                         transition-all duration-300"
            >
              <FaInstagram className="text-xl" />
            </a>

          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8"></div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Rajitha Kottala. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;

