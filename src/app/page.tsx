import AboutMe from "./about_me";
import Technologies from "./tecnologies";
import Experience from "./experience";
import Resume from "./remsume";
import Footer from "./footer";
import NavbarComp from "./navbar";
import Hero from "./hero";

export default function Home() {
  return (
    <div>
      <NavbarComp />
      <Hero />
      <AboutMe />
      <Technologies />
      <Experience />
      <Resume />
      <Footer />
    </div>
  );
}
