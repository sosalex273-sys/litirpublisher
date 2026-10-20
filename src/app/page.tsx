import { Hero } from "@/components/Hero";
import { Partner } from "@/components/Partner";
import { AboutUs } from "@/components/AboutUs";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Services } from "@/components/Services";
import { Products } from "@/components/Products";
import { PublicationFlow } from "@/components/PublicationFlow";
import { Statistics } from "@/components/Statistics";
import { Advantages } from "@/components/Advantages";
import { Legality } from "@/components/Legality";
import { CallForPaper } from "@/components/CallForPaper";
import { Institutions } from "@/components/Institutions";
import { Portfolio } from "@/components/Portfolio";
import { Testimonial } from "@/components/Testimonial";
import { FAQ } from "@/components/FAQ";

import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { MediaPartner } from "@/components/MediaPartner";
import { Header } from "@/components/Header";

import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Header />
      <Hero />
      <Services />
      <Products />
      <Institutions />
      <Partner />
      <Statistics />
      <AboutUs />
      <WhyChooseUs />
      <PublicationFlow />
      <Advantages />
      <Legality />
      <Portfolio />
      <Testimonial />
      <FAQ />

      <Contact />
      <MediaPartner />
      <CTA />
      <Footer />
    </main>
  );
}
