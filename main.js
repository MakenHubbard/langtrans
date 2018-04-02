




const chinese = {
    "merry":"快活",
    "christmas":"聖誕",
    "and": "和",
    "happy": "快樂", 
    "new" :"新",
    "year":  "年",
}

const french = {
    "merry": "joyeux",
    "christmas" : "Noël",
    "and" : "et",
    "happy": "content",
    "new": "Nouveau",
    "year": "an",
}

const spanish = {
    "merry": "alegre",
    "christmas": "Navidad",
    "and": "y",
    "happy": "contento",
    "new": "nuevo",
    "year": "año",
}

const inputSpot = document.getElementById('inputText');
const chineseButt = document.getElementById('chinese-btn');
const frenchButt = document.getElementById('french-btn');
const spanishButt = document.getElementById('spanish-btn'); 
const outputSpot = document.getElementById('outputText');

chineseButt.addEventListener('click', (e) => {
    console.log("my chinese event", e);
    const userInput = inputSpot.value.toLowerCase();
    let domOutput = chineseButt[userInput];
    outputSpot.innerHTML = domOutput 
})

frenchButt.addEventListener('click', (e) => {
    console.log("my french event", e);
    const userInput = inputSpot.value.toLowerCase()
    let domOutput = frenchButt[userInput];
    outputSpot.innerHTML = domOutput;
})

spanishButt.addEventListener('click', (e) => {
    console.log("my spanish event", e);
    const userInput = inputSpot.value.toLowerCase();
    let domOutput = spanish[userInput];
    outputSpot.innerHTML = domOutput;
})

const allButtons = document.getElementsByClassName('butt');

for(let i=0; i<allButtons; i++){
    allButtons[i].addEventListener('click', (e) => {
    const userInput = inputSpot.value.toLowerCase();
    let domOutput = '';
    if (e.target.id === 'chineseButt' ){
        domOutput = chineseButt[userInput];
    } else if (e.target.id === 'french-btn'){
        domOutput = frenchButt[userInput];
    } else {
        domOutput = spanishButt[userInput];
    }
        output.innerHTML = domOutput;
  })
}


