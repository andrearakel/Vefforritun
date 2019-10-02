# Verkefni 6

Halda skal áfram með kort úr verkefni 5 að viðbættum texta og gera skal allt saman skalanlegt.

Gefin er `index.html` skrá sem _ekki_ skal eiga við fyrir utan að bæta skal við `class` við element þar sem þarf. Heiti þessara klasa skulu fylgja BEM. Einnig skal bæta við því sem þarf til að skalanleiki virki sem skildi.

Fyrir útlit gildir:

* Open sans er uppsett og skal nota fyrir allan texta
* Gefin er breidd á `<main>` og bakgrunnslitur á `.cards` til að bera saman við fyrirmynd
* Nota skal grind:
  - Hámarksstærð `1450px`
  - 12 dálkar
  - `20px` gutter
* `grid.css` skal notað til að láta efni falla rétt að grind, sjá fyrirmyndir
* Fyrir `.card` gildir það sama og í verkefni 5

Fyrir efni utan `.cards` er `.grid` notað utan um efni. Fyrir bæði `.cards` og `.grid` ætti að bæta við klasanöfnum fyrir _rows_ og _cols_ til að láta grind ganga upp. Sjá vísun að grind fyrir `.grid` sem gefin er.

## Skalanleiki

Notast skal við fyrirmyndir til að sjá cirka hvernig skölun virkar.

Í grunninn skal nýta _mobile-first_, þ.e.a.s. allir stílar áður en _media queries_ eru notaðar skulu miða við `< 700px` brotpunkt.

Fyrir brotpunkta gildir:

* `< 700px`
  - Dálkar í `.grid` eru `100%`
  - Dálkar í `.cards` eru `100%`
  - Útlit á `.card` er breytt frá v5, sjá að neðan
* `>= 700px`
  - Dálkar í `.cards`fara frá því að vera `100%` í að vera `50%`
  - `.cards` fær `40px` margin að neðan
  - Útlit á `.card` fer í útlit úr v5, sjá að neðan
* `>= 1000px`
  - Dálkar í `.grid` fara frá því að vera `100%` í að vera `50%` og fá `40px` margin að neðan
  - Dálkar í `.cards`fara frá því að vera `50%` í að vera `33.33333...%`
* `>= 1490px`, padding er tekið af `main` vegna grid, ekki þarf að láta brotpunkt vera fullkominn (þ.e.a.s. að ekkert _hopp_ komi til)

Upp að `700px` breiðum skjá er útlit `.card` öðruvísi til að passa betur í minni skjá:

* Ekki skal takmarka breidd (width) eða hæð (height)
* Ekki skal hafa rúnaðan border allt í kring heldur aðeins `2px solid #aaa` border að neðan
* `20px` bil skal vera neðst í hverju
* Efni skal ekki liggja í röð heldur í dálk (sjá fyrirmynd)
  - Texti skal hafa `20px` margin að neðan
  - Mynd skal ekki hafa bil til vinstri

Mælst er til að nota grunn úr verkefni 5 (sýnilausn verður gefin út við lok dags 3. október) og ætti þá að nota `max-width` media query, setja breytingar á upp að `max-width: 699px`. Í sýnilausn fyrir v5 eru stílar nákvæmlega þeir sömu nema `height: 100%` er aukalega sett á `.card` vegna þess hvernig grind færir `.card` frá því að vera systkini í að dálkar séu systkini og hvernig þá `stretch` hagar sér í flexbox.

Til þess að ekki séu tvær myndir hlið við hlið í minnstu upplausn er átt við röðun á mynd í öðru barni fyrsta `.grid`. Það á aðeins við í `< 1000px`.

## Takmarkanir

Leyfilegt er að nota þær CSS yfirlýsingar sem farið hefur verið yfir og þær sem bæta þarf við til að uppfylla verkefnalýsingu.

Einungis skal notast við flexbox til að stýra útliti og eru því eftirfarandi yfirlýsingar ekki leyfðar:

* `display` með annað gildi en `flex`, sjálfgefin gildi eru þó leyfð
* `float`
* `position`

## Fyrirmyndir

Fyrirmyndir eru gefnar í `1400px`, `800px` og `500px` breiðum skjám með og án grid.

[Fyrirmyndir](utlit/readme.md)

## Mat

* 20% – Snyrtilega uppsett, merkingarfræðilegt og gilt HTML sem notar BEM fyrir klasanöfn
* 20% – Snyrtilega uppsett, gilt CSS sem virðir takmarkanir
* 10% – Útlit útfært eftir forskrift
* 50% – Skalanleiki útfærður eftir forskrift

## Sett fyrir

Verkefni sett fyrir í fyrirlestri mánudaginn 30. september 2019.

## Skil

Skila skal undir „Verkefni og hlutaprófa“ á Uglu í seinasta lagi fyrir lok dags þriðjudaginn 8. október 2019.

Skilaboð skulu innihalda: 
* slóð á GitHub repo fyrir verkefni þar sem dæmatímakennurum skal hafa verið boðið í repo ([sjá leiðbeiningar](https://help.github.com/articles/inviting-collaborators-to-a-personal-repository/)). Notendanöfn þeirra eru `anz1e`, `gunnnnii`, `magdadianaa`, `OlafurjonHI` og `Wolfcoder13` .
* slóð inná heimasvæðið fyrir verkefni.
* zip skrá með verkefninu.

## Einkunn

Sett verða fyrir tíu minni verkefni þar sem átta bestu gilda 3,5% hvert, samtals 28% af lokaeinkunn.

Sett verða fyrir tvö hópverkefni þar sem hvort um sig gildir 11%, samtals 22% af lokaeinkunn.

---

> Útgáfa 0.1
