---
title: 'PageSpeed Insights & Lighthouse'
description: 'Ovvero valutare con criterio le prestazioni del nostro sito'
date: 2023-11-02
---
Perchè dovresti "prenderli con le pinze" nella valutazione delle performances e del posizionamento del tuo sito?
---

Probabilmente questa è una delle incomprensioni più comuni che ci si trovano davanti quando si parla di web performances e SEO. Lo score Lighthouse delle performances non ha assolutamente nessuna influenza sul posizionamento del nostro sito nei risultati di ricerca, in nessun modo.

 I dati utilizzati da Google per determinare il posizionamento del nostro sito sono archiviati in Search Console, e Search Console non ha  nulla a che vedere con i punteggi ottenuti mediante Lighthouse 
 
 Anche se Google non lo dice mai esplicitamente, possiamo dedurre da una analisi della documentazione, che:

>The data for the Core Web Vitals report comes from the CrUX report. The CrUX report gathers anonymized metrics about performance times from actual users visiting your URL (called field data). The CrUX database gathers information about URLs whether or not the URL is part of a Search Console property.
– [Core Web Vitals report](https://support.google.com/webmasters/answer/9205520?hl=it)

Per quanto concerne invece Page Speed Insights (PSI) è utile comprendere che:
>PageSpeed Insights (PSI) riporta l'esperienza utente di una pagina su dispositivi mobili e computer e fornisce suggerimenti su come migliorarla.
[Informazioni su PageSpeed Insights](https://developers.google.com/speed/docs/insights/v5/about?hl=it)

e ancora:

> **PSI fornisce dati di lab e di campo su una pagina**. I dati del lab sono utili per **il debug dei problemi,** in quanto raccolti in un ambiente controllato. Tuttavia, potrebbe non rilevare i colli di bottiglia del mondo reale. I dati sul campo sono utili per acquisire un'esperienza utente reale, ma hanno un insieme di metriche più limitato.
[Informazioni su PageSpeed Insights](https://developers.google.com/speed/docs/insights/v5/about?hl=it)

Quindi è molto importante leggere attentamente i dati che ci fornisce PSI e approfondire l'analisi dei dati provenienti da CRuX incrociandoli, per una analisi più dettagliata, con i dati ottenuti da Lighthouse.

Scopri com'è l'esperienza dei tuoi utenti reali:
{% imagePlaceholder "./src/assets/images/articles/psi-min.png", "PSI image ", "Nella parte superiore del report PSI possiamo notare che i dati provengono da CrUX e sono basati su dati reali aggregati." %}


Diagnostica i problemi di prestazioni (Lighthouse):
{% imagePlaceholder "./src/assets/images/articles/li-min.png", "PSI image ", "Qui invece possiamo chiaramente vedere che questo test è stato eseguito in una data predefinita, su un dispositivo predefinito, con una velocità di connessione predefinita, su una versione di Chrome predefinita. Questo in sostanza è stato un test di pagina eseguito da noi, per noi, per scopi di debug e analisi." %}

Sebbene Google non dichiari mai esplicitamente cosa influenza il positizionamento nei risultati di ricerca è bene tener presente che una analisi basata solo su Lighthouse senza tenere in considerazione i dati CrUX degli utenti reali del nostro sito ci poterterà inevitabilmente a commettere degli errori di valutazione.


Il nostro obiettivo è riuscire a far combaciare insieme tutti i pezzettini del puzzle delle performances, in una comprensione a 360° delle performances del nostro sito. In quest'ottica capire come leggere e interpretare in maniera corretta i dati a nostra disposizione è di straordinaria importanza affinchè i nostri sforzi abbiano successo. 

### Fonti - Sitografia

Per questo post ho preso in considerazione le seguenti pubblicazioni ufficiali di Google. 

- [Core Web Vitals report](https://support.google.com/webmasters/answer/9205520?hl=it)
- [Informazioni su PageSpeed Insights](https://developers.google.com/speed/docs/insights/v5/about?hl=it)

