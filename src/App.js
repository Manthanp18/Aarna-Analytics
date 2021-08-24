import React, { Component } from "react";
import Header from "./components/header/header";
import About from "./components/about/about";
import OurTechno from "./components/ourTechno/ourTechno";
import Portfolio from "./components/vision/vision";
import Contact from "./components/contact/contact";

import Footer from "./components/footer/footer";

import Logo from "./components/logo/logo";
class App extends Component {
  render() {
    return (
      <div>
        <Logo />
        <Header />
        <About />
        <OurTechno />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
