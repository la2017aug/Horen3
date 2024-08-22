// data.js
// red purple yellow orange black brown gray blue green
var LanguagePairEntry = `
я нуждаюсь встреча, пожалуйста	Ich brauche einen Termin, bitte.
я хотел-бы прием согласовать	Ich möchte einen Termin vereinbaren.
я хотел-бы с-удовольствием встречу [назначить]	Ich hätte gerne einen Termin.
когда хотели-бы Вы прийти?	Wann möchten Sie kommen?

нужно я записываться или я могу просто подойти?	Brauche ich da einen Termin oder kann ich einfach vorbeikommen?
с какого [даются] снова свободны встречи?	ab wann gibt es wieder freie Termine.
можно пораньше?	Geht es nicht früher?
могу я сегодня подойти? Это срочно.	Kann ich heute kommen? Es ist dringend.
имете Вы в четверг свободные встречи?	Haben Sie am Donnerstag einen Termin frei?
могли-бы Вы мой прием в пятницу подтвердить?	Können Sie mir bitte meinen Termin am Freitag bestätigen?

когда встреча запланирована?	Wann ist das Treffen geplant?
когда мне подойти?	Wann soll ich kommen?	green
когда мы встретимся?	Wann treffen wir uns?	green
у меня назначена встреча в среду	Ich habe am Mittwoch einen Termin.
она хотела сегодня встречу мне назначить 	Sie wollte für heute einen Termin mit mir ausmachen.

могу я встречу передвинуть?	Kann ich das Treffen verschieben?
я бы хотел перенести прием	Ich möchte bitte den Termin verschieben.
могу я встречу на следующую неделю перенести?	Kann ich den Termin auf nächste Woche verschieben?
может мы нашу встречу возможно на пятницу перенести?	Können wir unser Treffen vielleicht auf den Freitag verschieben?

я должен отменить встречу	Ich muss einen Termin absagen.
к сожалению, я не могу прийти	Ich kann leider nicht kommen.
Дело утряслось. (Встреча больше не нужна)	Es hat sich erledigt.
могли-бы мы новую встречу назначить?	Können wir einen anderen Termin ausmachen?
я должен к сожалению отменить, потому что...	Ich muss leider absagen, weil...
15-го ноября я УЖЕ встречу [имею]	Am 15. November habe ich bereits einen Termin.

я не имею сегодня времени,	Ich habe heute keine Zeit,
поэтому должны мы другое время для встречи найти	deshalb müssen wir einen anderen Zeitpunkt für den Termin finden.

желаем мы встречу согласовать?	Wollen wir einen Termin vereinbaren?
желаем мы в понедельник встретиться?	Wollen wir uns am Montag treffen?
в понедельник мне не идет, мог-бы ты также во вторник?	Montag geht bei mir nicht, könntest du auch am Dienstag?
мне идет сегодня вечером, а тебе?	Bei mir geht es heute Abend, und bei dir?
как насчет субботы?	Wie wäre es mit Samstag?

тут я не имею к сожалению времени	Da habe ich leider keine Zeit.
это не идет к сожалению	Das geht leider nicht.
это подходит	Das passt gut.

прием	der Termin
прием записаться	einen Termin (aus)machen
прием удалить	einen Termin entfernen
прием перенести	einen Termin verlegen
прием выдавать	einen Termin (ver)geben
прием соблюдать	einen Termin einhalten
вовремя на прием прийти	pünktlich zum Termin kommen	
разрешенный	erlaubt	
толкать - перемещать прием	schieben
тянуть - перемещать прием	ziehen
откладывать	verschieben
отменять	absagen

можно пораньше?	kann man frühe?
или когда место освободится?	oder wenn Platz frei wird?

Большое спасибо. До звонка	Vielen Dank. Auf Wiederhören.

приходите в половине второго  [1:30]	Komm um halb eins.
склад открыт до 18 часов	Das Lager ist bis 18 Uhr geöffnet
вы можете получить заказ завтра с 15:30 до 18:30	Sie können die Bestellung morgen von 15 Uhr 30 bis 18 Uhr 30 abholen.
поезд прибудет в половине седьмого [6:30]	Der Zug kommt um halb sieben an.
склад закрывается в половине пятого [4:30]	Das Lager schließt um halb fünf.
в какое время я могу забрать заказ?	Um welche Uhrzeit kann ich die Bestellung abholen?
в какой день я должен получить товар?	An welchem Tag soll ich die Ware erhalten?
встреча назначена на понедельник в половине третьего [2:30]	Das Treffen ist für Montag um halb drei angesetzt.
когда отплывает паром?	Wenn die Fähre abfährt?
назначьте время встречи пожалуйста	Vereinbaren Sie bitte einen Termin für das Treffen.
`;

// Подкаталог для MP3 файлов
var subdirectory = 'audio/';