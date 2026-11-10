Plano de contexto – EcoVocação

Este arquivo explica o projeto para a IA (Cursor/Copilot) entender o que é o site antes de criar ou mudar código. Baseado no escopo em docs/escopo.pdf.

1. Nome do projeto

EcoVocação – Plataforma de Sustentabilidade, Empregabilidade e Impacto Social.

2. Visão geral

Site informativo e acessível, com 10 páginas, que junta sustentabilidade e empregabilidade. Mostra empregos verdes (reciclagem, energia solar, gestão de resíduos), projetos de economia solidária e dicas de inclusão de pessoas com deficiência (PCD) no mercado de trabalho.

3. Problema que resolve

Muita gente quer trabalhar com algo que gere impacto positivo mas não sabe por onde começar nem onde achar vagas na área. Ao mesmo tempo, pessoas com deficiência ainda têm dificuldade para entrar no mercado de trabalho, porque muitas empresas não sabem fazer uma contratação inclusiva e muitos sites de vagas não são acessíveis.

4. Público-alvo
Jovens e adultos de 16 a 60 anos, principalmente do ABC Paulista e da Grande São Paulo.
Público prioritário: pessoas com deficiência (o site precisa funcionar com leitor de tela, teclado e bom contraste).
Empresas sustentáveis que querem contratar de forma inclusiva.
Empreendedores sociais que querem divulgar projetos.
5. Objetivos
Publicar as 10 páginas, todas navegáveis pelo menu principal.
Ter 0 erros no W3C Validator em todas as páginas.
100% das imagens com alt descritivo e site todo navegável pelo teclado.
Apresentar pelo menos 6 projetos e 6 notícias sobre o tema.
Ter um formulário de contato com validação HTML5 nos campos obrigatórios.
6. Funcionalidades principais
Página	Função
index.html	Home com resumo do tema, cards e tabela de números (fictícios)
sobre.html	História, missão, visão e valores
projetos.html	Projetos de sustentabilidade e impacto social
impacto.html	Dados e tabelas sobre empregos verdes e inclusão
acessibilidade.html	Medidas de inclusão adotadas no site
galeria.html	Imagens com legenda e indicação de fonte
midia.html	Vídeo, áudio e iframe
noticias.html	Notícias e artigos sobre o tema
contato.html	Formulário validado, dados fictícios e equipe
orcamento_hospedagem.html	Comparação de hospedagem e domínio
7. Stack técnica
HTML5 e CSS3 puros, sem frameworks (sem Bootstrap, Tailwind, React).
JavaScript só quando precisar (ex.: validação extra do formulário, botão na página de mídia).
Um único arquivo de estilo: css/style.css.
Git e GitHub para versionamento; deploy no Railway.
Editor: VS Code / Cursor.
8. Requisitos não funcionais
Acessibilidade: lang="pt-BR", tags semânticas, alt descritivo, contraste adequado, navegação por teclado, aria-label no menu.
Responsividade: flexbox e media query, funcionando em celular, tablet e computador.
Desempenho: imagens leves (SVG, WebP ou JPG comprimido) e código limpo.
SEO básico: title único e meta description em cada página, títulos em ordem (h1 → h2 → h3).
Segurança e LGPD: HTTPS do Railway, nenhum dado pessoal real, nenhuma chave de API no código.
9. Estrutura de pastas
ecovocacao/
├── index.html e as outras 9 páginas (na raiz)
├── css/
│   └── style.css
├── img/
│   └── logo.svg
├── docs/
│   ├── README.md
│   ├── escopo.pdf
│   └── plano-contexto.md
└── .cursor/
    └── rules/
        ├── html-semantico.mdc
        ├── css-estilo.mdc
        └── acessibilidade.mdc
10. Desejáveis (se der tempo)
Modo de alto contraste.
Mapa com cooperativas e pontos de coleta na página de mídia.
Versão futura em PHP/MySQL com portal de vagas, fórum e blog (fora desta entrega).
11. Métricas de sucesso
0 erros no W3C Markup Validator e no CSS Validator.
Acessibilidade no Lighthouse ≥ 90.
Nenhum erro no WAVE.
Site no ar em ecovocacao.up.railway.app com as 10 páginas funcionando.
Equipe
Marcos Jorge Custódio Filho – index, CSS geral, contato, orçamento
Rodrigo Ferro Fraga – sobre, projetos, impacto
Lucca Biazi Tobias – acessibilidade, galeria, mídia, notícias

Observação: a organização, os números e os contatos do site são fictícios, para fins acadêmicos.
