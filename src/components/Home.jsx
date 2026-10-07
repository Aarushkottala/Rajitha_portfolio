// function Home() {
//   return (
//     <section
//       id="Home"
//       className="min-h-screen flex items-center justify-center
//       bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950
//       text-white px-6 pt-20"
//     >

//       <div className="max-w-6xl mx-auto text-center">

//         <p className="text-cyan-400 text-lg mb-4">
//           Hello, I'm
//         </p>

//         <h1 className="text-5xl md:text-7xl font-bold mb-6">
//           Rajitha Kottala
//         </h1>

//         <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
//           Front-End React Developer
//         </h2>

//         <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-8 mb-8">
//           I create modern, responsive and user-friendly web
//           applications using React, JavaScript, HTML, CSS and
//           Tailwind CSS.
//         </p>

//         <div className="flex justify-center gap-4">

//           <a
//             href="#Projects"
//             className="px-6 py-3 rounded-full bg-cyan-500
//             text-slate-950 font-semibold
//             hover:bg-cyan-400 transition"
//           >
//             View My Work
//           </a>

//           <a
//             href="#Contact"
//             className="px-6 py-3 rounded-full border
//             border-cyan-400 text-cyan-400
//             hover:bg-cyan-400 hover:text-slate-950
//             transition"
//           >
//             Contact Me
//           </a>

//         </div>

//       </div>

//     </section>
//   );
// }



///////////////////////////////

function Home() {
  return (
    <section
      id="Home"
      className="relative min-h-screen overflow-hidden bg-blue-100 text-green-400 px-6 pt-32 flex items-center"
    >
      {/* Background Glow 1 */}
      <div
        className="absolute top-20 left-10 w-72 h-72
                   bg-cyan-500/20 rounded-full blur-3xl"
      ></div>

      {/* Background Glow 2 */}
      <div
        className="absolute bottom-10 right-10 w-80 h-80
                   bg-blue-500/20 rounded-full blur-3xl"
      ></div>

      {/* Main Content */}
      <div className="relative max-w-6xl mx-auto w-full text-center">

        <p className="text-cyan-600 text-lg font-semibold mb-4">
          Hello, I'm
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Rajitha Kottala
        </h1>

        <h2 className="text-2xl md:text-4xl font-semibold text-slate-600 mb-6">
          Front-End{" "}
          <span className="text-cyan-400">
            React Developer
          </span>
        </h2>

        <p className="max-w-2xl mx-auto text-gray-500 text-lg leading-8 mb-8">
          I create modern, responsive and user-friendly web
          applications using React, JavaScript, HTML, CSS and
          Tailwind CSS.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">

          <a
            href="#Projects"
            className="px-7 py-3 rounded-full
                       bg-cyan-400 text-slate-950
                       font-semibold
                       hover:bg-cyan-300
                       hover:-translate-y-1
                       transition-all duration-300"
          >
            View My Work
          </a>

          <a
            href="#Contact"
            className="px-7 py-3 rounded-full
                       border border-cyan-400
                       text-cyan-400
                       font-semibold
                       hover:bg-cyan-400
                       hover:text-slate-950
                       hover:-translate-y-1
                       transition-all duration-300"
          >
            Contact Me
          </a>

        </div>

      </div>
    </section>
  );
}

export default Home;
