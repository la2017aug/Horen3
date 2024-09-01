// data.js
// red purple yellow orange black brown gray blue green
var LanguagePairEntry = `
ser, é, foi, foi	sein, ist, war, ist gewesen	
tem, tem, teve, teve	haben, hat, hatte, hat gehabt	
		
deve, deve	müssen, muss	
pode, pode	können, kann	
pode, pode	dürfen, darf	
quero, quero	wollen, will	
deveria, deveria	sollen, soll	
gostaria, gostaria	möchten, möchte	
		
fazer, faz, fez, fez	machen, macht, machte, hat gemacht	
faz, faz, fez, fez	tun, tut, tat, hat getan	
tornar-se, irá, tornou-se, tornou-se	werden, wird, wurde, ist geworden	
deixe, deixe, deixou	lassen, lässt, hat gelassen	
		
Quando termina o trabalho hoje?	Wann machst du heute Feierabend?	
Vamos dar um passeio?	Lassen wir uns spazieren gehen?	
Deixe-me ajudá-lo?	Lassen Sie mich Ihnen helfen?	
Posso deixar aqui a minha toalha?	Kann ich hier mein Handtuch liegen lassen?	
		
Deve deixar o seu senhorio entrar no seu apartamento	Ihren Vermieter mussen Sie in Ihre Wohnung lassen,	
se ele marcou uma consulta consigo com antecedência	wenn er vorher einen Termin mit Ihnen verinbart hat	
e ele tem um bom motivo.	und er einen wigtigen Grund hat.	
		
sabe, sabe, sabia, soube	kennen, kennt, kannte, hat gekannt	
reconhecer	erkennen	
reconhecer	anerkennen	
sabe, sabe, soube	wissen, weiß, hat gewusst	
lembrar	erinnern	
compreender, entendido	verstehen, hat verstanden	
		
diz, diz, disse	sagen, sagt, hat gesagt	
falar	sprechen	
falar	reden	
Ele diz disparates.	Er redet Unsinn.	
leu, leu, leu	lesen, liest, hat gelesen	
ler em voz alta	vorLesen	
leia	durchLesen	
escrever, escrever, escrever, escrever	schreiben, schreibt, schrieb, hat geschrieben	
escreva para	anschreiben	
Ele escreve os trabalhos de casa.	Er schreibt die Hausaufgaben an.	
ouvir, escutar, escutar	hören, zuhören, hat gehört	
soletrar	buchstabieren	
		
aprender	lernen	
estuda, estudou	studieren, hat studiert	
		
veja, veja, tenha visto	sehen, sieht, hat gesehen	
olha, olhou	ansehen, hat angesehen	
Vejo muitas nuvens no céu.	Ich sehe viele Wolken am Himmel.	
olhar	schauen	
Basta olhar	Schau mal	
olhe	anschauen	
olha, olhou, olhou	gucken, guckt, hat geguckt 	
		
olha, olha, olhou	aussehen, sieht aus, hat ausgesehen	
Isso parece bom. Isso parece ótimo.	Das sieht gut aus. Das sieht super aus.	
Ninguém sabe como é a aparência de Tom.	Niemand weiß, wie Tom aussieht.	
mostrar, mostra, mostrou	zeigen, zeigt, hat gezeigt	
admirar	bewundern	
		
vai, vai, se foi	gehen, geht, ist gegangen	
correr	laufen	
dirigir, conduz, dirigiu	fahren, fährt, hat gefahren	
Conduza para casa.	heimFahren.	
vem, vem, veio, chegou	kommen, kommt, kam, ist gekommen	
Por favor, venha daqui a três dias.	Bitte komm in drei Tagen.	
Maio vem depois de abril.	Mai kommt nach April.	
chegar	anKommen	
		
livro, livro, reservou	buchen, bucht, hat gebucht	
debitado	abgebucht	
		
perguntar, perguntou	fragen, hat gefragt	
perguntar	nachfragen	
pergunta	befragen	
responder, responder	antworten, beantworten	
comunicar	mitteilen	
relatório	berichten	
conselho	beraten	
		
procurar	suchen	
encontrar, encontrou	finden, hat gefunden	
acontecer	stattFinden	
		
colocou, colocou, colocou	stellen, stellt, hat gestellt	
ficar, ficar, ficou	stehen, steht, hat gestanden	
produzir	herstellen	
introduzir	vorstellen	
representar	darstellen	
As regras da casa dizem que você...	In der Hausordnung steht, dass man	blue
tem de colocar as bicicletas no porão.	die Fahrräder in den Keller stellen muss.	blue
Coloquei o alarme para as seis.	Ich stelle den Wecker auf sechs.	
Coloque a cerveja no frigorífico!	Stellt das Bier in den Kühlschrank!	
		
colocou, colocou, colocou	setzen, setzt, hat gesetzt	
sentar	sitzen	
Sento-me numa cadeira.	Ich setze mich auf einen Stuhl.	
Estou sentado numa cadeira.	ich sitze auf einem Stuhl.	
deitar, deitar, colocou	legen, legt, hat gelegt	
mentir, mentir, deitar, deitar	liegen, liegt, lag, hat gelegen	
Coloquei um livro em cima da mesa.	Ich lege ein Buch auf den Tisch.	
Estou deitado de costas. Estava deitado de costas.	Ich liege auf dem Rücken. Er hat auf dem Rücken gelegen.	
`;

// Подкаталог для MP3 файлов
var subdirectory = 'audio/';
