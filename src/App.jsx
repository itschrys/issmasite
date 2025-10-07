import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from './components/ui/toaster';
import Hero from './components/Body';
import About from './components/About';
import Courses from './components/Courses';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Helmet>
        <title>ISSMA⛑️</title>
        <meta name="description" content="Especialista em SSMA oferecendo cursos profissionais, certificações e consultoria em Segurança, Saúde e Meio Ambiente." />
      </Helmet>
      
      <div className="min-h-screen">
        <Hero />
        <About />
        <Courses />
        <Contact />
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;