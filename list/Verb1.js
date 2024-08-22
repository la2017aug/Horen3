// data.js
// red purple yellow orange black brown gray blue green
var LanguagePairEntry = `
быть	sein, ist, war, ist gewesen
иметь    +Akk	haben, hat, hatte, hat gehabt

должен	müssen, muss
мочь, уметь      [кЁнен]	können, kann
мочь (с разрешения), разрешено	dürfen, darf
хотеть	wollen, will
долженствовать-предписано	sollen, soll
хотел бы	möchten, möchte

делать	machen, macht, machte, hat gemacht
делать activate	tun, tut, tat, hat getan
становиться	werden, wird, wurde, ist geworden
позволять, велеть	lassen, lässt, hat gelassen

Когда ты сегодня заканчиваешь работу? [фая-абенд]	Wann machst du heute Feierabend?
Давай мы прогуляемся?	Lassen wir uns spazieren gehen?
Позвольте Вы мне Вам помочь?	Lassen Sie mich Ihnen helfen?
Могу ли я оставить здесь свое полотенце?	Kann ich hier mein Handtuch liegen lassen?

Вы должны впустить арендодателя в свою квартиру,	Ihren Vermieter mussen Sie in Ihre Wohnung lassen,
ЕСЛИ он заранее с вами согласовал вам встречу	wenn er vorher einen Termin mit Ihnen verinbart hat
и он имеет важную причину	und er einen wigtigen Grund hat.

знать      +Akk  [кенен]	kennen, kennt, kannte, hat gekannt
узнать	erkennen
признавать что-то	anerkennen
знать	wissen, weiß, hat gewusst
помнить	erinnern
понимать	verstehen, hat verstanden

сказать     [загэн]	sagen, sagt, hat gesagt
говорить formal	sprechen
говорить informal	reden
Он говорит ерунду	Er redet Unsinn.
читать     [лэзен]	lesen, liest, hat gelesen
читать вслух	vorLesen
прочитать	durchLesen
писать	schreiben, schreibt, schrieb, hat geschrieben
записывать в кредит, начинать писать	anschreiben
Он записывает домашнее задание.	Er schreibt die Hausaufgaben an.
слушать Active-слушай!	hören, zuhören, hat gehört
по_буквам	buchstabieren

учиться	lernen
изучать, учиться (в университете, институте)	studieren, hat studiert

видеть      +Akk	sehen, sieht, hat gesehen
смотреть, вид	ansehen, hat angesehen
Я вижу много облаков на небе.	Ich sehe viele Wolken am Himmel.
смотреть   взглянуть / TV      [шауэн]	schauen
взгляни	Schau mal
рассматривать	anschauen
смотреть, пялиться	gucken, guckt, hat geguckt 

выглядеть	aussehen, sieht aus, hat ausgesehen
это выглядит хорошо. Это выглядит великолепно.	Das sieht gut aus. Das sieht super aus.
Никто не знает, как выглядит Том.	Niemand weiß, wie Tom aussieht.
показывать	zeigen, zeigt, hat gezeigt
любоваться (картиной)	bewundern

идти	gehen, geht, ist gegangen
бежать	laufen
ехать	fahren, fährt, hat gefahren
ехать домой	heimFahren.
приходить	kommen, kommt, kam, ist gekommen
Пожалуйста, приходите через три дня.	Bitte komm in drei Tagen.
Май приходит после апреля.	Mai kommt nach April.
прибыть	anKommen

бронировать (отель)	buchen, bucht, hat gebucht
списывать (деньги)	abgebucht
	
спрашивать	fragen, hat gefragt
переспрашивать	nachfragen
расспрашивать	befragen
отвечать	antworten, beantworten
сообщать, общаться	mitteilen
сообщать	berichten
советовать	beraten

искать     +Akk	suchen
находить(пальто удобным)	finden, hat gefunden
происходит где-то, имеет место	stattFinden

ставить, -место-     [штэлэн]	stellen, stellt, hat gestellt
стоять	stehen, steht, hat gestanden
производить	herstellen
представлять, знакомить	vorstellen
представлять, исполнять роль	darstellen
В правилах дома стоит, что	In der Hausordnung steht, dass man	blue
велосипеды стоят в подвале	die Fahrräder in den Keller stellen muss.	blue
Я поставил будильник на шесть. 	Ich stelle den Wecker auf sechs.
Поставь пиво в холодильник!	Stellt das Bier in den Kühlschrank!

садиться, занимать место   [зэцэн]	setzen, setzt, hat gesetzt
сидеть     [зицэн]	sitzen
я сажусь на стул	Ich setze mich auf einen Stuhl.
я сижу на стуле	ich sitze auf einem Stuhl.
класть	legen, legt, hat gelegt
лежать	liegen, liegt, lag, hat gelegen
Я кладу книгу на стол.	Ich lege ein Buch auf den Tisch.
я лежу на спине. Он лежал на спине.	Ich liege auf dem Rücken. Er hat auf dem Rücken gelegen.
`;

// Подкаталог для MP3 файлов
var subdirectory = 'audio/';
