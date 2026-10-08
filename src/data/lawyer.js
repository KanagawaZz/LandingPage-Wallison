const wallisonProfile = new URL('../assets/wallison-profile.jpg', import.meta.url).href;

export const lawyer = {
  name: 'Wallison Prado',
  firmName: 'Wallison Prado Advocacia',
  title: 'Advogado',
  oab: 'OAB/MT 31.726',
  oabLink: 'https://cna.oab.org.br/',
  role: 'Advogado Especialista em Defesa de Servidores Públicos',
  spheres: ['Estadual (LC 04/90)', 'Municipal', 'Federal'],
  state: 'MT',
  coverage: 'Cuiabá e todo o interior de Mato Grosso (100% online)',
  serviceMode: '100% online, por WhatsApp e videochamada, com assinatura eletrônica no celular',
  bio: 'Advogado dedicado com exclusividade à proteção dos direitos de servidores públicos em Mato Grosso. Atua de forma combativa e técnica contra ilegalidades administrativas, congelamento de progressões, processos disciplinares arbitrários e cortes indevidos de vencimentos. Com atendimento direto, seguro e sem intermediários, assegura ao servidor do interior e da capital acesso a uma defesa jurídica sólida, fundamentada e com transparência em cada etapa.',
  photo: wallisonProfile,
  values: [
    { 
      title: 'Domínio das Leis de MT e Estatutos Municipais', 
      desc: 'Análise aprofundada da Lei Complementar nº 04/1990 (Estatuto dos Servidores de MT) e legislações específicas de cada prefeitura e carreira.' 
    },
    { 
      title: 'Discrição e Resguardo da Carreira', 
      desc: 'Condução ética de cada caso, zelando pela tranquilidade da sua trajetória funcional e pelo respeito rigoroso às garantias do servidor.' 
    },
    { 
      title: 'Atenção Rigorosa aos Prazos de Prescrição', 
      desc: 'Agilidade na identificação de direitos para estancar a perda mensal de valores retroativos decorrentes da prescrição de 5 anos da Fazenda Pública.' 
    },
    { 
      title: 'Comunicação Clara e Direta no WhatsApp', 
      desc: 'Sem juridiquês ou enrolação: você conversa diretamente com o Dr. Wallison, recebe relatórios claros e sabe o andamento do seu caso.' 
    },
  ],
};
