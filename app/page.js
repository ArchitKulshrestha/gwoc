import Image from "next/image";
import {
  Hero,
  About,
  Contact,
  Achievements,
  Demo,
  Skills,
  Testimonials,
  Footer,
} from "./components/index";
export default function Home() {
  return (
    <>
      <Hero />

      <About />

      <Skills />
      <Achievements />
      <Testimonials />
      <Demo />
      <Contact />
      <Footer />
    </>
  );
}
