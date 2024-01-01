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
  Navbar,
} from "./components/index";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Achievements />
      <Demo />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
