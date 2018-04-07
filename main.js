




const chinese = {
    "merry": "快活",
    "christmas": "聖誕",
    "and": "和",
    "happy": "快樂",
    "new": "新",
    "year": "年"
}

const french = {
    "merry": "joyeux",
    "christmas": "Noël",
    "and": "et",
    "happy": "content",
    "new": "Nouveau",
    "year": "an"
}

const spanish = {
    "merry": "alegre",
    "christmas": "Navidad",
    "and": "y",
    "happy": "contento",
    "new": "nuevo",
    "year": "año"
}

const inputSpot = document.getElementById('inputText');
const chineseButt = document.getElementById('chinese-btn');
const frenchButt = document.getElementById('french-btn');
const spanishButt = document.getElementById('spanish-btn');
const outputSpot = document.getElementById('outputText');

chineseButt.addEventListener('click', (e) => {
    const userInput = inputSpot.value.toLowerCase().split(' ');
    let domOutput = '';
    userInput.forEach(word => {
        if (chinese[word]) {
            domOutput += " " + chinese[word];
        } else {
            domOutput = "We dont know a whole lot of this language";
        }
    });
    outputSpot.innerHTML = domOutput;
})

frenchButt.addEventListener('click', (e) => {
    const userInput = inputSpot.value.toLowerCase().split(' ');
    let domOutput = '';
    userInput.forEach(word => {
        if (french[word]) {
            domOutput += " " + (french[word]);
        } else {
            domOutput = "We dont know a whole lot of this language";
        }
    })
    outputSpot.innerHTML = domOutput;
})

spanishButt.addEventListener('click', (e) => {
    const userInput = inputSpot.value.toLowerCase().split(' ');
    let domOutput = '';
    userInput.forEach(word => {
        if (spanish[word]) {
            domOutput += " " + (spanish[word]);
        } else {
            domOutput = "We dont know a whole lot of this language";
        }
    })
    outputSpot.innerHTML = domOutput;
})

const allButtons = document.getElementsByClassName('butt');

for (let i = 0; i < allButtons; i++) {
    allButtons[i].addEventListener('click', (e) => {
        const userInput = inputSpot.value.toLowerCase();
        let domOutput = '';
        if (e.target.id === 'chineseButt') {
            domOutput = chineseButt[userInput];
        } else if (e.target.id === 'french-btn') {
            domOutput = frenchButt[userInput];
        } else {
            domOutput = spanishButt[userInput];
        }
        output.innerHTML = domOutput;
    })
}


