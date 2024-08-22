/* 
MIT License
Copyright (c) 2024  Oleksandr Lavrynenko  la2017aug@gmail.com
Permission is granted to use, copy, modify, and distribute this software under the MIT License.
See the LICENSE file for full terms.
*/

document.addEventListener('DOMContentLoaded', function() {
    const treeContainer = document.querySelector('.tree');

    if (!treeContainer) {
        return;
    }

    function createNode(data) {
        const node = document.createElement('div');
        node.className = 'node';
        data.children.forEach(childData => {
            const button = document.createElement('button');
            button.className = childData.class;
            if (childData.dataNumber) button.dataset.number = childData.dataNumber;
            button.textContent = childData.text;
            node.appendChild(button);
        });
        return node;
    }

    function createSubNode(data) {
        const subNode = document.createElement('div');
        subNode.className = 'sub-node';
        data.children.forEach(childData => {
            subNode.appendChild(createNode(childData));
        });
        return subNode;
    }

    nodesData.forEach(data => {
        if (data.type === 'sub-node') {
            treeContainer.appendChild(createSubNode(data));
        } else {
            treeContainer.appendChild(createNode(data));
        }
    });
});

nodesData = [
    { type: 'node', children: [
        { type: 'button', class: 'top-list', dataNumber: 'Entschuldigung', text: 'Entschuldigung' }
    ]},
    { type: 'node', children: [
        { type: 'button', class: 'top-list', dataNumber: 'Ja-Nein', text: 'Ja-Nein' }
    ]},
    { type: 'node', children: [
        { type: 'button', class: 'toggle-button', text: '+' },
        { type: 'button', class: 'top-list', dataNumber: 'Freue mich', text: 'Freue mich' }
    ]},
    { type: 'sub-node', children: [
        { type: 'node', children: [
            { type: 'button', class: 'sub-list', dataNumber: 'Kommunikation', text: 'Kommunikation' },
            { type: 'button', class: 'sub-list', dataNumber: 'Bekanntschaft', text: 'Bekanntschaft' }
        ]},
        { type: 'node', children: [
            { type: 'button', class: 'sub-list', dataNumber: 'schluss', text: 'schluss' }
        ]}
    ]},
    { type: 'node', children: [
        { type: 'button', class: 'toggle-button', text: '+' },
        { type: 'button', class: 'top-list', dataNumber: 'Termin', text: 'Termin' }
    ]},
    { type: 'sub-node', children: [
        { type: 'node', children: [
            { type: 'button', class: 'sub-text', dataNumber: 'termin_dialog', text: 'Es gibt leider innerhalb dieser Woche keinen freien Termin mehr' }
        ]}
    ]},
    { type: 'node', children: [
        { type: 'button', class: 'toggle-button', text: '+' },
        { type: 'button', class: 'top-list', dataNumber: 'Gesund', text: 'Gesund' }
    ]},
    { type: 'sub-node', children: [
        { type: 'node', children: [
            { type: 'button', class: 'sub-list', dataNumber: 'Korper', text: 'Körper' },
            { type: 'button', class: 'sub-picture', dataNumber: 'Korper2', text: 'Gesicht, Körper' }
        ]},
        { type: 'node', children: [
            { type: 'button', class: 'sub-list', dataNumber: 'Beim Arzt', text: 'Beim Arzt' }
        ]},
        { type: 'node', children: [
            { type: 'button', class: 'sub-list', dataNumber: 'In der Apotheke', text: 'In der Apotheke' }
        ]},
        { type: 'node', children: [
            { type: 'button', class: 'sub-list', dataNumber: 'Probleme', text: 'Probleme' }
        ]}
    ]},
    { type: 'node', children: [
        { type: 'button', class: 'toggle-button', text: '+' },
        { type: 'button', class: 'top-list', dataNumber: 'Verkehrsmittel', text: 'Verkehrsmittel' }
    ]},
    { type: 'sub-node', children: [
        { type: 'node', children: [
            { type: 'button', class: 'sub-list', dataNumber: 'Route', text: 'Route' },
            { type: 'button', class: 'sub-list', dataNumber: 'Reisen', text: 'Reisen' },
            { type: 'button', class: 'sub-list', dataNumber: 'Tour', text: 'Tour' },
            { type: 'button', class: 'sub-list', dataNumber: 'Stadt', text: 'Stadt' }
        ]},
        { type: 'node', children: [
            { type: 'button', class: 'sub-text', dataNumber: 'Durchsage - Zug verspäten', text: 'Durchsage - Zug verspäten' }
        ]},
        { type: 'node', children: [
            { type: 'button', class: 'sub-text', dataNumber: 'PONS_dtz_CD1___Track_07', text: 'Durchsage - Achtung, Autofahrer!' }
        ]},
        { type: 'node', children: [
            { type: 'button', class: 'sub-picture', dataNumber: 'Verkehrsmittel4', text: 'Verkehrsmitte 1-4' }
        ]}
    ]},
    { type: 'node', children: [
        { type: 'button', class: 'toggle-button', text: '+' },
        { type: 'button', class: 'top-list', dataNumber: 'Telefongespräch', text: 'Telefongespräch' }
    ]},
    { type: 'sub-node', children: [
        { type: 'node', children: [
            { type: 'button', class: 'sub-text', dataNumber: 'Spielen zusammen', text: 'Spielen wir zusammen Fußball?' }
        ]},
        { type: 'node', children: [
            { type: 'button', class: 'sub-text', dataNumber: '1_Ich warte auf dich', text: 'Ich warte auf dich.' }
        ]},
        { type: 'node', children: [
            { type: 'button', class: 'sub-text', dataNumber: '2_Wo bist du denn', text: 'Wo bist du denn?' }
        ]}
    ]},
    { type: 'node', children: [
        { type: 'button', class: 'toggle-button', text: '+' },
        { type: 'button', class: 'top-list', dataNumber: 'Wohnung', text: 'Wohnung' }
    ]},
    { type: 'sub-node', children: [
        { type: 'node', children: [
            { type: 'button', class: 'sub-text', dataNumber: 'Fragen zum Thema Wohnen', text: 'Fragen zum Thema Wohnen' }
        ]},
        { type: 'node', children: [
            { type: 'button', class: 'sub-picture', dataNumber: 'Wohnung11', text: 'Wohnung 1-11' },
            { type: 'button', class: 'sub-picture', dataNumber: 'Stadt2', text: 'Stadt 1-2' }
        ]}
    ]},
    { type: 'node', children: [
        { type: 'button', class: 'toggle-button', text: '+' },
        { type: 'button', class: 'top-list', dataNumber: 'Einkaufen', text: 'Einkaufen' }
    ]},
    { type: 'sub-node', children: [
        { type: 'node', children: [
            { type: 'button', class: 'sub-list', dataNumber: 'Lebensmittel', text: 'Lebensmittel' },
            { type: 'button', class: 'sub-picture', dataNumber: 'Essen2', text: 'Essen 1-2' }
        ]},
        { type: 'node', children: [
            { type: 'button', class: 'sub-list', dataNumber: 'Kleidung', text: 'Kleidung' },
            { type: 'button', class: 'sub-picture', dataNumber: 'Kleidung2', text: 'Kleidung 1-2' }
        ]},
        { type: 'node', children: [
            { type: 'button', class: 'sub-list', dataNumber: 'Käufe', text: 'Käufe' }
        ]},
        { type: 'node', children: [
            { type: 'button', class: 'sub-text', dataNumber: 'Geldautomat', text: 'Geldautomat' }
        ]},
        { type: 'node', children: [
            { type: 'button', class: 'sub-text', dataNumber: 'Einkaufen1', text: 'Wie viel kosten die Tomaten' }
        ]},
        { type: 'node', children: [
            { type: 'button', class: 'sub-text', dataNumber: 'Einkaufen2', text: 'Schau mal, in dem Prospekt sind gute Angebote' }
        ]}
    ]},
    { type: 'node', children: [
        { type: 'button', class: 'toggle-button', text: '+' },
        { type: 'button', class: 'top-list', dataNumber: 'Wetter', text: 'Wetter' }
    ]},
    { type: 'sub-node', children: [
        { type: 'node', children: [
            { type: 'button', class: 'sub-text', dataNumber: 'Jarhezeit Wetter', text: 'Jarhezeit Wetter' }
        ]},
        { type: 'node', children: [
            { type: 'button', class: 'sub-text', dataNumber: 'In den Monaten Dezember, Januar und Februar__', text: 'In den Monaten Dezember, Januar und Februar...' }
        ]},
        { type: 'node', children: [
            { type: 'button', class: 'sub-text', dataNumber: 'Wetter in Deutschland und meinem Land', text: 'Wetter in Deutschland und meinem Land' }
        ]},
        { type: 'node', children: [
            { type: 'button', class: 'sub-text', dataNumber: 'Lippe', text: 'Lippe' }
        ]}
    ]},
    { type: 'node', children: [
        { type: 'button', class: 'toggle-button', text: '+' },
        { type: 'button', class: 'top-list', dataNumber: 'schwierige Wörter', text: 'Wörter' }
    ]},
    { type: 'sub-node', children: [
        { type: 'node', children: [
            { type: 'button', class: 'sub-list', dataNumber: 'Sache1', text: 'Sache1' },
            { type: 'button', class: 'sub-list', dataNumber: 'Sache2', text: 'Sache2' }
        ]},
        { type: 'node', children: [
            { type: 'button', class: 'sub-list', dataNumber: 'Sache3', text: 'Sache3 - Sätze' },
            { type: 'button', class: 'sub-list', dataNumber: 'Sache4', text: 'Sache4' }
        ]},
        { type: 'node', children: [
            { type: 'button', class: 'sub-list', dataNumber: 'Gegensatz1', text: 'Gegensatz1 - On/Off' },
            { type: 'button', class: 'sub-list', dataNumber: 'Gegensatz2', text: 'Gegensatz2' }
        ]},
        { type: 'node', children: [
            { type: 'button', class: 'sub-list', dataNumber: 'Gegensatz3', text: 'Gegensatz3' },
            { type: 'button', class: 'sub-list', dataNumber: 'Gegensatz4', text: 'Gegensatz4' },
            { type: 'button', class: 'sub-picture', dataNumber: 'Gegensatz2', text: 'Gegensatz 1-2' }
        ]},
        { type: 'node', children: [
            { type: 'button', class: 'sub-list', dataNumber: 'Beruf', text: 'Beruf' },
            { type: 'button', class: 'sub-list', dataNumber: 'Baustelle', text: 'Baustelle' }
        ]},
        { type: 'node', children: [
            { type: 'button', class: 'sub-list', dataNumber: 'Dokumente', text: 'Dokumente' }
        ]},
        { type: 'node', children: [
            { type: 'button', class: 'sub-list', dataNumber: 'Tiere', text: 'Tiere' }
        ]},
        { type: 'node', children: [
            { type: 'button', class: 'sub-list', dataNumber: 'Farbe', text: 'Farbe' }
        ]},
        { type: 'node', children: [
            { type: 'button', class: 'sub-list', dataNumber: 'Fitness', text: 'Fitness' },
            { type: 'button', class: 'sub-list', dataNumber: 'Urlaub', text: 'Urlaub' },
            { type: 'button', class: 'sub-picture', dataNumber: 'Sport1', text: 'Sport' }
        ]},
        { type: 'node', children: [
            { type: 'button', class: 'sub-list', dataNumber: 'Familie', text: 'Familie' }
        ]}
    ]},
    { type: 'node', children: [
        { type: 'button', class: 'top-list', dataNumber: 'Partikeln', text: 'Partikeln' },
        { type: 'button', class: 'top-list', dataNumber: 'Konjunktion', text: 'Konjunktion' },
        { type: 'button', class: 'top-list', dataNumber: 'Adverb', text: 'Adverb' },
        { type: 'button', class: 'sub-text', dataNumber: 'Adjektive', text: 'Adjektive' }
    ]},
    { type: 'node', children: [
        { type: 'button', class: 'toggle-button', text: '+' },
        { type: 'button', class: 'top-list', dataNumber: 'Verb1', text: 'Verben' }
    ]},
    { type: 'sub-node', children: [
        { type: 'node', children: [
            { type: 'button', class: 'sub-text', dataNumber: 'Phrasen mit Verben 1', text: 'Phrasen mit Verben 1' }
        ]},
        { type: 'node', children: [
            { type: 'button', class: 'sub-list', dataNumber: 'Verb7_Sätze', text: 'Verb - Sätze' }
        ]},
        { type: 'node', children: [
            { type: 'button', class: 'sub-list', dataNumber: 'Verb2', text: 'Verb2' },
            { type: 'button', class: 'sub-list', dataNumber: 'Verb3', text: 'Verb3' },
            { type: 'button', class: 'sub-list', dataNumber: 'Verb4', text: 'Verb4' }
        ]},
        { type: 'node', children: [
            { type: 'button', class: 'sub-picture', dataNumber: 'Verben2', text: 'Verben 1-2' }
        ]},
        { type: 'node', children: [
            { type: 'button', class: 'sub-list', dataNumber: 'Verb5_modal', text: 'Modalverben' }
        ]},
        { type: 'node', children: [
            { type: 'button', class: 'sub-list', dataNumber: 'deklinieren', text: 'deklinieren' }
        ]},
        { type: 'node', children: [
            { type: 'button', class: 'sub-list', dataNumber: 'verb6_IPPz', text: 'Infinitiv, Präsens, Präteritum, Partizip II' }
        ]}
    ]},
    { type: 'node', children: [
        { type: 'button', class: 'top-list', dataNumber: 'Beschreibung', text: 'Beschreibung' }
    ]},
    { type: 'node', children: [
        { type: 'button', class: 'top-list', dataNumber: '3', text: 'Kann helfen?' }
    ]},
    { type: 'node', children: [
        { type: 'button', class: 'toggle-button', text: '+' },
        { type: 'button', class: 'top-list', dataNumber: 'Ich', text: 'Ich' }
    ]},
    { type: 'sub-node', children: [
        { type: 'node', children: [
            { type: 'button', class: 'sub-text', dataNumber: 'Vorstellen1', text: 'Vorstellen' }
        ]},
        { type: 'node', children: [
            { type: 'button', class: 'sub-text', dataNumber: 'Das ist mein Bett__', text: 'Das ist mein Bett...' }
        ]},
        { type: 'node', children: [
            { type: 'button', class: 'sub-text', dataNumber: 'mein Tag', text: 'mein Tag' }
        ]}
    ]},
    { type: 'node', children: [
        { type: 'button', class: 'toggle-button', text: '+' },
        { type: 'button', class: 'top-list', dataNumber: 'Alltag', text: 'Alltag' }
    ]},
    { type: 'sub-node', children: [
        { type: 'node', children: [
            { type: 'button', class: 'sub-list', dataNumber: 'Buchstaben', text: 'Buchstaben' },
            { type: 'button', class: 'sub-list', dataNumber: 'Zahlen', text: 'Zahlen' },
            { type: 'button', class: 'sub-list', dataNumber: 'Datum', text: 'Datum' },
            { type: 'button', class: 'sub-picture', dataNumber: 'Tag1', text: 'Tag' }
        ]},
        { type: 'node', children: [
            { type: 'button', class: 'sub-list', dataNumber: 'Haushalt', text: 'Haushalt' },
            { type: 'button', class: 'sub-picture', dataNumber: 'Waschmaschine1', text: 'Waschmaschine' }
        ]},
        { type: 'node', children: [
            { type: 'button', class: 'sub-list', dataNumber: 'Zeichen', text: 'Zeichen' },
            { type: 'button', class: 'sub-picture', dataNumber: 'Gefahr12', text: 'Gefahr' },
            { type: 'button', class: 'sub-list', dataNumber: 'Notfall', text: 'Notfall' }
        ]},
        { type: 'node', children: [
            { type: 'button', class: 'sub-list', dataNumber: 'Mitteilung', text: 'Mitteilung' }
        ]},
        { type: 'node', children: [
            { type: 'button', class: 'sub-list', dataNumber: 'Pronomen und Fragen', text: 'Pronomen und Fragen' }
        ]}
    ]},
    { type: 'node', children: [
        { type: 'button', class: 'top-list', dataNumber: 'Werden-waren', text: 'werden-waren' }
    ]},
    { type: 'node', children: [
        { type: 'button', class: 'toggle-button', text: '+' },
        { type: 'button', class: 'top-zero', text: 'Test' }
    ]},
    { type: 'sub-node', children: [
        { type: 'node', children: [
            { type: 'button', class: 'sub-test', dataNumber: 'Akk-Dat-Gen1', text: 'Akk-Dat-Gen1' }
        ]},
        { type: 'node', children: [
            { type: 'button', class: 'sub-list', dataNumber: 'Akk-Dat-Gen2', text: 'Akk-Dat-Gen2' }
        ]},
        { type: 'node', children: [
            { type: 'button', class: 'sub-text', dataNumber: 'Perfekt', text: 'Perfekt' }
        ]}
    ]},
    { type: 'node', children: [
        { type: 'button', class: 'top-list', dataNumber: 'Brief', text: 'Brief' }
    ]},
    { type: 'node', children: [
        { type: 'button', class: 'top-list', dataNumber: '_plus', text: 'plus' }
    ]},
    { type: 'node', children: [
        { type: 'button', class: 'top-question', dataNumber: 'list/Beruf',  text: 'Frage-TEST-RUN' }
    ]},
    { type: 'node', children: [
        { type: 'button', class: 'top-question', text: 'Frage-maschine' }
    ]}
];

tasks = [
    { type: 'dialog', files: ['10'] },
    { type: 'dialog', files: ['11'] },
    { type: 'dialog', files: ['12'] },
    { type: 'list', files: ['Entschuldigung', 'Ich'] },
    { type: 'list', files: ['*'] }
];
