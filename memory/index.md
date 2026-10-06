# INDEX — mapa paměti

Přečti jako první, každou session, před jakoukoli prací. Tenhle soubor sám o sobě neobsahuje obsah — jen odkud co číst a v jakém stavu projekt je.

## 1. Stav projektu (jedna věta)

**Fáze:** první úplná verze webu stojí (13 stránek, styly, JS, SEO). Čeká se na potvrzení palety a na podklady od klienta.

Detail vždy v `memory/memory.md` → „Aktuální stav".

## 2. Soubory systému

| Soubor | Obsahuje | Aktualizuj, když |
|---|---|---|
| `memory/index.md` (tento) | Mapa, jednořádkový stav | Objeví se nový soubor systému, nebo se změní fáze projektu |
| `memory/pravidla.md` | Pravidla, jak se paměť vede | Jen na výslovný pokyn uživatele |
| `memory/memory.md` | Stav, rozhodnutí, changelog, otevřené otázky | Po každé změně projektu |
| `CLAUDE.md` | Pravidla chování Claude Code + kontext zadání | Zřídka, jen na výslovné rozhodnutí uživatele |
| `AGENTS.md` | Technická fakta, stack, struktura, konvence — napříč nástroji | Když se změní stack/struktura/konvence |
| `atelier-krivanek-claude-code-prompt.md` | Plný brief: co se staví, obsah stránek, design, postup | Změní se zadání (obsah, struktura, design) |

## 3. Priorita při konfliktu dokumentů

Živý prompt uživatele → `CLAUDE.md` → `memory/pravidla.md` → `memory/memory.md` → `AGENTS.md`.

Konflikt se nikdy neřeší potichu — vždy se označí a čeká se na potvrzení uživatele (viz `CLAUDE.md` §6).

## 4. Mapa adresáře

```
/                                index.html (Domů) — hotovo
/o-atelieru/                     hotovo
/co-navrhuji/                    rozcestník + 6 podstránek — hotovo
/spoluprace/                     hotovo
/galerie/                        filtr + lightbox — hotovo
/kroos/                          hotovo
/kontakt/                        adresa + mapa (bez formuláře) — hotovo
/assets/                         css (5 souborů), js (4 moduly), img (zatím prázdné)
404.html, sitemap.xml, robots.txt, README.md
.claude/skills/                  lokální skills — viz AGENTS.md
memory/                          index.md, pravidla.md, memory.md
atelier-krivanek-claude-code-prompt.md  plný brief (kopie `prompt.md`)
AGENTS.md, CLAUDE.md
```

Plná cílová struktura repozitáře je v `AGENTS.md` → „Struktura repozitáře (cílová)".

## 5. Vztah k jiným paměťovým systémům v repu

Pokud se v projektu použije skill `web-security-memory`, vytvoří vlastní, samostatný paměťový systém v `.claude/security/` (STATE.md, DECISIONS.md, CSP-LOG.md, AUDIT-LOG.md) — ten je specializovaný na bezpečnostní rozhodnutí a headers, nekopíruje se sem a tenhle systém ho nenahrazuje. Pokud vznikne, přidej sem odkaz.

## 6. Rychlý start na začátku session

1. Přečti `CLAUDE.md` → `memory/index.md` (tento) → `memory/pravidla.md` → `memory/memory.md` → `AGENTS.md`.
2. V `memory.md` zkontroluj, kde práce skončila a co je otevřené.
3. Nový požadavek uživatele porovnej s „Klíčová rozhodnutí" a „Záměrně nedokončeno" v `memory.md`, dřív než se implementuje.
4. Pracuj.
5. Každou změnu zaloguj do `memory.md` ve stejném tahu, ve kterém se stala.
