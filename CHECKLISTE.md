# Checkliste: neues Spiel einbinden

Damit kein Spiel irgendwo fehlt. Jeder Punkt muss erledigt sein, bevor ein Spiel als „fertig online“ gilt.

## 1. Ablage
- [ ] Eigener Ordner: `spiele/<kurzer-name>/index.html`
- [ ] Bilder als eigene Dateien daneben (WebP), **nicht** in die HTML-Datei eingebettet
- [ ] Figur aus `bilder/barbara-figur.webp` einbauen (Pfad im Spiel: `../../bilder/barbara-figur.webp`): auf normalen Seiten den `bmm-figur`-Block vor `</body>` kopieren (z. B. aus `index.html`) – oben rechts, auf dem Handy am Seitenende; in Spielen ohne Seitenscrollen unten rechts im Spielbereich

## 2. Im Spiel selbst
- [ ] `<meta name="robots" content="noindex">` im Kopf (Seite soll vorerst nicht auffindbar sein)
- [ ] Link „← Zurück zur Werkstatt“ auf `../../`
- [ ] Titel ohne Nummern aus fremden Curricula

## 3. Überall verlinken – alle drei Listen
- [ ] **`werkstatt.html`** – Eintrag in der Linkliste (volle Adresse `https://barbara-magdalena-mayer.github.io/spiele/<name>/`), Farben abwechseln lassen
- [ ] **`index.html`** (Startseite) – eigener `<article class="work">`-Eintrag mit Form, Interaktion, Lernabsicht, KI
- [ ] **`grundbegriffe.html`** – Abschnitt „Die Arbeitsproben erklärt“
- [ ] Gegenprobe: Suche nach dem Namen eines bestehenden Spiels (z. B. `schulrechner`) – überall, wo es auftaucht, muss auch das neue Spiel stehen

## 4. Testen vor dem Hochladen
- [ ] Alle Wege einmal bis zum Ende durchgespielt
- [ ] Handybreite (375 px): kein seitliches Scrollen
- [ ] Mit der Tastatur bedienbar
- [ ] Keine fehlenden Bilder, keine Fehlermeldungen

## 5. Nach dem Hochladen
- [ ] 1–2 Minuten warten, dann Werkstatt und Startseite neu laden (Strg + Shift + R) und das Spiel von dort aus öffnen
