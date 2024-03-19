import { Container } from "./Container/Container";
import {Hero }from "./Heder/Hero";
import '../font/BiroScript/stylesheet.css';
import '../font/MessinaSans/stylesheet.css';
import { About } from "./About/About";
import { Map } from "./MIND-map/MINDmap";
import { Footer } from "Footer/Footer";
export const App = () => {
  return (
    <Container>
      <Hero/>
      <About/>
      <Map />
      <Footer/>
    </Container>
  );
};
