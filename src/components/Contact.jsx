import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Mail, Phone, Linkedin, Instagram, Youtube } from 'lucide-react';
import { Button } from './ui/button';
import { toast } from './ui/use-toast';

const Contact = () => {
  const handleWhatsAppClick = () => {
    const phonenumber = '5571987842165';
    const url = 'https://wa.me/' + phonenumber;
    window.open(url, '_blank');
     // toast({
     // title: "🚧 Esta funcionalidade ainda não está implementada", 
   // });
  };

  const handleSocialClick = (platform) => {
    const socialLinks = {
    //'LinkedIn': 'https://www.linkedin.com/in/seu-perfil',
    'Instagram': 'https://www.instagram.com/issma.sms?igsh=cjYwMTlncWUwNDN3',
    'Youtube': 'https://youtube.com/@issma-i4c?si=KZvTVuHfLDisQS-1'
  };
  
  if (socialLinks[platform]) {
    window.open(socialLinks[platform], '_blank');
  }
    //toast({
      //title: "🚧 Esta funcionalidade ainda não está implementada",
   //});
  };

  const socialLinks = [
    { icon: Linkedin, name: "LinkedIn", color: "from-blue-600 to-blue-700" },
    { icon: Instagram, name: "Instagram", color: "from-pink-600 to-purple-600" },
    { icon: Youtube, name: "Youtube", color: "from-red-500 to-red-600" },
    
  ];

  return (
    <section id="contato" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/10 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Entre em <span className="text-gradient">Contato</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tire suas dúvidas ou solicite uma consultoria personalizada
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-effect p-10 rounded-3xl"
          >
            <h3 className="text-3xl font-bold mb-6 text-cyan-300">Consultoria SSMA</h3>
            <p className="text-gray-300 mb-8 text-lg">
              Precisa de orientação especializada? Entre em contato via WhatsApp para agendar uma consultoria personalizada.
            </p>
            
            <Button
              onClick={handleWhatsAppClick}
              size="lg"
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold text-lg py-6 rounded-2xl shadow-2xl hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-105"
            >
              <MessageCircle className="mr-3 w-6 h-6" />
              Consultoria via WhatsApp
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-effect p-10 rounded-3xl"
          >
            <h3 className="text-3xl font-bold mb-6 text-purple-300">Informações de Contato</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-white font-semibold">contato@engenheirossma.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                <div className="p-3 bg-gradient-to-br from-green-500 to-green-600 rounded-lg">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Telefone</p>
                  <p className="text-white font-semibold">+55 (71) 98784-2165</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-6">Siga nas Redes Sociais</h3>
          <div className="flex justify-center gap-4 flex-wrap">
            {socialLinks.map((social, index) => (
              <motion.button
                key={index}
                onClick={() => handleSocialClick(social.name)}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className={`p-4 glass-effect rounded-2xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br ${social.color}`}
              >
                <social.icon className="w-8 h-8 text-white" />
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;