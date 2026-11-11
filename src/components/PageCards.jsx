import { Link } from "react-router";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const pages = [
  {
    title: "Projects & Assignments – Sheryians Coding School",
    description: "Explore my learning journey, assignments and projects built during my coding journey.",
    image: "/src/assets/full-logo.webp",
    path: "/sheryians",
    label: "Explore Learning",
  },
  {
    title: "My Projects",
    description: "Explore my personal projects, experiments and creative web development work.",
    image: "/src/assets/coding.png",
    path: "/mypractice",
    label: "View My Projects",
  },
  {
    title: "Company Projects",
    description: "Explore professional projects and development work completed for companies.",
    image: "/src/assets/data.png",
    path: "/company",
    label: "View Company Work",
  },
];

const PageCards = () => {
  const boxRef = useRef(null);

  useGSAP(() => {
    gsap.from(boxRef.current, {
      y: 100,
      opacity: 0,
      duration: 1.5,
      ease: "power4.out",

      scrollTrigger: {
        trigger: boxRef.current,
        start: "top 80%",
        once: true,
      },
    });
  }, { scope: boxRef });

  return (
    <section className="bg-[#100B08] px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">

        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
            Explore My Work
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Discover My <span className="text-orange-400">Journey</span>
          </h2>
        </div>

        <div ref={boxRef} className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pages.map((page, index) => (
            <div
              key={page.path}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#18110D] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-orange-400/40 hover:shadow-[0_15px_50px_rgba(249,115,22,0.08)]"
            >
              {/* Background Glow */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-orange-500/10 blur-3xl transition duration-500 group-hover:bg-orange-500/20" />

              {/* Card Number */}
              <div className="relative mb-8 flex items-center justify-between">
                <span className="text-sm font-medium tracking-widest text-orange-400">
                  0{index + 1} / 03
                </span>

                <span className="text-xs uppercase tracking-wider text-zinc-500">
                  Portfolio
                </span>
              </div>

              {/* Logo */}
              <div className="relative mb-7 flex h-20 w-[90%] items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 transition duration-500 group-hover:border-orange-400/30 group-hover:bg-orange-400/5">
                <img
                  src={page.image}
                  alt={`${page.title} logo`}
                  className="h-full w-full object-contain transition duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-xl font-bold text-white transition group-hover:text-orange-400">
                  {page.title}
                </h3>

                <p className="mt-3 min-h-[72px] text-sm leading-6 text-zinc-400">
                  {page.description}
                </p>

                {/* Button */}
                <Link
                  to={page.path}
                  className="mt-7 inline-flex w-full items-center justify-between rounded-xl border border-orange-400/30 bg-orange-500/10 px-5 py-3 text-sm font-semibold text-orange-300 transition duration-300 hover:border-orange-400 hover:bg-orange-500 hover:text-black"
                >
                  {page.label}

                  <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PageCards;
