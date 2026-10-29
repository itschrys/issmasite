import { toast } from '../components/ui/use-toast';

// Abre um link externo em nova aba; se ainda não houver link configurado, avisa o visitante.
export const openExternal = (url, pendingMessage = 'O link será liberado em breve!') => {
  if (!url) {
    toast({ title: 'Em breve 🚀', description: pendingMessage });
    return;
  }
  window.open(url, '_blank', 'noopener,noreferrer');
};
