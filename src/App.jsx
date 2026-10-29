import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from './components/ui/toaster';
import Navbar from './components/Navbar';
import Hero from './components/Body';
import About from './components/About';
import Courses from './components/Courses';
import CertificateGenerator from './components/CertificateGenerator';
import Gallery from './components/Gallery';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <>
      <Helmet>
        <title>ISSMA | Segurança, Saúde e Meio Ambiente</title>
        <meta name="description" content="Cursos de Segurança do Trabalho alinhados às NRs, Gerador de Certificados de treinamentos e consultoria em SSMA com Ismael Lins." />
      </Helmet>

      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <About />
        <Courses />
        <CertificateGenerator />
        <Gallery />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <Toaster />
    </>
  );
}

export default App;
