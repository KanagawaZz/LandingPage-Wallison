import { Icon } from './Icon.js';

export function Footer({ lawyer, siteConfig }) {
  const currentYear = new Date().getFullYear();

  return `
    <footer class="site-footer">
      <div class="container footer-top-row">
        <div class="footer-brand-col">
          <div class="footer-monogram-brand">
            <span class="footer-monogram">WP</span>
            <div>
              <strong class="footer-title">${siteConfig.name}</strong>
              <p class="footer-subtitle">${lawyer.oab} • Direito Administrativo</p>
            </div>
          </div>
          <p class="footer-bio-summary">
            Atuação técnica, fundamentada e ética dedicada à defesa dos direitos de servidores públicos municipais, estaduais e federais em todo o Mato Grosso.
          </p>
          <div class="footer-lgpd-note">
            <span class="lgpd-icon">${Icon({ name: 'shield', size: 14 })}</span>
            <p><strong>Privacidade (LGPD):</strong> Os dados enviados por WhatsApp ou e-mail são utilizados exclusivamente para fins de contato e análise prévia da situação funcional.</p>
          </div>
        </div>

        <div class="footer-nav-col">
          <span class="footer-heading">Navegação</span>
          <ul class="footer-links-list">
            <li><a href="#inicio">Início</a></li>
            <li><a href="#atuacao">Áreas de Atuação</a></li>
            <li><a href="#mitos">Mitos & Verdades</a></li>
            <li><a href="#como-funciona">Como Funciona</a></li>
            <li><a href="#sobre">Sobre o Advogado</a></li>
            <li><a href="#duvidas">Dúvidas Frequentes</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </div>

        <div class="footer-contact-col">
          <span class="footer-heading">Canais Oficiais</span>
          <div class="footer-contact-items">
            <a href="${siteConfig.whatsappLink}" target="_blank" rel="noopener noreferrer" class="footer-contact-link">
              ${Icon({ name: 'chat', size: 16 })}
              <span>WhatsApp: ${siteConfig.whatsappDisplay}</span>
            </a>
            <a href="mailto:${siteConfig.email}" class="footer-contact-link">
              ${Icon({ name: 'mail', size: 16 })}
              <span>${siteConfig.email}</span>
            </a>
            <a href="${siteConfig.instagram}" target="_blank" rel="noopener noreferrer" class="footer-contact-link">
              ${Icon({ name: 'instagram', size: 16 })}
              <span>Instagram: ${siteConfig.instagramHandle}</span>
            </a>
            <a href="${siteConfig.oabLink}" target="_blank" rel="noopener noreferrer" class="footer-contact-link footer-oab-link">
              ${Icon({ name: 'scale', size: 16 })}
              <span>Cadastro Nacional da OAB: ${lawyer.oab}</span>
            </a>
          </div>
        </div>
      </div>

      <div class="container footer-legal-notice-box">
        <div class="legal-badge">
          ${Icon({ name: 'scale', size: 15 })}
          <span>Nota de Conformidade Ética OAB</span>
        </div>
        <p class="legal-text">
          Este site tem caráter exclusivamente informativo e institucional, em conformidade com o Código de Ética e Disciplina da OAB e o Provimento nº 205/2021. O conteúdo não constitui promessa ou garantia de resultado. Cada caso exige análise individualizada.
        </p>
      </div>

      <div class="container footer-bottom-row">
        <p>© ${currentYear} ${siteConfig.name}. Todos os direitos reservados.</p>
        <div class="footer-bottom-badges">
          <span>Inscrição ${lawyer.oab}</span>
          <span class="separator">•</span>
          <span>Atendimento 100% Online em todo o Mato Grosso</span>
        </div>
      </div>
    </footer>
  `;
}
