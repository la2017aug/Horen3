// data.js
// red purple yellow orange black brown gray blue green
var LanguagePairEntry = `
Здоровье	die Gesundheit	
движение (также Общественное, Жест)	die Bewegung	purple
двигаться	bewegen	
жалоба	die Beschwerde, die Beschwerden	purple
болезнь	die Krankheit	
лечение	die Behandlung	purple
инвалидность	die Behinderung	purple
инвалид	der Behinderte, der Invalide
состояние	die Kondition	

питание	die Ernährung
диета	der Diät
вес	das Gewicht	
время приема пищи	die Mahlzeit

стресс	der Stress
озноб	der Kälteschauer
сухой кашель	trockener Husten
воспаление/инфекция	die Entzündung
повредить	wehTun, tut weh, tat weh, hat wehgetan
травма	die Verletzung
рана	die Wunde
перелом руки	gebrochener Arm.
гипс	der Gips
сотрясение мозга	Gehirnerschütterung
циркуляторный коллапс	Kreislaufzusammenbruch

лекарство	die Arznei
лекарство	das Medikament, die Medikamente
лекарство, медицина    (nur Singular)	die Medizin

исследование	Untersuchung, Untersuchungen
отчет	Bericht	purple
кров.давление	Blutdruck
анализ крови	Blut Analyse
взять кровь	Blut abNehmen
томография	Computertomografie, CT
Электроэнцефалография (мозг)	Elektroenzephalografie, EEG
миография	Elektromyografie, EMG
МРТ	Magnetresonanztomografie, MRT
почек узи	NierenUltraschall
ренгтген	Röntgen

поддержка	die Unterstützung
забота	Betreuung	
служить, обслуживать	bedienen
сопровождать	begleiten
утомлять	anstrengen

'ходок'	der Rollator
трость	der Gehstock
инвалидная коляска	der Rollstuhl
слуховой аппарат	das Hörgerät
очки	die Brille
увеличительное стекло	die Lupe

дом беженцев	das Flüchtlingsheim
дом пристарелых	das Pflegeheim
сестринская служба	Pflegedienst
cиделка	Pflegekraft

Позвоните нам!	Rufen Sie uns an!
помощь в одевании и приеме пищи	unterstützung beim Anziehen und Essen.
убедить её	um sie zu überzeugen.

Ибрагим плохо себя чувствует.	Ibragim geht es nicht gut.
Сельма выбегает из квартиры.	Selma läuft aus der Wohnung raus.
выбегать (наружу)	rausLaufen

Зачем дедушке слуховой аппарат?	Warum braucht Opa ein Hörgerät?	red
Дедушке нужен слуховой аппарат, 	Opa braucht ein Hörgerät,
потому что он уже плохо слышит.	weil er nicht mehr gut hören kann.

принял ты лекарство?	Hast du deine Medikamente genommen?	red
я незнаю	Ich weiß es nicht.
ах, бабушка,	Ach Oma,
тебе следует принимать лекарства каждый день.	du sollst deine Medikamente doch jeden Tag nehmen.
смотри, это стоит здесь:	Schau mal, das steht hier:
ты следует принять две таблетки	Du sollst morgens zwei Tablette nehmen.

давать советы	um Ratschläge zu geben.
делать предложения	um Vorschläge zu machen.
Совет: Тебе следует принять таблетки.	Du sollst deine Tabletten nehmen.	red
Предложение: Хочешь я для тебя пропылесосил?	Soll iсh für dich staubsaugen?	red

У Эммы болит ухИ.   (immer Pl.)	Emma hat Ohrenschmerzen.
она пытаться похудеть	Sie versucht abzunehmen.
упал с велосипеда	vom Fahrrad fallen.
это сломанная нога.	Das ist ein gebrochenes Bein.
`;

// Подкаталог для MP3 файлов
var subdirectory = 'audio/';
