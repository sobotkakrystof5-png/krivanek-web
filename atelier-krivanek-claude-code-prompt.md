# CLAUDE CODE PROMPT — Web Ateliér Křivánek

Zkopíruj celý tento dokument jako první zadání do Claude Code (nový projekt/repozitář). Web je vícestránkový, stavěný v čistém HTML/CSS/JS. Veškerý text webu je v češtině.

---

## 0. KRITICKÉ — TENTO WEB NESMÍ VYPADAT JAKO „AI ŠABLONA“

Toto je nejdůležitější pokyn celého zadání a musí ovlivnit každé rozhodnutí níže. Drtivá většina AI webů vypadá stejně — poznatelně, uniformně, bez duše. Tenhle web musí být pravý opak: musí působit, že ho navrhl a ručně vyladil zkušený designér přímo pro tohoto klienta, s péčí o každý detail. Klíčové slovo pro celý web je **pokora** — jednoduchost, čistota, klid, žádná okázalost.

**Konkrétně se VYHNI těmto typickým „AI vzorcům“:**
- Generickému hero „velký vycentrovaný nadpis + podnadpis + dvě tlačítka vedle sebe + gradient/ilustrace vpravo“. Když už hero, dej mu asymetrii, neobvyklé proporce, klidnou kompozici, prvek, který rozbíjí mřížku.
- Přehnané symetrii a vycentrování úplně všeho — pracuj s asymetrickou mřížkou, nech prvky dýchat, vytvářej tiché vizuální napětí, ne hluk.
- Genericky opakovaným „feature card“ mřížkám se stejným vzorem ikona-nadpis-text 3–4× za sebou — každá sekce má vlastní kompozici.
- Přesyceným gradientům, glassmorphismu bez účelu, 3D ilustracím, neupraveným stock ikonám.
- Předvídatelným „fade-in + slide-up na všechno při scrollu“ — animace používej záměrně a jemně (viz sekce o animacích), ne plošně.
- Lorem-ipsum textům a prázdným marketingovým frázím („jsme tým profesionálů“, „kvalita je naše priorita“) — každý text je konkrétní a v hlase klienta.
- Stejnému spacingu a zarovnání v každé sekci — nech sekce dýchat různě, měň hustotu a rytmus.
- Fontové dvojici, kde nadpis i text vypadají jako defaultní Tailwind/shadcn bez typografické osobnosti — tracking, line-height a kontrast velikostí lad záměrně.

**Místo toho:**
- Navrhni **jeden decentní vizuální motiv zakořeněný v architektuře** ({{viz níže}}) a nech ho nenápadně procházet celým webem jako podpis, ne jako dekoraci v každém rohu.
- Dej každé stránce/sekci **vlastní kompoziční logiku** — jiný poměr text/obraz, jiné zarovnání, jiný rytmus, aby procházení webu bylo jako listování promyšleným portfoliem.
- Detaily, které dělají rozdíl: jemné hover mikrointerakce šité na obsah (ne generické `scale-105`), promyšlené přechody mezi stránkami, autentické texty v hlase klienta.
- Piš CSS, jako by ho člověk vyladil pixel po pixelu — konzistentně, ale ne strojově uniformně.

**Vizuální motiv pro tento web (architektonický podpis):**
Tenká technická linka — kontura, kótovací čára, řez, obrys půdorysu. Jemný „výkresový“ jazyk: vlasové linky (1 px), decentní kótovací značky na krajích sekcí, číslované indexy fází (01, 02, 03…) jako u technického výkresu. Motiv smí být přítomný jako tenká linka pod nadpisy, jako oddělovač sekcí, jako rámeček placeholderu. Nikdy ne křiklavě. Číslovaný index (01/06) je zároveň hlavní opakovaný prvek — použij ho u fází spolupráce, u oblastí návrhu a u historie ateliéru.

Když si Claude Code není jistý, jestli prvek vypadá šablonovitě, zeptá se nebo navrhne originálnější řešení místo nejběžnějšího.

---

## 1. KONTEXT PROJEKTU A OBSAH KLIENTA

**Značka / název projektu:** Ateliér Křivánek
*(Přejmenování ze současného „Ateliér v Zelené“. Na webu používej „Ateliér Křivánek“ jako hlavní značku; „Ateliér v Zelené“ smí zaznít jednou v patičce/kontaktu jako původní/plný název, pokud to sedne. Hlavní je Ateliér Křivánek.)*

**Obor:** architektonický ateliér — návrhy staveb, projektová a inženýrská činnost, interiéry
**V oboru od:** podnikání od 1991, ateliér založen 1997
**Osoba:** Ing. Tomáš Křivánek, architekt
**Adresa:** Zelená 133, Bradlec, 293 06 Kosmonosy, okres Mladá Boleslav
**Mobil:** 603 465 564
**Telefon:** 326 332 011
**E-mail:** tomas@atelierkrivanek.cz
**IČO / identifikační údaje:** ZATÍM NEDODÁNO — nech placeholder do patičky a kontaktu, doplní klient. Nevymýšlej.

**Zdrojový obsah o firmě** (materiál od klienta — stylisticky přepiš do přirozené, pokorné češtiny, ale fakta neměň a nová nevymýšlej; žádná vymyšlená čísla realizací):

- Filozofie / hlavní citát (použij doslova jako „citát“ na webu):
  „Při návrhu staveb věřím v individuální přístup, založený na dialogu a souznění s investorem, pečlivé analýze jeho potřeb, přání a očekávání, ale i poznání místa budoucí stavby, které je vždy zdrojem inspirace…“ — Tomáš Křivánek
- Osobní motto (do sekce O ateliéru, k portrétu): „…pokora a nadhled, postoje důležité v osobním i profesním životě… Obojí čerpám na vrcholcích hor.“ a „Horolezci mají krásné úsloví: Kde je vůle, tam je cesta.“
- Od konzultace po kolaudaci (do sekce Spolupráce, doslova jako základ textu): „V ateliéru provádím návrhy staveb od počátečních konzultací, studií až po realizační dokumentaci, v čase vyhovujícím oběma stranám. Samozřejmostí je vyřízení všech nezbytných formalit celého povolovacího procesu a spolupráce v průběhu výstavby až po kolaudaci.“
- Nabídka činností: architektonické návrhy a studie; projekty ke stavebnímu povolení či ohlášení stavby; prováděcí dokumentace, zaměření stávajícího stavu, inženýrská činnost; průkazy energetické náročnosti budov (oprávnění MPO č. 799); návrhy interiérů; návrh a dodání kancelářského nábytku přes dceřinou společnost KROOS s.r.o.
- Historie a kvalifikace: 1989 ČVUT Praha, fakulta stavební; 1991 začátek podnikání; 1997 založení ateliéru a postgraduál na Ústavu soudního inženýrství Brno; oprávnění MPO č. 799; osvědčení o autorizaci a oprávnění (existuje PDF ke stažení — počítej se souborovým odkazem).
- Sesterská společnost KROOS s.r.o. (do 2026-10-14 uváděná jako dceřiná): „Zabývá se návrhy a realizací interiérů a jejich vybavení od návrhu až po montáž. V druhé řadě provádí projekty většího rozsahu.“ Sídlo: Jilemnického 1122, Mladá Boleslav. Web: www.kroossro.cz.
- KROOS (2026-10-14): stejný kontakt a stejný jednatel (Ing. Tomáš Křivánek) jako ateliér, plátce DPH. Odkaz na www.kroossro.cz se na web nedává.
- Sesterská společnost Projekt 360 s.r.o. (2026-10-14): realizace vlastních projektů ateliéru. Další údaje zatím nedodány.
- Tým (2026-10-14): spolupracuje dcera Ing. arch. Lucie Křivánková (Fakulta architektury ČVUT; žádná Tereza). „Nabízíme zkušenost, nadhled a neotřelé pohledy mladých.“
- Označení „dříve Ateliér v Zelené“ se na webu neuvádí (2026-10-14).
- Zajištění kontaktů: pan Křivánek dokáže klientovi v případě potřeby zajistit kontakty (na řemeslníky, dodavatele, navazující profese). Zmiň to střízlivě v sekci Spolupráce jako součást služby, ne jako marketingový slib.

**Oblasti návrhu / realizací** (kategorie, do kterých se dělí tvorba — každá dostane vlastní podstránku s několika fotkami; viz struktura níže). Názvy referencí jsou reálné, používej je jako popisky u placeholderů:
- **Rodinné domy** — Bradlec, Kosmonosy, Mladá Boleslav, Mnichovo Hradiště, Horní Rokytná, Branžež, Čejetice, Horní Stakory, Studenec, Praha.
- **Rekonstrukce a revitalizace** — RD a MŠ Mladá Boleslav, panelový dům Jičín, Dentální centrum Kosmonosy, objekty v památkových zónách.
- **Průmyslové a administrativní stavby** — JaP Jacina (hala a školicí středisko Mnichovo Hradiště), GSP Benátky nad Jizerou, Aufeer Design, LAWI, UNO Industry park Bezděčín, Tasso, Accolade, Panattoni, myčka Mladá Boleslav.
- **Komerční a sportovní stavby** — Spinning centrum Mladá Boleslav, Bike park Štěpánka, Syrrah Natura, Hafling Ranč Rokytá.
- **Interiéry** — Dragon Internet, Aufeer Design, školicí středisko VW, JaP, autosalon Citroën, prodejna Verso, rodinné domy, byt, dentální centrum.
- **Projekty a studie** — dům U Bondy centra v Mladé Boleslavi, studie rodinných domů (existuje PDF se studiemi ke stažení).

**Cíl webu:** působit důvěryhodně, klidně a profesionálně; přehledně ukázat, čemu se ateliér věnuje, a přivést zájemce ke kontaktu (telefon / e-mail). Web je vizitka a portfolio, ne prodejní stroj.

**Tón:** lidský, pokorný, věcný. Architekt s osobním příběhem (hory, pokora, dialog s investorem) — příběh smí zaznít, ale střídmě, bez patosu. Žádné vykřičníky, žádné korporátní fráze.

---

## 2. LOGO A DESIGNOVÝ SYSTÉM

> **Aktualizace 2026-10-14 (připomínky klienta):** web má být „techničtější, modernější“. Teplý papír nahradila studená šedobílá (`#F4F5F3`) s jemným technickým rastrem pod hero a hlavičkami stránek. Písmo: **Archivo** (nadpisy v rozšířeném řezu, text v normální šířce) + **IBM Plex Mono** na kóty a indexy. Akcent zůstává modrá + zelená z loga (2026-09-23). Návrhy níž v §2 jsou historické, platí `assets/css/tokens.css`.

### Logo
Klient zatím NEDODAL logo. Do hlavičky a patičky použij **textový wordmark** „Ateliér Křivánek“ vysázený v nadpisovém fontu se záměrně laděným trackingem, případně s tenkou linkou (motiv). Připrav strukturu tak, aby se textový wordmark dal později snadno nahradit obrázkovým logem (SVG/PNG) bez zásahu do layoutu. Logo si nevymýšlej ani negeneruj.

### Barvy
Klient barvy neurčil — navrhni střídmou, „architektonickou“ paletu a **v CLAUDE.md ji označ jako otevřené rozhodnutí k potvrzení**. Doporučený výchozí návrh (potvrdí klient):
- **Podklad (dominantní):** teplá bílá / papírová (např. #F7F6F2), 80–85 % plochy.
- **Text / tmavá:** velmi tmavá grafitová, ne čistá černá (např. #1C1C1A).
- **Akcent (střídmý):** tlumená šalvějová/olivová zeleň (např. #6E7D5B) — nenápadný odkaz na název „v Zelené“, na místo a na pokoru. Používej ho jen na akcenty (odkazy, hover, tenké linky, číslované indexy), NIKDY jako velkou plochu.
- **Linky/oddělovače:** světle šedá (např. #E3E1DB).
- Poměr: cca 80–85 % neutrál (papír/grafit), zbytek akcent. Akcent přitahuje pozornost, nevyplňuje plochu.
- **Kontrolа kontrastu** (min. WCAG AA) u každé kombinace text/pozadí, hlavně akcent na papíru a bílý text na akcentu.
- Pozn.: reference (screenshot Magnon) používá křiklavou limetkovou zeleň — tu NEpřebírej. Náš akcent je tlumený a klidný.

### Typografie
- Nadpisy: sebejistý font s osobností, ideálně serif nebo humanistický grotesk s architektonickým klidem (např. Fraunces, Spectral, nebo Sora s vyladěným trackingem). Ne defaultní systémový font.
- Text: dobře čitelný sans-serif s pohodlným line-heightem (např. Inter).
- Hierarchie: jasně odlišené úrovně nadpisů, jeden silný H1 na stránku. Velikost písmen a jejich kontrast lad záměrně — je to jedna z hlavních věcí, na které tomto webu záleží.

### Vizuální jazyk
- Čistý, minimalistický, hodně vzduchu (whitespace), sekce oddělené spíš mezerou a typografií než rámečky/stíny.
- Placeholdery fotek: vždy zřetelně označený rámeček (papírové/šedé pozadí, jemný přerušovaný okraj, ikona fotoaparátu, popisek co sem patří, správný `aspect-ratio`). NIKDY stock fotky jako výplň.

---

## 3. TECHNICKÝ STACK

**Zvolený stack:** čisté HTML5 + CSS + Vanilla JS. Žádný frontend framework, žádný build step.
- Sdílená hlavička a patička na každé stránce (buď přes malý JS include/partial, nebo poctivě zkopírované a udržované konzistentní — zvol jednodušší udržovatelnou cestu a popiš ji v README).
- CSS s designovými tokeny (custom properties v `:root`) — barvy, fonty, spacing scale. Vycházej ze skeleton tokenů z referenčního layout skillu (viz sekce 4), ale dosaď reálnou paletu a typografii.
- Obrázky: `loading="lazy"`, pevný `aspect-ratio` u všech placeholderů i budoucích fotek (kvůli layout shiftu).
- **Žádná služba s API klíčem** (Resend apod.) — na webu není žádný formulář (viz sekce 5), takže není potřeba serverless funkce ani backend. Zůstává čistě statický web.
- Responzivita: mobile-first, plně responzivní na každém breakpointu.
- SEO: meta tagy, OpenGraph, `sitemap.xml`, `robots.txt`, sémantické HTML5, jeden H1 na stránku, popisné `alt` u všech obrázků i placeholderů.

**Struktura webu:** VÍCESTRÁNKOVÁ (multi-page). Toto je záměrné, závazné rozhodnutí — každá položka navigace je vlastní URL/stránka. Domovská stránka je krátký rozcestník, ne slepenec veškerého obsahu. Žádné kotvy (`#sekce`) mezi hlavními položkami menu.

**Mapa:** jednoduchý iframe embed (Mapy.cz nebo Google Maps) s adresou Zelená 133, Bradlec, 293 06 Kosmonosy. Bez těžkého JS SDK.

### Poznámka k SEO struktuře (skill seo-keyword-cluster-architect)
Web postav tak, aby byl připravený na pillar-cluster model: `/co-navrhuji/` funguje jako pilíř, jednotlivé oblasti (`/co-navrhuji/rodinne-domy/` atd.) jako clustery pod ním, každá stránka má vlastní `<title>`/H1/meta description a odkazuje zpět na pilíř. ALE: konkrétní cílová klíčová slova pro jednotlivé stránky **nevymýšlej** — musí přijít z měřeného seznamu od klienta (Collabim / Ahrefs / Marketing Miner). Do každé stránky proto zatím dej rozumný, přirozený `<title>`/H1/meta bez keyword-stuffingu a v CLAUDE.md poznač jako otevřený úkol: „doplnit cílová klíčová slova, až klient dodá měřený seznam“.

---

## 4. STRUKTURA OBSAHU (STRÁNKY V POŘADÍ)

Vícestránkový web. Každá stránka drží společnou hlavičku/patičku, „eyebrow + H1“ hlavičku stránky a — na konverzních stránkách — decentní závěrečný CTA pruh vedoucí na kontakt. Aktivní položka menu je v navigaci zvýrazněná.

**Navigace (hlavička, stejná všude):** Domů · O ateliéru · Co navrhuji · Proces · Galerie ▾ · Sesterské společnosti ▾ (KROOS, Projekt 360) · Kontakt
Wordmark „Ateliér Křivánek“ vlevo, nav uprostřed/vpravo, vpravo jedno decentní CTA „Kontakt“ (odkaz na /kontakt). Bez dropdownů, bez jazykového přepínače.

**Routes:**
```
/                         Domů (rozcestník)
/o-atelieru               O ateliéru (představení + příběh + historie)
/co-navrhuji              Co navrhuji (rozcestník oblastí)
/co-navrhuji/rodinne-domy
/co-navrhuji/rekonstrukce
/co-navrhuji/prumyslove-a-administrativni-stavby
/co-navrhuji/komercni-a-sportovni-stavby
/co-navrhuji/interiery
/co-navrhuji/projekty-a-studie
/proces                   Proces (dříve Spolupráce; proces + jak se počítá cena + zajištění kontaktů)
/galerie                  Galerie (dense grid, lightbox)
/sesterske-spolecnosti    Sesterské společnosti (rozcestník) + /kroos a /projekt-360
/kontakt                  Kontakt (adresa + mapa, BEZ formuláře)
```

### 1) Domů (`/`) — rozcestník, klidný a vzdušný
Pořadí sekcí:
1. **Hero** — celoplošné pozadí (placeholder na architektonickou fotku, tlumavé), eyebrow „Ateliér Křivánek · Mladá Boleslav“, H1 „Návrhy staveb od první konzultace po kolaudaci.“, jeden odstavec (přepsaný hlavní citát o individuálním přístupu), jedno primární CTA „Napište mi“ (→ /kontakt) a jeden decentní sekundární odkaz „Prohlédnout tvorbu“ (→ /co-navrhuji). Kompozice mírně asymetrická, ne vycentrovaný blok uprostřed.
2. **Citát** — samostatná tichá sekce s hlavním citátem Tomáše Křivánka (velký, střídmý blockquote + podpis). Hodně vzduchu. Jeden placeholder fotky (portrét nebo detail stavby) vedle.
3. **Co navrhuji** — mřížka 6 karet (oblasti), každá karta = placeholder fotky + název oblasti + jednořádkový popisek, celá karta odkazuje na příslušnou podstránku. Toto je vizuální rozcestník tvorby.
4. **Od konzultace po kolaudaci** — krátký číslovaný náhled procesu (01 konzultace → 02 návrh → 03 úprava → 04 odsouhlasení → … kolaudace), 1 odstavec + odkaz na /spoluprace. Aspoň jeden placeholder fotky.
5. **Spolupracuji s** — pruh log firem, který se **automaticky střídá/posouvá** (auto-scroll marquee nebo jemný fade carousel). Placeholder loga (6–10 slotů) — s kým ateliér spolupracuje / pro koho pracoval (např. Panattoni, Accolade, VW, GSP, JaP, Aufeer, Spinning…). Loga jsou zatím šedé placeholdery s názvem. Střídání jemné a pomalé, ať to není rušivé.
6. **Sesterské společnosti** — Projekt 360 a KROOS, ke každé věta a odkaz (1 placeholder fotky).
7. **Závěrečný CTA pruh** — tichá otázka („Máte pozemek nebo dům, který potřebuje návrh?“) + odkaz na /kontakt.
8. Patička.

### 2) O ateliéru (`/o-atelieru`) — představovací stránka + příběh
1. Hlavička stránky: eyebrow „O ateliéru“ + H1 (např. „Architekt, který začíná u místa a u rozhovoru.“).
2. Úvodní odstavec + 1–2 placeholdery fotek (portrét Tomáše Křivánka + pracovní záběr / stavba).
3. **Číslovaná časová osa** (motiv indexů): 1989 ČVUT Praha, fakulta stavební · 1991 začátek podnikání · 1997 založení ateliéru + postgraduál Ústav soudního inženýrství Brno. Každý milník = rok jako index + krátký text.
4. **Kvalifikace a oprávnění**: autorizace, oprávnění MPO č. 799, odkaz na PDF osvědčení ke stažení (placeholder na soubor).
5. **Portrét + citát**: velká fotka (placeholder) + motto o pokoře a horách + podpis „Ing. Tomáš Křivánek, architekt“.
6. Patička. (Bez CTA pruhu, nebo velmi decentní.)

### 3) Co navrhuji (`/co-navrhuji`) — rozcestník oblastí
1. Hlavička stránky: eyebrow „Tvorba“ + H1 („Co navrhuji“) + krátký odstavec, jak k práci přistupuji.
2. **Střídavé bloky oblastí** × 6 (obraz na jedné straně, na druhé index „01/06“ + název oblasti + odstavec + odkaz „Prohlédnout →“ na podstránku). Střídej stranu obrázku pro rytmus. Šest oblastí = viz sekce 1.
3. Decentní závěrečný CTA pruh → /kontakt.
4. Patička.

### 3b) Podstránka oblasti (`/co-navrhuji/{oblast}`) — 6× stejný vzor
1. Hlavička stránky: eyebrow „Oblast“ + H1 (název oblasti) + krátký odstavec.
2. **Mřížka fotek** dané oblasti — několik placeholderů (doporučeně 4–8), každý s popiskem konkrétní realizace (viz reálné názvy v sekci 1). **Každá fotka je rozklikávací → otevře se v lightboxu** (zvětšení + popisek, šipky pro průchod). Lightbox stejný jako v Galerii.
3. Decentní odkaz zpět na /co-navrhuji a na /kontakt.
4. Patička.

### 4) Proces (`/proces`, dříve Spolupráce) — proces, cena, zajištění kontaktů
1. Hlavička stránky: eyebrow „Spolupráce“ + H1 („Od konzultace po kolaudaci“) + úvodní odstavec (text „Od konzultace po kolaudaci“ ze sekce 1).
2. **Číslovaná osa procesu** (hlavní obsah, motiv indexů): 01 Konzultace → 02 Návrh → 03 Konzultace / úprava návrhu → 04 Odsouhlasení → … a dál dokumentace, povolení, spolupráce při výstavbě, kolaudace. Každý krok = index + název + 1–2 věty.
3. **Jak se počítá cena** — textová sekce, ŽÁDNÁ čísla ani ceník. Sdělení: cena závisí na rozsahu projektu a odvíjí se od jednotlivých fází (konzultace, návrh, úprava návrhu, odsouhlasení, dokumentace). Napiš to střídmě a srozumitelně, ať klient chápe, že přesnou cenu dostane po první konzultaci podle rozsahu.
4. **Zajištění kontaktů** — krátká sekce: v případě potřeby ateliér zajistí kontakty na navazující profese (řemeslníky, dodavatele). Věcně, bez patosu.
5. Aspoň 1 placeholder fotky (pracovní / výkres / stavba).
6. Závěrečný CTA pruh → /kontakt.
7. Patička.

### 5) Galerie (`/galerie`) — samostatná sekce, prázdné placeholdery
1. Hlavička stránky: eyebrow „Galerie“ + H1.
2. **Filtr — pilulky kategorií**: „Vše“ + pilulka za každou oblast (rodinné domy, rekonstrukce, průmysl, komerční, interiéry, studie). Filtrování client-side.
3. **Hustá jednotná mřížka** fotek (zatím prázdné placeholdery, každý otagovaný kategorií pro filtr). Bez popisků v mřížce — popisek až v lightboxu.
4. **Každá fotka rozklikávací → lightbox** (zvětšení, popisek, šipky vlevo/vpravo, zavření Esc/klik mimo, ovládání z klávesnice). Přístupné (focus trap, `aria`).
5. Patička.

### 6) Sesterské společnosti (`/sesterske-spolecnosti`, `/sesterske-spolecnosti/kroos`, `/sesterske-spolecnosti/projekt-360`)
Rozcestník se dvěma kartami, v navigaci rozbalovací nabídka. Podstránka KROOS:
1. Hlavička stránky: eyebrow „Sesterská společnost“ + H1 „KROOS s.r.o.“.
2. Text (přepsaný z podkladu): návrhy a realizace interiérů a jejich vybavení od návrhu po montáž; ve druhé řadě projekty většího rozsahu. 1–2 placeholdery fotek interiéru.
3. Kontakt: jednatel Ing. Tomáš Křivánek, stejný telefon a e-mail jako ateliér, sídlo Jilemnického 1122, Mladá Boleslav, plátce DPH. Bez odkazu na www.kroossro.cz.
Podstránka Projekt 360: realizace vlastních projektů, sídlo/IČO/jednatel/DPH jako [DOPLNIT].
4. Patička.

### 7) Kontakt (`/kontakt`) — adresa + mapa, BEZ formuláře
1. Hlavička stránky: eyebrow „Kontakt“ + H1.
2. **Dvě zóny vedle sebe** (na mobilu pod sebou):
   - **Kontaktní údaje** jako seznam řádků: Ateliér Křivánek (Ateliér v Zelené) · Zelená 133, Bradlec, 293 06 Kosmonosy, okres Mladá Boleslav · mobil 603 465 564 · tel. 326 332 011 · tomas@atelierkrivanek.cz. Telefon jako `tel:` odkaz, e-mail jako `mailto:`.
   - **Mapa** — iframe embed adresy (Mapy.cz nebo Google Maps).
3. **ŽÁDNÝ kontaktní formulář.** To je záměrné rozhodnutí klienta — nedoplňuj formulář, i kdyby to referenční layout nebo šablona nabízely. Konverze jde přes telefon a e-mail.
4. Patička.

---

## 5. FUNKČNÍ POŽADAVKY — BEZ FORMULÁŘE

Web **nemá žádný formulář** (ani kontaktní, ani jiný). Je to výslovné rozhodnutí klienta. Kontakt probíhá přes `tel:` a `mailto:` odkazy a přes mapu. Neimplementuj žádné odesílání, žádný honeypot, žádnou serverless funkci, žádný API klíč. Pokud by kterýkoli pozdější požadavek formulář chtěl, nejdřív to označ jako změnu oproti tomuto zadání a nech rozhodnutí na uživateli.

---

## 6. PRAVIDLA PRO PLACEHOLDERY FOTEK

- Klient zatím fotky nedodal — projekt je v návrhové fázi. **Žádné stock ani externí obrázky jako výplň.**
- Každý placeholder = zřetelně odlišený rámeček (jemný přerušovaný okraj, papírové/šedé pozadí, ikona fotoaparátu, popisek co sem patří).
- Placeholdery mají nastavený finální `aspect-ratio`, ať se layout po vložení reálných fotek nemění.
- **Fotky nejsou jen v galerii** — v každé sekci webu má být aspoň jeden, ideálně jeden až dva placeholdery, ať web nepůsobí prázdně.
- Orientační počty a umístění:
  - Hero: 1 (celoplošné pozadí)
  - Citát na Domů: 1
  - Karty oblastí na Domů: 6 (po jedné na kartu)
  - Proces na Domů: 1
  - Loga „Spolupracuji s“: 6–10 (střídavý pruh)
  - KROOS teaser na Domů: 1
  - O ateliéru: 3–4 (portrét, pracovní záběr, portrét u citátu)
  - Podstránka každé oblasti: 4–8 (rozklikávací)
  - Spolupráce: 1
  - Galerie: 12–24 (prázdné placeholdery, rozklikávací)
  - KROOS: 1–2

---

## 7. ANIMACE A MIKROINTERAKCE

Jemné, příjemné, klidné — v duchu pokory. Ne plošné „všechno se vysune“.
- Decentní fade/rise při vstupu sekce do viewportu (IntersectionObserver), s klidným rytmem a `prefers-reduced-motion` respektováno (kdo má omezení pohybu, animace vypnout).
- Jemné hover mikrointerakce šité na obsah: karty oblastí — tiché ztlumení/posun obrázku a podtržení názvu tenkou linkou (motiv), ne generické `scale`.
- Plynulý, pomalý auto-scroll/fade u pruhu log „Spolupracuji s“.
- Lightbox: měkké otevření/zavření, plynulé přepínání šipkami.
- Přechody mezi stránkami mohou být decentní (fade), ne povinné.
- Nikdy nic, co odvádí pozornost od obsahu.

---

## 8. RESPONZIVITA, PŘÍSTUPNOST, VÝKON

- Mobile-first, plně responzivní na každém breakpointu. Zvláštní péči věnuj hierarchii, layoutu, velikostem písmen a vyváženosti barev i na malých displejích.
- Kontrast text/pozadí min. WCAG AA.
- Sémantické HTML, `alt` u všech obrázků (i popisný alt u placeholderů, připravený k nahrazení), správná hierarchie nadpisů (jeden H1 na stránku).
- Lightbox a filtr plně ovladatelné klávesnicí, focus management, `aria` atributy.
- Optimalizace obrázků (formáty, velikosti) — projekt nachystej tak, aby šly finální fotky snadno dosadit.
- Základní Core Web Vitals: žádné zbytečné render-blocking skripty, minimum layout shiftu (odtud pevný `aspect-ratio`).

---

## 9. PRÁVNÍ NÁLEŽITOSTI

- Do patičky doplň identifikaci podnikatele (jméno, IČO, sídlo) — IČO klient zatím nedodal, nech placeholder, nevymýšlej.
- Cookie lišta jen pokud web nasadí analytiku/cookies nad rámec nezbytných. Ve výchozím stavu (statický web bez analytiky) není potřeba.
- Bez formuláře odpadá souhlas se zpracováním osobních údajů ve formuláři.

---

## 10. POSTUP IMPLEMENTACE

1. Inicializuj projekt (statický web, složková struktura, sdílená hlavička/patička).
2. Nastav designové tokeny (barvy, fonty, spacing) — vyjdi ze skeleton tokenů referenčního layout skillu, dosaď reálnou paletu a typografii ze sekce 2.
3. Postav základní layout (hlavička s navigací + zvýrazněním aktivní stránky, patička).
4. Postav znovupoužitelné komponenty (eyebrow+H1 hlavička stránky, karty oblastí, střídavý blok oblasti, číslovaná osa, pruh log, lightbox, CTA pruh, placeholder fotky).
5. Implementuj stránky v logickém pořadí: Domů → O ateliéru → Co navrhuji + 6 podstránek → Spolupráce → Galerie → KROOS → Kontakt.
6. Přidej animace/mikrointerakce záměrně (sekce 7).
7. Implementuj lightbox (galerie i podstránky oblastí sdílí jeden).
8. Vlož mapu (iframe) do kontaktu.
9. Ověř plnou responzivitu na všech breakpointech.
10. Projdi SEO a přístupnost (meta, sitemap, robots, kontrast, klávesnice, alt texty).
11. Otestuj build/nasazení, ověř funkčnost lightboxu, filtru a navigace.

---

## 11. VÝSLEDNÝ DOJEM

Web má na první pohled působit **pokorně, jednoduše, čistě a moderně, s architektonickým klidem** — jako práce někoho, kdo tohoto klienta a jeho obor zná do detailu. Nesmí být poznat, že vznikl AI nástrojem. Má mít hlavu a patu: jasnou hierarchii, promyšlený layout, vyvážené velikosti písmen a barev, symetrii tam, kde patří, a klidné napětí tam, kde symetrie ubírá. Rychlý, bezchybný na mobilu, jasně vedoucí návštěvníka k jedné akci — ozvat se.

---

**Poznámka pro Claude Code:** Piš čistý, komentovaný kód, drž konzistentní strukturu a názvosloví a nachystej projekt tak, aby šly reálné fotky a texty dosadit bez zásahu do struktury kódu. Veškeré české texty piš přirozeně a lidsky (viz skill humanize-text-cs): žádné pomlčky jako spojky, žádné korporátní fráze, žádné trojice, střídej délku vět. Před dokončením každé stránky si polož otázku: „Vypadá to jako záměrná práce pro tohoto konkrétního klienta, nebo jako generická šablona?“ — pokud to druhé, přepracuj podle sekce 0.