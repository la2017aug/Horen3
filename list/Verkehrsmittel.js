// data.js
// red purple yellow orange black brown gray blue green
var LanguagePairEntry = `
Транспортные средства (mit+Dativ)	Verkehrsmittel
соединение транспортное ICE/RB	Verbindung
транспортное средство	Fahrzeug
общественный транспорт	öffentliche Verkehrsmittel

отправление	die Abfahrt	red
прибытие	die Ankunft	red
от	von, ab	red
куда	nach, an	red

маршрут 	die Linie, die Linien, Strecke, Route
направление	die Richtung, die Richtungen
пункт назначения	Reiseziel
достичь цели, доехать, приезжать	ankommen
остаток	der Rest, die Reste

Как долго?	Wie lange?
одинарный? [туда]	Einfach?
туда и назад	hin und zurück

я иду пешком	Ich gehe zu Fuß.	blue
я еду на автобусе	Ich fahre mit dem Bus.	blue
я еду на поезде	Ich fahre mit dem Zug.	blue
я еду в машине	Ich fahre mit den Auto.	blue
я веду машину	Ich fahre ein Auto.	blue
я еду на метро	Ich fahre mit der U-Bahn.	blue

высаживаться из транспорта	aussteigen	red
садиться в транспорт	einsteigen	red
пересадка	umsteigen	red

автомобиль	das Auto
велосипед	das Fahrrad
такси	das Taxi
автобус	der Bus

ЖД	die Bahn
вокзал	der Bahnhof
трамвай	die Straßenbahn
(ундер)подзем-метро	die U-Bahn
шнель-метро, электричка	die S-Bahn
поезд	der Zug
региональный-поезд	die RB
поезд 200км/ч	der ICE

платформа	der Bahnsteig
платформа и пути	Plattform und Gleise
рельсы	die Schienen
вагон	der Wagon
проводник, кондуктор, дирижер	der Schaffner

порт	der Hafen
корабль	das Schiff
лодка	das Boot
моторная лодка	das Motorboot
судно на воздушной подушке	das Luftkissenboot
паром	die Fähre
якорь	der Anker
капитан	der Kapitän
моряк	der Matrose

самолет	das Flugzeug
вертолет	der Hubschrauber
планер	das Segelflugzeug
аэропорт	der Flughafen
полет	der Flug
взлет	der Abflug
пилот	der Pilot
стюардесса	die Stewardess

башня	der Tower
трап	die Gangway
коридор/проход	Gang

путешествие	die Reise
сумка	die Tasche
багаж	das Gepäck

расписание	der Fahrplan
билет	das Ticket
гид / путеводитель(бумага)	der Reiseführer
скидка, льгота [BahnCard]	Ermäßigung

водительское удостоверение	der Autoführerschein
водит. удостоверение на мопед	der Mopedführerschein

светофор	die Ampel, die Ampeln
табло	die Anzeigetafel
объявление (на вокзале)	die Durchsage

остановка	die Station
остановка атобуса	die Bushaltestelle
перекрёсток	die Kreuzung, die Kreuzungen

пожарная машина	das Feuerwehrauto
полицейская машина	das Polizeiauto
скорая помощь	der Krankenwagen
эвакуатор	der Abschleppwagen
мусоровоз	die Müllabfuhr

мотоцикл	das Motorrad
дом на колёсах	das Wohnmobil
фургон	der Lieferwagen
грузовик	der Lastwagen

грузовик	LKW
легковой	PKW

движение, трафик	der Verkehr
шоссе	die Autobahn
столб экстренного вызова	die Notrufsäule
зона обслуживания	die Raststätte
заправочная станция	die Tankstelle

бензин	das Benzin
кабина	das Cockpit
шина	die Reife, die Reifen
выхлоп	abgasen
шофер	der Chauffeur

дорожный знак	das Verkehrsschild
автостоянка	der Parkplatz
ограничение скорости	Geschwindigkeitsbegrenzung

пробка	der Stau, die Staus
блокировать	sperren
'лежит' заблокирована A10	es liegt eine Sperrung auf der A10.

тормозить	bremsen, bremst, bremste, hat gebremst
`;

// Подкаталог для MP3 файлов
var subdirectory = 'audio/';
