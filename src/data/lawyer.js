const wallisonProfile = new URL('../assets/wallison-profile.jpg', import.meta.url).href;

export const lawyer = {
  name: 'Wallison Prado',
  firmName: 'Wallison Prado Advocacia',
  title: 'Advogado',
  oab: 'OAB/MT 31.726',
  oabLink: 'https://cna.oab.org.br/',
  role: 'Advogado com atuação em Direito Administrativo',
  spheres: ['Federal', 'Estadual', 'Municipal'],
  state: 'MT',
  coverage: 'Todo o estado de Mato Grosso (Atendimento 100% online)',
  serviceMode: '100% online, por WhatsApp e videochamada, com assinatura eletrônica',
  bio: 'Advogado com atuação em Direito Administrativo, dedicado à defesa de servidores públicos efetivos e contratados nas esferas municipal, estadual e federal em todo o Mato Grosso. Desenvolve uma atuação firme, técnica e fundamentada, com atendimento 100% online, comunicação clara e absoluto respeito às normas éticas da advocacia.',
  photo: wallisonProfile,
  values: [
    { title: 'Atuação Técnica e Fundamentada', desc: 'Análise aprofundada da legislação, estatutos funcionais e jurisprudência aplicável ao seu vínculo.' },
    { title: 'Atendimento Ágil em Horário Comercial', desc: 'Comunicação direta por WhatsApp e videochamada para orientação e andamento processual.' },
    { title: 'Discrição e Confidencialidade', desc: 'Resguardo das informações do servidor com rigoroso sigilo profissional.' },
    { title: 'Conduta Ética e Transparente', desc: 'Esclarecimento honesto sobre a viabilidade jurídica do caso, sem promessa de resultado.' },
  ],
};
