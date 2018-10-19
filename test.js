//If statement
/*
var youLikeMeat = true;
var myNum = 8;

if(myNum == 10){

    document.write("myNum is greater than 10");

} else{

    document.write("myNum is not");

}*/

//Else if statements
//While
/*var age = 5;

while (age < 10){

    console.log("Your age is less than 10");

}
document.write("you are now over 10");
*/

//For loops

/*var links = document.getElementsByTagName("a");

for (i = 1 ; i <= links.length ; i++){

    console.log("This is link number " + i);

}
document.write("All links now looped");
*/
//Breaks and continue

/*for (i = 0 ; i < 10 ; i++){

    if(i === 5 || i ===3){

        continue;
    }


    console.log(i);

    if(i===7){

        break;
    }

}
console.log("I have broken out of the loop");
*/

//Practical example of loops


/*var links = document.getElementsByTagName("a");

for (i = 0; i < links.length; i++){

    links[i].className = "link-" + i;


}
*/
//Functions

/*function getAverage (a,b,c,d,e,f){

    var average = (a + b)/2; //local variable
    console.log(average);
    return average;


}

var myResult = getAverage(7,8); //global variable
console.log("the average is " + myResult);

//Variable scope

//globalne zmienne są deklarowane przed funkcją, w funkcji deklarujemy
//zmienne lokalne


//console.log(average); //poza funkcją nie można wywołać zmiennej lokalnej

function logResult(){
    console.log("the average is " + myResult + " inside the function");
    
}
logResult();*/

//NaN

/*var a = "7";
var b = 5;

if (isNaN(a)){

    console.log("not a number");

} else{

    console.log("??? " + (a*b));
}*/

//Strings

/*var myString = 'I\'m a "fun ninja" string';
console.log(myString.length);
console.log(myString.toUpperCase());
console.log(myString.indexOf("string")); //ilość znaków do słowa string
console.log(myString.indexOf("ninja")); //ilość znaków do słowa string

if (myString.indexOf("ninja") === -1){
    console.log("brak");
}else{
    console.log("słowo ninja zaczyna sie w pozycji" +  myString.indexOf("ninja"));
}
var string1 = "abc";
var string2 = "ABC";

console.log(string1 === string2); //false, wielkość liter się liczy
console.log(string1.toLocaleLowerCase() === string2.toLocaleLowerCase());
*/

//Split and slice strings

/*var str = "hello world";
var str2 = str.slice(2,9);

console.log(str2);

var str3 = str.slice(2);

console.log(str3);

var tags = "meat, milk, honey, beef, butter";

var tagsArray = tags.split(",");
console.log(tagsArray);
*/
//Arrays

/*var myArray = [];

myArray[0] = 25;
myArray[1] = 35;
myArray[2] = true;
myArray[3] = "hello";
console.log(myArray);
myArray[2] = false;
console.log(myArray);

var myArray2 = [10,20,"h2",false];
var myArray3 = new Array();

myArray2.sort();
*/
//New object

/*var myArray = new Array();
myArray[0] = 8;
myArray[1] = "hello";

var myCar = new Object();
myCar.maxspeed = 40;
myCar.driver = "Sonia";

console.log(myCar.driver);

myCar.drive = function(){
    console.log("new driving");
    };

myCar.drive();

var myCar2 = {
    maxspeed: 50, 
    driver: "Przenioslo", 
    drive: function(speed, time){
        console.log(speed * time);
        } 
};

console.log(myCar2.maxspeed);
myCar2.drive(50,3);
*/
// THIS keyword


/*var myCar2 = {

    maxspeed: 70,
    driver: "Sonia",
    drive: function(speed, time){
        console.log(speed*time);
    },
    test: function(){
        console.log(this); 
    }
};

var myCar3 = {

    maxspeed: 100,
    driver: "Przeniosło",
    drive: function(speed, time){
        console.log(speed*time);
    },
    //test: function(){
    //    console.log(this); 
    //}
    logDriver: function(){
        console.log("driver name is: " + this.driver);
    }
};

myCar3.logDriver();
console.log(myCar2.maxspeed);

myCar2.drive(50,3);
*/
//Constructor functions

/*var Car = function(maxSpeed , driver){

        this.maxspeed = maxSpeed;
        this.driver = driver;
        this.drive = function(speed, time){
            console.log(speed*time);
        };
        this.logDriver = function(){
            console.log("driver name is: " + this.driver);
        };

}; //constrution functions zawsze zaczynaja sie z duzej litery

var myCar = new Car (70, "Sonia");
var myCar2 = new Car (80, "Sonia1");
var myCar3 = new Car (90, "Sonia2");
var myCar4 = new Car (100, "Sonia3");

myCar.drive(30,5);
myCar3.logDriver();
*/

//Date object

/*var myDate = new Date();

console.log(myDate);

var myPastDate = new Date(1545, 11, 2, 10, 30, 45);
var myFutureDate = new Date(2515, 8, 31);
console.log(myPastDate);
console.log(myFutureDate);

var birthday = new Date (1990, 3, 16, 16, 45, 00);
var birthday2 = new Date (1994, 2, 18, 16, 45, 00);
console.log(birthday.getMonth());
console.log(birthday.getFullYear());
console.log(birthday.getDate());
console.log(birthday.getDay());
console.log(birthday.getHours());
console.log(birthday.getTime());

if (birthday.getTime() == birthday2.getTime()){
    console.log("rowne");

}else{
    console.log("nierowne");
}

*/
// DOM Document Object Model - moze zmienic kazdy node - wszystko co mozemy zmienic w dokumencie to NODE
//Changing content
/* var myTitle = document.getElementById("ID");
myTitle textContent - wyrzuca zawartość

myTitle textContent = "text do zmiany"

Zmiana atrybutów

var link = document.getElementById("ID");
link.getAttribute("href"); - wyrzuca atrybuty

link.getAttribute("class");
link.setAttribute("class", "nowa nazwa atrybutu");

link.setAttribute("alt", "hello"); tworzenie nowego atrybutu
link.href;

Zmiana stylu

var title = document.getElementById("ID");

title.setAttribute("style", "position: relative");
title.setAttribute("style", "position: relative", left, 10px )

title.style.left = "20px";
title.style.backgroundcolor = "blue"; 

Adding elements to the DOM

var newLi = document.createElement("li");
var newA = document.createElement("a");


var menu = document.getElementById("ID").getElementByTagName("ul")[0];
menu.appendChild(newLi);

newLi.appendChild(newA);

new.innerHTML = "Blog";
new.insertBefore[newLi, menu.getElementByTagName("li")[0]];


Removing elements from the DOM

var parent = document.getElementById("id").getElementByTagName("ul")[0];

var child = parent.getElementByTagName("li")[0];

parent.removeChild(child);

Mozna dodatkowo zadeklarowac usuwana wartosc, aby ja zachowac

var removed = parent.removeChild(child);
parent.appendChild(removed);


!!!JavaScript Events

 alert("hej");

 var title = document.getElementById("ID");

 title.onclick = function(){

    alert("you clicked me");
    
 };
 
    function(){

    alert("you clicked me");

title.onemouseover = function(){

    alert("you hovered your mouse over me");

    function(){

    alert("you hovered your mouse over me");
};
*/


//ONCLICK EVENT
/*function setUpEvents(){

    var content = document.getElementById("content");
    var button = document.getElementById("show-more");
    
    
    button.onclick = function(){
    
        if(content.className == "open"){
            //shrink the box
            content.className = "";
            button.innerHTML = "Show more";
    
        }else{
            //expand the box
            content.className = "open";
            button.innerHTML = "Show less";
        }
    
    };

}


//Window onload event

window.onload = function(){

    setUpEvents();

};
*/
// Timers
 /*var myMessage = document.getElementById("message");

 function showMessage(){

    myMessage.className = "show";

 }

setTimeout(showMessage, 3000); //3000ms
*/
 
/*var colourChanger = document.getElementById("colour-changer");
 var colours = ["red", "blue", "green", "pink"];
 var counter = 0;


 function changeColour(){

    if (counter >= colours.length){
        counter = 0;
    }

    colourChanger.style.background = colours[counter];
    counter++;

 }

 var myTimer = setInterval(changeColour, 3000);

 colourChanger.onclick = function() {

    clearInterval(myTimer);
    colourChanger.innerHTML = "Timer stop";


 };
*/

//Forms in Javascript
/*
var myForm = document.forms.myForm;
var message = document.getElementById("message");

myForm.onsubmit = function(){

    if(myForm.name.value == ""){
        message.innerHTML = "Please enter a name";
        return false;
        
    } else{
        message.innerHTML = "";
        return true;
    }


};
*/
var myPara = document.getElementById("content").getElementsByTagName("p")[5];

//jquery
var myPara2 = $("#content p:last-child");



