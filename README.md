# Web Ateliér Křivánek

Statický vícestránkový web architektonického ateliéru Ing. Tomáše Křivánka
(Bradlec u Mladé Boleslavi). Čisté HTML5, CSS a Vanilla JS. Žádný framework,
žádný build step, žádný backend, žádný formulář.

Zadání je v `atelier-krivanek-claude-code-prompt.md`. Živý stav projektu,
rozhodnutí a otevřené otázky jsou v `memory/memory.md`.

---

## Spuštění

Web nepotřebuje instalaci. Musí se ale servírovat z kořene, protože všechny
cesty jsou absolutní (`/assets/…`, `/kontakt/`). Otevření `index.html` přes
`file://` proto nebude fungovat správně.

```bash
python3 -m http.server 8080
# nebo
npx serve .
```

Pak otevři `http://localhost:8080`.

---

## Struktura

```
/                                            Domů
/o-atelieru/                                 O ateliéru
/co-navrhuji/                                rozcestník oblastí
/co-navrhuji/rodinne-domy/
/co-navrhuji/rekonstrukce/
/co-navrhuji/prumyslove-a-administrativni-stavby/
/co-navrhuji/komercni-a-sportovni-stavby/
/co-navrhuji/interiery/
/proces/                                     proces, cena, zajištění kontaktů
/galerie/                                    rozcestník pěti oblastí
/galerie/<oblast>/                           fotky jedné oblasti + lightbox (5 stránek, slugy jako Co navrhuji)
/kontakt/                                    adresa, telefony, mapa
404.html, sitemap.xml, robots.txt
```

### CSS

| Soubor | Obsah |
|---|---|
| `assets/css/tokens.css` | Barvy, písma, spacing, poměry stran. Jediné místo s hodnotami. |
| `assets/css/base.css` | Reset, typografie, kontejnery, sekce, focus. |
| `assets/css/components.css` | Eyebrow, index, kóta, tlačítka, placeholdery, hlavička, patička, CTA. |
| `assets/css/pages.css` | Layouty jednotlivých stránek. |
| `assets/css/gallery.css` | Mřížky fotek, lightbox. |

V komponentách se sahá jen přes `var(--…)`. Barva natvrdo je chyba.

### JS

| Soubor | Co dělá | Kde se načítá |
|---|---|---|
| `assets/js/site.js` | Mobilní menu (focus trap, Esc) a animace při scrollu. | Všude |
| `assets/js/lightbox.js` | Sdílený lightbox. Klávesnice, šipky, Esc, focus trap. | Podstránky galerie, oblasti a O ateliéru |
| `assets/js/logos.js` | Zdvojí stopu pruhu log, aby posun navazoval. | Domů |
| `assets/js/hero-slider.js` | Střídá pět fotografií v úvodním hero; ovládání výběru a pozastavení. | Domů |

---

## Hlavička a patička

**Jsou to poctivě synchronizované kopie v každém HTML souboru**, ne JS include.
Důvod: navigace i kontakty tak zůstávají v HTML i bez JavaScriptu, což je lepší
pro vyhledávače i pro robustnost. Absolutní cesty (`/o-atelieru/` místo
`../o-atelieru/`) znamenají, že blok hlavičky i patičky je ve všech souborech
znak po znaku stejný.

**Když měníš hlavičku nebo patičku, změň ji ve všech 16 stránkách plus `404.html`.**
Kontrola, že se nerozešly:

```bash
grep -c 'class="mark"' */index.html */*/index.html index.html
```

---

## Placeholdery fotek

Pět oborů Galerie už obsahuje dodané fotografie. Ostatní volné sloty jsou
označené rámečky s pevným `aspect-ratio`, takže jejich pozdější doplnění
nezmění layout.

Dosazení reálné fotky:

1. Optimalizovaný soubor ulož do `assets/img/`.
2. Placeholder nahraď `<img class="ph__img" src="/assets/img/…webp" alt="Popis fotky" loading="lazy" decoding="async">`.
   `.ph__img` zachová poměr stran a ořízne náhled podle rámečku.
3. U rozklikávacích fotek přidej spouštěči atribut `data-lb-src="/assets/img/…webp"`.
   Lightbox pak otevře stejný soubor v plné velikosti.
4. Pokud fotografie patří k jedné z oblastí, doplň stejné soubory do Galerie i na odpovídající podstránku `/co-navrhuji/`.
5. Domovské hero používá pět fotografií z `assets/img/galerie/` a střídá je po
   pěti sekundách. Při jejich výměně aktualizuj také tlačítka výběru v `index.html`.

**Nepřidávej stock fotky jako výplň.**

---

## Co ještě chybí

Hledej v kódu `[DOPLNIT`. Aktuálně:

- IČO a DIČ do patičky a na kontakt.
- Logo (zatím textový wordmark, je připravený na výměnu bez zásahu do layoutu).
- `og:image` pro sdílení na sociálních sítích.
- Reálné fotky do všech slotů.
- Potvrzení domény `www.atelierkrivanek.cz` v `sitemap.xml`, `robots.txt`
  a v kanonických odkazech.
- Cílová klíčová slova pro SEO. Čeká se na měřený seznam od klienta,
  nevymýšlejí se.

---

## Před nasazením

- [ ] Konzole bez chyb.
- [ ] Navigace, aktivní položka, mobilní menu.
- [ ] Lightbox: klik, Enter, šipky, Esc, focus se vrací na spouštěč.
- [ ] Galerie: rozcestník vede na pět podstránek oblastí, v menu je aktivní oblast zvýrazněná.
- [ ] Responzivita na mobilu, tabletu a desktopu.
- [ ] Kontrast WCAG AA.
- [ ] `prefers-reduced-motion` vypíná animace i pruh log.
- [ ] Jeden `<h1>` na stránku, vyplněné `<title>` a meta.
- [ ] `sitemap.xml` a `robots.txt` sedí s reálnou doménou.
