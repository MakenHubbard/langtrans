var chinese = {
    merry:"快活",
    christmas:"聖誕",
    and: "和",
    happy: "快樂", 
    'new' :"新",
    year:  "年",
}

var french = {
    merry: "joyeux",
    christmas: "Noël",
    and: "et",
    happy: "content",
    'new': "Nouveau",
    year: "an",
}

var spanish = {
    merry: "alegre",
    christmas: "Navidad",
    and: "y",
    happy: "contento",
    'new': "nuevo",
    year: "año",
}

function printToDom(string,id){
    document.getElementById(id).innerHTML = string;}




function gettingInput(string,languageId){
     var userInput = document.getElementById(string).value;
     var langSelect = document.getElementById(languageId);
    console.log(userInput);
    console.log(langSelect);
}

function translateTo(){
    gettingInput()
}