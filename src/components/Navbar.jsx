import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Link, NavLink } from "react-router";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";


const Navbar = () => {
  const navbarRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", to: "/" },
    { name: "Sheryians Coding School Projects", to: "/sheryians" },
    { name: "Company Projects", to: "/company" },
    { name: "MyPractice Projects", to: "/mypractice" },
    { name: "Contact", to: "/contact" },
  ];

  useGSAP(() => {
  gsap.from(navbarRef.current, {
    y: -200,
    opacity: 0,
    duration: 2.5,
    ease: "power4.out",
  });
}, { scope: navbarRef });

  return (
    <nav ref={navbarRef} className="fixed top-0 left-0 z-50 w-full px-5 sm:px-8">
      <div className="mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-[#171717]/90 px-5 py-4 shadow-lg backdrop-blur-xl">

        {/* Logo */}
        <Link to={"/"} className="group flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-500 text-lg font-black text-white transition-transform group-hover:rotate-12">
            S
          </span>
          <span className="text-xl font-bold tracking-tight text-white">
            susheel<span className="text-orange-500">.</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              className="text-sm font-medium text-gray-400 transition-colors duration-300 hover:text-orange-400"
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link
          to={"/contact"}
          className="hidden items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition-all hover:bg-orange-500 hover:text-white md:flex"
        >
          Let's Talk <ArrowUpRight size={16} />
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`mx-auto mt-2 max-w-7xl overflow-hidden rounded-2xl border border-white/10 bg-[#171717] transition-all duration-300 md:hidden ${
          menuOpen
            ? "max-h-96 translate-y-0 opacity-100"
            : "pointer-events-none max-h-0 -translate-y-2 opacity-0"
        }`}
      >
        <div className="flex flex-col p-5">
          {links.map((link, index) => (
            <NavLink
              key={link.name}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className="border-b border-white/10 py-3 text-sm font-medium text-gray-300 transition-colors hover:text-orange-400"
            >
              <span className="mr-3 text-xs text-orange-500">
                0{index + 1}
              </span>
              {link.name}
            </NavLink>
          ))}

          <Link
            to={"/contact"}
            onClick={() => setMenuOpen(false)}
            className="mt-5 flex items-center justify-center gap-2 rounded-full bg-orange-500 py-3 font-semibold text-white"
          >
            Let's Talk <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;