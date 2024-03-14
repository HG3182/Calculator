
const display = document.getElementById("display");
var valueComputed = false;
const history = [];


function appendToDisplayNumber(input){
    if(valueComputed ){
        display.value = "";
        valueComputed = false;
        
    }
    
    display.value += input;
    history.push(display.value);

}

function appendToDisplay(input){
    valueComputed = false;
    display.value += input;
    history.push(display.value);
}

function clearAll(){
    display.value = "";

}

function calculate(){

    try{
        display.value = eval(display.value);
        history.push(display.value);

    }
    catch{
        display.value = "Error"
    }
    valueComputed = true;
}

function viewHistory(){
var len=history.length-1;
var toDipsplay;

toDipsplay=history[len-1] + "=" + history[len];
    display.value=toDipsplay;

}

