# Checkliste: neues Spiel einbinden

Damit kein Spiel irgendwo fehlt. Jeder Punkt muss erledigt sein, bevor ein Spiel als „fertig online“ gilt.

## 1. Ablage
- [ ] Eigener Ordner: `spiele/<kurzer-name>/index.html` – oder ein eigenes Repo (dann erreichbar unter `https://barbara-magdalena-mayer.github.io/<repo>/`; Rückweg und Figur mit voller Adresse)
- [ ] Bilder als eigene Dateien daneben (WebP), **nicht** in die HTML-Datei eingebettet
- [ ] Figur aus `bilder/barbara-figur.webp` einbauen (Pfad im Spiel: `../../bilder/barbara-figur.webp`): auf normalen Seiten den `bmm-figur`-Block vor `</body>` kopieren (z. B. aus `index.html`) – oben rechts, auf dem Handy am Seitenende; in Spielen ohne Seitenscrollen unten rechts im Spielbereich

## 2. Im Spiel selbst
- [ ] `<meta name="robots" content="noindex">` im Kopf (Seite soll vorerst nicht auffindbar sein)
- [ ] Link „← Zurück zur Werkstatt“ auf `../../`
- [ ] Titel ohne Nummern aus fremden Curricula
- [ ] Titel als Frage oder Situation, in der sich eine Person angesprochen fühlt (kein Fantasiename); gleicher Titel in `<title>`, `<h1>` und allen drei Listen

## 3. Überall verlinken – alle drei Listen
- [ ] **`index.html`** (Startseite = Werkstatt) – kurz halten! Aufbau: 1. neueste Arbeit mit „Neu ·“, 2. je ein Spiel pro Bereich (Du arbeitest digital · Du arbeitest mit Menschen · Du lernst Technik und Bau), 3. „Über mich & alle Arbeitsproben“, 4. Bluesky, Instagram, E-Mail. Die neue Arbeit ersetzt oben die bisherige neueste; alles andere steht nur in `ueber-mich.html`. Volle Adressen, Farben abwechseln.
- [ ] **`ueber-mich.html`** – eigener `<article class="work">`-Eintrag mit Form, Interaktion, Lernabsicht, KI
- [ ] **`grundbegriffe.html`** – Abschnitt „Die Arbeitsproben erklärt“
- [ ] Gegenprobe: Suche nach dem Namen eines bestehenden Spiels (z. B. `schulrechner`) – überall, wo es auftaucht, muss auch das neue Spiel stehen

## 4. Testen vor dem Hochladen
- [ ] Alle Wege einmal bis zum Ende durchgespielt
- [ ] Handybreite (375 px): kein seitliches Scrollen
- [ ] Mit der Tastatur bedienbar
- [ ] Keine fehlenden Bilder, keine Fehlermeldungen

## 5. Nach dem Hochladen
- [ ] 1–2 Minuten warten, dann Werkstatt und Startseite neu laden (Strg + Shift + R) und das Spiel von dort aus öffnen
