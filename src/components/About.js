import { Icon } from './Icon.js';

export function About({ lawyer, siteConfig }) {
  return `
    <section id="sobre" class="section-block about-section">
      <div class="container">
        <div class="about-grid">
          <div class="about-visual-column" data-reveal="fade-right">
            <div class="about-photo-wrapper">
              <img 
                src="${lawyer.photo}" 
                alt="Retrato profissional de ${lawyer.name}, Advogado com atuação em Direito Administrativo" 
                class="about-photo" 
                loading="lazy" 
              />
              <div class="about-photo-frame-border" aria-hidden="true"></div>
            </div>

            <div class="about-oab-card">
              <div class="oab-card-icon">
                ${Icon({ name: 'scale', size: 24 })}
              </div>
              <div class="about-oab-details">
                <span class="oab-reg-title">Inscrição Profissional</span>
                <strong class="oab-reg-number">${lawyer.oab}</strong>
                <a href="${siteConfig.oabLink}" target="_blank" rel="noopener noreferrer" class="oab-verify-link">
                  <span>Conferir no Cadastro Nacional da OAB</span>
                  ${Icon({ name: 'externalLink', size: 12 })}
                </a>
              </div>
            </div>
          </div>

          <div class="about-copy-column" data-reveal="fade-left">
            <div class="eyebrow-chip">
              ${Icon({ name: 'shield', size: 14 })}
              <span>Perfil Profissional</span>
            </div>

            <h2 class="about-title">
              Advocacia comprometida com as garantias legais de quem serve à sociedade.
            </h2>

            <div class="about-paragraphs">
              <p>
                O exercício da função pública demanda dedicação diária, mas frequentemente o servidor se depara com decisões administrativas unilaterais, atrasos na concessão de direitos remuneratórios ou processos que exigem defesa especializada.
              </p>
              <p>
                A <strong>${siteConfig.name}</strong> atua com foco exclusivo na proteção desses direitos: oferecendo uma atuação firme, técnica e fundamentada, pautada pela análise criteriosa das normas estatutárias e jurisprudenciais aplicáveis a cada carreira.
              </p>
            </div>

            <div class="about-values-grid">
              ${lawyer.values
                .map(
                  (val) => `
                    <div class="value-item">
                      <div class="value-bullet">
                        ${Icon({ name: 'check', size: 13 })}
                      </div>
                      <div class="value-texts">
                        <strong>${val.title}</strong>
                        <p>${val.desc}</p>
                      </div>
                    </div>
                  `
                )
                .join('')}
            </div>

            <div class="about-actions-row">
              <a href="#contato" class="button button-outline">
                <span>Ver canais de contato</span>
              </a>
              <a href="${siteConfig.instagram}" target="_blank" rel="noopener noreferrer" class="link-subtle" title="Acompanhar no Instagram">
                ${Icon({ name: 'instagram', size: 16 })}
                <span>Acompanhe ${siteConfig.instagramHandle}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
