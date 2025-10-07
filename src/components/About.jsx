import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, TrendingUp, Users, Target } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Briefcase,
      title: "Experiência Sólida",
      description: "Anos de atuação em projetos de SSMA em diversos setores industriais"
    },
    {
      icon: TrendingUp,
      title: "Resultados Comprovados",
      description: "Histórico de sucesso na implementação de programas de segurança"
    },
    {
      icon: Users,
      title: "Formação de Profissionais",
      description: "Centenas de alunos capacitados e certificados"
    },
    {
      icon: Target,
      title: "Foco em Excelência",
      description: "Metodologia prática e orientada para resultados reais"
    }
  ];

  return (
    <section id="sobre" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Sobre Minha <span className="text-gradient">Carreira</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Dedicado a promover ambientes de trabalho mais seguros e sustentáveis através da educação e consultoria especializada
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="glass-effect p-8 rounded-2xl hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-green-300">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-effect p-10 rounded-3xl"
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-shrink-0">
              <img className="w-48 h-48 rounded-2xl object-cover shadow-2xl" alt="Engenheiro SSMA profissional" src="https://images.unsplash.com/photo-1576918783754-00613f24b68b" />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-4 text-gradient">Minha Missão</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Capacitar profissionais e organizações com conhecimento técnico de excelência em SSMA, 
                promovendo uma cultura de segurança, saúde e responsabilidade ambiental. Através de 
                cursos práticos e consultoria personalizada, busco transformar ambientes de trabalho 
                em espaços mais seguros, saudáveis e sustentáveis.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;