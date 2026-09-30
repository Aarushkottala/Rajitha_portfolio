// function Education() {

//   const education = [
//     {
//       year: "2014 - 2018",
//       degree: "Bachelor of Technology",
//       field: "Computer Science / Engineering",
//       description:
//         "Completed my bachelor's degree and developed a strong foundation in programming, software development and computer science concepts."
//     },
//     {
//       year: "2012 - 2014",
//       degree: "Higher Secondary Education",
//       field: "Science",
//       description:
//         "Built a strong foundation in mathematics, science and analytical thinking."
//     }
//   ];

//   return (
//     <section
//       id="Education"
//       className="min-h-screen bg-slate-900 text-white px-6 py-24"
//     >

//       <div className="max-w-5xl mx-auto">

//         {/* Heading */}
//         <div className="text-center mb-16">

//           <p className="text-cyan-400 font-semibold mb-3">
//             MY JOURNEY
//           </p>

//           <h2 className="text-4xl md:text-5xl font-bold">
//             <span className="text-cyan-400">Education</span>
//           </h2>

//           <p className="text-gray-400 max-w-2xl mx-auto mt-5">
//             My educational background and the foundation
//             that helped me develop my technical skills.
//           </p>

//         </div>

//         {/* Timeline */}
//         <div className="relative">

//           {/* Vertical Line */}
//           <div
//             className="absolute left-4 md:left-1/2
//             top-0 bottom-0 w-0.5
//             bg-cyan-400/30
//             md:-translate-x-1/2"
//           ></div>

//           {education.map((item, index) => (

//             <div
//               key={item.degree}
//               className={`relative flex items-center mb-12
//               ${
//                 index % 2 === 0
//                   ? "md:justify-start"
//                   : "md:justify-end"
//               }`}
//             >

//               {/* Timeline Dot */}
//               <div
//                 className="absolute left-4 md:left-1/2
//                 w-4 h-4
//                 bg-cyan-400
//                 rounded-full
//                 border-4 border-slate-900
//                 md:-translate-x-1/2
//                 z-10"
//               ></div>

//               {/* Card */}
//               <div
//                 className="ml-12 md:ml-0
//                 w-full md:w-[45%]
//                 bg-slate-950
//                 border border-white/10
//                 rounded-2xl
//                 p-6
//                 hover:border-cyan-400
//                 hover:-translate-y-1
//                 transition-all duration-300"
//               >

//                 {/* Year */}
//                 <p className="text-cyan-400 font-semibold mb-2">
//                   {item.year}
//                 </p>

//                 {/* Degree */}
//                 <h3 className="text-2xl font-bold mb-2">
//                   {item.degree}
//                 </h3>

//                 {/* Field */}
//                 <h4 className="text-gray-300 font-medium mb-4">
//                   {item.field}
//                 </h4>

//                 {/* Description */}
//                 <p className="text-gray-400 leading-7">
//                   {item.description}
//                 </p>

//               </div>

//             </div>

//           ))}

//         </div>

//       </div>

//     </section>
//   );
// }

//export default Education;

/////////////////////////////////////


function Education() {
  const education = [
    {
      year: "2010- 2014",
      degree: "Bachelor of Technology",
      field: "Computer Science / Engineering",
      description:
        "Completed my bachelor's degree and developed a strong foundation in programming, software development and computer science concepts.",
    },
    {
      year: "2008 - 2010",
      degree: "Higher Secondary Education",
      field: "Science",
      description:
        "Built a strong foundation in mathematics, science and analytical thinking.",
    },
  ];

  return (
    <section
      id="Education"
      className="relative bg-slate-900 text-white px-6 py-24 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">

          <p className="text-cyan-400 font-semibold mb-3">
            MY ACADEMIC JOURNEY
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="text-cyan-400">Education</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5 leading-7">
            My educational background and the foundation that
            helped me develop my technical knowledge.
          </p>

        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Timeline Line */}
          <div
            className="absolute left-4 md:left-1/2
                       top-0 bottom-0
                       w-0.5
                       bg-gradient-to-b
                       from-cyan-400
                       via-cyan-400/40
                       to-transparent
                       md:-translate-x-1/2"
          ></div>

          {education.map((item, index) => (
            <div
              key={item.degree}
              className={`relative flex items-center mb-16
                ${
                  index % 2 === 0
                    ? "md:justify-start"
                    : "md:justify-end"
                }`}
            >

              {/* Timeline Dot */}
              <div
                className="absolute left-4 md:left-1/2
                           w-5 h-5
                           bg-cyan-400
                           rounded-full
                           border-4 border-slate-900
                           shadow-[0_0_20px_rgba(34,211,238,0.7)]
                           md:-translate-x-1/2
                           z-10"
              ></div>

              {/* Education Card */}
              <div
                className="ml-12 md:ml-0
                           w-full md:w-[44%]
                           bg-slate-950
                           border border-white/10
                           rounded-2xl
                           p-7
                           hover:border-cyan-400/50
                           hover:-translate-y-2
                           transition-all duration-300
                           group"
              >

                {/* Year */}
                <div className="flex items-center justify-between mb-4">

                  <span
                    className="text-cyan-400
                               font-semibold
                               text-sm
                               px-3 py-1
                               rounded-full
                               bg-cyan-400/10"
                  >
                    {item.year}
                  </span>

                  <span className="text-gray-600 text-2xl">
                    🎓
                  </span>

                </div>

                {/* Degree */}
                <h3
                  className="text-2xl
                             font-bold
                             mb-2
                             group-hover:text-cyan-400
                             transition duration-300"
                >
                  {item.degree}
                </h3>

                {/* Field */}
                <h4 className="text-gray-300 font-medium mb-4">
                  {item.field}
                </h4>

                {/* Description */}
                <p className="text-gray-400 leading-7">
                  {item.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Education;