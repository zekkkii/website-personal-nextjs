import AboutMe from "./about_me";
import Footer from "./footer";
import NavbarComp from "./navbar";
import Hero from "./hero";

export default function Home() {
  return (
    <div>
      <NavbarComp />
      <Hero />
      <AboutMe />
      <Footer />
    </div>
  );
}
