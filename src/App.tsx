import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import About from "./components/About/About";
// import Footer from "./components/Footer/Footer"

import './App.css';
import Projects from "./components/Projectss/Projects";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="app">
      <Header/>
      <Hero/>
      <About/>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default App
