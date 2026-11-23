# EcoVocação

Plataforma de Sustentabilidade, Empregabilidade e Impacto Social.

Projeto da disciplina Desenvolvimento Web (Prof. Paulo Fratta) - Fatec São Caetano do Sul - 2026.

- **Site publicado:** https://ecovocacao.up.railway.app
- **Repositório:** https://github.com/marcos-custodio/ecovocacao

## Tema

O EcoVocação junta dois assuntos: **empregos verdes** (reciclagem, energia solar e eólica, economia solidária) e **inclusão de pessoas com deficiência (PCD)** no mercado de trabalho. O público prioritário são as pessoas com deficiência, por isso o site foi feito para funcionar com leitor de tela, só com o teclado e com bom contraste.

ODS relacionados: 7, 8, 10 e 12.

## Objetivos

**Objetivo geral:** desenvolver um site informativo e acessível, com 10 páginas interligadas, que conecte profissionais, empresas sustentáveis e empreendedores sociais, dando prioridade à inclusão de pessoas com deficiência.

**Objetivos específicos (do escopo da A05):**

| Objetivo | Situação |
|---|---|
| Publicar as 10 páginas, navegáveis pelo menu | Feito |
| 0 erros no W3C Validator em todas as páginas | Feito (ver [testes.md](testes.md)) |
| 100% das imagens com alt e site navegável pelo teclado | Feito |
| Pelo menos 6 projetos e 6 notícias | Feito (6 projetos e 6 notícias) |
| Formulário de contato com validação HTML5 | Feito (HTML5 + JavaScript) |

## Páginas

| Nº | Página | Conteúdo |
|---|---|---|
| 1 | index.html | Apresentação do tema, cards, números (fictícios) e chamada para contato |
| 2 | sobre.html | História, missão, visão, valores, ODS e público |
| 3 | projetos.html | 6 projetos reais com link para a fonte |
| 4 | impacto.html | 3 tabelas de dados reais com fonte |
| 5 | acessibilidade.html | Recursos do site, medidas, atalhos de teclado, leis e dicas |
| 6 | galeria.html | 8 ilustrações autorais com legenda e fonte |
| 7 | midia.html | Vídeo com legendas, podcast com transcrição, YouTube e mapa |
| 8 | noticias.html | 6 notícias resumidas com link |
| 9 | contato.html | Dados fictícios, formulário validado e equipe |
| 10 | orcamento_hospedagem.html | 3 hospedagens, 3 domínios e justificativa |

## Divisão de funções

| Integrante | Responsabilidade |
|---|---|
| Marcos Jorge Custódio Filho | index, CSS geral, contato, orçamento |
| Rodrigo Ferro Fraga | sobre, projetos, impacto |
| Lucca Biazi Tobias | acessibilidade, galeria, mídia, notícias |
| Toda a equipe | /docs, testes, deploy no Railway e apresentação |

## Tecnologias

- HTML5 e CSS3 (um único arquivo `css/style.css`)
- JavaScript (`js/script.js`): botões de acessibilidade com localStorage, validação do formulário e controle do vídeo
- Git e GitHub, deploy automático no Railway com HTTPS
- VS Code / Cursor (com as regras em `.cursor/rules`)
- Testes: W3C Validator, axe (acessibilidade), DevTools no modo celular

## Estrutura de pastas

```
ecovocacao/
├── index.html e as outras 9 páginas
├── css/style.css
├── js/script.js
├── img/        (logo, 8 ilustrações SVG e capa do vídeo)
├── midia/      (vídeo .mp4, legendas .vtt e podcast .mp3)
├── docs/       (esta documentação)
└── .cursor/rules/
```

## Documentos desta pasta

- [plano-contexto.md](plano-contexto.md) - plano de contexto do projeto (Aula 09)
- [diario-de-bordo.md](diario-de-bordo.md) - decisões, dificuldades e soluções com data
- [orcamento-hospedagem.md](orcamento-hospedagem.md) - comparação de hospedagem e domínio
- [testes.md](testes.md) - evidências de testes (W3C, teclado, contraste, celular)
- [relatorio-melhorias.md](relatorio-melhorias.md) - o que mudou do MVP para o site final
- [roteiro-apresentacao.md](roteiro-apresentacao.md) - quem fala o quê, demonstração ao vivo e checklist da entrega
- [escopo.pdf](escopo.pdf) - escopo da Atividade 05
- [evidencias/](evidencias/) - prints usados nos testes e no relatório

Observação: o EcoVocação é uma organização fictícia, criada para fins acadêmicos. Os números da página inicial e os contatos são fictícios; os dados das páginas Impacto, Projetos e Notícias são reais e têm fonte.
