import { useEffect, useState } from "react";

function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 400) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  if (!showButton) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50
                 w-12 h-12
                 rounded-full
                 bg-cyan-400
                 text-slate-950
                 font-bold text-xl
                 shadow-lg
                 hover:bg-cyan-300
                 hover:-translate-y-1
                 transition-all duration-300"
      aria-label="Scroll to top"
    >
      ↑
    </button>
  );
}

export default ScrollToTop;