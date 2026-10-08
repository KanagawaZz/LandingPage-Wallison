export function Transparency({ contactChecklist }) {
  return `
    <section class="section-block section-feature">
      <div class="container transparency-layout">
        <div class="transparency-content">
          <div class="transparency-copy">
            <p class="eyebrow">Transparência</p>
            <h2>Preço e confiança também fazem parte da estratégia.</h2>
            <p>
              A principal objeção é o custo e, em seguida, a desconfiança. Por isso, a comunicação precisa ser direta, honesta e bem estruturada.
            </p>
            <p>
              O primeiro contato é um momento para compreender a situação, avaliar a pertinência da demanda e explicar os próximos passos com clareza.
            </p>
          </div>

          <div class="check-list compact">
            ${contactChecklist
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

        <figure class="themis-figure">
          <img
            src="/images/themis-justice.png"
            alt="Escultura de Têmis com a balança e a espada, iluminada em bronze sobre fundo escuro"
            loading="lazy"
            width="1024"
            height="683"
          />
        </figure>
      </div>
    </section>
  `;
}
