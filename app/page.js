import Image from "next/image";
import {
  Hero,
  About,
  Updates,
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
      <Updates />
      <Footer />
    </>
  );
}
