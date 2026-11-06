// Configuração central do site — edite aqui produtos, preços, links e contatos.
import capaTudoNr01 from '../images/produtos/tudo_nr01.jpg';
import capaGestaoSst from '../images/produtos/gestao_sst.jpg';
import capaKitAprova from '../images/produtos/kit_aprova.jpg';
import capaKitAvcb from '../images/produtos/kit_avcb.jpg';

export const WHATSAPP_NUMBER = '5571987842165';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const whatsappLink = (message) => `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
export const EMAIL = 'issma.sms@gmail.com';
export const PHONE_LABEL = '+55 (71) 98784-2165';

export const SOCIAL = {
  linkedin: 'https://www.linkedin.com/in/ismael-lins-34408b188',
  instagram: 'https://www.instagram.com/issma.sms?igsh=cjYwMTlncWUwNDN3',
  youtube: 'https://youtube.com/@issma-i4c?si=KZvTVuHfLDisQS-1',
};

// 👉 Produtos à venda. Sem "url", o botão vira "Consultar disponibilidade" no WhatsApp.
// O percentual de desconto é calculado a partir de "de" e "por". Sem "por", o preço não aparece.
// Atenção: não use links go.hotmart.com aqui. Bloqueadores de anúncios escondem esses botões.
export const PRODUCTS = [
  {
    id: 'tudo-nr01',
    nome: 'Tudo para NR-01',
    resumo: 'Materiais digitais para levar mais organização, prevenção e eficiência à rotina de SSMA.',
    itens: [
      'Treinamentos e apresentações de Segurança do Trabalho',
      'Materiais sobre APR, PGR e NR-01',
      'Gestão de SST, PDCA e análise de acidentes',
      'Planilhas, checklists e ferramentas práticas',
    ],
    capa: capaTudoNr01,
    url: 'https://hotmart.com/pt-br/marketplace/produtos/tudo-para-a-nr-01/K107682435S',
    de: 100,
    por: 29.9,
    garantiaDias: 7,
  },
  {
    id: 'gestao-sst',
    nome: 'Material Téc. Segurança inicial',
    resumo: 'ISSMA Gestão SST Pro 2026: kit para estudantes, recém-formados e profissionais de SST.',
    itens: [
      'Dashboard com indicadores e gráficos automáticos',
      'Planilhas para inspeções, treinamentos, EPI e planos de ação',
      'Controle de prazos e vencimentos',
      'Modelos editáveis, e-book técnico e manual de utilização',
    ],
    capa: capaGestaoSst,
    url: 'https://hotmart.com/pt-br/marketplace/produtos/material-para-iniciantes_tecnico-em-seguranca-do-trabalho/B107775477J',
    de: 100,
    por: 29.9,
    garantiaDias: 7,
  },
  {
    id: 'kit-avcb',
    nome: 'Kit AVCB - Avaliação Bombeiro',
    resumo: 'Kit digital para organizar as inspeções do AVCB e acompanhar os prazos.',
    itens: [
      'Checklist AVCB: edificação, sistemas de segurança e ações corretivas',
      'Planilha de acompanhamento com situação, prazo e responsável',
      'Modelo de relatório AVCB com registro fotográfico e plano de ação',
      'Apresentação de treinamento: conscientização e boas práticas',
    ],
    capa: capaKitAvcb,
    url: 'https://issma-sms.hotmart.host/kit-avcb-avaliacao-corpo-de-bombeiros-ca8f4f17-45f7-4a8e-b565-1d4110b4cf20',
    de: 197,
    por: 59.9,
    garantiaDias: 7,
  },
  {
    id: 'kit-aprova',
    nome: 'Kit Aprova ISSMA (Concursos)',
    resumo: 'Preparação organizada para concursos de Segurança do Trabalho.',
    itens: [
      '300 questões de Segurança do Trabalho',
      '6 simulados com gabaritos e comentários',
      'Conteúdos de Petróleo e Gás, Portos e Estatais',
      'Plano de estudos de 30 dias',
    ],
    aviso: 'Material preparatório independente, com questões autorais. Não possui vínculo com Petrobras, Transpetro ou bancas organizadoras. A aprovação depende do desempenho do candidato.',
    capa: capaKitAprova,
    url: 'https://hotmart.com/pt-br/marketplace/produtos/preparacao-para-concursos-de-seguranca-do-trabalho/N107641379E',
    de: 99,
    por: 29.9,
    garantiaDias: 7,
  },
];

export const ISSMA_INDICA_URL = 'https://meli.la/2W1beuE';

// Coloque as fotos em src/images/galeria/ — a seção Galeria aparece sozinha quando houver fotos.
export const GALLERY_PHOTOS = Object.values(
  import.meta.glob('../images/galeria/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', {
    eager: true,
    import: 'default',
  })
);

export const NAV_LINKS = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#materiais', label: 'Kits e Materiais' },
  { href: '#gerador', label: 'Gerador de Certificados' },
  ...(GALLERY_PHOTOS.length ? [{ href: '#galeria', label: 'Galeria' }] : []),
  { href: '#contato', label: 'Contato' },
];
