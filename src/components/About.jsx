// function About() {
//   return (
//     <section
//       id="About"
//       className="min-h-screen bg-slate-900 text-white
//       flex items-center px-6 py-24"
//     >

//       <div className="max-w-6xl mx-auto">

//         <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
//           About <span className="text-cyan-400">Me</span>
//         </h2>

//         <div className="grid md:grid-cols-2 gap-12 items-center">

//           {/* Profile Image */}
//           <div className="flex justify-center">

//             <div className="relative">

//               <div className="absolute inset-0
//                 bg-cyan-400 rounded-2xl blur-2xl opacity-20">
//               </div>

//               <img
//                 src="/profile.jpg"
//                 alt="Rajita Kothala"
//                 className="relative w-72 h-72 md:w-96 md:h-96
//                 object-cover rounded-2xl
//                 border-2 border-cyan-400"
//               />

//             </div>

//           </div>

//           {/* Description */}
//           <div>

//             <h3 className="text-3xl font-semibold mb-6">
//               Front-End React Developer
//             </h3>

//             <p className="text-gray-400 leading-8 mb-5">
//               I'm passionate about building clean, responsive and
//               interactive web applications.
//             </p>

//             <p className="text-gray-400 leading-8 mb-8">
//               I enjoy transforming ideas into beautiful user
//               interfaces using modern front-end technologies.
//             </p>

//             <div className="grid grid-cols-2 gap-4">

//               <div className="bg-slate-800 p-4 rounded-xl">
//                 <p className="text-cyan-400 font-semibold">
//                   Location
//                 </p>
//                 <p className="text-gray-300">
//                   Canada
//                 </p>
//               </div>

//               <div className="bg-slate-800 p-4 rounded-xl">
//                 <p className="text-cyan-400 font-semibold">
//                   Experience
//                 </p>
//                 <p className="text-gray-300">
//                   Front-End Development
//                 </p>
//               </div>

//             </div>

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// }

//export default About;


function About() {
  return (
    <section
      id="About"
      className="relative bg-slate-900 text-white px-6 py-24 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-16">

          <p className="text-cyan-400 font-semibold mb-3">
            GET TO KNOW ME
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5 leading-7">
            A little about my background, my technical journey,
            and my passion for front-end development.
          </p>

        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Profile Image */}
          <div className="flex justify-center">

            <div className="relative">

              {/* Outer Glow */}
              <div
                className="absolute -inset-4
                           bg-cyan-400/20
                           rounded-3xl
                           blur-2xl"
              ></div>

              {/* Image Card */}
              <div
                className="relative
                           p-2
                           rounded-3xl
                           border border-cyan-400/30
                           bg-slate-800/50
                           backdrop-blur-sm"
              >
                <img
                  src="src/assets/profile.jpeg"
                  alt="Rajita Kottala"
                  className="w-72 h-72 md:w-96 md:h-96
                             object-cover
                             rounded-2xl"
                />
              </div>

              {/* Small Floating Card
              <div
                className="absolute -bottom-6 -right-6
                           bg-slate-950
                           border border-cyan-400/30
                           rounded-2xl
                           px-5 py-4
                           shadow-xl"
              >
                <p className="text-cyan-400 text-2xl font-bold">
                  React
                </p>

                <p className="text-gray-400 text-sm">
                  Front-End Development
                </p>
              </div> */}

            </div>

          </div>

          {/* About Text */}
          <div>

            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Building the Web with{" "}
              <span className="text-cyan-400">
                React
              </span>
            </h3>

            <p className="text-gray-400 leading-8 mb-5">
              I am passionate about creating modern, responsive
              and user-friendly web applications. I enjoy
              transforming ideas into clean and interactive
              interfaces.
            </p>

            <p className="text-gray-400 leading-8 mb-8">
              My current focus is front-end development using
              React, JavaScript, HTML, CSS and Tailwind CSS.
              I am continuously improving my skills by building
              practical projects and learning modern web
              development techniques.
            </p>

            {/* Information Cards */}
            <div className="grid sm:grid-cols-2 gap-4">

              {/* Card 1 */}
              <div
                className="group
                           bg-slate-950
                           border border-white/10
                           rounded-2xl
                           p-5
                           hover:border-cyan-400
                           hover:-translate-y-1
                           transition-all duration-300"
              >
                <p className="text-cyan-400 text-sm font-semibold mb-2">
                  LOCATION
                </p>

                <p className="text-gray-300">
                  Canada
                </p>
              </div>

              {/* Card 2 */}
              <div
                className="group
                           bg-slate-950
                           border border-white/10
                           rounded-2xl
                           p-5
                           hover:border-cyan-400
                           hover:-translate-y-1
                           transition-all duration-300"
              >
                <p className="text-cyan-400 text-sm font-semibold mb-2">
                  SPECIALIZATION
                </p>

                <p className="text-gray-300">
                  React Development
                </p>
              </div>

              {/* Card 3 */}
              <div
                className="group
                           bg-slate-950
                           border border-white/10
                           rounded-2xl
                           p-5
                           hover:border-cyan-400
                           hover:-translate-y-1
                           transition-all duration-300"
              >
                <p className="text-cyan-400 text-sm font-semibold mb-2">
                  CURRENT FOCUS
                </p>

                <p className="text-gray-300">
                  Front-End Development
                </p>
              </div>

              {/* Card 4 */}
              <div
                className="group
                           bg-slate-950
                           border border-white/10
                           rounded-2xl
                           p-5
                           hover:border-cyan-400
                           hover:-translate-y-1
                           transition-all duration-300"
              >
                <p className="text-cyan-400 text-sm font-semibold mb-2">
                  TECHNOLOGIES
                </p>

                <p className="text-gray-300">
                  React • JavaScript • Tailwind
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;