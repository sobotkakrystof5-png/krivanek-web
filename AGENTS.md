# AGENTS.md — Ateliér Křivánek (web)

README pro AI kódovací agenty. Otevřený formát AGENTS.md (Agentic AI Foundation / Linux Foundation) — čte ho většina nástrojů (Codex, Cursor, Copilot, Gemini CLI, Aider, Jules…). Toto je kanonický, napříč nástroji platný soubor s operativním kontextem. Explicitní pokyn uživatele v chatu má vždy přednost před tímto souborem.

Vztah k ostatním souborům v repu:
- `AGENTS.md` (tento soubor) — jak projekt spustit, styl kódu, tvrdá omezení, kontrola hotového. Kanonický zdroj napříč nástroji.
- `atelier-krivanek-claude-code-prompt.md` — plný brief: co se staví, obsah, struktura, design. **Zdroj pravdy pro zadání.** Nekopíruj ho sem, odkaz stačí.
- `CLAUDE.md` — chování a tón pro Claude Code. (Claude Code zatím AGENTS.md nečte nativně — v `CLAUDE.md` je proto řádek `@AGENTS.md`, aby se tento soubor načetl i tam.)
- `memory/index.md`, `memory/pravidla.md`, `memory/memory.md` — živý paměťový systém: aktuální fáze, rozhodnutí, otevřené otázky, co záměrně chybí, changelog. Živý stav projektu žije tady, ne v `CLAUDE.md` ani v `AGENTS.md`. Po každé změně projektu se aktualizuje `memory/memory.md` (viz `memory/pravidla.md`).

---

## Přehled projektu

Statická vícestránková vizitka a portfolio architektonického ateliéru **Ateliér Křivánek** (Ing. Tomáš Křivánek, Mladá Boleslav / Bradlec). Čeština. Cíl: klidná, pokorná, důvěryhodná prezentace, která přivede zájemce ke kontaktu telefonem nebo e-mailem. Plné zadání viz `atelier-krivanek-claude-code-prompt.md`.

## Stack a struktura

- Čisté **HTML5 + CSS + Vanilla JS**. Žádný framework, žádný build step, žádný backend.
- **Vícestránkový web** (vlastní URL per stránka). Ne one-page. Toto je závazné rozhodnutí.
- **Bez formuláře.** Kontakt jen přes `tel:`, `mailto:` a mapu (iframe). Neimplementuj odesílání ani serverless funkci.
- CSS přes designové tokeny v `:root` (barvy, fonty, spacing). Obrázky `loading="lazy"` s pevným `aspect-ratio`.

## Spuštění a náhled

Web je statický, nepotřebuje instalaci. Lokální náhled libovolným statickým serverem, např.:

```bash
# bez závislostí
python3 -m http.server 8080
# nebo
npx serve .
```

Otevři `http://localhost:8080`. Žádný `npm install`, žádný `npm run build` — pokud někdo takový krok chce přidat, nejdřív to označ jako změnu stacku a nech rozhodnutí na uživateli (viz Tvrdá omezení).

## Struktura repozitáře (cílová)

```
/                                            index.html (Domů)
/o-atelieru/                                 O ateliéru
/co-navrhuji/                                rozcestník oblastí
/co-navrhuji/rodinne-domy/
/co-navrhuji/rekonstrukce/
/co-navrhuji/prumyslove-a-administrativni-stavby/
/co-navrhuji/komercni-a-sportovni-stavby/
/co-navrhuji/interiery/
/co-navrhuji/projekty-a-studie/
/spoluprace/                                 proces + jak se počítá cena + zajištění kontaktů
/galerie/                                    rozcestník šesti oblastí
/galerie/rodinne-domy/ … /galerie/projekty-a-studie/   fotky jedné oblasti + lightbox (slugy jako Co navrhuji)
/kroos/                                      KROOS s.r.o.
/kontakt/                                    adresa + mapa (bez formuláře)
/assets/css/                                 tokens, base, components, pages, gallery
/assets/js/                                  site, lightbox, logos
/assets/img/                                 reálné fotky (zatím prázdné, placeholdery v HTML/CSS)
404.html  sitemap.xml  robots.txt  README.md
```

Hlavička a patička jsou na každé stránce stejné. **Zvolená cesta: poctivě synchronizované kopie v HTML**, ne JS include — navigace i kontakty tak zůstávají v HTML i bez JavaScriptu. Všechny cesty jsou absolutní (`/o-atelieru/`), takže blok hlavičky i patičky je ve všech souborech znak po znaku stejný. Když je měníš, měň je ve všech 19 stránkách plus `404.html`. Detail v `README.md`.

## Styl kódu

- **HTML:** sémantické značky (`header`, `nav`, `main`, `section`, `footer`), jeden `<h1>` na stránku, správná hierarchie nadpisů, `alt` u všech obrázků i placeholderů. Odsazení 2 mezery.
- **CSS:** vlastnosti přes tokeny (`var(--...)`), žádné magické hodnoty barev v komponentách. Nízká specificita, jednoduché a čitelné názvy tříd (drž jeden systém, např. lehké BEM). Mobile-first, `min-width` media queries.
- **JS:** vanilla, žádné závislosti. Malé moduly po funkci (lightbox, animace, marquee log). `IntersectionObserver` pro animace, `prefers-reduced-motion` respektováno.
- **Texty UI jsou česky** a píší se přirozeně a lidsky — bez pomlček jako spojek, bez korporátních frází, bez trojic v řadě, střídej délku vět (skill humanize-text-cs). Fakta nevymýšlej.
- Kód komentuj střídmě tam, kde to není zřejmé. Doporučený (nepovinný) formátovač: Prettier s výchozím nastavením.

## Obsah a assety

- Fotky zatím nejsou — každý slot je **zřetelně označený placeholder** (jemný okraj, papírové pozadí, ikona, popisek, správný `aspect-ratio`). **Žádné stock ani externí obrázky jako výplň.**
- Fotky patří do každé sekce, ne jen do galerie. V galerii a na podstránkách oblastí jsou **rozklikávací** (sdílený lightbox).
- Placeholder nenahrazuj reálným obsahem bez podkladu od uživatele.

## Tvrdá omezení (NEDĚLEJ bez potvrzení uživatele)

- Nepřidávej framework, build step, package manager ani backend.
- Nepřidávej žádný formulář (kontaktní ani jiný).
- Nepřeváděj web na one-page a neruš vícestránkovou strukturu.
- Nevymýšlej fakta: IČO, počty realizací, ceny, cílová SEO klíčová slova. Chybí-li, nech placeholder nebo se zeptej.
- Nepřebírej barvy ani copy z referenčního screenshotu (Magnon) — přebírá se jen struktura/hierarchie.
- Neměň závazná rozhodnutí z `CLAUDE.md` §5 tiše.

## Kontrola hotového (než něco označíš za dokončené / před nasazením)

- [ ] Web běží bez chyb v konzoli.
- [ ] Navigace, lightbox a podstránky galerie fungují; aktivní položka menu je zvýrazněná.
- [ ] Responzivní na mobilu, tabletu i desktopu; nic nepřetéká.
- [ ] Kontrast textu/pozadí min. WCAG AA; lightbox a navigace ovladatelné klávesnicí (focus, `aria`, Esc).
- [ ] Jeden `<h1>` na stránku, smysluplné `alt`, vyplněné `<title>`/meta/OpenGraph per stránka.
- [ ] `sitemap.xml` a `robots.txt` existují a jsou aktuální.
- [ ] `prefers-reduced-motion` vypíná animace.
- [ ] Žádné stock fotky; všechny prázdné sloty jsou placeholdery se správným `aspect-ratio`.

Doporučené (nepovinné) kontroly, pokud si přidáš toolchain: `npx lighthouse <url>` (výkon + a11y), `npx html-validate "**/*.html"`, `npx axe <url>`.

## Commity a PR

- Commit v imperativu, stručně, česky nebo anglicky konzistentně (např. `Přidej stránku Spolupráce` / `Add gallery lightbox`). Ideálně Conventional Commits (`feat:`, `fix:`, `style:`, `docs:`).
- Jeden PR = jedna logická změna. V popisu uveď, které stránky/komponenty se dotýká a jak jsi ověřil kontrolu hotového výše.
- **Když měníš strukturu, stack nebo obsahová rozhodnutí, aktualizuj ve stejném PR i `memory/memory.md`** (log stavu, viz `memory/pravidla.md`) a případně brief — kontext nesmí zaostat za kódem.

## Lokální skills a kdy je použít

| Skill | Kdy použít |
|---|---|
| `craftsman-site-layout` | Návrh struktury a hierarchie stránek (layout, sekce, komponenty) — přebírá se jen struktura, ne barvy/copy. Referenční layout pro tenhle web. |
| `humanize-text-cs` | Při psaní/revizi jakéhokoliv českého textu na web — odstraní typické AI vzorce (pomlčky jako spojky, korporátní fráze, trojice v řadě). Povinné pro finální texty, viz `CLAUDE.md` §3. |
| `project-memory-system` | Zakládání/rozšiřování tohohle memory systému (`memory/index.md`, `pravidla.md`, `memory.md`). Použij, jen když se má systém sám měnit — ne pro běžnou práci na webu. |
| `seo-complete-optimization` | Jakýkoli úkol, který se dotýká SEO — meta tagy, struktura, schema, copy s dopadem na SEO. Klíčová slova se nevymýšlí, viz Otevřené otázky v `memory/memory.md`. |
| `web-project-brief` | Aktualizace plného briefu (`atelier-krivanek-claude-code-prompt.md`). Soubor od 22. 9. 2026 existuje — upravuj ho cíleně, negeneruj znovu ze šablony. |
| `web-security-setup` | Založení bezpečnostního základu při nasazení (headers, `security.txt`, DNS záznamy) — i statický web bez backendu potřebuje správné HTTP hlavičky. |
| `web-security-review` | Revize kódu na běžné zranitelnosti před nasazením (většina bodů se týká backendu/formulářů, které tenhle web nemá — použij hlavně na XSS přes JS a bezpečnost odkazů/skriptů třetích stran). |
| `web-security-audit` | Ověření zabezpečení po každém nasazení živé URL (HTTPS, headers, TLS, cookies). |
| `web-security-memory` | Založí a vede samostatný paměťový systém pro bezpečnostní rozhodnutí v `.claude/security/` — oddělený od `memory/` v tomhle repu, viz `memory/index.md` §5. |

## Když si nejsi jistý

Zeptej se, nehádej. Platí pro placeholdery, texty i technická a designová rozhodnutí. Raději jedna krátká otázka než tichý odhad, který se pak přepisuje.