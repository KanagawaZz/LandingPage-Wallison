import { Icon } from './Icon.js';

export function Myths({ myths, siteConfig }) {
  const topics = [
    'Prescrição & Cobrança de Créditos',
    'Garantias Funcionais & Acesso à Justiça',
    'Regime Temporário & Precedentes Jurídicos',
  ];

  return `
    <section id="mitos" class="section-block myths-section">
      <div class="container">
        <div class="section-header" data-reveal="fade-up">
          <div class="eyebrow-chip">
            ${Icon({ name: 'scale', size: 14 })}
            <span>Segurança Jurídica & Esclarecimentos</span>
          </div>
          <h2>Informações fundamentadas sobre os direitos do servidor</h2>
          <p class="section-subheading">
            Dúvidas frequentes e entendimentos consolidados sobre a atuação do servidor público perante a administração e o Poder Judiciário.
          </p>
        </div>

        <div class="myths-depth-grid">
          ${myths
            .map((item, idx) => {
              const topicTitle = topics[idx] || 'Segurança Funcional';
              const numberLabel = String(idx + 1).padStart(2, '0');

              return `
                <div class="myth-depth-card" data-tilt-3d data-tilt-max="4" data-reveal="fade-up" style="--myth-delay: ${idx * 0.1}s">
                  <div class="myth-card-header">
                    <div class="myth-topic-pill">
                      <span class="topic-num">${numberLabel}</span>
                      <span class="topic-name">${topicTitle}</span>
                    </div>
                    <span class="myth-category-label">${item.badge}</span>
                  </div>

                  <div class="myth-split-body">
                    <div class="myth-pane myth-pane-belief">
                      <div class="pane-meta">
                        <span class="pane-tag belief-tag">Dúvida Comum</span>
                      </div>
                      <blockquote class="belief-quote">
                        ${item.myth}
                      </blockquote>
                      <span class="belief-subnote">Pode levar à inércia e perda de prazos legais</span>
                    </div>

                    <div class="myth-architectural-divider" aria-hidden="true">
                      <div class="divider-line"></div>
                      <div class="divider-emblem">
                        ${Icon({ name: 'scale', size: 15 })}
                      </div>
                      <div class="divider-line"></div>
                    </div>

                    <div class="myth-pane myth-pane-reality">
                      <div class="pane-meta">
                        <span class="pane-tag reality-tag">Critério Jurídico</span>
                      </div>
                      <h4 class="reality-headline">${item.reality}</h4>
                      <p class="reality-text">${item.explanation}</p>
                    </div>
                  </div>
                </div>
              `;
            })
            .join('')}
        </div>

        <div class="myths-depth-callout" data-reveal="fade-up">
          <div class="callout-inner">
            <div class="callout-icon-box">
              ${Icon({ name: 'shield', size: 24 })}
            </div>
            <div class="callout-text">
              <strong>Análise individualizada e pautada no Código de Ética da OAB</strong>
              <p>Cada situação funcional possui particularidades normativas e documentais. O conteúdo aqui exposto tem finalidade estritamente informativa e não constitui promessa ou garantia de resultado.</p>
            </div>
            <div class="callout-action-link">
              <a href="#como-funciona" class="link-subtle">
                <span>Ver etapas do atendimento</span>
                ${Icon({ name: 'arrowRight', size: 14 })}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
