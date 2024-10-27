---
title: Welumi
description: I dette projekt designede jeg Welumi, en prototype på en social robot til at byde kunder velkommen, når de træder ind i restauranter, hvis der ikke er serveringspersonale til stede. I designprocessen brugte jeg skitsering og prototyping til at udforske forskellige udtryk for en sådan robot, hvilket resulterede i en funktionel 1:1-prototype i form af en standerlampe. 
technologies: ["Raspberry Pi", "Python", "Industrielt Design"] 
featured: false
order: 5 
thumbnail: /images/projects/welumi-1.png
---

## Design
Designet af lampen blev oprindeligt udforsket gennem skitsering. Lampen blev opdelt i dele, og hver del blev derefter skitseret i forskellige stilarter og konstruktioner. Det samlede udvalg af skitser for udseendet spændte fra mekanisk og robotagtigt til organisk og biomorf, inden det endelige udseende af Welumi blev fundet. Leddene tog deres første form ud fra de tekniske krav og bevægede sig i en organisk retning. Til sidst fik leddene et kugleformet udtryk for at harmonere med resten af robotten. Hovedet gennemgik også flere iterationer, begyndende som et standardlampedesign og udviklede sig til en mere ansigtslignende form i et forsøg på at give en antydning af ansigtstræk. Da resten af kroppen begyndte at nærme sig det kugleformede udseende, blev hovedet redesignet for at passe til resten af designet.

![Skitsen viser, en række arbejdsskitser af Welumi](/images/projects/sketches.png)

## Scenariet

Welumi er en social robot designet til at stå ved indgangen til en restaurant, byde indkommende gæster velkommen og overlade dem til en tjener, når en er tilgængelig. Lampens form giver en passende mængde antropomorfe træk til at realisere Welumis adfærd. Leddet giver den person, der møder robotten, en visuel ledetråd om, hvordan den vil bevæge sig, mens det oplyste hoved skaber et "ansigt" for personen at rette deres opmærksomhed mod.

![Skitsen viser, hvordan Welumi er begregnet til at bruges på en restaurant](/images/projects/scenario.png)

## Implementation

Welumi anvender Disneys animationsprincipper til at animere bevægelser og drives af fem Dynamixel-motorer: to i knæleddet, der arbejder sammen, og tre i hovedleddet for at give tre frihedsgrader.

![Implementations detaljer i form af et diagram](/images/projects/implementation.png)
