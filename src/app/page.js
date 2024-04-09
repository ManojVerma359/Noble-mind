import About from "@/components/About";
import BackToTop from "@/components/BackToTop";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MyAccordion from "@/components/MyAccordion";
import NewsLetter from "@/components/NewsLetter";
import Preloder from "@/components/Preloder";
import WhyChoose from "@/components/WhyChoose";

export default function Home() {
  return (
    <>
    <Preloder/>
    <BackToTop/>
      <Header />
      <About/>
      <WhyChoose/>
      <Contact/>
      <MyAccordion/>
      <NewsLetter/>
      <Footer/>
    </>
  );
}
