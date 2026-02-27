# Piano di Implementazione Sito Web PFC - Paolo Fia Cartongesso

## Obiettivo

Creare un sito web professionale per **PFC – Paolo Fia Cartongesso** che:
- Si posizioni come leader nel cartongesso nel Lazio
- Si differenzi per focus su **isolamento termo-acustico** e **velette luminose**
- Superi i competitor online (specialmente SpeedHouse su Frosinone)
- Generi contatti qualificati attraverso SEO locale e CTA efficaci

---

## Tecnologia Proposta

| Componente | Scelta | Motivazione |
|------------|--------|-------------|
| **Framework** | HTML/CSS/JS statico o Vite | Velocità, semplicità, costi hosting minimi |
| **Styling** | CSS custom con design system | Controllo totale, performance ottimale |
| **Hosting** | Netlify / Vercel / GitHub Pages | Gratuito, CDN, HTTPS automatico |
| **Form contatti** | Formspree / Netlify Forms | Nessun backend necessario |
| **Analytics** | Google Analytics 4 | Standard di mercato |

---

## Struttura del Sito

```
pfc-cartongesso/
├── index.html                 # Home
├── chi-siamo.html            # Chi Siamo
├── servizi/
│   ├── index.html            # Panoramica servizi
│   ├── isolamento-acustico.html
│   ├── isolamento-termico.html
│   ├── velette-controsoffitti.html
│   ├── pareti-divisorie.html
│   └── cappotto-interno.html
├── portfolio.html            # Gallery lavori
├── zone-servite.html         # Aree operative
├── preventivo.html           # Form richiesta preventivo
├── contatti.html             # Contatti + mappa
├── blog/                     # Articoli SEO
│   └── index.html
├── css/
│   ├── style.css             # Design system
│   └── components.css        # Componenti riutilizzabili
├── js/
│   └── main.js               # Interazioni
├── images/
│   ├── logo/
│   ├── hero/
│   ├── servizi/
│   └── portfolio/
└── docs/
    └── analisi-competitor.md
```

---

## Contenuti per Pagina

### Home (`index.html`)

| Sezione | Contenuto |
|---------|-----------|
| **Hero** | Slogan: "Comfort e Design in Cartongesso per il Tuo Lazio" + CTA preventivo |
| **3 Box Servizi** | Isolamento Acustico, Isolamento Termico, Velette Luminose |
| **Perché PFC** | 4 punti: Specializzazione, Esperienza, Trasparenza, Copertura regionale |
| **Portfolio Preview** | 4 foto migliori lavori con link a gallery |
| **Testimonianza** | 1 citazione cliente |
| **CTA Finale** | "Richiedi preventivo gratuito entro 24h" |

### Chi Siamo (`chi-siamo.html`)

- Storia di Paolo Fia e della ditta
- Mission: comfort abitativo attraverso soluzioni di qualità
- Valori: precisione, trasparenza, innovazione
- Focus differenziante: isolamento e design
- Foto team/fondatore

### Servizi (5 pagine dedicate)

Ogni pagina servizio avrà:
1. **Hero specifico** con immagine
2. **Descrizione** (cos'è, come funziona)
3. **Vantaggi** (lista 5 punti)
4. **Applicazioni** (dove usarlo)
5. **FAQ** (3-5 domande specifiche)
6. **Gallery** (3-4 foto specifiche)
7. **CTA** → preventivo

#### Isolamento Acustico
- Focus: abbattimento rumori, comfort, normative
- Keyword: isolamento acustico cartongesso, insonorizzazione Roma, pareti fonoassorbenti

#### Isolamento Termico
- Focus: risparmio energetico, comfort, bonus fiscali
- Keyword: isolamento termico interno, cappotto interno cartongesso, risparmio riscaldamento

#### Velette e Controsoffitti
- Focus: design, illuminazione LED, modernità
- Keyword: velette cartongesso, controsoffitti LED, illuminazione indiretta Roma

#### Pareti Divisorie
- Focus: divisione ambienti, rapidità, versatilità
- Keyword: pareti cartongesso Roma, divisori interni, tramezzi a secco

#### Cappotto Interno
- Focus: alternativa al cappotto esterno, bonus 110
- Keyword: cappotto interno, coibentazione interna, bonus ristrutturazione

### Portfolio (`portfolio.html`)
- Gallery filtrata per categoria
- Ogni progetto: foto, descrizione breve, zona
- Possibilità prima/dopo

### Zone Servite (`zone-servite.html`)
- Mappa interattiva Lazio
- Elenco province con descrizione:
  - Roma e provincia
  - Frosinone e provincia
  - Latina e provincia
  - Viterbo e provincia
  - Rieti e provincia

### Preventivo (`preventivo.html`)
- Form con campi: nome, telefono, email, tipo lavoro, descrizione, zona
- Messaggio rassicurante: "Risposta entro 24h"
- Alternativa WhatsApp

### Contatti (`contatti.html`)
- Telefono click-to-call
- WhatsApp click-to-chat
- Email
- Indirizzo con mappa Google
- Orari operativi
- Form rapido

---

## Strategia SEO Locale

### Meta Tag Essenziali

```html
<!-- Home -->
<title>PFC Cartongesso | Isolamento e Velette nel Lazio | Roma, Frosinone, Latina</title>
<meta name="description" content="PFC - Paolo Fia Cartongesso: specialisti in isolamento termo-acustico e velette luminose. Preventivo gratuito in 24h. Operiamo in tutto il Lazio.">

<!-- Servizio esempio -->
<title>Isolamento Acustico in Cartongesso Roma | PFC Cartongesso</title>
<meta name="description" content="Riduci i rumori fino a 50dB con il nostro isolamento acustico in cartongesso. Soluzioni professionali a Roma e Lazio. Preventivo gratuito.">
```

### Schema Markup LocalBusiness

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "PFC - Paolo Fia Cartongesso",
  "description": "Specialisti in cartongesso, isolamento termo-acustico e velette nel Lazio",
  "url": "https://www.pfccartongesso.it",
  "telephone": "+39XXXXXXXXXX",
  "areaServed": ["Roma", "Frosinone", "Latina", "Viterbo", "Rieti"],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "...",
    "addressRegion": "Lazio",
    "addressCountry": "IT"
  }
}
```

### Azioni SEO
- [ ] Google Business Profile con foto e recensioni
- [ ] Directory locali (PagineGialle, Instapro, ProntoPro, Houzz)
- [ ] Backlink da siti locali/partner
- [ ] Blog con articoli keyword-focused

---

## Design System

### Colori

```css
:root {
  /* Primari */
  --color-primary: #1a5f7a;       /* Blu professionale */
  --color-primary-dark: #134b5f;
  --color-primary-light: #2d7a9a;
  
  /* Accento */
  --color-accent: #f4a261;        /* Arancione caldo */
  --color-accent-dark: #e76f51;
  
  /* Neutri */
  --color-bg: #ffffff;
  --color-bg-alt: #f8f9fa;
  --color-text: #2d3436;
  --color-text-light: #636e72;
  
  /* Semantici */
  --color-success: #2ecc71;
  --color-warning: #f39c12;
}
```

### Tipografia

```css
:root {
  --font-heading: 'Outfit', sans-serif;
  --font-body: 'Inter', sans-serif;
  
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 2rem;
  --text-4xl: 2.5rem;
}
```

### Componenti UI

- **Button Primary**: Sfondo accent, hover scale 1.02
- **Button Secondary**: Bordo primary, sfondo trasparente
- **Card Servizio**: Ombra sottile, hover elevazione
- **Hero**: Gradiente overlay su immagine, testo centrato
- **CTA Bar**: Sticky bottom su mobile

---

## Elementi Interattivi

### WhatsApp Widget
- Icona fissa in basso a destra
- Click → apre chat precompilata
- Messaggio: "Ciao! Vorrei informazioni su..."

### Form Contatto
- Validazione real-time
- Animazione successo
- Fallback email se JS disabilitato

### Gallery
- Lightbox per foto
- Filtri per categoria
- Lazy loading immagini

---

## Timeline Sviluppo

### Fase 1: Setup e Struttura (1-2 giorni)
- [ ] Inizializzare progetto
- [ ] Creare design system CSS
- [ ] Struttura HTML base

### Fase 2: Pagine Core (3-4 giorni)
- [ ] Home page completa
- [ ] Chi Siamo
- [ ] Template servizi
- [ ] 5 pagine servizi

### Fase 3: Funzionalità (2-3 giorni)
- [ ] Portfolio/Gallery
- [ ] Form preventivo
- [ ] Contatti con mappa
- [ ] Zone servite

### Fase 4: SEO e Ottimizzazioni (1-2 giorni)
- [ ] Meta tag tutte le pagine
- [ ] Schema markup
- [ ] Ottimizzazione immagini
- [ ] Test PageSpeed

### Fase 5: Lancio (1 giorno)
- [ ] Deploy su hosting
- [ ] Configurazione dominio
- [ ] Google Analytics
- [ ] Test finale cross-browser

---

## Piano di Verifica

### Test Automatici
- **Lighthouse**: Obiettivo score >90 su tutte le metriche
- **W3C Validator**: HTML/CSS validi
- **Mobile-Friendly Test**: Google

### Test Manuali

1. **Navigazione**
   - Verificare tutti i link funzionanti
   - Menu responsive su mobile
   - CTA visibili in ogni pagina

2. **Form**
   - Invio form preventivo → conferma ricezione
   - Validazione campi obbligatori
   - Test su mobile

3. **Performance**
   - Caricamento pagine < 3 secondi
   - Immagini lazy load funzionanti
   - No errori console

4. **Cross-browser**
   - Chrome, Firefox, Safari, Edge
   - iOS Safari, Android Chrome

5. **SEO**
   - Meta tag presenti
   - Heading structure corretta (H1 unico per pagina)
   - Alt text immagini

---

## Richiesta Informazioni al Cliente

Prima di procedere allo sviluppo, servono:

1. **Contenuti Testuali**
   - Storia di Paolo Fia e dell'azienda
   - Descrizione servizi specifici
   - Punti di forza da evidenziare

2. **Materiali Visivi**
   - Logo (se esistente) o brief per creazione
   - Foto lavori realizzati
   - Foto del fondatore/team

3. **Dati Contatto**
   - Telefono/i
   - Email
   - Indirizzo sede
   - Orari operativi
   - Profili social (se esistenti)

4. **Preferenze**
   - Colori preferiti per il brand
   - Siti competitor che piacciono come stile
   - Nome dominio desiderato (es. pfccartongesso.it)

---

## Note Finali

Questo piano è basato sull'analisi competitor salvata in `docs/analisi-competitor.md`. Le scelte strategiche (focus su isolamento e velette, copertura Lazio, differenziazione da SpeedHouse) derivano direttamente da quella analisi.

> **IMPORTANTE**: Prima di iniziare lo sviluppo, confermare con il cliente i dati e le preferenze elencate nella sezione "Richiesta Informazioni".
