import { Icon } from './Icon.js';

export function HowItWorks({ steps, siteConfig }) {
  return `
    <section id="como-funciona" class="section-block steps-section">
      <div class="container">
        <div class="section-header" data-reveal="fade-up">
          <div class="eyebrow-chip">
            ${Icon({ name: 'clock', size: 14 })}
            <span>Atendimento 100% Online</span>
          </div>
          <h2>Como funciona o atendimento jurídico</h2>
          <p class="section-subheading">
            Procedimento estruturado por WhatsApp e videochamada, com assinatura eletrônica de documentos para servidores de todo o Mato Grosso.
          </p>
        </div>

        <div class="steps-container">
          <div class="steps-progress-line" aria-hidden="true"></div>
          
          <div class="steps-grid">
            ${steps
              .map(
                (step, index) => `
                  <article class="step-card" data-reveal="fade-up" style="--step-delay: ${index * 0.1}s">
                    <div class="step-card-header">
                      <div class="step-badge">${step.number}</div>
                      <span class="step-highlight-pill">${step.highlight}</span>
                    </div>

                    <div class="step-content">
                      <h3 class="step-title">${step.title}</h3>
                      <p class="step-subtitle">${step.subtitle}</p>
                      <p class="step-description">${step.description}</p>
                    </div>

                    <div class="step-footer-indicator">
                      <span class="step-mini-dot"></span>
                      <span>Etapa ${index + 1} de 3</span>
                    </div>
                  </article>
                `
              )
              .join('')}
          </div>
        </div>

        <div class="steps-action-bar" data-reveal="fade-up">
          <div class="action-info">
            <span class="badge-live-reply">${Icon({ name: 'clock', size: 14 })} ${siteConfig.responseTimeEstimate}</span>
            <strong>Atendimento digital seguro para servidores em todo o estado de MT.</strong>
          </div>
          <a href="${siteConfig.whatsappLink}" target="_blank" rel="noopener noreferrer" class="button button-primary">
            ${Icon({ name: 'chat', size: 18 })}
            <span>Falar com o Dr. Wallison</span>
          </a>
        </div>
      </div>
    </section>
  `;
}
