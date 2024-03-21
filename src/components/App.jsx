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
  return (
    <Container>
      <Hero/>
      <About/>
      <Map />
      <Question />
      <Collection />
      <Form/>
      <Footer/>
    </Container>
  );
};
