import { Icon } from './Icon.js';

const themisImage = new URL('../assets/themis-justice.jpg', import.meta.url).href;

export function InstitutionalPillars({ siteConfig }) {
  const pillars = [
    {
      icon: 'scale',
      title: 'A Balança: Rigor Técnico e Proporcionalidade',
      desc: 'Análise aprofundada de contracheques, portarias, fichas financeiras e normas aplicáveis para verificar com exatidão os direitos devidos.',
    },
    {
      icon: 'shield',
      title: 'A Espada: Atuação Firme, Técnica e Fundamentada',
      desc: 'Defesa consistente das prerrogativas funcionais perante comissões disciplinares e instâncias judiciais, fundada estritamente no ordenamento legal.',
    },
    {
      icon: 'fileCheck',
      title: 'A Legalidade Estrita e o Devido Processo Legal',
      desc: 'Atuação pautada pelos preceitos constitucionais, assegurando contraditório, ampla defesa e respeito às garantias do servidor público.',
    },
    {
      icon: 'clock',
      title: 'Discrição e Confidencialidade',
      desc: 'Resguardo rigoroso de documentos e informações funcionais, com estrita observância do sigilo profissional inerente à advocacia.',
    },
  ];

  return `
    <section id="institucional" class="section-block institutional-section">
      <div class="container">
        <div class="institutional-grid">
          <div class="institutional-copy" data-reveal="fade-right">
            <div class="eyebrow-chip">
              ${Icon({ name: 'scale', size: 14 })}
              <span>Pilares Institucionais</span>
            </div>

            <h2 class="institutional-title">
              Equilíbrio na análise jurídica. Firmeza e fundamentação técnica na defesa.
            </h2>

            <p class="institutional-lead">
              A representação clássica da Justiça simboliza o compromisso de nossa atuação perante a Administração Pública: discernimento para apurar a legalidade e solidez técnica para proteger os direitos do servidor.
            </p>

            <div class="institutional-pillars-list">
              ${pillars
                .map(
                  (item) => `
                    <div class="pillar-row">
                      <div class="pillar-icon-box">
                        ${Icon({ name: item.icon, size: 18 })}
                      </div>
                      <div class="pillar-texts">
                        <strong>${item.title}</strong>
                        <p>${item.desc}</p>
                      </div>
                    </div>
                  `
                )
                .join('')}
            </div>

            <div class="institutional-credo-box">
              <p class="credo-quote">
                “A defesa das prerrogativas do servidor público é condição essencial para a integridade, a legalidade e o equilíbrio da Administração.”
              </p>
              <span class="credo-signature">— ${siteConfig.name}</span>
            </div>
          </div>

          <div class="institutional-visual" data-reveal="fade-left">
            <div class="themis-frame-3d" data-tilt-3d data-tilt-max="5">
              <img 
                src="${themisImage}" 
                alt="Escultura em bronze da deusa Têmis, com a balança da justiça e a espada, simbolizando o equilíbrio do Direito Administrativo" 
                class="themis-image" 
                loading="lazy" 
              />
              <div class="themis-glow" aria-hidden="true"></div>
              <div class="themis-specular-border" aria-hidden="true"></div>
            </div>

            <div class="themis-badge-pill">
              <div class="themis-badge-icon">
                ${Icon({ name: 'scale', size: 16 })}
              </div>
              <div class="themis-badge-text">
                <strong>Justiça & Legalidade</strong>
                <small>Direito Administrativo para Servidores em MT</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
