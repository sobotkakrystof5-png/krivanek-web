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
/co-navrhuji/projekty-a-studie/
/proces/                                     proces, cena, zajištění kontaktů
/galerie/                                    rozcestník šesti oblastí
/galerie/<oblast>/                           fotky jedné oblasti + lightbox (6 stránek, slugy jako Co navrhuji)
/sesterske-spolecnosti/                      rozcestník: KROOS, Projekt 360
/sesterske-spolecnosti/kroos/
/sesterske-spolecnosti/projekt-360/
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
| `assets/js/lightbox.js` | Sdílený lightbox. Klávesnice, šipky, Esc, focus trap. | Podstránky galerie, oblasti, O ateliéru, KROOS, Projekt 360 |
| `assets/js/logos.js` | Zdvojí stopu pruhu log, aby posun navazoval. | Domů |

---

## Hlavička a patička

**Jsou to poctivě synchronizované kopie v každém HTML souboru**, ne JS include.
Důvod: navigace i kontakty tak zůstávají v HTML i bez JavaScriptu, což je lepší
pro vyhledávače i pro robustnost. Absolutní cesty (`/o-atelieru/` místo
`../o-atelieru/`) znamenají, že blok hlavičky i patičky je ve všech souborech
znak po znaku stejný.

**Když měníš hlavičku nebo patičku, změň ji ve všech 21 stránkách plus `404.html`.**
Kontrola, že se nerozešly:

```bash
grep -c 'class="mark"' */index.html */*/index.html index.html
```

---

## Placeholdery fotek

Reálné fotky zatím nejsou. Každý slot je označený rámeček s pevným
`aspect-ratio`, takže dosazení fotky nezmění layout.

Dosazení reálné fotky:

1. Soubor do `assets/img/`.
2. V HTML nahraď `<div class="ph__frame">…</div>` značkou
   `<img src="/assets/img/…" alt="popis" loading="lazy" width="…" height="…">`.
3. U rozklikávacích doplň spouštěči atribut `data-lb-src="/assets/img/…"`.
   Lightbox si toho všimne sám a místo placeholderu ukáže fotku.
4. Hero na domovské stránce: nastav `background-image` na `.herofull__bg`
   a odstraň `.herofull__note`.

**Nepřidávej stock fotky jako výplň.**

---

## Co ještě chybí

Hledej v kódu `[DOPLNIT`. Aktuálně:

- IČO a DIČ do patičky a na kontakt.
- Logo (zatím textový wordmark, je připravený na výměnu bez zásahu do layoutu).
- PDF osvědčení o autorizaci (`/o-atelieru/`) a PDF se studiemi
  (`/co-navrhuji/projekty-a-studie/`). Po dodání do `assets/dokumenty/`.
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
- [ ] Galerie: rozcestník vede na šest podstránek oblastí, v menu je aktivní oblast zvýrazněná.
- [ ] Responzivita na mobilu, tabletu a desktopu.
- [ ] Kontrast WCAG AA.
- [ ] `prefers-reduced-motion` vypíná animace i pruh log.
- [ ] Jeden `<h1>` na stránku, vyplněné `<title>` a meta.
- [ ] `sitemap.xml` a `robots.txt` sedí s reálnou doménou.
