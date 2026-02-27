# Guida al Deploy su GitHub Pages

Questa guida ti aiuterà a pubblicare il tuo sito gratuitamente usando GitHub Pages.

## 1. Requisiti
- Un account su [GitHub](https://github.com/).
- [Git](https://git-scm.com/) installato sul tuo computer.

## 2. Creazione del Repository
1. Accedi a GitHub e clicca su **New Repository**.
2. Nome del repository: `sito-pfc` (o quello che preferisci).
3. Impostalo come **Public**.
4. Clicca su **Create repository**.

## 3. Caricamento dei File (da terminale)
Apri il terminale nella cartella del tuo sito (`g:\Sito paolo`) ed esegui questi comandi:

```bash
# Inizializza Git
git init

# Aggiungi tutti i file
git add .

# Primo commit
git commit -m "Primo caricamento del sito"

# Collega al repository GitHub (sostituisci IL_TUO_USER con il tuo nome utente)
git remote add origin https://github.com/IL_TUO_USER/sito-pfc.git

# Carica i file
git push -u origin main
```

## 4. Configurazione Dominio su Cloudflare

Per collegare il tuo dominio `paolofiacartongessi.it.com` al sito su GitHub:

1. Accedi a **Cloudflare**.
2. Vai nella sezione **DNS** del tuo dominio.
3. Aggiungi i seguenti **Record A** per puntare ai server di GitHub:
   - `@` -> `185.199.108.153`
   - `@` -> `185.199.109.153`
   - `@` -> `185.199.110.153`
   - `@` -> `185.199.111.153`
4. Aggiungi un **Record CNAME**:
   - `www` -> `iltuoutente.github.io` (sostituisci `iltuoutente` con il tuo nome utente GitHub).
5. Assicurati che il "Proxy status" sia impostato su **DNS Only** (nuvoletta grigia) almeno per la prima configurazione, per permettere a GitHub di generare il certificato SSL.

## 5. Attivazione su GitHub

1. Vai sul tuo repository GitHub -> **Settings** -> **Pages**.
2. Sotto "Custom domain", verifica che ci sia scritto `paolofiacartongessi.it.com`.
3. Attiva l'opzione **Enforce HTTPS** (potrebbe volerci qualche ora prima che sia disponibile).

---

## Di cosa ho bisogno per aiutarti?
Per aiutarti direttamente con il caricamento, avrei bisogno che tu:
1. Creassi il repository su GitHub.
2. Mi fornissi l'URL del repository (es. `https://github.com/tuonome/sito-pfc.git`).
3. Verificassi di aver configurato le credenziali Git sul tuo computer.

Una volta pronto, posso eseguire io i comandi di `git push` per te!
