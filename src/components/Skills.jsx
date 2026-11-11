import {
  Code2,
  Server,
  Database,
  Globe,
  GitBranch,
  Palette,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  {
    title: "Frontend",
    icon: Code2,
    skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js", "REST API"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MongoDB", "DatoCMS"],
  },
  {
    title: "API & Data",
    icon: Globe,
    skills: ["GraphQL", "API Integration"],
  },
  {
    title: "Tools",
    icon: GitBranch,
    skills: ["Git", "GitHub", "Vercel"],
  },
  {
    title: "Design",
    icon: Palette,
    skills: ["Figma", "Responsive UI", "Pixel Perfect UI"],
  },
];

const Skills = () => {
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
    <section className="bg-[#100B08] px-6 py-20 lg:px-12">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-orange-500">
            Skills
          </p>

          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
            Tools I use to{" "}
            <span className="text-orange-500">build.</span>
          </h2>

          <p className="mt-5 text-zinc-400">
            Technologies and tools I use to create responsive and
            user-focused web experiences.
          </p>
        </div>

        {/* Skills */}
        <div ref={boxRef} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-2xl border border-white/10 bg-[#18110D] p-6 transition duration-300 hover:-translate-y-1 hover:border-orange-500/40"
              >
                {/* Icon */}
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500 transition group-hover:bg-orange-500 group-hover:text-white">
                  <Icon size={22} />
                </div>

                {/* Category */}
                <h3 className="mb-4 text-lg font-bold text-white">
                  {item.title}
                </h3>

                {/* Skill badges */}
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-zinc-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Skills;