// data.js
// red purple yellow orange black brown gray blue green
var LanguagePairEntry = `
Профессор спрашивает студента	Der Professor fragt DEN Student-en.
Профессор спрашивает ребенка	Der Professor fragt das Kind.
Профессор спрашивает женщину	Der Professor fragt die Frau.
Профессор спрашивает студенток	Der Professor fragt die Studentinnen.

Студент отвечает профессору	Der Student antwortet dem Professor.
Студент отвечает ребенку	Der Student antwortet dem Kind.
Студент отвечает студентке	Der Student antwortet DER Studentin.
Студент отвечает студенткам	Der Student antwortet DEN Studentin-nen.

Ответ студента очень хороший	Die Antwort des Student-en ist sehr gut.
Ответ ребенка очень хороший	Die Antwort des Kind-es ist sehr gut.
Ответ студентки очень хороший	Die Antwort DER Studentin ist sehr gut.
ОтветЫ студенток очень хорошие	Die AntwortEN DER Studentin-nen SIND sehr gut.

Родители дарят их сыну фотоаппарат	Die Eltern schenken ihrem Sohn eine Kamera.
Родители дарят их сыну компьютер	Die Eltern schenken ihrem Sohn einen Computer.
Родители дарят их сыну машину	Die Eltern schenken ihrem Sohn ein Auto.
Родители дарят их сыну книги	Die Eltern schenken ihrem Sohn Bücher.
Родители дарят их дочери книги	Die Eltern schenken ihreR Tochter Bücher.
Родители дарят их детям книги	Die Eltern schenken ihreN Kinder Bücher.

Фотографии Отто красивы	Otto-s Fotos sind schön.
Машина Отто большая	Otto-s Auto ist groß.
Это брат Анны	Das ist Anna-s Bruder.
Сестру Отто зовут Эрика	Otto-s Schwester heißt Erika.
коллеги господина Вебера прибыли в Минск тоже	Herrn Weber-s Kollegen kommen auch nach Minsk.

профессор спрашивает студента [ den A, Student_en_ ]	Der Professor fragt den Student-en.
студент отвечает профессору [ dem D ]	Der Student antwortet dem Professor.
ответ студента очень хорош [ des G, Student_en_ ]	Die Antwort des Student-en ist sehr gut.
родители дарят их сыну камеру [ ihrem D, eine A ]	Die Eltern schenken ihrem Sohn eine Kamera.
подарок родителей радует сына [ der G, den A ]	Das Geschenk der Eltern freut den Sohn.
он благодарит родителей за подарок [ dankt+D den, für+A ]	Er dankt den Eltern für das Geschenk.
он показывает камеру его друзьям [ seinen D ]	Er zeigt die Kamera seinen Freunden.
дочка показывает матери фотографии брата [ der D, des G ]	Die Tochter zeigt der Mutter die Fotos des Bruders.
фотографии Отто красивы [ Otto_s_ G ]	Otto-s Fotos sind schön.
мать Эрики очень довольна [ Erika_s_ G ]	Erika-s Mutter ist sehr zufrieden.
`;

// Подкаталог для MP3 файлов
var subdirectory = 'audio/2/';
