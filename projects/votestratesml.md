---
title: VotestratesML
description: Jeg designede VotestratesML; et webbaseret samarbejdsværktøj, der giver K-12-elever mulighed for at bygge modeller og lave forudsigelser baseret på virkelige stemmedata til brug i samfundsfagsundervisning. Processen blev realiseret gennem seks brugerinterventioner i to samfundsfagsklasser på gymnasier i Aarhus, Danmark.
technologies: ["Tensorflow.js", "Webstrates", "Javascript"]
featured: false
order: 3
thumbnail: /images/projects/votestrates.jpg
---

## Hvad er VotestratesML?

I en typisk brugssituation af VotestratesML introduceres eleverne til værktøjet og dets funktioner til at bygge ML-modeller. Herefter deles eleverne i grupper af 3-4 personer, og hvert gruppemedlem logger ind på VotestratesML på deres bærbare computer for at få adgang til det kollaborative ML-værktøj. Læreren beder derefter grupperne om at skabe den bedst mulige model til fx at forudsige, om en person vil stemme på Socialdemokratiet. Hver gruppe vælger Votes for The Social Democratic Party-mærket i VotestratesML. Grupperne diskuterer derefter, hvilke egenskaber (features) der skal inkluderes i deres model. Her kan eleverne trække på deres eksisterende viden fra samfundsfagsundervisningen. For eksempel, ifølge Michigan-modellen for vælgeradfærd, som eleverne lærer om i avanceret samfundsfag, påvirkes stemmeadfærd af familien, og derfor kan det være vigtigt at vælge egenskaber, der beskriver, hvordan en persons forældre stemte.

Når eleverne er enige om et sæt egenskaber, skal de vælge en algoritme og bestemme dens parametre. Når modellen er trænet og testet, kan eleverne ændre modelparametrene, egenskaberne, blande dataene eller justere forholdet mellem træningsdata og testdata for at forbedre modellen.

![Et diagram, der beskriver hvordan VotestratesML fungerer.](/images/projects/largeVMLmodel.png)

Når eleverne er tilfredse, uploader de deres model til en fælles visning, der projiceres på væggen i klasselokalet. Herfra kan de sammenligne den med modeller fra andre grupper og diskutere, hvordan de kan forbedre deres model. Til sidst, når læreren afslutter øvelsen, projiceres en mere detaljeret visning på væggen og bruges i diskussioner om elevernes valg af egenskaber og modelparametre, modellernes forudsigelser samt konsekvenserne af denne arbejdsmetode for politik og samfund. Emnet for disse diskussioner afhænger af den opgave, eleverne har fået, men kan fx omhandle, hvordan disse forudsigelser kan bruges til at målrette politiske reklamer mod specifikke demografiske grupper, og hvad konsekvenserne af dette er.
