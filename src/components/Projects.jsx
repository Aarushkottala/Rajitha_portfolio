// function Projects() {

//   const projects = [
//     {
//       title: "React Portfolio",
//       description:
//         "A responsive personal portfolio website built with React and Tailwind CSS.",
//       image: "/projects/portfolio.jpg",
//       technologies: ["React", "Tailwind CSS", "JavaScript"],
//       github: "https://github.com/yourusername/portfolio",
//       live: "https://yourportfolio.com"
//     },

//     {
//       title: "Task Management App",
//       description:
//         "A task management application where users can add, complete and delete tasks.",
//       image: "/projects/tasks.jpg",
//       technologies: ["React", "JavaScript", "Tailwind CSS"],
//       github: "https://github.com/yourusername/task-app",
//       live: "https://yourtaskapp.com"
//     },

//     {
//       title: "Employee Dashboard",
//       description:
//         "A responsive dashboard displaying employee information with filtering and interactive UI.",
//       image: "/projects/dashboard.jpg",
//       technologies: ["React", "JavaScript", "CSS"],
//       github: "https://github.com/yourusername/dashboard",
//       live: "https://yourdashboard.com"
//     }
//   ];

//   return (
//     <section
//       id="Projects"
//       className="min-h-screen bg-slate-950 text-white px-6 py-24"
//     >

//       <div className="max-w-7xl mx-auto">

//         {/* Heading */}
//         <div className="text-center mb-16">

//           <p className="text-cyan-400 font-semibold mb-3">
//             MY WORK
//           </p>

//           <h2 className="text-4xl md:text-5xl font-bold">
//             Featured <span className="text-cyan-400">Projects</span>
//           </h2>

//           <p className="text-gray-400 max-w-2xl mx-auto mt-5">
//             Here are some of the projects I have built using
//             modern front-end technologies.
//           </p>

//         </div>

//         {/* Projects Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

//           {projects.map((project) => (

//             <div
//               key={project.title}
//               className="group bg-slate-900 rounded-2xl
//               overflow-hidden border border-white/10
//               hover:border-cyan-400
//               transition-all duration-300
//               hover:-translate-y-2"
//             >

//               {/* Project Image */}
//               <div className="relative overflow-hidden">

//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-52 object-cover
//                   group-hover:scale-110
//                   transition-transform duration-500"
//                 />

//                 {/* Image Overlay */}
//                 <div
//                   className="absolute inset-0 bg-black/60
//                   opacity-0 group-hover:opacity-100
//                   transition duration-300
//                   flex items-center justify-center"
//                 >

//                   <a
//                     href={project.live}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="px-5 py-2 bg-cyan-400
//                     text-slate-950 rounded-full
//                     font-semibold hover:bg-cyan-300"
//                   >
//                     Live Demo
//                   </a>

//                 </div>

//               </div>

//               {/* Project Content */}
//               <div className="p-6">

//                 <h3 className="text-2xl font-bold mb-3
//                   group-hover:text-cyan-400 transition">
//                   {project.title}
//                 </h3>

//                 <p className="text-gray-400 leading-7 mb-5">
//                   {project.description}
//                 </p>

//                 {/* Technologies */}
//                 <div className="flex flex-wrap gap-2 mb-6">

//                   {project.technologies.map((technology) => (

//                     <span
//                       key={technology}
//                       className="px-3 py-1 text-sm
//                       rounded-full bg-slate-800
//                       text-cyan-400 border border-cyan-400/20"
//                     >
//                       {technology}
//                     </span>

//                   ))}

//                 </div>

//                 {/* Buttons */}
//                 <div className="flex gap-3">

//                   <a
//                     href={project.github}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex-1 text-center
//                     px-4 py-2 rounded-lg
//                     border border-gray-600
//                     hover:border-cyan-400
//                     hover:text-cyan-400
//                     transition"
//                   >
//                     GitHub
//                   </a>

//                   <a
//                     href={project.live}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex-1 text-center
//                     px-4 py-2 rounded-lg
//                     bg-cyan-400 text-slate-950
//                     hover:bg-cyan-300
//                     transition"
//                   >
//                     Live Demo
//                   </a>

//                 </div>

//               </div>

//             </div>

//           ))}

//         </div>

//       </div>

//     </section>
//   );
// }

//export default Projects;

//////////////////////////////////////
function Projects() {
  const projects = [
    {
      title: "React Portfolio",
      description:
        "A modern responsive portfolio website built with React and Tailwind CSS to showcase my skills, education and projects.",
      image: "/projects/portfolio.jpg",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/yourusername/portfolio",
      live: "https://yourportfolio.com",
    },

    {
      title: "Task Management App",
      description:
        "A responsive task management application where users can add, complete and delete tasks.",
      image: "/projects/tasks.jpg",
      technologies: ["React", "JavaScript", "Tailwind CSS"],
      github: "https://github.com/yourusername/task-app",
      live: "https://yourtaskapp.com",
    },

    {
      title: "Employee Dashboard",
      description:
        "A responsive employee dashboard displaying employee information with interactive UI and filtering.",
      image: "/projects/dashboard.jpg",
      technologies: ["React", "JavaScript", "CSS"],
      github: "https://github.com/yourusername/dashboard",
      live: "https://yourdashboard.com",
    },
  ];

  return (
    <section
      id="Projects"
      className="relative bg-slate-950 text-white px-6 py-24 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-cyan-400 font-semibold mb-3">
            MY WORK
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5 leading-7">
            A selection of projects I have built while developing
            my front-end development skills.
          </p>

        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (
            <div
              key={project.title}
              className="group
                         bg-slate-900
                         border border-white/10
                         rounded-2xl
                         overflow-hidden
                         hover:border-cyan-400/50
                         hover:-translate-y-2
                         transition-all duration-500"
            >

              {/* Project Image */}
              <div className="relative h-56 overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full
                             object-cover
                             group-hover:scale-110
                             transition-transform duration-700"
                />

                {/* Image Overlay */}
                <div
                  className="absolute inset-0
                             bg-slate-950/80
                             opacity-0
                             group-hover:opacity-100
                             transition-all duration-500
                             flex items-center justify-center"
                >

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3
                               bg-cyan-400
                               text-slate-950
                               rounded-full
                               font-semibold
                               hover:bg-cyan-300
                               hover:scale-105
                               transition"
                  >
                    View Live Demo
                  </a>

                </div>

              </div>

              {/* Project Content */}
              <div className="p-6">

                <h3
                  className="text-2xl font-bold mb-3
                             group-hover:text-cyan-400
                             transition duration-300"
                >
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-7 mb-5">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">

                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="px-3 py-1
                                 text-xs
                                 rounded-full
                                 bg-cyan-400/10
                                 text-cyan-400
                                 border border-cyan-400/20"
                    >
                      {technology}
                    </span>
                  ))}

                </div>

                {/* Buttons */}
                <div className="flex gap-3">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1
                               text-center
                               px-4 py-2
                               rounded-lg
                               border border-gray-600
                               text-gray-300
                               hover:border-cyan-400
                               hover:text-cyan-400
                               transition"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1
                               text-center
                               px-4 py-2
                               rounded-lg
                               bg-cyan-400
                               text-slate-950
                               font-semibold
                               hover:bg-cyan-300
                               transition"
                  >
                    Live Demo
                  </a>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;