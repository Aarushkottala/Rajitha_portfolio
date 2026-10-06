// function Skills() {

//   const skills = [
//     {
//       name: "HTML",
//       level: "Advanced"
//     },
//     {
//       name: "CSS",
//       level: "Advanced"
//     },
//     {
//       name: "JavaScript",
//       level: "Intermediate"
//     },
//     {
//       name: "React",
//       level: "Intermediate"
//     },
//     {
//       name: "Tailwind CSS",
//       level: "Intermediate"
//     },
//     {
//       name: "Bootstrap",
//       level: "Intermediate"
//     },
//     {
//       name: "Git & GitHub",
//       level: "Intermediate"
//     },
//     {
//       name: "Responsive Design",
//       level: "Advanced"
//     }
//   ];

//   return (
//     <section
//       id="Skills"
//       className="min-h-screen bg-slate-950
//       text-white px-6 py-24"
//     >

//       <div className="max-w-6xl mx-auto">

//         <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
//           My <span className="text-cyan-400">Skills</span>
//         </h2>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

//           {skills.map((skill) => (

//             <div
//               key={skill.name}
//               className="group bg-slate-900 p-6 rounded-2xl
//               border border-white/10
//               hover:border-cyan-400
//               hover:-translate-y-2
//               transition duration-300"
//             >

//               <h3 className="text-xl font-semibold mb-3
//                 group-hover:text-cyan-400">
//                 {skill.name}
//               </h3>

//               <p className="text-gray-400">
//                 {skill.level}
//               </p>

//             </div>

//           ))}

//         </div>

//       </div>

//     </section>
//   );
// }

// //export default Skills;

// //////////////////

// function Skills() {
//   const skills = [
//     {
//       name: "HTML5",
//       icon: "🌐",
//       description: "Semantic HTML and accessible web structure",
//       category: "Frontend",
//     },
//     {
//       name: "CSS3",
//       icon: "🎨",
//       description: "Responsive layouts, Flexbox, Grid and animations",
//       category: "Frontend",
//     },
//     {
//       name: "JavaScript",
//       icon: "⚡",
//       description: "ES6+, DOM, array methods and asynchronous JavaScript",
//       category: "Language",
//     },
//     {
//       name: "React",
//       icon: "⚛️",
//       description: "Components, props, state, hooks and reusable UI",
//       category: "Frontend",
//     },
//     {
//       name: "Tailwind CSS",
//       icon: "💨",
//       description: "Responsive and modern utility-first UI development",
//       category: "CSS Framework",
//     },
//     {
//       name: "Bootstrap",
//       icon: "🅱️",
//       description: "Responsive layouts and reusable UI components",
//       category: "CSS Framework",
//     },
//     {
//       name: "Git & GitHub",
//       icon: "🔧",
//       description: "Version control, repositories and project collaboration",
//       category: "Tools",
//     },
//     {
//       name: "REST APIs",
//       icon: "🔗",
//       description: "Fetching and displaying data from web APIs",
//       category: "Development",
//     },
//   ];

//   return (
//     <section
//       id="Skills"
//       className="relative bg-slate-950 text-white px-6 py-24 overflow-hidden"
//     >
//       {/* Background Glow */}
//       <div className="absolute top-20 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>

//       <div className="relative max-w-6xl mx-auto">

//         {/* Heading */}
//         <div className="text-center mb-16">

//           <p className="text-cyan-400 font-semibold mb-3">
//             WHAT I WORK WITH
//           </p>

//           <h2 className="text-4xl md:text-5xl font-bold">
//             My <span className="text-cyan-400">Skills</span>
//           </h2>

//           <p className="text-gray-400 max-w-2xl mx-auto mt-5 leading-7">
//             Technologies and tools I use to build modern,
//             responsive and user-friendly web applications.
//           </p>

//         </div>

//         {/* Skills Grid */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

//           {skills.map((skill) => (
//             <div
//               key={skill.name}
//               className="group relative
//                          bg-slate-900
//                          border border-white/10
//                          rounded-2xl
//                          p-6
//                          overflow-hidden
//                          hover:border-cyan-400/50
//                          hover:-translate-y-2
//                          transition-all duration-300"
//             >

//               {/* Hover Glow */}
//               <div
//                 className="absolute -top-10 -right-10
//                            w-24 h-24
//                            bg-cyan-400/10
//                            rounded-full
//                            blur-2xl
//                            opacity-0
//                            group-hover:opacity-100
//                            transition duration-500"
//               ></div>

//               {/* Icon */}
//               <div
//                 className="relative w-14 h-14
//                            flex items-center justify-center
//                            rounded-xl
//                            bg-slate-800
//                            text-2xl
//                            mb-5
//                            group-hover:bg-cyan-400
//                            group-hover:scale-110
//                            transition-all duration-300"
//               >
//                 {skill.icon}
//               </div>

//               {/* Skill Name */}
//               <h3
//                 className="text-xl font-bold mb-2
//                            group-hover:text-cyan-400
//                            transition duration-300"
//               >
//                 {skill.name}
//               </h3>

//               {/* Category */}
//               <span
//                 className="inline-block
//                            text-xs
//                            px-3 py-1
//                            rounded-full
//                            bg-cyan-400/10
//                            text-cyan-400
//                            mb-4"
//               >
//                 {skill.category}
//               </span>

//               {/* Description */}
//               <p className="text-gray-400 text-sm leading-6">
//                 {skill.description}
//               </p>

//             </div>
//           ))}

//         </div>

//         {/* Bottom Message */}
//         <div className="mt-16 text-center">

//           <p className="text-gray-400">
//             Currently expanding my knowledge in{" "}
//             <span className="text-cyan-400 font-semibold">
//               React, JavaScript and modern front-end development.
//             </span>
//           </p>

//         </div>

//       </div>
//     </section>
//   );
// }

//export default Skills;

//////////////////////////////////
// import {
//   FaHtml5,
//   FaCss3Alt,
//   FaJs,
//   FaReact,
//   FaBootstrap,
//   FaGitAlt,
//   FaGithub,
// } from "react-icons/fa";

// import { SiTailwindcss } from "react-icons/si";

// function Skills() {
//   const skills = [
//     {
//       name: "HTML5",
//       icon: <FaHtml5 />,
//       description: "Semantic HTML and accessible web structure",
//       category: "Frontend",
//     },
//     {
//       name: "CSS3",
//       icon: <FaCss3Alt />,
//       description: "Responsive layouts, Flexbox, Grid and animations",
//       category: "Frontend",
//     },
//     {
//       name: "JavaScript",
//       icon: <FaJs />,
//       description: "ES6+, DOM, array methods and asynchronous JavaScript",
//       category: "Language",
//     },
//     {
//       name: "React",
//       icon: <FaReact />,
//       description: "Components, props, state, hooks and reusable UI",
//       category: "Frontend",
//     },
//     {
//       name: "Tailwind CSS",
//       icon: <SiTailwindcss />,
//       description: "Responsive and modern utility-first UI development",
//       category: "CSS Framework",
//     },
//     {
//       name: "Bootstrap",
//       icon: <FaBootstrap />,
//       description: "Responsive layouts and reusable UI components",
//       category: "CSS Framework",
//     },
//     {
//       name: "Git",
//       icon: <FaGitAlt />,
//       description: "Version control and project collaboration",
//       category: "Tools",
//     },
//     {
//       name: "GitHub",
//       icon: <FaGithub />,
//       description: "Repositories and source code management",
//       category: "Tools",
//     },
//   ];

//   return (
//     <section
//       id="Skills"
//       className="relative bg-blue-100 text-gray-500 px-6 py-24 overflow-hidden"
//     >
//       {/* Background glow */}
//       <div className="absolute top-20 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>

//       <div className="relative max-w-7xl mx-auto">

//         {/* Heading */}
//         <div className="text-center mb-16">
//           <p className="text-cyan-400 font-semibold mb-3">
//             MY TECHNICAL SKILLS
//           </p>

//           <h2 className="text-4xl md:text-5xl font-bold">
//             My <span className="text-cyan-400">Skills</span>
//           </h2>

//           <p className="text-gray-500 max-w-2xl mx-auto mt-5 leading-7">
//             Technologies and tools I use to create modern,
//             responsive and user-friendly web applications.
//           </p>
//         </div>

//         {/* Skills Grid */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {skills.map((skill) => (
//             <div
//               key={skill.name}
//               className="group relative bg-red-600 border border-white/10 rounded-2xl p-6 hover:border-cyan-400/50 hover:-translate-y-2 transition-all duration-500"
//             >
//               {/* Glow */}
//               <div className="absolute inset-0 bg-cyan-400/5 opacity-0 group-hover:opacity-100 rounded-2xl transition duration-500"></div>

//               <div className="relative">

//                 {/* Icon */}
//                 <div className="text-3xl text-cyan-400 mb-5">
//                   {skill.icon}
//                 </div>

//                 {/* Category */}
//                 <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
//                   {skill.category}
//                 </p>

//                 {/* Skill Name */}
//                 <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition">
//                   {skill.name}
//                 </h3>

//                 {/* Description */}
//                 <p className="text-white text-sm leading-6">
//                   {skill.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Skills;

////////////



import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import { SiTailwindcss } from "react-icons/si";

function Skills() {
  const skills = [
    {
      name: "HTML5",
      icon: <FaHtml5 className="text-orange-600" />,
      description: "Semantic HTML and accessible web structure",
      category: "Frontend",
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt className="text-blue-600" />,
      description: "Responsive layouts, Flexbox, Grid and animations",
      category: "Frontend",
    },
    {
      name: "JavaScript",
      icon: <FaJs className="text-yellow-400" />,
      description: "ES6+, DOM, array methods and asynchronous JavaScript",
      category: "Language",
    },
    {
      name: "React",
      icon: <FaReact className="text-cyan-500" />,
      description: "Components, props, state, hooks and reusable UI",
      category: "Frontend",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-sky-500" />,
      description: "Responsive and modern utility-first UI development",
      category: "CSS Framework",
    },
    {
      name: "Bootstrap",
      icon: <FaBootstrap className="text-purple-600" />,
      description: "Responsive layouts and reusable UI components",
      category: "CSS Framework",
    },
    {
      name: "Git",
      icon: <FaGitAlt className="text-orange-600" />,
      description: "Version control and project collaboration",
      category: "Tools",
    },
    {
      name: "GitHub",
      icon: <FaGithub className="text-slate-900" />,
      description: "Repositories and source code management",
      category: "Tools",
    },
  ];

  return (
    <section
      id="Skills"
      className="relative bg-blue-100 text-slate-700 px-6 py-24 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-20 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-cyan-600 font-semibold mb-3">
            MY TECHNICAL SKILLS
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            My <span className="text-cyan-600">Skills</span>
          </h2>

          <p className="text-slate-600 max-w-2xl mx-auto mt-5 leading-7">
            Technologies and tools I use to create modern,
            responsive and user-friendly web applications.
          </p>

        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {skills.map((skill) => (

            <div
              key={skill.name}
              className="group relative bg-white border border-slate-200 rounded-2xl p-6 shadow-md shadow-slate-200/60 hover:border-cyan-400 hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-100 transition-all duration-500"
            >

              {/* Glow */}
              <div className="absolute inset-0 bg-cyan-400/5 opacity-0 group-hover:opacity-100 rounded-2xl transition duration-500"></div>

              <div className="relative">

                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-cyan-50 mb-5">
                  <div className="text-3xl">
                    {skill.icon}
                  </div>
                </div>

                {/* Category */}
                <p className="text-xs uppercase tracking-wider text-cyan-600 font-medium mb-2">
                  {skill.category}
                </p>

                {/* Skill Name */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition">
                  {skill.name}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-6">
                  {skill.description}
                </p>

              </div>
            </div>

          ))}

        </div>
      </div>
    </section>
  );
}

export default Skills;
