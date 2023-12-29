import Image from "next/image";
import {
  Footer,
  Hero,
  About,
  Contact,
  Achievements,
  Demo,
  Skills,
  Testimonials,
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
