"use client";
import Navbar from "@/components/Navbar/Navbar";
import AboutMe from "@/page/AboutMe";
import ContactForm from "@/page/contactForm";
import Footer from "@/page/Footer";
import Jumbotron from "@/page/Jumbotron/Jumbotron";
import Work from "@/page/Jumbotron/Work";
import Solution from "@/page/Solution";
import Responsive from "@/components/Carousel/page";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <Solution />
      <Work />
      <AboutMe />
      <Responsive />
      <ContactForm />
      <Footer />
    </div>
  );
}
