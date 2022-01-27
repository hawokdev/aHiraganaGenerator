let button_generator = document.getElementById('generator');
button_generator.addEventListener("click", generar);

let container = document.getElementById('container__caracteres');

let valor_select = document.getElementById("n_caracter");

const caracteresHiragana = [
                            "あ", "い", "う", "え", "お",
                            "か", "き", "く", "け", "こ",
                            "さ", "し", "す", "せ", "そ",
                            "た", "ち", "つ", "て", "と",
                            "な", "に", "ぬ", "ね", "の",
                            "は", "ひ", "ふ", "へ", "ほ",
                            "ま", "み", "む", "め", "も",
                            "や",       "ゆ",       "よ",
                            "ら", "り", "る", "れ", "ろ",
                            "わ", "ゐ",       "ゑ", "を",
                            "ん",
                            "が", "ぎ", "ぐ", "げ", "ご",
                            "ざ", "じ", "ず", "ぜ", "ぞ",
                            "だ", "ぢ", "づ", "で", "ど",
                            "ば", "び", "ぶ", "べ", "ぼ",
                            "ぱ", "ぴ", "ぷ", "ぺ", "ぽ"
                           ];



var activador = 0;
var caracteresShow = [];
var num_select;
function generar()
{
    if(activador == 1)
    {
        for(var j = 0; j < num_select; j++)
        {
            container.removeChild(caracteresShow[j]);
        }
    }
    
    num_select = valor_select.value;
    console.log("El número de caracteres seleccionado es " + num_select);
        
    for(var i = 0; i < num_select; i++)
    {
        
        caracteresShow[i] = document.createElement("div");
        caracteresShow[i].id = "letra";
        caracteresShow[i].textContent = caracteresHiragana[randomNum()];
        container.appendChild(caracteresShow[i]);
        activador = 1;
    }
    
    
}

function randomNum  () {
    return Math.floor(Math.random() * 74);
}
