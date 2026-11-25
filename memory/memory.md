# MEMORY — živý stav

Co se skutečně stalo, aktuální stav a proč. Formátová pravidla: viz `pravidla.md`.

### 2026-11-25 — Push a nasazení korektur na Vercel
- **Co:** Commit `ace22c9` (vedoucí ateliéru, otočená img-4632, sloučené skupiny v Galerii rodinných domů) pushnut do `main`; Vercel ho automaticky nasadil na https://krivanek-web.vercel.app.
- **Proč:** na pokyn uživatele.
- **Dopad:** Doména atelierkrivanek.cz stále není napojená.
- **Ověřeno:** na živém webu je „Vedoucím ateliéru je…“, Galerie rodinných domů má 18 dlaždic, img-4632 se servíruje v nové otočené verzi (131 050 B) s rámečkem na výšku.
- **Soubory:** žádné změny kódu

### 2026-11-25 — Korektury klienta: vedoucí ateliéru, otočená fotka, sloučené skupiny v Galerii
- **Co:** Na O ateliéru úvodní věta „Ateliér vedu já, Ing. Tomáš Křivánek.“ změněna na „Vedoucím ateliéru je Ing. Tomáš Křivánek.“, navazující „se mnou spolupracuje“ na „s ním spolupracuje“. Fotka `rekonstrukce/img-4632.webp` (bytový dům) otočena o 90° doprava, teď na výšku 1440×1920; na Co navrhuji i v Galerii má rámeček `ph--portrait` a lightbox poměr 4 / 5. V Galerii rodinných domů přidány `img-1028` a `img-1031` do skupiny `rodinne-domy-4` (cover `img-3219`, 4 foto) a `img-5924` do skupiny `rodinne-domy-6` (cover `img-5919`, 4 foto); jejich samostatné dlaždice zrušeny, dlaždic je 18, fotek dál 32.
- **Proč:** na pokyn klienta (zakroužkované/šipkami označené screenshoty). Shoda staveb ověřena vizuálně: `img-1031` je stejný šedý dům s vyloženým patrem jako `img-3219/3220`, `img-1028` ho ukazuje ze svahu; `img-5924` je uliční pohled na dům s pergolou z `img-5919/5921/5935`. Šipka klienta přes `img-3214` (přízemní dům s garáží) a `img-7754` (bílý dvojdům) jen vedla přes ně, k nim nic nepřidáno.
- **Dopad:** Úvodní odstavec O ateliéru je teď ve třetí osobě, zbytek webu zůstává v první osobě. Co navrhuji / Rodinné domy ukazuje fotky dál jednotlivě, pořadí beze změny. Zavírá dvě nejisté skupiny z Otevřených otázek.
- **Ověřeno:** lokální server, lightbox skupiny 6 projde 1/4 až 4/4, otočená fotka se načítá na výšku, žádné console errory.
- **Soubory:** `o-atelieru/index.html`, `assets/img/galerie/rekonstrukce/img-4632.webp`, `co-navrhuji/rekonstrukce/index.html`, `galerie/rekonstrukce/index.html`, `galerie/rodinne-domy/index.html`, `memory/memory.md`

### 2026-10-25 — Vektorová loga v pohyblivém pruhu
- **Co:** Textové zástupce v pruhu „Spolupracuji s“ na Domů nahradilo devět místních SVG log Panattoni, Accolade, Volkswagen, GSP, JaP Jacina, AUFEER, LAWI, Spinning MB a UNO. Loga LAWI, Spinning MB a UNO byla převedena z oficiálních PNG na vektorové cesty, značka GSP z oficiální favicony. Tasso bylo z pruhu odstraněno podle upřesnění uživatele.
- **Proč:** na pokyn uživatele doplnit do posuvné řady vektorová loga.
- **Dopad:** úprava domovské stránky, stylů pruhu a briefů; všechna loga se načítají lokálně. Po kontrole náhledu se přešlo na stejně široké responzivní pozice pro každé logo, aby jejich rozteč zůstala pravidelná i při různě širokých značkách. Ostatní textové reference v briefu zůstávají.
- **Soubory:** `index.html`, `assets/css/pages.css`, `assets/img/logos/`, `prompt.md`, `atelier-krivanek-claude-code-prompt.md`, `memory/memory.md`

### 2026-10-25 — Odstranění sesterských společností z webu
- **Co:** Z webu byly odebrány stránky a zmínky o KROOS a Projektu 360, včetně položek navigace, domovské sekce a odkazů v popisu interiérů a procesu. Sitemapu jsme aktualizovali a původní adresy trvale přesměrovali na úvodní stránku.
- **Proč:** na pokyn uživatele, který tyto informace na webu nechce.
- **Dopad:** Web má 16 stránek. Sesterské společnosti se v jeho obsahu neuvádějí.
- **Soubory:** `sesterske-spolecnosti/`, `index.html`, `co-navrhuji/interiery/index.html`, `proces/index.html`, `assets/css/pages.css`, `sitemap.xml`, `vercel.json`, `AGENTS.md`, `README.md`, `CLAUDE.md`, `prompt.md`, `atelier-krivanek-claude-code-prompt.md`, `memory/index.md`, `memory/memory.md`

### 2026-10-25 — Odstranění sekce Z realizací z KROOS
- **Co:** Ze stránky KROOS odstraněna celá sekce „Z realizací“ včetně placeholderu vybavení interiéru.
- **Proč:** na upřesněný pokyn uživatele.
- **Dopad:** Ostatní obsah stránky sesterské společnosti zůstává.
- **Soubory:** `sesterske-spolecnosti/kroos/index.html`, `memory/memory.md`

### 2026-10-25 — Odebrání placeholderu detailu montáže
- **Co:** Ze sekce „Z realizací“ na stránce KROOS odstraněna prázdná karta „Detail montáže“.
- **Proč:** na pokyn uživatele.
- **Dopad:** Placeholder „Vybavení interiéru“ a ostatní obsah sesterských společností zůstávají beze změny.
- **Soubory:** `sesterske-spolecnosti/kroos/index.html`, `memory/memory.md`

## Aktuální stav

- **Projekt:** web Ateliér Křivánek (Ing. Tomáš Křivánek, architekt; Mladá Boleslav / Bradlec)
- **Fáze:** korektury po konzultaci s klientem (2026-11-20) zapracované, fotky od klienta (smyčka, portrét, hory) jsou na webu, čeká se na odkaz na Instagram Projekt 360 (viz Otevřené otázky) a na finální společný hovor před spuštěním. 16 stránek, 70 fotek v pěti oblastech Galerie, fotky stejné stavby jsou v Galerii sloučené do projektových dlaždic.
- **Stack:** čisté HTML5 + CSS + Vanilla JS, žádný framework, žádný build step, žádný backend, žádný formulář; vícestránkový web (vlastní URL per stránka)
- **Co existuje:** dokumentace (`CLAUDE.md`, `AGENTS.md`, `README.md`), plný brief `atelier-krivanek-claude-code-prompt.md`, paměťový systém (`memory/`), lokální skills. Web: 16 stránek + `404.html`, 5 CSS souborů, 4 JS moduly, `sitemap.xml`, `robots.txt`. Galerie a oborové stránky obsahují 70 optimalizovaných WebP fotek v pěti oblastech; samostatný portrétní slot vedle citátu zůstává placeholderem.

## Klíčová rozhodnutí

Rozhodnutí, ke kterým se nebudeme bez výslovného pokynu uživatele vracet.

- **(datum neznámý, migrováno 2026-09-22 z `CLAUDE.md` §5 při zavedení memory systému)** — Vícestránkový web, čistý HTML/CSS/JS, bez frameworku a bez build stepu.
- **(datum neznámý, migrováno 2026-09-22)** — Bez kontaktního formuláře — kontakt jen přes telefon, e-mail a mapu (výslovné přání klienta).
- **(datum neznámý, migrováno 2026-09-22)** — Ceník bez čísel — cena se odvíjí od rozsahu a fází (konzultace → návrh → úprava → odsouhlasení → kolaudace).
- **(datum neznámý, migrováno 2026-09-22)** — Značka přejmenována na „Ateliér Křivánek" (z „Ateliér v Zelené").
- **2026-09-22** — Zdrojem zadání je brief, který uživatel vložil do `prompt.md` a který je zkopírovaný do `atelier-krivanek-claude-code-prompt.md`. Vizuální motiv: tenká technická linka (kóty, řezy, obrysy) + číslované indexy.
- **2026-09-22** — Šest oblastí tvorby byly **kategorie realizací**, ne služby: rodinné domy, rekonstrukce a revitalizace, průmyslové a administrativní stavby, komerční a sportovní stavby, interiéry, projekty a studie. Rozhodnutí z 2026-10-25 tuto kategorii odebírá.
- **2026-09-22** — Hlavička a patička jsou synchronizované kopie v HTML, ne JS include. Cesty jsou absolutní, web se proto musí servírovat z kořene (ne `file://`).
- **2026-09-22** — Akcent z briefu `#6E7D5B` měl na papírové bílé kontrast 4.09:1 a neprojde WCAG AA pro běžný text. Použitý je ztmavený `#5C6948` (5.44:1), hue zůstává. Světlejší tón žije dál jako `--c-accent-soft` pro dekoraci a pro text na tmavém pozadí.
- **2026-09-22** — Zaveden pětidokumentový paměťový systém (`memory/index.md`, `memory/pravidla.md`, `memory/memory.md` + propojení s `CLAUDE.md`/`AGENTS.md`). Živý stav se od teď vede tady, ne v `CLAUDE.md` §5.
- **2026-09-23** — Akcent přepnut z jednobarevné šalvěje na dvoubarevnou modrou/zelenou odvozenou z loga staré značky „Ateliér v Zelené" (na výslovný pokyn uživatele — logo poslal jako předlohu barev, ne jako návrh na obnovení staré značky). Papír a grafit beze změny, formule briefu „papír + grafit + střídmý akcent" drží dál, akcent má teď dva tóny.
- **2026-10-06** — Galerie má pro každou ze šesti oblastí vlastní podstránku `/galerie/<slug>/` (slugy stejné jako `/co-navrhuji/<slug>/`); `/galerie/` je jen rozcestník bez filtru a bez „Vše". Na pokyn uživatele, který vědomě zvolil tuhle variantu místo prolinkování na existující podstránky Co navrhuji. **Daň:** stejné fotky jsou na dvou místech (Co navrhuji + Galerie), při dosazování reálných fotek se musí měnit v obou.
- **2026-09-25** — Hero na `/` je rozdělený na dvě zóny (foto | kótová linka `.kota--v` | text), ne celoplošný overlay s podloženou fotkou. Na pokyn uživatele po auditu hero sekce — overlay verze byla vyhodnocena jako šablonovitá a motiv (technická linka) by zmizel po dosazení reálné fotky. Nezvracet zpátky na overlay bez nového pokynu.

- **2026-10-14** — Designový systém „techničtější, modernější“ na pokyn klienta: studená šedobílá `#F4F5F3`, technický rastr jen pod hero a hlavičkami stránek, Archivo (nadpisy rozšířené) + IBM Plex Mono. Nahrazuje teplý papír a Source Serif. Akcent modrá/zelená z loga beze změny.
- **2026-10-14** — „Spolupráce“ je v navigaci „Proces“ na URL `/proces/`. Sesterské společnosti (KROOS, Projekt 360) mají vlastní sekci `/sesterske-spolecnosti/` s rozbalovací nabídkou v navigaci. KROOS je „sesterská“, ne „dceřiná“ společnost a na webu není odkaz na kroossro.cz.
- **2026-10-25** — Na pokyn uživatele se sesterské společnosti KROOS a Projekt 360 na webu neuvádějí. Jejich stránky a odkazy byly odstraněny; původní URL trvale přesměrovávají na úvodní stránku.
- **2026-10-14** — Na webu se nikde neuvádí „dříve / původním názvem Ateliér v Zelené“ (výslovný pokyn klienta).
- **2026-10-14** — Web zůstává v první osobě (Tomáš). Tým (dcera Ing. arch. Lucie Křivánková; žádná Tereza, opraveno 2026-10-15) je představený na O ateliéru, ale domlouvá se dál s Tomášem.
- **2026-10-25** — Tomáš Křivánek se na webu objeví nejvýše na dvou fotografiích: v hero a vedle citátu na Domů. Další portrétní sloty se nepřidávají; ostatní fotografie ukazují stavby a práci ateliéru.
- **2026-10-25** — Na nový přímý pokyn uživatele je hero Domů celoplošné a střídá po pěti sekundách pět existujících fotografií z Galerie (rodinný dům, rekonstrukce, školicí středisko, sportovní stavba a interiér). Nadpis „Od nápadu ke kolaudaci.“ a podpis Ing. Tomáše Křivánka zůstávají pevné; jediný portrétní slot je vedle citátu. Tím se nahrazuje dřívější rozhodnutí mít portrét v hero.

- **2026-11-20** — Na pokyn klienta se na O ateliéru znovu uvádí spolupráce s Projekt 360 s.r.o. (realizace staveb na klíč) s odkazem na jejich Instagram. Ruší rozhodnutí z 2026-10-25 o neuvádění Projektu 360; KROOS se dál neuvádí a stránky `/sesterske-spolecnosti/` zůstávají přesměrované.
- **2026-11-20** — H1 hero na Domů je „Architekt, projektant, stavitel“; „Od nápadu ke kolaudaci“ se v hero nepoužívá (opakovalo by nadpis stránky Proces).
- **2026-11-20** — Klient nenabízí zaměření stávajícího stavu ani průkazy energetické náročnosti. Na webu je neuvádět (`CLAUDE.md` §4 je v tomhle bodě zastaralý).
- **2026-11-20** — Tomáš se na webu objeví na dvou fotografiích: portrét vedle citátu na Domů a fotka z hor (lyže na batohu, mačky) vlevo od horolezeckého citátu na O ateliéru.
- **2026-11-20** — Na webu je jediné telefonní číslo, mobil 603 465 564. Pevná linka 326 332 011 se neuvádí.
- **2026-11-20** — Hero smyčka používá jen fotky, které vybral klient (`assets/img/hero/`), ne výběr z Galerie. Ruší výběr pěti snímků z 2026-10-25.
- **2026-11-20** — Identifikace: Ing. Tomáš Křivánek, IČO 16542886, neplátce DPH (DIČ se na webu neuvádí).
- **2026-11-20** — Galerie: fotky jedné stavby tvoří jednu dlaždici (obálka + skryté členy, `data-lb-group`, `data-lb-member`). Do skupin se dávají jen snímky, u kterých je shoda jistá; nejisté páry čekají na klienta.

## Otevřené otázky

Čeká na uživatele/klienta. Po zodpovězení se maže, odpověď jde do Klíčových rozhodnutí nebo changelogu.

- URL Instagramu Projekt 360 s.r.o. — ikona a odkaz jsou v HTML O ateliéru zakomentované, CSS `.partner` je hotové.
- Nejisté skupiny v Galerii: rodinné domy rd + rd1; rekonstrukce img-3207 (k img-3209/3213?), img-4632 + img-4654; komerční img-0422 + img-0428; interiéry img-0050 + img-0052.
- Krok 02 v Procesu slibuje cenový návrh se studií, blok „Cena“ na stejné stránce říká, že přesnou cenu klient dostane po první konzultaci. Sjednotit na finálním hovoru.
- Finální společný hovor s klientem (neděle od 10:00) a jméno druhého schvalovatele („pan Drakon“, ověřit).

- Cílová klíčová slova pro SEO — nedodán měřený seznam (Collabim apod.); keywords se nevymýšlí.
- Milníky do časové osy na `/o-atelieru/` kromě 1991, 1997 a přejmenování — nedodány, nedomýšlí se.

## Záměrně nedokončeno

Ať to příští session neopraví jako chybu.

- **Kontaktní formulář.** Záměrně žádný — kontakt jen `tel:`, `mailto:` a mapa. Výslovné přání klienta.
- **Ceník s čísly.** Záměrně bez čísel — cena se odvíjí od rozsahu a fází.
- **Portrétní fotografie a další nedodané podklady.** Jediné portrétní místo na Domů, vedle citátu, zůstává placeholderem do dodání fotky. Fotografie se nepřidávají do každé sekce jen kvůli zaplnění prostoru.
- **Konkrétní keyword-optimalizace title/H1/meta.** Čeká na měřený seznam klíčových slov od klienta.

## Changelog

Nejnovější nahoře.

### 2026-11-20 — Push a nasazení na Vercel
- **Co:** Commit `cbda139` (korektury po konzultaci, fotky od klienta, IČO, bez pevné linky) pushnut do `main` na GitHub. Vercel projekt `krivanek-web` ho automaticky nasadil do produkce na https://krivanek-web.vercel.app. Pracovní větev `claude/krivanek-atelier-web-updates-c2fd67` je na GitHubu taky.
- **Proč:** na pokyn uživatele.
- **Dopad:** Doména atelierkrivanek.cz stále není napojená. Repo je veřejné, takže jsou vidět i fotky od klienta, brief a memory.
- **Ověřeno:** `/`, `/o-atelieru/`, `/kontakt/`, `/galerie/rodinne-domy/` a nové fotky vrací 200; na živém webu je nový hero, IČO, odkaz na archilarkie.cz a pevná linka chybí.
- **Soubory:** žádné změny kódu

### 2026-11-20 — Odkaz na web dcery
- **Co:** Jméno Ing. arch. Lucie Křivánkové v úvodu O ateliéru odkazuje na https://archilarkie.cz (nové okno, `rel="noopener"`, skrytý text pro čtečky).
- **Proč:** na pokyn uživatele, URL dodal klient.
- **Dopad:** Izolované na `/o-atelieru/`.
- **Soubory:** `o-atelieru/index.html`, `memory/memory.md`

### 2026-11-20 — Fotky od klienta: smyčka, portrét, hory
- **Co:** Hero na Domů střídá místo pěti snímků z Galerie sedm fotografií ze složky klienta „UVODNÍ SMYČKA“ (`assets/img/hero/`, WebP 2400 px): řadové domy, bytový dům, Spinning centrum, administrativní budova, komerční stavba, firemní areál, interiér recepce. Přibyla tlačítka 06 a 07. Ze složky „foto profil web“ jde IMG_3753 (úsměv, dobře vidět obličej) jako portrét vedle citátu na Domů a IMG_0962 (výstup s lyžemi na batohu) místo placeholderu z hor na O ateliéru (`assets/img/portret/`).
- **Proč:** na pokyn uživatele, klient fotky dodal.
- **Dopad:** IMG_3927 (selfie zespodu) a malá fotka e351d902… (247 px) použité nejsou. Portrét má výřez `object-position: 50% 30%` (`.ph__img--face`). Fotky v Galerii se nemění. Briefy, AGENTS.md a README jsou upravené.
- **Soubory:** `index.html`, `o-atelieru/index.html`, `assets/img/hero/`, `assets/img/portret/`, `assets/css/components.css`, `AGENTS.md`, `README.md`, `prompt.md`, `atelier-krivanek-claude-code-prompt.md`, `memory/memory.md`

### 2026-11-20 — Bez sekce „Co bude dál“ na Kontaktu
- **Co:** Ze stránky `/kontakt/` zmizela sekce „Co bude dál / Po prvním ozvání“ se třemi kroky (telefonát, schůzka, nabídka podle rozsahu). Odstraněny i už nepoužité styly `.steps`.
- **Proč:** na pokyn uživatele.
- **Dopad:** Kontakt končí kontaktními údaji a mapou, pod nimi je hned patička. Postup spolupráce dál popisuje stránka `/proces/`.
- **Soubory:** `kontakt/index.html`, `assets/css/pages.css`, `memory/memory.md`

### 2026-11-20 — Pryč s pevnou linkou
- **Co:** Číslo pevné linky 326 332 011 zmizelo z patičky všech 16 stránek, z kontaktního bloku na `/kontakt/` a z meta popisu Kontaktu. Na webu zůstává jen mobil 603 465 564.
- **Proč:** na pokyn uživatele.
- **Dopad:** JSON-LD už předtím uváděl jen mobil. Briefy jsou upravené.
- **Soubory:** všech 16 stránek `*/index.html`, `prompt.md`, `atelier-krivanek-claude-code-prompt.md`, `memory/memory.md`

### 2026-11-20 — IČO a neplátce DPH
- **Co:** Placeholdery `IČO [DOPLNIT]` v patičce všech 16 stránek nahradil text „Ing. Tomáš Křivánek, IČO 16542886, neplátce DPH“. Na `/kontakt/` jsou v identifikačních údajích „IČO 16542886 · neplátce DPH“ místo IČO a DIČ.
- **Proč:** na pokyn uživatele, údaje dodal klient.
- **Dopad:** DIČ se neuvádí, protože klient není plátce DPH. Na `404.html` IČO nebylo a není.
- **Soubory:** všech 16 stránek `*/index.html`, `memory/memory.md`

### 2026-11-20 — Fotka z hor vedle citátu
- **Co:** Placeholder fotky z hor se přesunul z pravé strany časové osy do sekce s citátem „Pokora a nadhled…“ na O ateliéru, vlevo od citátu. Časová osa je zase jednosloupcová a nepoužité CSS `.dual--story` bylo odstraněno.
- **Proč:** na pokyn uživatele.
- **Dopad:** Na mobilu je fotka nad citátem. Izolované na `/o-atelieru/`.
- **Soubory:** `o-atelieru/index.html`, `assets/css/pages.css`, `memory/memory.md`

### 2026-11-20 — Korektury podle konzultace s klientem
- **Co:** Hero Domů má eyebrow „Mladá Boleslav, Bradlec“, H1 „Architekt, projektant, stavitel“, podpis „Ing. Tomáš Křivánek“ a nový krátký odstavec. O ateliéru: představení v první osobě s dcerou „na některých návrzích“, nový blok „Realizace na klíč“ s Projekt 360 s.r.o., zkrácené texty 1989 a 1991 a placeholder pro fotku z hor vpravo od časové osy. Co navrhuji: nový úvod (těžiště tvoření, slogan s tečkou), bez věty o pozemku u rodinných domů, „revitalizace panelových domů“ místo „panelový dům v Jičíně“, „byty“ místo „byt“. Proces: přepsané texty kroků 01 až 05, z kroku 05 zmizelo zaměření a průkaz energetické náročnosti. Galerie: zrušen záměrný posun prostředního sloupce karet; fotky stejné stavby jsou na podstránkách Galerie sloučené do jedné dlaždice se štítkem počtu a lightbox prochází jen fotky daného projektu (`data-lb-group`).
- **Proč:** zápis požadovaných úprav z konzultace s klientem, předaný uživatelem.
- **Dopad:** Posun sloupce zmizel i z karet na Domů (stejná komponenta `.cards`). Seskupení se týká jen podstránek Galerie, ne podstránek Co navrhuji. Fotky do hero smyčky, portrét, fotka z hor, odkaz na web dcery a Instagram Projekt 360 nebyly dodány, viz Otevřené otázky. Meta popis O ateliéru dál uvádí „Oprávnění MPO č. 799“.
- **Soubory:** `index.html`, `o-atelieru/index.html`, `co-navrhuji/index.html`, `co-navrhuji/rekonstrukce/index.html`, `proces/index.html`, `galerie/*/index.html`, `assets/css/pages.css`, `assets/css/gallery.css`, `assets/js/lightbox.js`, `atelier-krivanek-claude-code-prompt.md`, `prompt.md`, `memory/memory.md`

### 2026-10-25 — Zdůraznění ceny podle rozsahu projektu

- **Co:** Nadpis cenové části na stránce `/proces/` nově výslovně říká, že se cena odvíjí od rozsahu projektu; přehled fází zůstává jako vysvětlení.
- **Proč:** na upřesnění uživatele.
- **Dopad:** Změnil se pouze nadpis cenového bloku.
- **Soubory:** `proces/index.html`, `memory/memory.md`

### 2026-10-25 — Výslovné nabídnutí kontaktů na navazující profese

- **Co:** Text v bloku „Navazující spolupráce“ nyní přímo říká, že Tomáš na požádání sežene kontakt na řemeslníky, dodavatele i specialisty.
- **Proč:** upřesnění uživatele, že tato nabídka má být v sekci jasně vyslovená.
- **Dopad:** Jen zřetelnější formulace stávající informace na stránce `/proces/`.
- **Soubory:** `proces/index.html`, `memory/memory.md`

### 2026-10-25 — Propojení ceny a navazující spolupráce

- **Co:** Oddělené sekce „Jak se počítá“ a „Zajištění kontaktů“ na stránce Proces byly sjednoceny do jednoho bloku. Model ceny nově ukazuje pět navazujících fází a vedle něj pokračování projektu přes kontakty na profese a sesterskou společnost Projekt 360.
- **Proč:** na pokyn uživatele, který chtěl obsah pevněji propojit a udržet pozornost.
- **Dopad:** Změna se týká pouze stránky `/proces/`; nezměnily se ceny ani rozsah nabízených služeb.
- **Soubory:** `proces/index.html`, `assets/css/pages.css`, `memory/memory.md`

### 2026-10-25 — Sjednocení velikosti fotografií v Galerii

- **Co:** Náhledy fotografií na pěti podstránkách Galerie mají jednotný poměr stran 4:3 a řadí se do pravidelné mřížky. Kliknutím se dál otevře celý snímek v lightboxu.
- **Proč:** na pokyn uživatele, aby fotografie byly stejně velké a přehledně zarovnané.
- **Dopad:** Oříznutí se týká jen náhledů v Galerii; původní snímky a jejich poměry v lightboxu i fotografie na stránkách „Co navrhuji“ zůstávají beze změny.
- **Soubory:** `assets/css/gallery.css`, `galerie/*/index.html`, `memory/memory.md`

### 2026-10-25 — Výraznější podpis architekta v hero

- **Co:** Podpis „Ing. Tomáš Křivánek, architekt“ dostal větší velikost písma a výraznější řez Archivo místo drobného monospaced stylu.
- **Proč:** na přímý pokyn uživatele, aby byl podpis v hero více vidět.
- **Soubory:** `assets/css/pages.css`, `memory/memory.md`

### 2026-10-25 — Postupné odhalení sedmi kroků procesu

- **Co:** Jednotlivé kroky na stránce `/proces/` se při příchodu do záběru jemně odhalují podle pořadí s krátkým odstupem; prodloužil se limit odstupu, aby se odlišil i poslední ze sedmi kroků.
- **Proč:** na pokyn uživatele.
- **Dopad:** Používá se existující animace `.rise`; nastavení `prefers-reduced-motion` zůstává respektováno.
- **Soubory:** `proces/index.html`, `assets/js/site.js`, `memory/memory.md`

### 2026-10-25 — Celoplošné fotohero s automatickým střídáním

- **Co:** Hero na Domů nově přes celou šířku a výšku úvodní plochy prolíná pět již dodaných fotografií z Galerie: `rd-bradlec.webp`, `img-4814.webp`, `skolici-stredisko-jap-mn-hradiste.webp`, `spinning-3.webp` a `interier-rd2.webp`. Snímky se mění po pěti sekundách; zůstává viditelný titulek „Od nápadu ke kolaudaci.“, podpis Ing. Tomáše Křivánka, text a odkazy na kontakt a tvorbu. Přibyly přímé volby snímku a pozastavení; automatické střídání se vypíná při `prefers-reduced-motion` nebo při skrytí panelu.
- **Proč:** na přímý pokyn uživatele, který chtěl výrazně upravit hero na střídající se architektonické fotografie z Galerie.
- **Dopad:** původní portrétní slot v hero zanikl; portrét zůstává pouze vedle citátu. Žádné nové obrazové soubory nebyly přidány.
- **Soubory:** `index.html`, `assets/css/pages.css`, `assets/css/components.css`, `assets/css/tokens.css`, `assets/js/hero-slider.js`, `AGENTS.md`, `CLAUDE.md`, `README.md`, briefy, `memory/memory.md`

### 2026-10-25 — Postupné odhalení milníků časové osy

- **Co:** Tři milníky na stránce `/o-atelieru/` se při příchodu do záběru jemně odhalují postupně s krátkým odstupem.
- **Proč:** na pokyn uživatele.
- **Dopad:** Používá se existující animace `.rise`; systémové nastavení omezení pohybu zůstává respektováno.
- **Soubory:** `o-atelieru/index.html`, `memory/memory.md`

### 2026-10-25 — Pruh spoluprací přesunut pod úvodní citát

- **Co:** Blok „Spolupracuji s“ a jeho pruh log byl přesunut z místa za procesem bezprostředně pod úvodní citát na Domů.
- **Proč:** na pokyn uživatele.
- **Dopad:** Seznam spolupracujících společností i jeho animace zůstaly beze změny; změnilo se pouze pořadí sekcí na Domů.
- **Soubory:** `index.html`, `memory/memory.md`

### 2026-10-25 — Náhled procesu odstraněn z Domů

- **Co:** Z Domů byl odstraněn blok „Jak to u mě probíhá“ včetně stručného popisu, odkazu a pěti kroků. Samostatná stránka `/proces/` zůstává dostupná.
- **Proč:** na pokyn uživatele podle přiloženého snímku.
- **Dopad:** Domů už neobsahuje samostatný náhled průběhu spolupráce; struktura úvodní stránky i brief byly upraveny. Nadpis a podrobnosti procesu zůstávají na `/proces/`.
- **Soubory:** `index.html`, `prompt.md`, `atelier-krivanek-claude-code-prompt.md`, `memory/memory.md`

### 2026-10-25 — Jemné mikrointerakce a přechody lightboxu

- **Co:** Fotografie v rozcestníkových kartách a galerii reagují na hover i klávesnicový focus mírným ztlumením a posunem výřezu. Tlačítka mají lehkou odezvu při stisku; lightbox se měkce otevírá a zavírá a při přepínání snímků naznačí směr pohybu.
- **Proč:** na pokyn uživatele pro zpříjemnění rozhraní.
- **Dopad:** Odezvy jsou omezené na interaktivní prvky. Globální pravidla `prefers-reduced-motion` zkracují přechody a animace; časování zavření lightboxu se při tomto nastavení přeskočí.
- **Soubory:** `assets/css/components.css`, `assets/css/pages.css`, `assets/css/gallery.css`, `assets/js/lightbox.js`

### 2026-10-25 — Zvětšení portrétu vedle citátu

- **Co:** Na desktopu byly sloupce textu a portrétu u citátu na Domů nastaveny na stejnou šířku.
- **Proč:** na pokyn uživatele.
- **Dopad:** Větší prostor dostane portrétní placeholder vedle citátu; samostatný textový citát na O ateliéru zůstává jednosloupcový.
- **Soubory:** `assets/css/pages.css`, `prompt.md`, `atelier-krivanek-claude-code-prompt.md`, `memory/memory.md`

### 2026-10-25 — Portrét přesunut vedle citátu na Domů

- **Co:** Druhé místo s fotografií Tomáše bylo přesunuto z O ateliéru vedle hlavního citátu na Domů. Portréty tak zůstávají pouze v hero a u citátu, celkem nejvýše dvakrát. Osobní motto na O ateliéru je nyní textové.
- **Proč:** na přímý pokyn uživatele podle přiloženého snímku.
- **Dopad:** Domů obsahuje dvě portrétní místa, bez dalších fotografií u procesu a sesterských společností. Skutečná fotografie nebyla dodána, proto vedle citátu zůstává označený placeholder.
- **Soubory:** `index.html`, `o-atelieru/index.html`, `AGENTS.md`, `CLAUDE.md`, `prompt.md`, `atelier-krivanek-claude-code-prompt.md`, `memory/memory.md`

### 2026-10-25 — Zjednodušení portrétních a prezentačních fotografií

- **Co:** Portrét Ing. Tomáše Křivánka je umístěný pouze do hero na Domů a jednou do osobní sekce na O ateliéru. Z Domů odstraněny doprovodné fotografie u citátu, procesu a sesterských společností i prázdná šestá karta. Na O ateliéru odstraněny opakované týmové a pracovní foto sloty; spolupráce s Lucií zůstala v úvodním textu.
- **Proč:** na pokyn uživatele, který chce Křivánka ukázat nejvýše jednou nebo dvakrát a omezit nadbytečné placeholdery.
- **Dopad:** Domovská stránka zůstává vizuálně zaměřená na nabídku a projekty, stránka O ateliéru na zkušenosti a osobní motto. Veškerá portfoliová fotografie v pěti oblastech zůstala beze změny. Skutečné portrétní fotky zatím nebyly dodány.
- **Soubory:** `index.html`, `o-atelieru/index.html`, `assets/css/pages.css`, `AGENTS.md`, `CLAUDE.md`, `prompt.md`, `atelier-krivanek-claude-code-prompt.md`, `memory/memory.md`

### 2026-10-25 — Odstranění sekce kvalifikací z O ateliéru

- **Co:** Ze stránky O ateliéru odstraněn celý blok „Čím to mohu doložit“ včetně vzdělání, energetických průkazů, autorizace a placeholderu PDF. Stejný blok byl odebrán z požadavků v briefu a z README.
- **Proč:** na pokyn uživatele.
- **Dopad:** Časová osa historie zůstává; ostatní obsah stránky se nemění.
- **Soubory:** `o-atelieru/index.html`, `prompt.md`, `atelier-krivanek-claude-code-prompt.md`, `README.md`, `memory/memory.md`

### 2026-10-25 — Odstranění placeholderové sekce Z realizací

- **Co:** Ze stránky Projekt 360 odstraněna sekce „Z realizací“ se dvěma prázdnými kartami rozestavěné a dokončené stavby.
- **Proč:** na pokyn uživatele.
- **Dopad:** Změna se týká jen stránky Projekt 360; ostatní části stránky zůstaly.
- **Soubory:** `sesterske-spolecnosti/projekt-360/index.html`, `memory/memory.md`

### 2026-10-25 — Odstranění oblasti Projekty a studie

- **Co:** Na pokyn uživatele odebrána oblast „Projekty a studie“ z webu. Smazány její dvě podstránky, karta na Domů a v rozcestnících; odstraněny odkazy z desktopové i mobilní navigace, aktualizovány počty, sitemap, briefy a dokumentace. Staré URL se přesměrovávají na příslušné přehledy.
- **Dopad:** Web má pět oblastí a 19 stránek plus `404.html`. Fotografie a stránky zbývajících oblastí zůstaly beze změny.
- **Soubory:** `index.html`, `co-navrhuji/`, `galerie/`, `sitemap.xml`, `vercel.json`, `AGENTS.md`, `README.md`, `prompt.md`, `atelier-krivanek-claude-code-prompt.md`, `memory/memory.md`

### 2026-10-25 — Fotografie doplněny do pěti oblastí

- **Co:** Ze složky „novy web“ doplněno 70 různých fotografií do rodinných domů (32), rekonstrukcí a bytových domů (12), průmyslových a administrativních staveb (7), komerčních a sportovních staveb (10) a interiérů (9). Dvě přesné kopie byly vynechány. Obrázky jsou převedené do WebP a Galerie i podstránky Co navrhuji používají stejné soubory.
- **Proč:** na pokyn uživatele.
- **Dopad:** `/`, `/galerie/` i `/co-navrhuji/` zobrazují obálkové fotky pěti oblastí a Galerie uvádí aktuální počty snímků. Oblast „Projekty a studie“ zůstala s placeholdery, protože pro ni ve zdrojové složce nebyly podklady.
- **Soubory:** `assets/img/galerie/`, `index.html`, `galerie/`, `co-navrhuji/`, `assets/css/components.css`, `atelier-krivanek-claude-code-prompt.md`, `AGENTS.md`, `README.md`, `memory/memory.md`

### 2026-10-15 — Oprava týmu: žádná Tereza

- **Co:** Na pokyn uživatele odstraněna Tereza. Na návrzích pracuje jen dcera Ing. arch. Lucie Křivánková. Upraven text na Domů (`pull__sub`) a na O ateliéru (úvod týmu, karty týmu 3 → 2, desktopová mřížka `.team` 2 sloupce).
- **Dopad:** Zrušena otevřená otázka na příjmení Terezy. Role u Lucie zůstává „Fakulta architektury ČVUT", ale „Ing. arch." naznačuje dokončené studium, ověřit u klienta.
- **Soubory:** `index.html`, `o-atelieru/index.html`, `assets/css/pages.css`, `atelier-krivanek-claude-code-prompt.md`, `memory/memory.md`

### 2026-10-14 — Push a nasazení na Vercel

- **Co:** Commit `1b722a1` (redesign podle připomínek klienta) pushnut do `main` na GitHub. Vercel projekt `krivanek-web` je napojený na repo a nasadil ho automaticky na https://krivanek-web.vercel.app.
- **Proč:** na pokyn uživatele.
- **Dopad:** Každý push do `main` se rovnou nasadí do produkce na Vercelu. Doména atelierkrivanek.cz zatím napojená není (canonical a sitemap na ni už míří).
- **Ověřeno:** nové URL vrací na produkci 200, `/spoluprace/` a `/kroos/` 404, na živém webu je nové CSS i navigace.
- **Soubory:** žádné změny kódu

### 2026-10-14 — Redesign a obsah podle připomínek klienta

- **Co:** (1) Vzhled: studená šedobílá místo teplého papíru, jemný technický rastr (pseudoprvek `::before` s maskou) pod `.herosplit` a `.phead`, písmo Archivo (nadpisy `font-stretch: 112%`, váha 500) + IBM Plex Mono místo Source Serif 4 + Plex Sans. (2) „Původním názvem Ateliér v Zelené“ odstraněno z patičky, Kontaktu a schema (`alternateName`). (3) `/spoluprace/` → `/proces/`, v navigaci „Proces“. (4) Místo položky KROOS „Sesterské společnosti“ s rozbalovací nabídkou (vzor `.nav__dd` jako Galerie): `/sesterske-spolecnosti/` (rozcestník, `.cards--two`), `/sesterske-spolecnosti/kroos/` (přesunuto z `/kroos/`), `/sesterske-spolecnosti/projekt-360/` (nová). KROOS bez odkazu na kroossro.cz, s jednatelem, kontaktem ateliéru a „plátce DPH“. „Dceřiná“ → „sesterská“ všude. (5) Tým na `/o-atelieru/` (`.team`, tři portréty), lead stránky přepsán (dřív tvrdil „žádné projektové týmy“), zmínka o týmu na Domů pod citátem. Na Domů nový blok sesterských společností (`.sister`), na Proces věta o realizaci přes Projekt 360. (6) Desktopová navigace až od 75em (dřív 62em) v CSS i `site.js`.
- **Proč:** připomínky klienta předané uživatelem. Volby písma (Archivo + Plex Mono), pozadí (studená bílá + rastr jen v hero/hlavičkách) a názvu (KROOS, ne „KROSS“ z poznámek) potvrdil uživatel. Poznámku klienta „Firmy – budeme“ uživatel nařídil ignorovat; web dál mluví v první osobě.
- **Dopad:** Změna designového systému (brief §2 má poznámku, platí `tokens.css`). Hlavička a patička se synchronizují v 21 stránkách. `subOrganization` ze schema na Domů odstraněno (sesterská firma není podorganizace a nemáme ověřená data). Sitemap: −2, +4 URL. Kontrasty přepočítány proti novému papíru, všechny nad AA (zelená na `--c-paper-deep` 4.56:1, nejtěsnější).
- **Ověřeno:** 21 URL ze sitemap vrací 200, `/spoluprace/` a `/kroos/` 404, žádný rozbitý interní odkaz, jeden H1 na stránku. Headless Chrome: žádné vodorovné přetékání 320–1440 px, navigace se nezalamuje, obě rozbalovací nabídky (hover, tlačítko, Esc), mobilní menu s podpoložkami, lightbox na Projekt 360, fonty Archivo + Plex Mono načtené, konzole bez chyb.
- **Co nefungovalo:** (1) Maska rastru nasazená přímo na sekci rozpouštěla i obsah; přesunuto na `::before`. (2) Se sedmi položkami a „Sesterské společnosti“ se desktopová navigace na 1024–1100 px lámala na dva řádky; breakpoint posunut na 75em, pod ním burger.
- **Soubory:** `assets/css/{tokens,base,components,pages}.css`, `assets/js/site.js`, všechny stránky (font, hlavička, patička), `index.html`, `o-atelieru/`, `proces/` (dříve `spoluprace/`), `sesterske-spolecnosti/` (nové), `kontakt/`, `co-navrhuji/`, `co-navrhuji/interiery/`, `sitemap.xml`, `AGENTS.md`, `README.md`, brief

### 2026-10-06 — Projekt nahrán na GitHub

- **Co:** Ve složce projektu založen samostatný git repozitář (větev `main`) a pushnut do veřejného repa https://github.com/sobotkakrystof5-png/krivanek-web. `.gitignore` vynechává `.vscode/` a `.DS_Store`, všechno ostatní (včetně `CLAUDE.md`, `AGENTS.md`, `memory/`, briefu a `.claude/skills`) je v repu.
- **Proč:** na pokyn uživatele. Název a viditelnost (public) zvolil sám.
- **Dopad:** Dřív projekt neměl vlastní repo, git ho viděl jen jako nesledovanou složku v repu celého domovského adresáře (`~`, remote EstatIQ). Teď má vlastní `.git`, takže `git` příkazy ve složce míří na `krivanek-web`. Do domovského repa se tahle složka přidávat nemá. Repo je veřejné, interní brief a paměť jsou tedy vidět všem.
- **Soubory:** `.gitignore` (nový)

### 2026-10-06 — Tlačítko v hlavičce: „Kontaktujte mě" místo „Ozvěte se"

- **Co:** Text tlačítka vedoucího na `/kontakt/` v hlavičce i v mobilním menu změněn z „Ozvěte se" na „Kontaktujte mě".
- **Proč:** na pokyn uživatele.
- **Dopad:** Hlavička všech 19 stránek (38 výskytů, desktop + mobilní menu). Jiné texty „Ozvěte se" na webu nebyly. Web mluví v první osobě (Tomáš), takže „mě" sedí.
- **Ověřeno:** headless Chromium 992/1100/1280/1440 px: tlačítko se nepřekrývá s navigací, nezalamuje se, žádné vodorovné přetékání. Na mobilu je tlačítko jen v menu jako dřív.
- **Soubory:** všechny stránky s hlavičkou

### 2026-10-06 — Každá oblast galerie má vlastní podstránku

- **Co:** Vzniklo šest stránek `/galerie/rodinne-domy/`, `/rekonstrukce/`, `/prumyslove-a-administrativni-stavby/`, `/komercni-a-sportovni-stavby/`, `/interiery/`, `/projekty-a-studie/`. Každá má eyebrow „Galerie · NN / 06", H1 s názvem oblasti, mřížku fotek s lightboxem (stejné sloty jako dřív v dlaždici) a blok „Dál" (další oblast, odpovídající stránka Co navrhuji, zpět na galerii). `/galerie/` je teď rozcestník šesti karet (`.cards` jako na Domů), filtrační lišta i rozklikávací `<details>` dlaždice zmizely. Odkazy `/galerie/#slug` v navigaci (desktop i mobil, všechny stránky) a v bloku „Dál" na podstránkách Co navrhuji přepsány na `/galerie/slug/`.
- **Proč:** na pokyn uživatele — nechtěl galerii „vše dohromady", ale každou oblast na vlastní podstránce. Upozorněn na duplicitu s Co navrhuji, zvolil nové stránky vědomě.
- **Dopad:** +6 URL v `sitemap.xml` (priorita 0.6). `gallery-filter.js` smazán, styly `.filt` a `.catd`/`.catlist` z `gallery.css` odstraněny, `lightbox.js` zjednodušen (jedna sada fotek na stránku). Na podstránce galerie má položka Galerie `aria-current="true"` a odkaz oblasti v podnabídce `aria-current="page"`; CSS aktivní položky menu proto hledá `[aria-current]` bez hodnoty. Hlavička se teď synchronizuje v 19 stránkách. `AGENTS.md` a `README.md` aktualizovány.
- **Ověřeno:** všech 8 galerijních URL vrací 200, žádný rozbitý interní odkaz, jeden H1 na stránku. Headless Chromium 1440 a 375 px: rozcestník má 6 karet a klik vede na správnou podstránku, lightbox na `/galerie/rodinne-domy/` počítá 3/8 → 4/8, Esc zavírá, aktivní oblast v podnabídce zvýrazněná, žádné vodorovné přetékání, žádné console errory.
- **Co nefungovalo:** nic. Poznámka mimo tuhle změnu: na mobilu se v nízkém rámečku 16/10 dlouhý popisek placeholderu ořízne (např. „horní rokytná"); stejně je to i na podstránkách Co navrhuji, zmizí s reálnými fotkami.
- **Soubory:** `galerie/index.html`, `galerie/*/index.html` (nové), hlavičky všech stránek, `co-navrhuji/*/index.html`, `assets/css/components.css`, `assets/css/gallery.css`, `assets/js/lightbox.js`, `assets/js/site.js`, `assets/js/gallery-filter.js` (smazán), `sitemap.xml`, `AGENTS.md`, `README.md`

### 2026-10-06 — Rozbalovací nabídka oblastí u Galerie v navigaci + oprava mobilního menu

- **Co:** Položka „Galerie" v hlavní navigaci má rozbalovací nabídku šesti oblastí (01–06, stejné pořadí a názvy jako Co navrhuji). Každá vede na `/galerie/#slug` a otevře odpovídající dlaždici. Na desktopu se otevírá najetím myší, klávesnicí tlačítkem se šipkou vedle odkazu (`aria-expanded`, Esc zavře a vrátí focus, odchod focusu ven zavře). V mobilním menu jsou oblasti trvale vypsané pod položkou Galerie. Klik na odkaz v mobilním menu teď menu zavře (dřív by na téže stránce zůstalo viset přes obsah). Opakovaný klik na tutéž oblast v galerii dlaždici znovu otevře, i když se hash nezměnil.
- **Proč:** na pokyn uživatele — chtěl dropdowny oblastí přímo v navbaru u Galerie, ne jen dlaždice na stránce.
- **Dopad:** Hlavička se mění na všech 13 stránkách (synchronizované kopie; `404.html` navigaci nemá). Nové třídy `.nav__dd`, `.nav__ddbtn`, `.nav__sub`, `.nav__suba`, `.nav__subnum`, `.mnav__sub`, `.mnav__suba` v `components.css`; ovládání v `site.js`. **Opravena dřívější chyba:** `backdrop-filter` na `.hdr` dělal z hlavičky containing block pro `position: fixed`, takže mobilní menu bylo vysoké jen ~96 px a zbytek položek nebyl vidět. Rozmazaný podklad je teď na `.hdr::before`, vzhled hlavičky se nemění.
- **Ověřeno:** headless Chrome 1440 a 375 px — nabídka skrytá ve výchozím stavu, otevře se najetím, nezavře se při přejetí na položky, klik otevře správnou dlaždici; klávesnice: Enter na šipce otevře, Tab jde do položek, Esc zavře a vrátí focus, zavřená nabídka se Tabem přeskočí. Mobil: menu na plnou výšku, klik na oblast menu zavře, odemkne scroll a otevře dlaždici. Žádné vodorovné přetékání, žádné console errory.
- **Soubory:** všechny stránky s hlavičkou (`index.html`, `o-atelieru/`, `co-navrhuji/` + 6 podstránek, `spoluprace/`, `galerie/`, `kroos/`, `kontakt/`), `assets/css/components.css`, `assets/js/site.js`, `assets/js/gallery-filter.js`

### 2026-10-06 — Odstraněn úvodní odstavec galerie

- **Co:** Z hlavičky `/galerie/` smazán celý `.lead` odstavec (fotky se doplňují, členění podle Co navrhuji, ovládání lightboxu). Pod H1 teď nic není.
- **Proč:** na pokyn uživatele.
- **Dopad:** Jen galerie. Podobné odstavce „Fotky se doplňují…" na šesti podstránkách `/co-navrhuji/*` zůstaly beze změny. Nápověda k ovládání lightboxu na galerii už není nikde v textu.
- **Soubory:** `galerie/index.html`

### 2026-10-06 — Dlaždice galerie sjednocené s podstránkami oblastí

- **Co:** Každá ze šesti dlaždic na `/galerie/` teď obsahuje přesně ty fotky (popisky, poměry, pořadí), které má odpovídající podstránka v `/co-navrhuji/`. Galerie má 40 slotů místo dřívějších 22 (rodinné domy 8, rekonstrukce 6, průmysl a administrativa 10, komerční a sportovní 4, interiéry 8, projekty a studie 4). Počty v `aria-label` a popiscích dlaždic upraveny. Dlaždice dostaly `id` podle slugu podstránky a `gallery-filter.js` otevře dlaždici podle hashe v URL (`/galerie/#rodinne-domy`). Na každé podstránce oblasti přibyl v bloku „Dál" odkaz do galerie, který otevře dlaždici dané oblasti. Lead galerie zmiňuje, že je členěná stejně jako Co navrhuji.
- **Proč:** na pokyn uživatele — galerie má být rozcestník šesti oblastí z Co navrhuji, každá s fotkami své podstránky. Dlaždice samotné už existovaly (2026-09-25), měnil se obsah a provázání.
- **Dopad:** Galerie a šest podstránek oblastí. Podstránka a dlaždice teď sdílí stejný seznam fotek, při dosazování reálných fotek se musí měnit na obou místech. `.catd` dostalo `scroll-margin-top`, aby skok na dlaždici (filtr i hash) neschoval nadpis pod lepivou hlavičku. Struktura URL ani stack beze změny.
- **Ověřeno:** headless Chrome 1440/1280/375 px — počty fotek v dlaždicích sedí s podstránkami, klik na dlaždici otevře jen ji a přepne lištu, lightbox počítá v rámci oblasti (3/8 u interiérů), odkaz z podstránky průmyslu otevře správnou dlaždici, žádné vodorovné přetékání, žádné console errory.
- **Soubory:** `galerie/index.html`, `assets/js/gallery-filter.js`, `assets/css/gallery.css`, `co-navrhuji/*/index.html`

### 2026-09-25 — Galerie přestavěna na rozklikávací dlaždice oblastí

- **Co:** `/galerie/` přestala zobrazovat všech 22 fotek naráz v jedné mřížce s filtrem. Šest oblastí tvorby je teď dlaždice (`<details>`, vizuálně stejná karta jako `.cards` na domovské stránce — obálka, index, název, popis). Klik na dlaždici ji rozbalí na místě a odhalí mřížku fotek dané oblasti (harmonika, jen jedna otevřená najednou). Filtrovací lišta nad dlaždicemi zůstala podle rozhodnutí uživatele — teď funguje jako dálkové ovládání týchž dlaždic: klik na oblast otevře její dlaždici a scrollne na ni, „Vše" všechny zavře a vrátí přehled. Lightbox šipkami prochází jen fotky otevřené oblasti, ne celou galerii.
- **Proč:** na pokyn uživatele, s odkazem na referenční screenshot (kartová mřížka oblastí, klik odhalí fotky dané sekce). Dvě otevřené otázky (kam vede klik, jestli nechat filtr) byly položeny uživateli a zodpovězeny: rozbalit na místě (bez nové URL), filtr nechat.
- **Dopad:** Izolované na galerii — `gallery-filter.js` přepsán (dřív skrýval/zobrazoval položky přes `hidden`, teď řídí `open` na `<details>` a synchronizuje s lištou přes `aria-pressed`/`aria-live`). `lightbox.js` upraven jen v jednom místě (výpočet viditelných položek teď respektuje i zavřené `<details>`, ne jen starý `data-filter-item`) — funguje beze změny i na podstránkách oblastí a na KROOS, kde `<details>` není. `gallery.css` dostal novou sekci pro dlaždice (`.catlist`, `.catd`), nic stávajícího nepřepsal. Žádný zásah do stacku, struktury URL ani jiných stránek.
- **Co nefungovalo:** (1) Obsah dlaždice psaný přes `<span>` místo `<div>`/`<p>` uvnitř `<summary>` — text „Zobrazit fotografie" se lepil na popisek na stejný řádek místo pod něj. Opraveno na blokové elementy + `.catd__toggle` na `display: flex`. (2) Otevřená dlaždice se přes `:has()` roztáhla na celou šířku řádku, ale obálková fotka (stejná jako v zavřeném stavu) se zvětšila přes celou tu šířku a zbytečně odsunula skutečnou mřížku fotek daleko pod záhyb — obálka se teď v otevřeném stavu skrývá (`.catd[open] .card__art { display: none; }`).
- **Ověřeno:** headless Chrome, instrumentovaný test na kopii stránky — 6 dlaždic, výchozí stav všechny zavřené, klik na dlaždici zavře ostatní a přepne lištu, klik na pilulku otevře odpovídající dlaždici a zavře předchozí, lightbox počítá jen fotky otevřené oblasti (1/3, ne 1/22), šipka doprava/Esc fungují, „Vše" zavře všechno a vrátí lištu na výchozí stav. Žádné console errory. Vizuálně ověřeno screenshoty (zavřený přehled, otevřená dlaždice s mřížkou fotek).
- **Soubory:** `galerie/index.html`, `assets/css/gallery.css`, `assets/js/gallery-filter.js`, `assets/js/lightbox.js`

### 2026-09-25 — Přestavba hero sekce na Domů podle auditu

- **Co:** Hero na `/` (`.herofull` → `.herosplit`) přestavěn z celoplošného fotoobrazu s textovým panelem přeloženým přes něj na dvě oddělené zóny — placeholder fotky (standardní `.ph`/`.ph__frame`, stejná komponenta jako všude jinde na webu, dřív nepoužitá `.ph--hero` s `--ar-hero`) a textový panel, spojené novou svislou variantou kótové linky `.kota--v`. Opraveny i navazující problémy: kontrast panelu (teď na čistém `--c-paper`, ne přes průsvitný podklad), typografická hierarchie (eyebrow jako kicker nad textem → H1 → lead na `--t-md` místo tělového textu → CTA, rytmus mezer 24/24/48), váha CTA (`.lnk--quiet` — tlumená barva a menší velikost, aby nesoupeřila s `.btn--solid`), a mobilní/tabletové zalamování (eyebrow jako blok místo flex řádku, aby se „Ateliér Křivánek · Mladá Boleslav“ nelámalo do linky; mezistupeň `--ar-wide` pro tablet 48–62em, aby portrétní 3:4 foto na široké jednosloupcové kartě neodsouvalo text daleko pod scroll).
- **Proč:** na pokyn uživatele, podle detailního auditu (8 bodů — prázdný panel v širokém wrapu, nízký kontrast panelu, plochá hierarchie, přehnaně velké/úzké H1 lámající se na 4 řádky, plochý rytmus mezer, dvě stejně silná CTA, motiv mizící s dosazením fotky, rozbité mobilní zalomení). Před implementací jsem si vyžádal potvrzení dvou rozhodnutí, která nejde udělat potichu: (1) kompozice hero (rozdělené zóny vs. zachovaný overlay), uživatel zvolil rozdělené zóny; (2) zkrácení H1 je zásah do copy z briefu — uživatel schválil konkrétní znění.
- **Dopad:** H1 změněn z „Návrhy staveb od první konzultace po kolaudaci.“ na „Od nápadu po kolaudaci.“, zbytek věty přesunut do leadu („Každý návrh stavby začíná osobní konzultací a poznáním místa. Z toho, co se na pozemku dozvím a co mi řeknete vy, vzniká dům, který na tom místě dává smysl.“) — obsahový posun z briefu, ne nová informace. Nová sdílená CSS: `.kota--v` (components.css, reusable svislá kóta), `.lnk--quiet` (components.css, tlumené sekundární CTA) — obě dostupné i pro budoucí stránky. Ověřeno Playwright screenshoty na 1440/1280/820/375/320 px, bez console erroru. Izolované na `/` — ostatní stránky nepoužívají `.herofull`/`.herosplit` třídy.
- **Soubory:** `index.html`, `assets/css/pages.css`, `assets/css/components.css`, `memory/memory.md`

### 2026-09-25 — Citáty dostaly větší váhu

- **Co:** Přestylovaná sekce citátu (`.pull` v `pages.css`). Písmo citátu zvětšeno z `--t-xl` na vlastní clamp `1.625rem → 2.375rem` (mezistupeň pod `--t-2xl`), řádkování 1.3, tracking `--ls-tight`, měřítko řádku 22ch na mobilu / 28ch na desktopu. Nad citát přibyla kótovací linka s krajní značkou (stejný motiv jako `.kota`, řešeno pseudoprvky na `.pull__q`). Poměr sloupců na desktopu změněn z 1.15/0.85 na 1.4/0.6, takže text dominuje a fotka je doprovod. Doplňující věta pod citátem na `/o-atelieru/` dostala třídu `.pull__sub` místo inline `style`.
- **Proč:** na pokyn uživatele — citáty měly mít na webu větší váhu.
- **Dopad:** Týká se dvou míst: hlavní citát na domovské stránce a motto na `/o-atelieru/`. Texty citátů se neměnily, zůstávají doslovné podle briefu §1. První pokus s plnou velikostí `--t-2xl` a 19ch měřítkem rozlil hlavní citát do deseti řádků, proto ten mezistupeň. Mrtvé CSS `.quote`/`.quote__t`/`.quote__by` v `pages.css` se nikde nepoužívá — ponecháno beze změny, ale je kandidát na smazání.
- **Ověřeno:** headless Chrome, domovská stránka a `/o-atelieru/` na 1440 px a 390 px. Žádné console errory, žádné vodorovné přetékání, hierarchie citát → doplňující věta → podpis drží.
- **Soubory:** `assets/css/pages.css`, `o-atelieru/index.html`

### 2026-09-23 — Akcent webu přepnut na modrou/zelenou z loga

- **Co:** `--c-accent`/`--c-accent-soft` v `tokens.css` přepnuty ze šalvěje na modrou z loga (`#183F7C`, světlejší varianta pro tmavé pozadí `#5087DD`). Nově přidané `--c-accent-2`/`--c-accent-2-soft` (zelená z loga, ztmavená na `#3C7637` pro čitelnost textu) nasazeny jen na číslované indexy — `.idx` (components.css), `.tl__year` (časová osa na `/o-atelieru/`) a `.steps` čítač (číslované kroky). Vše ostatní, co dřív používalo `--c-accent` (odkazy, aktivní nav, tlačítka, focus, `::selection`), je teď modré.
- **Proč:** na pokyn uživatele. Uživatel poslal logo staré značky „Ateliér v Zelené" (modrá + zelená) s tím, že se nemá brát doslovně jako návrat ke staré značce — jen jako předloha barev, které chtěl kombinovaně zapracovat do webu. Upozornil jsem předem na kolizi s klíčovým rozhodnutím o přejmenování a s dosud nepotvrzenou paletou papír/grafit/šalvěj — uživatel po upozornění potvrdil, že chce barvy z loga implementovat.
- **Dopad:** Design token change, izolované na `tokens.css` + dvě komponenty. Barevná dvojice papír/grafit beze změny. Kontrast ověřen výpočtem (WCAG): modrá `#183F7C` na papíru 9.52:1, zelená `#3C7637` na papíru 5.06:1, světlá modrá `#5087DD` na grafitu 4.76:1 — všechny nad AA. Vizuálně ověřeno headless Chrome screenshoty (domovská stránka, `/o-atelieru/` časová osa, `/kontakt/` patička) — layout ani responzivita se nerozbily, žádné console errory.
- **Soubory:** `assets/css/tokens.css`, `assets/css/components.css`, `assets/css/pages.css`

### 2026-09-22 — Postavení celého webu podle skutečného briefu

- **Co:** Postaveno všech 13 stránek plus `404.html`, `sitemap.xml`, `robots.txt` a `README.md`. CSS rozděleno na `tokens`, `base`, `components`, `pages`, `gallery`. JS moduly: `site` (mobilní menu, animace), `lightbox`, `gallery-filter`, `logos` (pruh log). Reálné kontakty klienta vloženy, mapa na `/kontakt/` vložena jako iframe.
- **Proč:** uživatel vložil skutečný brief do `prompt.md`. Předchozí verze stránek vznikla z odvozeného zadání a měla špatné oblasti i placeholdery místo kontaktů, proto se obsah přepsal.
- **Dopad:** Šest podstránek oblastí dostalo nové slugy podle briefu, staré (`navrhy-a-studie`, `stavebni-povoleni`, `provadeci-dokumentace`, `inzenyrska-cinnost`, `energeticke-prukazy`) smazány. Paleta přepíná na hodnoty z briefu §2 s jednou opravou kontrastu. `AGENTS.md` aktualizován o reálné routes a o rozhodnutí ohledně hlavičky/patičky.
- **Ověřeno:** všech 25 URL vrací 200, žádný rozbitý interní odkaz, jeden `<h1>` na stránku, párování značek sedí. Žádné vodorovné přetekání na 320, 360 ani 390 px. Lightbox (klik, šipky, Esc, focus trap, návrat focusu), filtr galerie (`aria-pressed`, hlášení počtu, procházení jen viditelných) a mobilní menu otestovány v headless Chrome, všechno prochází.
- **Co nefungovalo:** (1) `lightbox.js` si pamatoval spouštěč přes `document.activeElement`, což selhalo tam, kde kliknutí prvek nezaostří, a focus se po zavření nevrátil. Teď se ukládá přímo element. (2) Mobilní menu mělo `visibility` v CSS přechodu, takže `focus()` na první odkaz hned po otevření neudělal nic. Řešeno `transition: visibility 0s linear` se zpožděním jen při zavírání. (3) Třída `rise` byla v CSS i JS, ale nebyla na žádném prvku, takže animace při scrollu nefungovaly — doplněna na obsah sekcí a na položky mříežek.
- **Soubory:** `index.html`, `o-atelieru/`, `co-navrhuji/` (+6 podstránek), `spoluprace/`, `galerie/`, `kroos/`, `kontakt/`, `404.html`, `assets/css/*`, `assets/js/*`, `sitemap.xml`, `robots.txt`, `README.md`, `AGENTS.md`

### 2026-09-22 — Doplnění chybějícího briefu

- **Co:** Zjištěno, že `prompt.md` i `prompt` v kořeni jsou prázdné (0 bajtů) a `atelier-krivanek-claude-code-prompt.md` v repu ani nikde na disku není. Skillem `web-project-brief` sestaven brief z obsahu `CLAUDE.md`, `AGENTS.md` a `memory/`. Žádné fakty o klientovi nad rámec těchto zdrojů se nedoplňovaly — chybějící údaje jsou v dokumentu označené jako `[DOPLNIT: …]`.
- **Proč:** na pokyn uživatele. Bez briefu nešlo začít implementaci, protože `CLAUDE.md` i `AGENTS.md` na něj odkazují jako na zdroj pravdy.
- **Dopad:** Zavírá otevřenou otázku o chybějícím briefu. Brief fixuje routes (7 stránek + 6 podstránek oblastí), obsah jednotlivých stránek, počty placeholderů (~40–60) a postup implementace v 17 krocích. Šablona skillu počítá s kontaktním formulářem — §5 briefu ho vědomě ruší, protože klient formulář nechce. Barvy v §2 jsou pořád jen návrh k potvrzení.
- **Později týž den:** uživatel vložil skutečný brief do `prompt.md`. Ten přepísal odvozenou verzi a je teď zdrojem pravdy. Odvozený brief se lišil hlavně v šesti oblastech tvorby.
- **Soubory:** `atelier-krivanek-claude-code-prompt.md`, `memory/memory.md`, `memory/index.md`

### 2026-09-22 — Zavedení memory systému

- **Co:** Vytvořen paměťový systém `memory/` (`index.md`, `pravidla.md`, `memory.md`). Obsah `CLAUDE.md` §5 (stav projektu, rozhodnutí, otevřené otázky, co záměrně chybí) migrován sem. `CLAUDE.md` a `AGENTS.md` upraveny, aby na tenhle systém odkazovaly a řídily se jím.
- **Proč:** na pokyn uživatele — chtěl kompletní, evidovaný memory systém propojený s `AGENTS.md`, `CLAUDE.md` a skills, aktualizovaný po každé změně.
- **Dopad:** `CLAUDE.md` §5 už neobsahuje živý log, jen odkaz na `memory/memory.md`. `AGENTS.md` odkaz na „CLAUDE.md §5" nahrazen odkazem na `memory/memory.md`. Zjištěno, že referenční brief soubor `atelier-krivanek-claude-code-prompt.md` v repu chybí (viz Otevřené otázky).
- **Soubory:** `memory/index.md`, `memory/pravidla.md`, `memory/memory.md`, `CLAUDE.md`, `AGENTS.md`
