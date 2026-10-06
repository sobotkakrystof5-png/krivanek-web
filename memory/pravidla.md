# PRAVIDLA — jak se vede paměť tohoto projektu

## 1. Základní princip

Každá změna projektu se loguje do `memory.md` ihned — ve stejném tahu, ve kterém se stala. Ne na konci session, ne po upomínce.

## 2. Co se loguje

Vytvoření/přejmenování/smazání souboru nebo stránky; změna obsahu, designu nebo textu; technická rozhodnutí (stack, knihovna, hosting, integrace); cokoli vyzkoušené, co **nefungovalo**; cokoli záměrně odložené a proč; otevřené otázky čekající na uživatele/klienta.

## 3. Co se neloguje

Vyprávění procesu („nejdřív jsem hledal, pak jsem..."); cokoli viditelné přímo v kódu; sebechvála nebo shrnutí typu „vše hotovo a funguje"; duplikace toho, co už je v `CLAUDE.md`/`AGENTS.md`; čistě read-only session bez jediné změny projektu.

## 4. Formát changelog záznamu

Nejnovější záznam nahoře:

```markdown
### YYYY-MM-DD — Krátký název
- **Co:** jedna dvě věty, fakticky, minulý čas.
- **Proč:** důvod, nebo „na pokyn uživatele", pokud jiný důvod není.
- **Dopad:** co dalšího se to dotýká (jiné sekce, SEO, responzivita, stack). „Izolované", pokud nic.
- **Soubory:** `cesta/k/souboru`
```

Vždy absolutní datum (ne „včera", „minulý týden"). Žádná vymyšlená fakta o klientovi/firmě — chybějící informace jde do „Otevřené otázky", nikdy se nedoplní jako předpoklad do projektu.

## 5. Údržba ostatních sekcí memory.md

| Sekce | Aktualizuje se, když |
|---|---|
| Aktuální stav | Změní se fáze nebo se dokončí větší celek. Přepisuje se, ne přidává. |
| Klíčová rozhodnutí | Padne rozhodnutí, ke kterému se už nebude vracet. Jen se přidává, nikdy nemaže. |
| Otevřené otázky | Vznikne otázka na uživatele/klienta. Zodpovězená otázka se maže, ne škrtá — odpověď jde do Klíčových rozhodnutí nebo do changelogu. |
| Záměrně nedokončeno | Něco se teď vědomě přeskočí. Chrání to před tím, aby to příští session „opravila" jako chybu. |

## 6. Kdy sahat na CLAUDE.md / AGENTS.md / index.md

- `CLAUDE.md` — jen na výslovnou změnu chování/tónu/procesu od uživatele. Nikdy sem nepatří živý stav projektu.
- `AGENTS.md` — když se změní stack, struktura, build příkazy nebo konvence.
- `memory/index.md` — když přibude soubor systému nebo se změní fáze projektu.
- `memory/pravidla.md` — jen na výslovný pokyn uživatele.

## 7. Začátek / konec session

**Začátek:** přečti `CLAUDE.md` → `index.md` → `pravidla.md` → `memory.md` → `AGENTS.md`. Nový požadavek porovnej s Klíčovými rozhodnutími a Záměrně nedokončeno dřív, než se implementuje — kolizi označ hned, ne až po implementaci.

**Konec:** ověř, že každá změna z téhle session je v changelogu, že Aktuální stav sedí, a že žádná zodpovězená otevřená otázka tam ještě nevisí.

## 8. Ověřuj, nepředpokládej

Pokud `memory.md` tvrdí něco o souboru, funkci nebo nastavení, na které se má navázat, ověř to v aktuálním projektu, než se to použije. Paměť popisuje stav *v době zápisu*, ne nutně teď.
