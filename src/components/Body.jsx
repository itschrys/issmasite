import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Shield, Award, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { toast } from './ui/use-toast';

const Hero = () => {
  const handleCoursesClick = () => {
    toast({
      title: "🚧 Funcionalidade em desenvolvimento",
      description: "O link para os cursos será adicionado em breve!🚀",
    });
  };

  const handleConsultingClick = () => {
    const phonenumber = '5571987842165';
    const url = 'https://wa.me/' + phonenumber;
    window.open(url, '_blank'); // abre o WhatsApp sem mensagem
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Ícones superiores */}
          <div className="flex justify-center gap-4 mb-8">
            <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="p-4 glass-effect rounded-2xl">
              <Shield className="w-12 h-12 text-cyan-400" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.1, rotate: -5 }} className="p-4 glass-effect rounded-2xl">
              <GraduationCap className="w-12 h-12 text-blue-400" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="p-4 glass-effect rounded-2xl">
              <Award className="w-12 h-12 text-purple-400" />
            </motion.div>
          </div>

          {/* Texto principal */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">ISSMA</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            Instruções em Segurança, Saúde e Meio Ambiente
          </p>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
            Transforme sua carreira com treinamentos especializados alinhados às NR's, elaboração de documentos técnicos e programas de SSMA e consultoria online especializada.
          </p>

          {/* Botões */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col items-center gap-4"
          >
            <Button
              onClick={handleCoursesClick}
              size="lg"
              className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-600 hover:via-blue-700 hover:to-purple-700 text-white font-bold text-lg px-12 py-6 rounded-full shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
            >
              <GraduationCap className="mr-2 w-6 h-6" />
              Acessar Cursos
            </Button>

            <Button
              onClick={handleConsultingClick}
              size="lg"
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold text-lg px-12 py-6 rounded-full shadow-2xl hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-105"
            >
              <MessageCircle className="mr-2 w-6 h-6" />
              Fazer Consultoria
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
