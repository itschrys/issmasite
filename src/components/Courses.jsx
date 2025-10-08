import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, Clock, Users } from 'lucide-react';
import { Button } from './ui/button';
import { toast } from './ui/use-toast';

const Courses = () => {
  const courses = [
    {
      title: "NR-35 - Trabalho em Altura",
      description: "Capacitação completa para trabalhos em altura com segurança",
      duration: "8 horas",
      students: "500+",
      image: "Treinamento de segurança em trabalho em altura com equipamentos"
    },
    {
      title: "NR-33 - Espaços Confinados",
      description: "Formação especializada em segurança para espaços confinados",
      duration: "16 horas",
      students: "350+",
      image: "Treinamento profissional em espaços confinados com EPIs"
    },
    {
      title: "NR-10 - Segurança em Eletricidade",
      description: "Curso completo de segurança em instalações elétricas",
      duration: "40 horas",
      students: "600+",
      image: "Eletricista profissional trabalhando com segurança em painel elétrico"
    },
    {
      title: "Gestão Ambiental",
      description: "Práticas sustentáveis e gestão de resíduos industriais",
      duration: "24 horas",
      students: "280+",
      image: "Profissional realizando gestão ambiental em indústria"
    },
    {
      title: "Primeiros Socorros",
      description: "Atendimento emergencial e suporte básico de vida",
      duration: "12 horas",
      students: "450+",
      image: "Treinamento de primeiros socorros em ambiente corporativo"
    },
    {
      title: "Prevenção de Incêndios",
      description: "Combate a incêndio e uso de equipamentos de segurança",
      duration: "8 horas",
      students: "520+",
      image: "Treinamento de combate a incêndio com extintores"
    }
  ];

  const handleCourseClick = () => {
    toast({
      title: "🚧 Esta funcionalidade ainda não está implementada",
      description: "Em breve você terá mais informações sobre os cursos🚀",
    });
  };

  return (
    <section id="cursos" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-900/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nossos <span className="text-gradient">Cursos</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Certificações reconhecidas e treinamentos práticos para sua evolução profissional
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-effect rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" 
                  alt={course.title}
                 src="https://images.unsplash.com/photo-1635251595512-dc52146d5ae8" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-green-300">{course.title}</h3>
                <p className="text-gray-300 mb-4">{course.description}</p>
                
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{course.students}</span>
                  </div>
                </div>

                <Button
                  onClick={handleCourseClick}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-emerald-600 hover:to-green-700 text-white font-semibold rounded-xl"
                >
                  <BookOpen className="mr-2 w-4 h-4" />
                  Saiba Mais
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="glass-effect p-8 rounded-3xl inline-block">
            <Award className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Certificação Reconhecida</h3>
            <p className="text-gray-300">Todos os cursos emitem certificado válido em todo território nacional</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Courses;