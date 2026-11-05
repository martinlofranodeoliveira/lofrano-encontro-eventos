# Critérios do modelo Encontro

Derivados da demonstração pública antes da implementação independente. Os testes verificam DOM simulado; isso não equivale a QA visual em navegador.

- **encontro-01** — Em #en-program, clicar Música.
  Resultado: Música recebe aria-pressed=true e a programação mostra 16:00 Som de começo, 19:00 Entre ritmos e encontros e 21:00 A noite continua.
- **encontro-02** — Clicar button[aria-label="Adicionar Entre ritmos e encontros à agenda demo"]; depois o mesmo controle, agora “Remover Entre ritmos e encontros da agenda demo”.
  Resultado: O primeiro clique marca aria-pressed=true, muda o nome acessível para remover, o contador mostra 01 e o status “1 experiência(s) selecionada(s) nesta tela. Não é ingresso nem inscrição.”. O segundo desmarca e restaura nome adicionar, contador 00 e status inicial.
- **encontro-03** — Adicionar uma sessão de Música e depois clicar Experiências.
  Resultado: A lista passa a 11:00 Desenhar novas possibilidades, 15:00 Uma mesa, muitas histórias e 18:00 A cidade em outro olhar. A sessão escolhida em Música continua contada; a troca de categoria altera apenas a lista visível.

Além dos fluxos, a suíte confere conteúdo inicial publicado, controles, imagens, âncoras, ausência de configuração privada e reinício do estado.
