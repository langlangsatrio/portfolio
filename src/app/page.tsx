import Navbar from "@/components/Navbar/Navbar";
import AboutMe from "@/page/AboutMe";
import ContactForm from "@/page/contactForm";
import Footer from "@/page/Footer";
import Jumbotron from "@/page/Jumbotron/Jumbotron";
import Work from "@/page/Jumbotron/Work";
import Solution from "@/page/Solution";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <Solution />
      <Work />
      <AboutMe />
      <ContactForm />
      <Footer />
    </div>
  );
}
