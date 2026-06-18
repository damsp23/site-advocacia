# Publicação no GitHub Pages

Este pacote substitui o site atual por uma landing page trabalhista estática.

## Arquivos principais

- `index.html` — estrutura e conteúdo do site.
- `styles.css` — identidade visual, responsividade e acabamento.
- `script.js` — menu mobile, animações e formulário que abre o WhatsApp.
- `assets/` — logotipo, favicon e imagem de compartilhamento.
- `robots.txt` e `sitemap.xml` — arquivos básicos de SEO.

## Como publicar pelo site do GitHub

1. Acesse: https://github.com/damsp23/site-advocacia
2. Clique em **Add file** ou abra cada arquivo existente.
3. Substitua os arquivos antigos pelos arquivos deste pacote.
4. Mantenha exatamente estes nomes na raiz do repositório:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `robots.txt`
   - `sitemap.xml`
5. Crie ou substitua a pasta `assets` com os SVGs deste pacote.
6. Clique em **Commit changes**.
7. Aguarde o GitHub Pages atualizar o endereço:
   https://damsp23.github.io/site-advocacia/

## Como publicar pelo computador com Git

```bash
git clone https://github.com/damsp23/site-advocacia.git
cd site-advocacia
# copie os arquivos deste pacote para dentro da pasta do repositório
git add .
git commit -m "Redesign trabalhista do site"
git push origin main
```

## Ajustes rápidos

- WhatsApp usado: `5511966442294`.
- E-mail usado: `diogomoreira@adv.oabsp.org.br`.
- Endereço usado: `Rua Catanumi, 459A – Interlagos – São Paulo/SP – CEP 04788-010`.
- OAB usada: `OAB/SP 497.032`.

Se quiser trocar algum dado, procure esses textos no `index.html` e substitua.
