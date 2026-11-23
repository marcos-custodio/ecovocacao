# Diário de bordo - EcoVocação

Registro das decisões, aprendizados, dificuldades e soluções da equipe, da A05 até a A06.

---

## 19/10/2026 - Repositório e primeiro deploy

- **O que fizemos:** criamos o repositório `ecovocacao` no GitHub e subimos o MVP: a `index.html` completa, o `style.css`, o logo em SVG e as outras 9 páginas como "em construção".
- **Deploy:** conectamos o repositório ao Railway e geramos o domínio `ecovocacao.up.railway.app` (Settings > Networking > Generate Domain).
- **Decisão:** deixar as 9 páginas já criadas, com o menu completo, para a navegação funcionar desde o MVP.
- **Aprendizado:** o Railway publica de novo sozinho a cada commit na branch main.

## 20/10/2026 - Escopo da A05

- **O que fizemos:** terminamos o documento de escopo (`docs/escopo.pdf`) com objetivos, público, mapa do site, identidade visual e tecnologias.
- **Decisão:** paleta só com verdes, amarelo para o hover e fonte Arial, pensando em contraste alto.
- **Decisão:** dividir as páginas entre os três integrantes (ver README).

## 10/11/2026 - Aula 09 e publicação da A06

- **O que fizemos:** criamos o `docs/plano-contexto.md` e três regras do Cursor em `.cursor/rules` (HTML semântico, CSS e acessibilidade).
- **Dificuldade:** a primeira regra foi criada dentro da pasta `docs` sem querer (ficou `docs/.cursor/rules`), porque clicamos em "Add file" estando dentro da pasta.
- **Solução:** apagamos o arquivo errado e criamos de novo a partir da raiz do repositório.
- **Aprendizado:** o GitHub cria o arquivo na pasta em que você está quando clica em "Add file".
- O professor publicou a A06 com prazo em 24/11.

## 17/11/2026 - Site completo

- **O que fizemos:** completamos as 9 páginas que estavam em construção, adicionamos o `js/script.js`, as pastas `midia/` e `docs/evidencias/` e a documentação.
- **Decisão - imagens:** fazer ilustrações próprias em SVG em vez de usar fotos da internet. Elas são leves (sustentabilidade digital), não têm problema de direitos autorais e combinam com a identidade visual.
- **Decisão - dados:** usar só dados reais com fonte nas páginas Impacto, Projetos e Notícias (IBGE, Abrema, IRENA/OIT, Absolar, Agência Gov). Os números da Home continuam marcados como fictícios.
- **Decisão - mídia:** vídeo próprio de cerca de 1 minuto e meio, com legendas (.vtt), e podcast com transcrição, para atender pessoas surdas ou com deficiência auditiva.
- **Decisão - JavaScript:** botões A+, A- e Alto contraste no topo de todas as páginas, com a escolha salva no localStorage (conteúdo da Aula 10).
- **Dificuldade:** a mensagem de sucesso do formulário sumia logo depois de aparecer.
- **Solução:** o `form.reset()` dispara o evento `reset`, que limpava a mensagem. Passamos a limpar o formulário primeiro e só depois escrever a mensagem.
- **Dificuldade:** o botão "Pular para 1:30" não funcionava testando com `python -m http.server`.
- **Solução:** esse servidor não aceita pedidos de "pedaço" do arquivo (Range), então o vídeo não consegue pular. Com outro servidor local, e no Railway, funciona.
- **Testes:** 0 erros no validador W3C nas 10 páginas e no CSS, 0 problemas no teste automático de acessibilidade e nenhuma rolagem horizontal no celular (ver `testes.md`).

## 23/11/2026 - Publicação final e entrega

- **O que fizemos:** subimos a versão final no GitHub, o Railway publicou sozinho e conferimos as páginas no endereço público.
- **Entrega:** postamos no Teams a apresentação, o .txt com a equipe e a URL, o print da página principal e o .zip com o código e a pasta /docs.

## Uso de inteligência artificial

Como pedido na Aula 08 (ética e autoria), declaramos que usamos IA (Claude) como apoio para gerar partes do código, das ilustrações, do vídeo e dos textos, a partir do nosso escopo e do plano de contexto. A equipe revisou todo o conteúdo, conferiu as fontes e é responsável pelo que foi entregue.

## Próximos passos

- [ ] Ensaiar a apresentação em até 20 minutos, com plano B (prints e vídeo da navegação)
- [ ] Versão futura com PHP e MySQL para o portal de vagas
