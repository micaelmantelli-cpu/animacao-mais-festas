# Animação Mais Festas

Projeto de motion graphics vertical da Mais Festas, feito com Remotion, React e TypeScript.

## Versão entregue

- Vídeo: `entregas/mais-festas-final.mp4`.
- Formato: 1080 × 1920, 30 fps.
- Duração final: aproximadamente 2min07s.
- Narração acelerada em 15%, com tom preservado e trilha em volume reduzido.
- Inclui as revisões de fotos, franquias, assessorias, animações, cifrão e espaçamento.

## Executar e editar

Requisitos: Node.js 22 ou superior, npm e FFmpeg no PATH. Python com NumPy é necessário somente para recriar a trilha.

```sh
npm ci
npm run dev
```

A composição `MaisFestas-Completo` contém todas as cenas atualizadas em uma linha do tempo base de 146 segundos. As composições de 10 e 30 segundos servem para prévias.

## Exportar a versão final

```sh
npm run render:final
```

O comando renderiza o código atual e produz `out/mais-festas-final.mp4`, com voz e imagens aceleradas em 15%. A música mantém o andamento e recebe redução automática de volume durante a fala.

Para usar um navegador já instalado, defina a variável opcional `REMOTION_BROWSER_EXECUTABLE` com o caminho do executável. Sem ela, o Remotion utiliza seu navegador gerenciado.

A narração fornecida está preservada: ela ainda utiliza “20 unidades próprias” e “agências”, enquanto os textos visuais seguem as correções solicitadas.

## Organização

- `src/`: cenas, animações e registro das composições.
- `public/`: fotos, logos, fontes, cortes de vídeo, narração e trilhas usados na edição.
- `materiais-originais/`: cópia dos materiais da pasta local, com a estrutura de `IDENTIDADE VISUAL`, `IMAGENS`, `INSPIRAÇÕES`, `NARRAÇÃO` e `LOGOS` preservada.
- `scripts/render-final.mjs`: exportação completa, sem depender das renderizações intermediárias.
- `scripts/criar-trilha.py` e `scripts/preparar-audio.py`: geração e preparação do áudio.
- `scripts/*.ps1`: etapas históricas de montagem; dependem dos intermediários locais em `out/`.
- `versoes/`: fontes das prévias e versões anteriores.
- `revisao-*.json` e `edicao-final.json`: registros das revisões.
- `entregas/`: última entrega consolidada.
- `out/`: renderizações temporárias, não versionadas.

Os materiais utilizados na edição estão em `public/`. Os arquivos brutos, as referências e os logos adicionais também estão versionados em `materiais-originais/`. Os originais da pasta de trabalho local foram preservados.

## Verificação

```sh
npm run check
```

Repositório público por solicitação do proprietário. Código e materiais sem licença de redistribuição. As dependências mantêm suas respectivas licenças.
