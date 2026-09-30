// import { useState } from "react";

// function Contact() {

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: ""
//   });

//   const [submitted, setSubmitted] = useState(false);

//   function handleChange(e) {

//     const { name, value } = e.target;

//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   }

//   function handleSubmit(e) {

//     e.preventDefault();

//     console.log(formData);

//     setSubmitted(true);

//     setFormData({
//       name: "",
//       email: "",
//       subject: "",
//       message: ""
//     });
//   }

//   return (
//     <section
//       id="Contact"
//       className="min-h-screen bg-slate-900 text-white
//       px-6 py-24"
//     >

//       <div className="max-w-6xl mx-auto">

//         {/* Heading */}
//         <div className="text-center mb-16">

//           <p className="text-cyan-400 font-semibold mb-3">
//             GET IN TOUCH
//           </p>

//           <h2 className="text-4xl md:text-5xl font-bold">
//             Contact <span className="text-cyan-400">Me</span>
//           </h2>

//           <p className="text-gray-400 max-w-2xl mx-auto mt-5">
//             Have a project or opportunity in mind?
//             Feel free to get in touch with me.
//           </p>

//         </div>

//         {/* Main Content */}
//         <div className="grid md:grid-cols-2 gap-12">

//           {/* Contact Information */}
//           <div>

//             <h3 className="text-3xl font-semibold mb-6">
//               Let's work together
//             </h3>

//             <p className="text-gray-400 leading-8 mb-8">
//               I'm interested in front-end development opportunities
//               and building modern, responsive web applications.
//               Feel free to send me a message.
//             </p>

//             {/* Email */}
//             <div className="flex items-center gap-4 mb-6">

//               <div className="w-12 h-12 rounded-full
//                 bg-cyan-400/10 flex items-center
//                 justify-center text-cyan-400 text-xl">
//                 ✉
//               </div>

//               <div>
//                 <p className="text-gray-400 text-sm">
//                   Email
//                 </p>

//                 <p className="text-white">
//                   your.email@example.com
//                 </p>
//               </div>

//             </div>

//             {/* Location */}
//             <div className="flex items-center gap-4 mb-6">

//               <div className="w-12 h-12 rounded-full
//                 bg-cyan-400/10 flex items-center
//                 justify-center text-cyan-400 text-xl">
//                 📍
//               </div>

//               <div>
//                 <p className="text-gray-400 text-sm">
//                   Location
//                 </p>

//                 <p className="text-white">
//                   Canada
//                 </p>
//               </div>

//             </div>

//             {/* GitHub */}
//             <div className="flex items-center gap-4">

//               <div className="w-12 h-12 rounded-full
//                 bg-cyan-400/10 flex items-center
//                 justify-center text-cyan-400 text-xl">
//                 💻
//               </div>

//               <div>
//                 <p className="text-gray-400 text-sm">
//                   GitHub
//                 </p>

//                 <p className="text-white">
//                   github.com/yourusername
//                 </p>
//               </div>

//             </div>

//           </div>

//           {/* Contact Form */}
//           <div>

//             <form
//               onSubmit={handleSubmit}
//               className="bg-slate-950 border border-white/10
//               rounded-2xl p-8"
//             >

//               {/* Name */}
//               <div className="mb-5">

//                 <label className="block text-gray-300 mb-2">
//                   Your Name
//                 </label>

//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="Enter your name"
//                   required
//                   className="w-full bg-slate-900
//                   border border-white/10
//                   rounded-lg px-4 py-3
//                   text-white outline-none
//                   focus:border-cyan-400
//                   transition"
//                 />

//               </div>

//               {/* Email */}
//               <div className="mb-5">

//                 <label className="block text-gray-300 mb-2">
//                   Email Address
//                 </label>

//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="Enter your email"
//                   required
//                   className="w-full bg-slate-900
//                   border border-white/10
//                   rounded-lg px-4 py-3
//                   text-white outline-none
//                   focus:border-cyan-400
//                   transition"
//                 />

//               </div>

//               {/* Subject */}
//               <div className="mb-5">

//                 <label className="block text-gray-300 mb-2">
//                   Subject
//                 </label>

//                 <input
//                   type="text"
//                   name="subject"
//                   value={formData.subject}
//                   onChange={handleChange}
//                   placeholder="Enter subject"
//                   required
//                   className="w-full bg-slate-900
//                   border border-white/10
//                   rounded-lg px-4 py-3
//                   text-white outline-none
//                   focus:border-cyan-400
//                   transition"
//                 />

//               </div>

//               {/* Message */}
//               <div className="mb-6">

//                 <label className="block text-gray-300 mb-2">
//                   Message
//                 </label>

//                 <textarea
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   placeholder="Write your message..."
//                   rows="5"
//                   required
//                   className="w-full bg-slate-900
//                   border border-white/10
//                   rounded-lg px-4 py-3
//                   text-white outline-none
//                   focus:border-cyan-400
//                   transition resize-none"
//                 ></textarea>

//               </div>

//               {/* Submit */}
//               <button
//                 type="submit"
//                 className="w-full py-3 rounded-lg
//                 bg-cyan-400 text-slate-950
//                 font-semibold
//                 hover:bg-cyan-300
//                 transition"
//               >
//                 Send Message
//               </button>

//               {/* Success Message */}
//               {submitted && (
//                 <p className="text-green-400 text-center mt-4">
//                   Thank you! Your message has been submitted.
//                 </p>
//               )}

//             </form>

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// }

//export default Contact;


//////////////////

import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  }

  function validateForm() {
    const newErrors = {};

    if (formData.name.trim() === "") {
      newErrors.name = "Please enter your name.";
    }

    if (formData.email.trim() === "") {
      newErrors.email = "Please enter your email.";
    } else if (!formData.email.includes("@")) {
      newErrors.email = "Please enter a valid email.";
    }

    if (formData.subject.trim() === "") {
      newErrors.subject = "Please enter a subject.";
    }

    if (formData.message.trim() === "") {
      newErrors.message = "Please enter your message.";
    }

    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log(formData);

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }

  return (
    <section
      id="Contact"
      className="relative bg-slate-900 text-white px-6 py-24 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-cyan-400 font-semibold mb-3">
            GET IN TOUCH
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Contact <span className="text-cyan-400">Me</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5 leading-7">
            Have a project, opportunity or question?
            Feel free to send me a message.
          </p>

        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left Side */}
          <div>

            <h3 className="text-3xl font-bold mb-6">
              Let's work together
            </h3>

            <p className="text-gray-400 leading-8 mb-10">
              I'm interested in front-end development opportunities
              and building modern, responsive web applications.
              Feel free to reach out.
            </p>

            {/* Email */}
            <div className="flex items-center gap-5 mb-6">

              <div
                className="w-12 h-12
                           flex items-center justify-center
                           rounded-xl
                           bg-cyan-400/10
                           text-cyan-400
                           text-xl"
              >
                @
              </div>

              <div>
                <p className="text-gray-500 text-sm">
                  Email
                </p>

                <a
                  href="mailto:your-email@gmail.com"
                  className="text-gray-300 hover:text-cyan-400 transition"
                >
                  rajithareddykottala@gmail.com
                </a>
              </div>

            </div>

            {/* Location */}
            <div className="flex items-center gap-5 mb-6">

              <div
                className="w-12 h-12
                           flex items-center justify-center
                           rounded-xl
                           bg-cyan-400/10
                           text-cyan-400
                           text-xl"
              >
                📍
              </div>

              <div>
                <p className="text-gray-500 text-sm">
                  Location
                </p>

                <p className="text-gray-300">
                  Canada
                </p>
              </div>

            </div>

            {/* GitHub */}
            <div className="flex items-center gap-5">

              <div
                className="w-12 h-12
                           flex items-center justify-center
                           rounded-xl
                           bg-cyan-400/10
                           text-cyan-400
                           font-bold"
              >
                Git
              </div>

              <div>
                <p className="text-gray-500 text-sm">
                  GitHub
                </p>

                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-cyan-400 transition"
                >
                  GitHub Profile
                </a>
              </div>

            </div>

          </div>

          {/* Form */}
          <div>

            <form
              onSubmit={handleSubmit}
              className="bg-slate-950
                         border border-white/10
                         rounded-2xl
                         p-8
                         shadow-xl"
            >

              {/* Name */}
              <div className="mb-5">

                <label className="block text-gray-300 mb-2">
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full
                             bg-slate-900
                             border border-white/10
                             rounded-lg
                             px-4 py-3
                             text-white
                             outline-none
                             focus:border-cyan-400
                             transition"
                />

                {errors.name && (
                  <p className="text-red-400 text-sm mt-2">
                    {errors.name}
                  </p>
                )}

              </div>

              {/* Email */}
              <div className="mb-5">

                <label className="block text-gray-300 mb-2">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full
                             bg-slate-900
                             border border-white/10
                             rounded-lg
                             px-4 py-3
                             text-white
                             outline-none
                             focus:border-cyan-400
                             transition"
                />

                {errors.email && (
                  <p className="text-red-400 text-sm mt-2">
                    {errors.email}
                  </p>
                )}

              </div>

              {/* Subject */}
              <div className="mb-5">

                <label className="block text-gray-300 mb-2">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter subject"
                  className="w-full
                             bg-slate-900
                             border border-white/10
                             rounded-lg
                             px-4 py-3
                             text-white
                             outline-none
                             focus:border-cyan-400
                             transition"
                />

                {errors.subject && (
                  <p className="text-red-400 text-sm mt-2">
                    {errors.subject}
                  </p>
                )}

              </div>

              {/* Message */}
              <div className="mb-6">

                <label className="block text-gray-300 mb-2">
                  Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  rows="5"
                  className="w-full
                             bg-slate-900
                             border border-white/10
                             rounded-lg
                             px-4 py-3
                             text-white
                             outline-none
                             resize-none
                             focus:border-cyan-400
                             transition"
                ></textarea>

                {errors.message && (
                  <p className="text-red-400 text-sm mt-2">
                    {errors.message}
                  </p>
                )}

              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full
                           py-3
                           rounded-lg
                           bg-cyan-400
                           text-slate-950
                           font-bold
                           hover:bg-cyan-300
                           hover:-translate-y-1
                           transition-all duration-300"
              >
                Send Message
              </button>

              {/* Success Message */}
              {submitted && (
                <p className="text-green-400 text-center mt-5">
                  Thank you! Your message has been submitted.
                </p>
              )}

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;