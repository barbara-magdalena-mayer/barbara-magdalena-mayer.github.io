/* Gemeinsame Begriffsliste aller Lesehilfen und Spiele (Barbaras Lernjournal).
   Neue Begriffe hier ergänzen: Frage (f), Erklärung (kurz), Beispiel (bsp), Datum, Herkunft, Kommt vor in (also). */
(function(){
const FRAGEN = {
  gehoert: "Wem gehört die Software?",
  daten:   "Wo liegen die Daten?",
  ki:      "Wie funktioniert die KI?",
  wechsel: "Kann man später wechseln?",
  weg:     "Wie kommt die Information an?"
};
const B = {
  proprietaer: {wort:"proprietäre Software", f:"gehoert",
    kurz:"Software, die einer Firma gehört. Du darfst sie nutzen, wenn du dafür eine Erlaubnis kaufst. Hineinschauen und verändern darfst du nicht.",
    bsp:"Viele Programme in Kliniken sind proprietär. Wenn etwas fehlt, kann nur der Hersteller es ändern."},
  lizenz: {wort:"Lizenz", f:"gehoert",
    kurz:"Die Erlaubnis, eine Software zu nutzen, mit Regeln: wie viele Personen, wie lange, was man damit darf. Bei proprietärer Software kostet sie meist jedes Jahr Geld.",
    bsp:"Eine Pflegeschule zahlt pro Lehrkraft und Jahr für ihr Büroprogramm. Steigt der Preis, steigen die Kosten für alle."},
  quellcode: {wort:"Quellcode", f:"gehoert",
    kurz:"Der Bauplan eines Programms, geschrieben in einer Programmiersprache. Wer ihn lesen kann, sieht, was das Programm genau tut.",
    bsp:"In den Spielen zu Messwerten und Wunden liest du kleine Stücke Quellcode in Python.", also:["messwert","wunde"]},
  opensource: {wort:"Open Source", f:"gehoert",
    kurz:"Der Quellcode ist offen. Jede und jeder darf ihn lesen, verändern und weitergeben. Das regelt eine offene Lizenz. Open Source heißt nicht automatisch kostenlos: Einrichtung, Betrieb und Betreuung kosten trotzdem.",
    bsp:"Moodle, die Lernplattform vieler Schulen, ist Open Source. Eine Schule kann sie selbst betreiben oder einen Dienstleister bezahlen."},
  cloud: {wort:"Cloud", f:"daten",
    kurz:"Die Software läuft nicht auf deinem Gerät oder im eigenen Haus, sondern auf den Rechnern eines Anbieters. Du greifst über das Internet darauf zu.",
    bsp:"Du öffnest die Dokumentation im Browser. Die Daten liegen dann in einem Rechenzentrum des Anbieters, vielleicht in einem anderen Land."},
  rechenzentrum: {wort:"eigenes Rechenzentrum", f:"daten",
    kurz:"Die Klinik betreibt die Rechner selbst, im eigenen Haus oder bei einem Dienstleister ihrer Wahl. Fachleute sagen auch „On-Premises“, also „im Haus“. Dafür braucht sie eigenes Fachpersonal.",
    bsp:"Fällt ein Rechner aus, kümmert sich die IT-Abteilung der Klinik, nicht ein Anbieter irgendwo auf der Welt."},
  dsgvo: {wort:"DSGVO", f:"daten",
    kurz:"Die Datenschutz-Grundverordnung der EU. Sie regelt, wer personenbezogene Daten wie verarbeiten darf. Gesundheitsdaten sind dort besonders geschützt. Daten in Länder außerhalb der EU zu geben, ist nur unter strengen Bedingungen erlaubt.",
    bsp:"Ein Pflegebericht enthält Gesundheitsdaten. Wo er gespeichert wird, ist deshalb keine Nebensache.", also:["ueberleitung","darf-das-in-den-chat"]},
  souveraenitaet: {wort:"digitale Souveränität", f:"daten",
    kurz:"Selbst entscheiden können: welche Software man nutzt, wo die Daten liegen und ob man später wechseln kann. Das Gegenteil ist Abhängigkeit.",
    bsp:"Eine Klinik ist souverän, wenn sie ihre Daten jederzeit mitnehmen und den Anbieter wechseln könnte, auch wenn sie es nicht tut."},
  modell: {wort:"KI-Modell", f:"ki",
    kurz:"Das, was beim Lernen einer KI herauskommt: ein großes Rechenwerk, das aus Beispielen Muster gelernt hat. Es sagt voraus, was wahrscheinlich passt. Es kann sich dabei irren.",
    bsp:"Im Spiel „Wie lernt eine Maschine?“ siehst du, wie aus Beispielen eine Regel entsteht.", also:["ueberleitung","maschine"]},
  trainingsdaten: {wort:"Trainingsdaten", f:"ki",
    kurz:"Die Beispiele, aus denen ein KI-Modell gelernt hat. Was darin fehlt oder schief ist, steckt später auch im Modell.",
    bsp:"Lernt eine KI nur aus Berichten über junge Menschen, schätzt sie ältere Menschen schlechter ein."},
  openweight: {wort:"Open Weight", f:"ki",
    kurz:"Das fertig trainierte Modell wird veröffentlicht, also seine „Gewichte“, die gelernten Zahlen. Wie es trainiert wurde und mit welchen Daten, bleibt verborgen. Man kann es nutzen, aber nicht vollständig nachprüfen.",
    bsp:"Ein Hersteller nennt sein Modell „offen“. Fragst du nach den Trainingsdaten, heißt es: geheim. Dann ist es Open Weight, nicht Open Source."},
  lockin: {wort:"Anbieterabhängigkeit", f:"wechsel",
    kurz:"Man kommt von einem Anbieter kaum noch los: Die Daten stecken in seinem Format, alle sind an sein Programm gewöhnt, ein Wechsel wäre teuer. Fachleute sagen auch „Lock-in“, also „eingeschlossen“.",
    bsp:"Der Hersteller erhöht die Preise. Die Klinik zahlt, weil ein Wechsel noch teurer wäre."},
  standard: {wort:"offene Standards", f:"wechsel",
    kurz:"Öffentlich beschriebene Formate und Regeln, wie Daten gespeichert und ausgetauscht werden. Jedes Programm darf sie nutzen. Dann kann man Daten von einem Programm ins andere mitnehmen.",
    bsp:"Kommen die Werte vom Zuckersensor nur in einer einzigen App an, fehlt ein offener Standard.", also:["ueberleitung","zucker"]}
};
const SPIELE = {
  messwert:{t:"Messwerte in der Pflegedokumentation", u:"../messwert/"},
  wunde:{t:"Wunden messen und dokumentieren", u:"../wunde/"},
  "darf-das-in-den-chat":{t:"Darf das in den Chat?", u:"../darf-das-in-den-chat/"},
  maschine:{t:"Wie lernt eine Maschine?", u:"../maschine/"},
  zucker:{t:"Blutzucker-Sensor auf der Haut", u:"../zucker/"},
  ueberleitung:{t:"Was kommt beim Pflegedienst an?", u:"../ueberleitung/"},
  lesehilfe:{t:"Lesehilfe 1: Wem gehört die Software?", u:"../lesehilfe/"}
};

/* Aus „Person X und der digitale Überleitungsbogen“ (November 2026) */
const UEB = {datum:"November 2026", herkunft:"Spiel Überleitungsbogen"};
Object.assign(B, {
  feld: Object.assign({wort:"Feld und Formular", f:"weg",
    kurz:"Ein digitales Formular besteht aus Feldern. Jedes Feld hat einen Namen und nimmt eine bestimmte Art von Angabe auf. Was in kein Feld passt, wird oft nicht aufgeschrieben.",
    bsp:"Im Überleitungsbogen gibt es das Feld „Unterstützungsbedarf“. Ein Wunsch wie „nur kurz erinnern, sonst selbst entscheiden“ hat dort keinen eigenen Platz.", also:["ueberleitung"]}, UEB),
  auswahl: Object.assign({wort:"Auswahlliste und Freitext", f:"weg",
    kurz:"Bei einer Auswahlliste kreuzt du einen vorgegebenen Eintrag an. Das geht schnell und der Computer kann es sortieren. Im Freitextfeld schreibst du eigene Worte. Das ist genauer, kostet aber Zeit und wird leichter überlesen.",
    bsp:"„Tagesstruktur“ ist schnell angekreuzt. „Kurze Erinnerung ans Frühstück“ müsste jemand ins kleine Freitextfeld schreiben.", also:["ueberleitung"]}, UEB),
  strukturiert: Object.assign({wort:"strukturierte und unstrukturierte Daten", f:"weg",
    kurz:"Strukturierte Daten haben eine feste Form, zum Beispiel ein angekreuzter Eintrag oder eine Zahl mit Einheit. Der Computer kann sie zählen, sortieren und weitergeben. Unstrukturierte Daten sind freier Text. Den versteht vor allem ein Mensch.",
    bsp:"Ein Messwert wie 36,8 °C ist strukturiert. Ein Satz aus dem Gespräch mit Person X ist unstrukturiert.", also:["ueberleitung","messwert"]}, UEB),
  schnittstelle: Object.assign({wort:"Schnittstelle", f:"weg",
    kurz:"Die Stelle, an der zwei Programme Daten austauschen. Sie legt fest, welche Felder hinübergehen und wie. Was die Schnittstelle nicht vorsieht, kommt beim anderen Programm nicht oder nur versteckt an.",
    bsp:"Das Programm der Klinik schickt den Bogen an das Programm des Pflegedienstes. Dort erscheint in der Übersicht nur das angekreuzte Feld.", also:["ueberleitung","zucker"]}, UEB)
});
const HERKUNFT_STD = {datum:"November 2026", herkunft:"Lesehilfe 1"};
Object.keys(B).forEach(k => { B[k] = Object.assign({}, HERKUNFT_STD, B[k]); });
window.BEGRIFFE = {FRAGEN, B, SPIELE};
})();
