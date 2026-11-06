import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from './components/Navbar';
import Hero from './components/Body';
import About from './components/About';
import Kits from './components/Kits';
import CertificateGenerator from './components/CertificateGenerator';
import Gallery from './components/Gallery';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import CookieBanner from './components/CookieBanner';

function App() {
  return (
    <>
      <Helmet>
        <title>ISSMA | Segurança, Saúde e Meio Ambiente</title>
        <meta name="description" content="Kits, materiais técnicos e ferramentas práticas em Segurança, Saúde e Meio Ambiente para profissionais e empresas. ISSMA é de Salvador — Bahia." />
      </Helmet>

      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <About />
        <Kits />
        <CertificateGenerator />
        <Gallery />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <CookieBanner />
    </>
  );
}

export default App;
