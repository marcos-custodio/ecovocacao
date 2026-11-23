# Roteiro da apresentação - A06

Tempo total: 20 minutos (10 de slides, 5 de demonstração, 5 de perguntas). Passar de 23 minutos tira 0,2 ponto. **Todos precisam falar.** Quem não falar perde os 4 pontos da apresentação.

O texto de cada slide está nas notas do apresentador da apresentação.

## Quem fala em cada slide

| Slide | Assunto | Quem fala | Tempo |
|---|---|---|---|
| 1 | Capa | Marcos | 0:30 |
| 2 | Agenda | Marcos | 0:20 |
| 3 | Contexto e justificativa | Rodrigo | 0:45 |
| 4 | Objetivos | Rodrigo | 0:35 |
| 5 | Público-alvo | Rodrigo | 0:35 |
| 6 | Do MVP ao site final | Lucca | 0:45 |
| 7 | Mapa do site | Rodrigo | 0:30 |
| 8 | Identidade visual e responsividade | Marcos | 0:40 |
| 9 | Formulário (Marcos) e multimídia (Lucca) | Marcos e Lucca | 0:50 |
| 10 | Acessibilidade e inclusão | Lucca | 0:50 |
| 11 | Tecnologias e hospedagem | Marcos | 0:40 |
| 12 | Documentação e orçamento | Marcos | 0:45 |
| 13 | Cronograma e divisão de tarefas | Lucca | 0:35 |
| 14 | Objetivos alcançados | Rodrigo | 0:40 |
| 15 | Pontos positivos e dificuldades | Lucca | 0:45 |
| 16 | Demonstração ao vivo | Os três | 5:00 |
| 17 | Considerações finais | Os três | 0:40 |

Os slides somam pouco mais de 10 minutos: no ensaio, se passar, encurtem as falas dos slides 9, 10 e 12.

## Demonstração ao vivo (sempre pelo link do Railway)

Antes de começar, deixar abertas as abas: site no Railway, GitHub na pasta docs e painel do Railway.

1. **Marcos:** abre https://ecovocacao.up.railway.app e navega pelo menu até Projetos, Impacto e Contato.
2. **Marcos:** aperta F12, liga o modo celular (ícone de celular no DevTools) e mostra o layout.
3. **Marcos:** no Contato, escreve só "Oi" na mensagem e envia, mostrando o erro em vermelho. Depois corrige e envia.
4. **Lucca:** na Mídia, dá play no vídeo, liga a legenda, clica em "Pular para 1:30" e toca o podcast.
5. **Lucca:** recarrega a página, aperta Tab (aparece "Pular para o conteúdo principal"), navega com Tab e Enter e liga o Alto contraste.
6. **Rodrigo:** mostra a pasta /docs no GitHub e o deploy ativo no painel do Railway.

**Plano B (se a internet cair):** gravar antes um vídeo curto da navegação no celular e usar os prints de `docs/evidencias`. Sem plano B, site fora do ar tira 0,6 ponto.

## Perguntas que o professor pode fazer

| Pergunta | Resposta curta |
|---|---|
| Para que serve o `aria-current="page"`? | Avisa ao leitor de tela qual é a página atual. No CSS a gente usa ele para pintar o item do menu de amarelo. |
| Por que `event.preventDefault()` no formulário? | Para a página não recarregar antes de o JavaScript validar a mensagem. |
| O que o `pattern` do telefone faz? | Obriga o formato (11) 91234-5678. Se estiver diferente, o próprio navegador não deixa enviar. |
| Como os botões A+ e Alto contraste lembram a escolha? | Salvam no `localStorage` (Aula 10). Toda página lê o valor quando abre. |
| O que é o arquivo .vtt? | É o arquivo de legendas do vídeo, ligado pela tag `<track>`. |
| Por que as imagens são SVG? | São leves, não perdem qualidade e foram feitas pela equipe, então não tem problema de direitos autorais. |
| Como o site vai para o ar? | O Railway está ligado ao GitHub. A cada commit na main ele faz o deploy sozinho, com HTTPS. |
| Por que Railway e não GitHub Pages? | O GitHub Pages só aceita site estático. O Railway vai rodar PHP com MySQL no futuro. |
| Os números do site são reais? | Os da Home são fictícios e estão marcados. Os de Impacto, Projetos e Notícias são reais e têm fonte. |
| Vocês usaram IA? | Sim, como apoio, e declaramos no diário de bordo. A equipe revisou e sabe explicar o código. |

## Checklist da entrega no Teams (até 24/11, 13:30)

Cada arquivo que faltar tira 0,4 ponto.

- [ ] Apresentação em .pptx ou .pdf
- [ ] `equipe-ecovocacao.txt` (nomes completos e URL do Railway)
- [ ] Print .png da página principal **no site publicado** (com o endereço aparecendo)
- [ ] `ecovocacao.zip` com o código completo e a pasta /docs
- [ ] Nome completo da equipe e a descrição "Atividade 06 – Conclusão e Apresentação de Projeto de Site"
