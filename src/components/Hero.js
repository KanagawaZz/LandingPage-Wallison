import { Icon } from './Icon.js';

export function Hero({ lawyer, siteConfig }) {
  return `
    <section id="inicio" class="hero-section">
      <div class="hero-ambient-glow" aria-hidden="true"></div>
      
      <div class="container hero-grid">
        <div class="hero-copy" data-reveal="fade-up">
          <div class="hero-badge-wrap">
            <div class="hero-badge">
              <span class="badge-icon">${Icon({ name: 'scale', size: 14 })}</span>
              <span>Direito Administrativo • Servidores Públicos</span>
            </div>
          </div>

          <h1 class="hero-title">
            Defesa técnica e fundamentada dos direitos do servidor público em Mato Grosso.
          </h1>

          <p class="hero-lead">
            Atuação jurídica para servidores efetivos e contratados nas esferas <strong>Municipal, Estadual e Federal</strong>. Atendimento 100% online, com rigor técnico, clareza e respeito às normas éticas da advocacia.
          </p>

          <div class="hero-actions">
            <a class="button button-primary hero-btn-main" href="${siteConfig.whatsappLink}" target="_blank" rel="noopener noreferrer">
              ${Icon({ name: 'chat', size: 18 })}
              <span>Solicitar análise do meu caso</span>
            </a>

            <a class="button button-outline" href="${siteConfig.oabLink}" target="_blank" rel="noopener noreferrer">
              ${Icon({ name: 'scale', size: 16 })}
              <span>Consultar OAB/MT 31.726</span>
            </a>
          </div>

          <div class="hero-trust-row" aria-label="Garantias do atendimento">
            <div class="trust-pill">
              <span class="pill-check">${Icon({ name: 'check', size: 13 })}</span>
              <span>OAB/MT 31.726 Ativa</span>
            </div>
            <div class="trust-pill">
              <span class="pill-check">${Icon({ name: 'check', size: 13 })}</span>
              <span>Atendimento 100% Online</span>
            </div>
            <div class="trust-pill">
              <span class="pill-check">${Icon({ name: 'check', size: 13 })}</span>
              <span>Sigilo Profissional</span>
            </div>
          </div>
        </div>

        <div class="hero-visual" data-reveal="fade-left">
          <div class="hero-portrait-stage">
            <div class="ambient-backlight-3d" aria-hidden="true"></div>

            <div class="profile-frame-3d" data-tilt-3d data-tilt-max="6">
              <img 
                src="${lawyer.photo}" 
                alt="Dr. Wallison Prado, Advogado com atuação em Direito Administrativo" 
                class="profile-image" 
                loading="eager" 
              />
              <div class="frame-specular-border" aria-hidden="true"></div>
            </div>

            <div class="portrait-caption-pill">
              <div class="caption-status">
                <span class="live-dot" aria-hidden="true"></span>
                <strong>Dr. Wallison Prado</strong>
                <span class="caption-tag">OAB/MT 31.726</span>
              </div>
              <p class="caption-coverage">Atendimento 100% online em todo o Mato Grosso</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
