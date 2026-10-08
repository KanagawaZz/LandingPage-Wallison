import { Icon } from './Icon.js';

export function FinalCTA({ siteConfig, lawyer }) {
  return `
    <section id="contato" class="section-block contact-section">
      <div class="container">
        <div class="contact-card-box" data-reveal="fade-up">
          <div class="contact-header-content">
            <div class="eyebrow-chip light">
              ${Icon({ name: 'chat', size: 14 })}
              <span>Atendimento 100% Online • Mato Grosso</span>
            </div>
            <h2 class="contact-title">
              Solicite a análise fundamentada do seu caso funcional
            </h2>
            <p class="contact-subtitle">
              Entre em contato pelo WhatsApp ou e-mail institucional. O atendimento é prestado diretamente pelo Dr. Wallison com retorno ágil em horário comercial.
            </p>

            <div class="contact-primary-actions">
              <a class="button button-gold contact-main-btn" href="${siteConfig.whatsappLink}" target="_blank" rel="noopener noreferrer">
                ${Icon({ name: 'chat', size: 20 })}
                <span>Falar com o Dr. Wallison</span>
              </a>
              <a class="button button-glass contact-oab-btn" href="${siteConfig.oabLink}" target="_blank" rel="noopener noreferrer">
                ${Icon({ name: 'scale', size: 16 })}
                <span>Consultar OAB/MT 31.726</span>
              </a>
            </div>
          </div>

          <div class="contact-details-grid">
            <div class="contact-info-card">
              <div class="info-card-icon">
                ${Icon({ name: 'phone', size: 18 })}
              </div>
              <div class="info-card-text">
                <span class="info-label">WhatsApp Institucional</span>
                <strong>${siteConfig.whatsappDisplay}</strong>
                <small>Mensagens e videochamadas</small>
              </div>
            </div>

            <div class="contact-info-card">
              <div class="info-card-icon">
                ${Icon({ name: 'mail', size: 18 })}
              </div>
              <div class="info-card-text">
                <span class="info-label">E-mail Profissional</span>
                <strong>${siteConfig.email}</strong>
                <small>Envio de documentos funcionais</small>
              </div>
            </div>

            <div class="contact-info-card">
              <div class="info-card-icon">
                ${Icon({ name: 'clock', size: 18 })}
              </div>
              <div class="info-card-text">
                <span class="info-label">Horário de Atendimento</span>
                <strong>${siteConfig.openingHours}</strong>
                <small>Retorno ágil em horário comercial</small>
              </div>
            </div>

            <div class="contact-info-card">
              <div class="info-card-icon">
                ${Icon({ name: 'mapPin', size: 18 })}
              </div>
              <div class="info-card-text">
                <span class="info-label">Abrangência Territorial</span>
                <strong>Todo o Mato Grosso</strong>
                <small>100% online com assinatura eletrônica</small>
              </div>
            </div>
          </div>

          <div class="contact-social-bar">
            <div class="social-bar-text">
              <span class="security-dot"></span>
              <span>Comunicação segura e sigilo profissional resguardado pelo Estatuto da OAB.</span>
            </div>
            <a href="${siteConfig.instagram}" target="_blank" rel="noopener noreferrer" class="instagram-button-pill" title="Acompanhar no Instagram">
              ${Icon({ name: 'instagram', size: 16 })}
              <span>Acompanhe ${siteConfig.instagramHandle}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
}
