const nodesData = `
list	Entschuldigung
list	Ja-Nein
list	Freue mich
  list	Kommunikation
  list	Bekanntschaft
  list	schluss
list	Termin
  text	termin_dialog	Es gibt leider innerhalb dieser Woche keinen freien Termin mehr
list	Gesund
  list	Korper
  picture	Korper2	Gesicht, Körper
  list	Beim Arzt
  list	In der Apotheke
  list	Probleme
list	Verkehrsmittel
  list	Route
  list	Reisen
  list	Tour
  list	Stadt
  text	Durchsage - Zug verspäten
  text	PONS_dtz_CD1___Track_07	Durchsage - Achtung, Autofahrer!
  picture	Verkehrsmittel4	Verkehrsmitte 1-4
list	Telefongespräch
  text	Spielen zusammen	Spielen wir zusammen Fußball?
  text	1_Ich warte auf dich	Ich warte auf dich.
  text	2_Wo bist du denn	Wo bist du denn?
list	Wohnung
  text	Fragen zum Thema Wohnen	Fragen zum Thema Wohnen
  picture	Wohnung11	Wohnung 1-11
  picture	Stadt2	Stadt 1-2
list	Einkaufen
  list	Lebensmittel
  picture	Essen2	Essen 1-2
  list	Kleidung
  picture	Kleidung2	Kleidung 1-2
  list	Käufe
  text	Geldautomat
  text	Einkaufen1	Wie viel kosten die Tomaten
  text	Einkaufen2	Schau mal, in dem Prospekt sind gute Angebote
list	Wetter
  text	Jarhezeit Wetter
  text	In den Monaten Dezember, Januar und Februar__	In den Monaten Dezember, Januar und Februar...
  text	Wetter in Deutschland und meinem Land
  text	Lippe
list	schwierige Wörter	Wörter
  list	Sache1
  list	Sache2
  list	Sache3	Sache3 - Sätze
  list	Sache4
  list	Gegensatz1	Gegensatz1 - On/Off
  list	Gegensatz2
  list	Gegensatz3
  list	Gegensatz4
  picture	Gegensatz2	Gegensatz 1-2
  list	Beruf
  list	Baustelle
  list	Dokumente
  list	Tiere
  list	Farbe
  list	Fitness
  list	Urlaub
  picture	Sport1	Sport
  list	Familie
  text	Perfekt-Präteritum
list	Partikeln
list	Konjunktion
list	Adverb
text	Adjektive
list	Verb1	Verben
  text	Phrasen mit Verben 1
  list	Verb7_Sätze	Verb - Sätze
  list	Verb2
  list	Verb3
  list	Verb4
  picture	Verben2	Verben 1-2
  list	Verb5_modal	Modalverben
  list	deklinieren
  list	verb6_IPPz	Infinitiv, Präsens, Präteritum, Partizip II
list	Beschreibung
list	3	Kann helfen?
list	Ich
  text	Vorstellen1	Vorstellen
  text	Das ist mein Bett__	Das ist mein Bett...
  text	mein Tag
list	Alltag
  list	Buchstaben
  list	Zahlen
  list	Datum
  picture	Tag1	Tag
  list	Haushalt
  picture	Waschmaschine1	Waschmaschine
list	Zeichen
picture	Gefahr12	Gefahr
list	Notfall
list	Mitteilung
list	Pronomen und Fragen
list	Werden-waren
zero	Test
  test	Akk-Dat-Gen1
  list	Akk-Dat-Gen2
list	Brief
list	_plus
question	list/Beruf	Frage-TEST-RUN
question	Frage-maschine
other	Language
  index	main.Portuguese	Portuguese
  index	main	Russian
`;

tasks = [
    { type: 'dialog', files: ['10'] },
    { type: 'dialog', files: ['11'] },
    { type: 'dialog', files: ['12'] },
    { type: 'list', files: ['Entschuldigung', 'Ich'] },
/*    { type: 'list', files: ['*'] } */
    { type: 'list', files: ['Alltag', 'Farbe', 'Freue mich'] },
    { type: 'list', files: ['Ja-Nein', 'Partikeln'] },
    { type: 'list', files: ['Termin', 'Urlaub'] },
    { type: 'list', files: ['Sache1', 'Sache2', 'Sache3', 'Sache4'] },
    { type: 'list', files: ['schluss', 'schwierige Wörter', 'Telefongespräch'] },
    { type: 'list', files: ['Verb1', 'Verb2', 'Verb3', 'Verb4'] },
    { type: 'list', files: ['Verkehrsmittel', 'Route', 'Reisen'] },
    { type: 'list', files: ['Kleidung', 'Wetter', 'Wohnung', 'Tiere'] },
    { type: 'list', files: ['Lebensmittel', 'Korper', 'Konjunktion', 'Gesund'] },
    { type: 'list', files: ['Einkaufen', 'Dokumente', 'Beruf', '3', 'Datum'] },
    { type: 'list', files: ['Beim Arzt', 'Gesund', 'Fitness', 'Familie', 'In der Apotheke'] },
    { type: 'list', files: ['Gegensatz1', 'Gegensatz2', 'Gegensatz3', 'Gegensatz4', 'Beschreibung'] }
];
