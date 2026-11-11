import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useRef } from "react";
import susheel from "../assets/susheel.jpeg"

 gsap.registerPlugin(SplitText);

const Hero = () => {
  const email = "tiwarisusheel2022@gmail.com";

  const textRef = useRef(null);
  const ballRef = useRef(null);

  useGSAP(()=>{
    const split = SplitText.create(textRef.current, { type: "chars", aria: "hidden" });

    const tl = gsap.timeline({
      delay:0.5,
    });

    tl.from(split.chars, {
    opacity: 0,
    duration: 0.1,
    ease: "none",
    stagger: 0.1,
  })
  },{scope: textRef})


  useGSAP(() => {
  const tl = gsap.timeline({
    delay:2,
  });

   tl.from(ballRef.current, {
    y: -400,
    duration: 1.5,
    ease: "bounce.out",
  })
  .to(ballRef.current, {
    scaleY: 0.6,
    scaleX: 1.3,
    duration: 0.15,
    ease: "power2.out",
  })
  .to(ballRef.current, {
    scaleY: 1,
    scaleX: 1,
    duration: 0.3,
    ease: "elastic.out(1, 0.4)",
  });
}, { scope: ballRef });


  return (
    <section className="min-h-screen overflow-hidden bg-yellow-200 px-6 py-10 text-gray-900 md:px-12 lg:px-20">
      <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <p className="mb-4 inline-block rounded-full border border-gray-900/20 bg-yellow-200 px-4 py-2 text-sm font-semibold">
            👋 Hello, I'm a Frontend Developer
          </p>
          <h1 ref={textRef} className="text-3xl font-black space-x-1 leading-tight tracking-tight sm:text-2xl lg:text-3xl">
            <span className="text-gray-900">Build Digital </span>
            <span className="text-orange-600">Experiences.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-gray-700 sm:text-lg">
            Hi, I’m Susheel Tiwari, a Frontend Developer with 2+ years of experience in React.js and modern web technologies. I build modern, responsive applications using React.js, Next.js, Gatsby.js, Tailwind CSS, and JavaScript, with a focus on UI quality and manual testing. I’m currently expanding my backend skills in Node.js, Express.js, GraphQL, and MongoDB to grow as a Full Stack Developer.
          </p>
          <div className="mt-8 grid max-w-lg grid-cols-3 gap-4 border-y border-gray-900/20 py-6">
            <div>
              <h2 className="text-2xl font-extrabold sm:text-3xl">3+</h2>
              <p className="mt-1 text-xs text-gray-700 sm:text-sm">
                Years Experience
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold sm:text-3xl">10+</h2>
              <p className="mt-1 text-xs text-gray-700 sm:text-sm">
                Projects Worked
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold sm:text-3xl">8+</h2>
              <p className="mt-1 text-xs text-gray-700 sm:text-sm">
                Happy Clients
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-gray-900 px-7 py-3.5 font-semibold text-white transition hover:bg-orange-600"
            >
              Hire Me ↗
            </a>

            <a
              href="/public/06-08-2026 susheel resume.pdf"
              download
              className="rounded-full border-2 border-gray-900 px-7 py-3.5 font-semibold transition hover:bg-gray-900 hover:text-white"
            >
              Download CV ↓
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-7 flex items-center gap-5 text-sm font-semibold">
            <span className="text-gray-600">Find me on</span>

            <a
              href="https://www.linkedin.com/in/susheel-tiwari-3b4a2069/"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 transition hover:text-orange-700"
            >
              LinkedIn ↗
            </a>

            <a
              href="https://github.com/tiwarisusheel"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 transition hover:text-orange-700"
            >
              GitHub ↗
            </a>
          </div>
        </div>
        <div className="order-1 flex justify-center lg:order-2 lg:justify-center">
          <div className="relative">
            {/* Decorative circle */}
            <div className="absolute -right-5 -top-5 h-24 w-24 rounded-full border-4 border-orange-500 sm:h-32 sm:w-32" />

            <div className="relative mx-auto w-[200px] aspect-[522/1160]">
              <div
                className="absolute inset-0 bg-white"
                style={{
                  borderRadius: "48% 52% 43% 57% / 22% 25% 75% 78%",
                  transform: "rotate(-3deg)",
                }}
              />
              <div
                className="absolute inset-[4%] overflow-hidden bg-orange-300"
                style={{
                  borderRadius: "48% 52% 43% 57% / 22% 25% 75% 78%",
                }}
              >
                <img
                  src={susheel}
                  alt="My profile"
                  className="absolute left-1/2 top-1/2 w-[100%] h-[100%] -translate-x-1/2 -translate-y-1/2 object-contain"
                />
              </div>
            </div>
            <div className="absolute -bottom-5 -left-18 z-20 rounded-2xl bg-white px-5 py-4 shadow-xl sm:-left-29">
              <p className="text-sm font-bold">Creative Developer ✨</p>
              <p className="mt-1 text-xs text-gray-500">
                Turning ideas into reality
              </p>
            </div>
            <div ref={ballRef} className="absolute -bottom-8 right-4 z-0 h-16 w-16 rounded-full bg-orange-500 sm:h-20 sm:w-20" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
