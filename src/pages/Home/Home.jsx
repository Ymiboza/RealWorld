import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import ZoomParallax from "./parallax";

const Home = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <ZoomParallax />
    </>
  );
};

export default Home;
