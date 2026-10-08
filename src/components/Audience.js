export function Audience({ audience }) {
  return `
    <section class="section-block section-muted">
      <div class="container audience-layout">
        <div class="section-header align-left">
          <p class="eyebrow">Para quem isso pode fazer sentido</p>
          <h2>Você pode estar buscando orientação porque precisa entender melhor a sua realidade.</h2>
        </div>

        <div class="check-list">
          ${audience
            .map(
              (item) => `
                <div class="check-item">
                  <span class="check-badge" aria-hidden="true">✓</span>
                  <p>${item}</p>
                </div>
              `,
            )
            .join('')}
        </div>
      </div>
    </section>
  `;
}
