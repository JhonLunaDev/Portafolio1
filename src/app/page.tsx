import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Services } from "@/components/services";
import { WhyHireMe } from "@/components/why-hire-me";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { BackToTop } from "@/components/back-to-top";

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Services />
      <WhyHireMe />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}
