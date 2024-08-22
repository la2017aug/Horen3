/* 
MIT License
Copyright (c) 2024  Oleksandr Lavrynenko  la2017aug@gmail.com
Permission is granted to use, copy, modify, and distribute this software under the MIT License.
See the LICENSE file for full terms.
*/

function cleanseFileName(text) {
    // Заменяем расширенные символы на стандартные
    let fileName = text.replace(/\?/g, ''); // вопрос удаляем
    fileName = fileName.replace(/:/g, '');  // двоеточие удаляем
    fileName = fileName.replace(/\//g, ' '); // косую на пробел
    fileName = fileName.replace(/\.{2,}/g, '.'); // многоточия в одну точку
    fileName = fileName.replace(/\.$/, ''); // убираем все финальные точки
    fileName = fileName.replace('.mp3', '');
    fileName = fileName.replace('.um', 'um');
    return fileName;
}

//        // Функция случайная фраза v1
//        function randomPhrase() {
//            if (Data.length > 0) {
//                var randomIndex = Math.floor(Math.random() * Data.length);
//                choicePhrase = Data[randomIndex];
//                if (choicePhrase.phraseB == previousPhraseB) {
//                    console.log('Случайный выбор 2');
//                    randomIndex = Math.floor(Math.random() * Data.length);
//                    choicePhrase = Data[randomIndex];
//                    if (choicePhrase.phraseB == previousPhraseB) {
//                        console.log('Случайный выбор 3');
//                        randomIndex = Math.floor(Math.random() * Data.length);
//                        choicePhrase = Data[randomIndex];
//                    }
//                }
//                console.log('Выбранная случайная строка: ' + choicePhrase.phraseB);
//                previousPhraseB = choicePhrase.phraseB;
//            }
//        }

// Функция случайная фраза
function randomPhrase() {
    if (Data.length > 0) {
        // Сначала выберем элементы из начала массива, чтобы учитывать старые штампы времени
        let filteredData = Data.filter(item => item.phraseB !== previousPhraseB);
        // Если после фильтрации массив пуст, значит все элементы имеют тот же phraseB, что и предыдущий
        if (filteredData.length == 0) {
            filteredData = Data;
        }
        // Выбор случайного индекса из отфильтрованного массива
        let randomIndex = Math.floor(Math.random() * filteredData.length);
        choicePhrase = filteredData[randomIndex];
        // Обновление предыдущей фразы
        console.log('randomPhrase: ' + choicePhrase.phraseB);
        // Обновление предыдущей фразы
        previousPhraseB = choicePhrase.phraseB;
        // Обновляем значение last в массиве
        //choicePhrase.last = Date.now();
        // Сортировка массива по возрастанию last, чтобы недавно использованные элементы перемещались в конец
        //Data.sort((a, b) => a.last - b.last);
    }
}

/////////////////////////////////////////////////////////////////////////////
//  Озвучка (асинхронный вызов)                                            //
/////////////////////////////////////////////////////////////////////////////
async function playAudio(text) {
    
    // выход если получены русские символы
    if (/[а-яА-ЯёЁ]/.test(text)) {
        //console.log('русские буквы');
        return 0;
    }

    var audio = document.getElementById('background-audio');

    // Формирование имени файла
    var fileName = cleanseFileName(text);

    /*
    // простой запуск воспроизведения
    audio.src = 'audio/' + fileName;
    audio.play().catch(function(error) {
        console.log('Ошибка воспроизведения: ', error);
    });
    */

    /*
    // перебор возможных папок и ответ об успехе - 1/0
    let success = 1;
    audio.src = 'audio/' + fileName;
    audio.play().catch(function(error) {
        success = 0
    });
    if (success == 0) {
        success = 1;
        audio.src = 'audio.1/' + fileName;
        audio.play().catch(function(error) {
            success = 0
        });
    }
    if (success == 0) {
        console.log('Ошибка воспроизведения: ' + audio.src, error);
    }
    return success;
    */

    // запуск с ожиданием завершения и ответ об успехе
    // async function, со специальным вызовом
    let directories = ['audio/', 'audio.1/', 'audio.2/', 'audio.3/'];

    // указание пути было загружено
    if (typeof subdirectory !== 'undefined' && subdirectory !== null && subdirectory.trim() !== '') {
        //console.log('subdirectory', subdirectory);
        directories = [subdirectory];
    }

    let success = 0;
    function playAudioFromDirectory(directory) {
        return new Promise((resolve, reject) => {
            audio.src = `${directory}${fileName}.mp3`;
            audio.play().then(() => {
                audio.onended = () => {
                    resolve(1); // Успешно воспроизведено и завершено
                };
            }).catch((error) => {
                console.log(`Ошибка воспроизведения в папке ${directory}: `, error);
                resolve(0); // Ошибка воспроизведения
            });
        });
    }

    for (let directory of directories) {
        success = await playAudioFromDirectory(directory);
        if (success == 1) break;
    }
    //if (success == 0) {
    //    console.log('Ошибка воспроизведения: файл не найден во всех папках');
    //}
    return success;
}

function macroToText(text) {
    //if (!text.includes('{')) {
    //    return text;
    //}

    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    
    const daysOfWeekRu = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];
    const daysOfWeekDe = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
    
    const monthsRu = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
    const monthsDe = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
    
    const dayOfWeekRu = daysOfWeekRu[now.getDay()];
    const dayOfWeekDe = daysOfWeekDe[now.getDay()];
    
    const day = now.getDate();
    const monthRu = monthsRu[now.getMonth()];
    const monthDe = monthsDe[now.getMonth()];

    // Разделяем текст на сегменты по TAB
    const segments = text.split('\t');

    // Обрабатываем первый сегмент
    let processedFirstSegment = segments[0]
        .replace(/{h}/g, hours.toString())  //.padStart(2, '0'))
        .replace(/{m}/g, minutes.toString())
        .replace(/{week}/g, dayOfWeekRu)
        .replace(/{day}/g, day)
        .replace(/{mon}/g, monthRu);

    // Обрабатываем второй сегмент, если он существует
    let processedSecondSegment = segments.length > 1
        ? segments[1]
            .replace(/{h}/g, '{' + hours.toString())
            .replace(/{m}/g, '{' + minutes.toString())
            .replace(/{week}/g, '{' + dayOfWeekDe)
            .replace(/{day}/g, '{' + day)
            .replace(/{mon}/g, '{' + monthDe)
        : '';

    // Соединяем обработанные сегменты через TAB
    return [processedFirstSegment, processedSecondSegment].join('\t');
}

/////////////////////////////////////////////////////////////////////////////
//  База данных                                                            //
/////////////////////////////////////////////////////////////////////////////

// загрузка значений поля last из базы данных
async function loadDB() {
    // CСДЕЛАТЬ СМЕННЫЕ КЛЮЧИ ПОИСКА
    for (let i = 0; i < Data.length; i++) {
        let entry = Data[i];
        // Считывание нужной строки из базы данных
        const key = entry.phraseB + '>' + entry.answerB;
        const lastValue = await getLastFromDB(key);
        // Обновление last
        if (lastValue) {
            entry.last = lastValue;
        }
    }
    // Сортировка массива Data по полю last
    Data.sort((a, b) => a.last - b.last);
}

// Функция для открытия базы данных
function openDatabase() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open('myPhrases', 1);
        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            const objectStore = db.createObjectStore('phrasesLog', { keyPath: 'text' });
            objectStore.createIndex('last', 'last', { unique: false });
        };
        request.onsuccess = (event) => {
            resolve(event.target.result);
        };
        request.onerror = (event) => {
            reject('Error opening database: ' + event.target.errorCode);
        };
    });
}

// Функция для добавления записи в базу данных
function addRecord(text, last) {
    return openDatabase().then((db) => {
        return new Promise((resolve, reject) => {
            const transaction = db.transaction(['phrasesLog'], 'readwrite');
            const objectStore = transaction.objectStore('phrasesLog');
            const request = objectStore.put({ text: text, last: last });
            request.onsuccess = () => {
                resolve('addRecord');
            };
            request.onerror = (event) => {
                reject('addRecord Error: ' + event.target.errorCode);
            };
        });
    });
}

// Функция для получения записи из базы данных
async function getLastFromDB(text) {
    let db = await openDatabase();
    return new Promise((resolve, reject) => {
        let transaction = db.transaction(['phrasesLog'], 'readonly');
        let objectStore = transaction.objectStore('phrasesLog');
        let request = objectStore.get(text);
        request.onsuccess = function(event) {
            let result = event.target.result;
            if (result) {
                resolve(result.last);
            } else {
                resolve('');
            }
        };
        request.onerror = function(event) {
            reject('Error getting record from DB: ' + event.target.errorCode);
        };
    });
}
