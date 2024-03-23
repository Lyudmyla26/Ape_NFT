import { Container } from "./Container/Container";
import {Hero }from "./Heder/Hero";
import '../font/BiroScript/stylesheet.css';
import '../font/MessinaSans/stylesheet.css';
import { About } from "./About/About";
import { Map } from "./MIND-map/MINDmap";
import { Footer } from "Footer/Footer";
import { Question } from "./FAQ/FAQ";
import { Collection } from "./Collection/Collection";
import { Form } from "./Form/Form";

export const App = () => {
       const scrollToMap = () => {
         const mapElement = document.getElementById("map");
        mapElement.scrollIntoView(); 
    };

   const scrollToSection = (name) => {
         const mapElement = document.getElementById(name);
        mapElement.scrollIntoView(); 
    };
  return (
    <Container>
      <Hero scrollToMap={scrollToMap} scrollToSection={scrollToSection} />
      <About ab={"about"}/>
      <Map  mind={'map'} />
      <Question qw={"faq" }/>
      <Collection art={"arts"} />
      <Form mint={"mint"}/>
      <Footer />
    </Container>
  );
};
