# Evidências de testes

Testes feitos em 17/11/2026 com o site rodando localmente. Depois do deploy, repetir os itens marcados com ☐ no endereço do Railway e tirar os prints para a apresentação.

## 1. Validação W3C (HTML e CSS)

Ferramenta: Nu Html Checker (é o mesmo validador usado no site validator.w3.org).

| Página | Erros |
|---|---|
| index.html | 0 |
| sobre.html | 0 |
| projetos.html | 0 |
| impacto.html | 0 |
| acessibilidade.html | 0 |
| galeria.html | 0 |
| midia.html | 0 |
| noticias.html | 0 |
| contato.html | 0 |
| orcamento_hospedagem.html | 0 |
| css/style.css (validador de CSS) | 0 |

☐ Validar de novo em https://validator.w3.org/ usando a opção "Validate by URI" com o endereço do Railway e tirar print de cada página.

## 2. Acessibilidade automática

Ferramenta: axe-core (mesmo motor usado pelo Lighthouse e por várias extensões de acessibilidade), regras WCAG 2 A e AA.

Resultado: **0 problemas encontrados nas 10 páginas.**

☐ Rodar o Lighthouse no Chrome (F12 > Lighthouse > Acessibilidade) e o WAVE (https://wave.webaim.org/) no site publicado e tirar print.

## 3. Contraste

Calculado pela fórmula da WCAG. O mínimo para texto normal é 4,5:1.

| Combinação | Cores | Contraste | Resultado |
|---|---|---|---|
| Texto normal | #222222 no #ffffff | 15,9:1 | Passa |
| Texto no fundo da página | #222222 no #f1f8e9 | 14,7:1 | Passa |
| Menu e rodapé | #ffffff no #1b5e20 | 7,9:1 | Passa |
| Banner | #ffffff no #2e7d32 | 5,1:1 | Passa |
| Títulos | #1b5e20 no #ffffff | 7,9:1 | Passa |
| Títulos dos cards | #2e7d32 no #ffffff | 5,1:1 | Passa |
| Observações | #555555 no #ffffff | 7,5:1 | Passa |
| Mensagem de erro | #c62828 no #ffffff | 5,6:1 | Passa |
| Item atual do menu | #000000 no #f9a825 | 10,7:1 | Passa |
| Modo alto contraste | #ffff00 no #000000 | 19,6:1 | Passa |

☐ Conferir uma das combinações em https://webaim.org/resources/contrastchecker/ e tirar print.

## 4. Navegação só com o teclado

| Teste | Resultado |
|---|---|
| Primeiro Tab mostra "Pular para o conteúdo principal" | OK ([print](evidencias/teclado-pular-conteudo.jpg)) |
| Enter no link pula o menu e vai para o conteúdo | OK |
| Todo link e botão mostra contorno de foco | OK ([print](evidencias/teclado-foco-visivel.jpg)) |
| Menu, botões A+ / A- / Alto contraste funcionam com Enter | OK |
| Formulário preenchido e enviado só com Tab, setas, Espaço e Enter | OK |
| Áudio dá play com Espaço; vídeo com Enter nos botões Play/Pause e "Pular para 1:30" | OK |
| Transcrição do podcast abre com Enter | OK |

## 5. Formulário de contato

| Teste | Esperado | Resultado |
|---|---|---|
| Enviar com campos obrigatórios vazios | Navegador avisa (required) | OK |
| Telefone "1191234" | Navegador avisa (pattern) | OK |
| E-mail sem @ | Navegador avisa (type="email") | OK |
| Mensagem "Oi" (menos de 10 caracteres) | Erro em vermelho embaixo do campo | OK ([print](evidencias/formulario-erro.jpg)) |
| Tudo certo | Mensagem de sucesso e formulário limpo | OK ([print](evidencias/formulario-sucesso.jpg)) |

## 6. Responsividade

| Tela | Largura | Rolagem horizontal? | Print |
|---|---|---|---|
| Celular (iPhone 13) | 390 px | Não, nas 10 páginas | [celular-index.jpg](evidencias/celular-index.jpg) |
| Tablet | 820 px | Não | [tablet-index.jpg](evidencias/tablet-index.jpg) |
| Desktop | 1366 px | Não | [desktop-index.jpg](evidencias/desktop-index.jpg) |

☐ Abrir o site publicado no celular de verdade e tirar print.

## 7. Links e arquivos

- Todos os links internos e arquivos (imagens, vídeo, áudio, legendas, CSS e JS) existem: **0 links quebrados**.
- Nenhum erro de JavaScript no console nas 10 páginas.
- ☐ Clicar nos links externos (fontes, notícias e projetos) no site publicado para confirmar que abrem.
- ☐ Conferir se o vídeo do YouTube e o mapa aparecem no site publicado.

## 8. JavaScript

| Recurso | Resultado |
|---|---|
| A+ e A- mudam o tamanho da letra e a escolha fica salva entre as páginas | OK |
| Alto contraste liga e desliga e fica salvo entre as páginas | OK ([print](evidencias/alto-contraste.jpg)) |
| Botão Play/Pause do vídeo | OK |
| Botão "Pular para 1:30" | OK |
| Botão "Já assisti ao vídeo" mostra o alerta | OK |
