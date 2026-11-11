import { Outlet } from "react-router"
import Navbar from "../components/Navbar"
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, useGSAP);

const MainLayout = () => {
  useGSAP(() => {
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5,
      effects: false,
      smoothTouch: 0.1,
    });

    return () => smoother.kill();
  });
  return (
    <div >
        <Navbar />
         <div id="smooth-wrapper">
         <div id="smooth-content" className="pt-20 bg-yellow-200">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default MainLayout