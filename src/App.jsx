import About from "./components/About/About";
import Team from "./components/About/Team";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import WhatWeDo from "./components/WhatWeDo/WhatWeDo";
import Footer from "./components/Footer";

 export default function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <WhatWeDo/>
    <About/>
<Team/>
<Testimonials/>
<Blog/>
<Contact/>
<Footer/>
    </>
  )
}