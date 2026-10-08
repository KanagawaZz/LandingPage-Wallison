# Arquitetura da landing page

A estrutura foi organizada para separar conteúdo, comportamento e estilos.

## Pastas

- `src/components/`: renderização das seções da página
- `src/data/`: conteúdo estático e customizável
- `src/styles/`: tokens visuais e regras globais
- `src/utils/`: utilitários reutilizáveis

## Filosofia

A página foi pensada para manter o projeto fácil de evoluir, sem espalhar textos diretamente nos componentes. Isso permite alterar nomes, textos, FAQs, áreas de atuação e dados de contato sem precisar refatorar toda a interface.

## Dados principais

- `lawyer.js`: dados do profissional
- `siteConfig.js`: configurações gerais do site
- `navigation.js`: menu principal
- `practiceAreas.js`: áreas de atuação
- `audience.js`: público alvo
- `steps.js`: processo inicial
- `faq.js`: dúvidas frequentes
- `contactChecklist.js`: checklist da conversa inicial

## Personalização futura

Para atualizar informações futuras, basta editar os arquivos em `src/data/` e manter a estrutura visual intacta.
