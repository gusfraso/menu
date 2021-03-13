//UPPGIFTEN: Gör en sida där du sätter ihop din egen pizza, ingredienserna hämtar du från API A. 
//Du ska presentera 3 listor, du ska välja botten, topping och extra. 
//När du har gjort dina val ska du "beställa" pizzan. När du "beställt" pizzan så ska det synas vilka ingredienser som du har valt. 
//När du har tryckt på "beställa" ska man se en sammanfattning på de ingredienser du har valt.

//API A: http://webbred2.utb.hb.se/~fewe/dynwebbvt20/api/api.php?data=ingredients



//OBSERVERA: nedanstående är tips på hur du kan lösa uppgiften.
//Du får självklart byta namn på variabler/funktioner/skriva om allt
//Men tänk på att inte hårdkoda i html:en, alltså kopiera data från API:et och klistra in i din html. Då kan vi inte mäta dina kunskaper i JavaScript.
//Uppgiften ska lösas med JavaScript
//Ta bort de kommentarer som finns här och skriv dina egna när du är klar!


//fetch("http://webbred2.utb.hb.se/~fewe/dynwebbvt20/api/api.php?data=ingredients").then(function (resp) {
    //returnera resp i json-format

//}).then(function (data) {
 //   console.log(data);
    //anropa din funktion så att alla ingredienser skrivs ut

//});

//skriva ut alla ingredienser
//function outPutData(data) {
    //1. Hämta id för divarna dough, topping och extra
  //  var divDough = document.getElementById("dough");

    //2. loopa igenom separat i tre loopar, tips eftersom det finns två arrayer och vi vet att:
    // botten ligger på position 0, topping på position 1 och extra på 2 så kan i antingen ha två loopar ELLER
    // skriva "i < data[0].botten.length", "i < data[1].topping.length" i for-looparna. Hur ser loopen för "extra" ut då?

    //3. Inuti loopen ska vi här göra tre saker
    //3.a)  skriva ut värdena så att vi kan se exempelvis Surdegsbotten, vetebotten. Avokado, Kyckling. Fanta, Citronvatten osv i tre listor (3 loopar). Jag har använt p-taggar, du kan använda vilka element du vill. 
    //3.b) När allt har skrivits ut: Bygg vidare med att ge varje element ett onclick="getValueFromUser(this)" Varför behöver vi ha "this.innerHTML"? 
    //Testa att köra en console.log(clickedValue) inuti funktionen getValuesFromUser(clickedValue). Vad får du ut när du klickar på en ingrediens?
    //3.c) ge varje element ett id för att kunna markera (tex färgen på den klickade ingrediensen blir röd) dessa när de blir klickade. 
    //Tänk på att tex Surdegsbotten, Avokado, Kyckling osv är unika, kan du använda de som id? Vilka är fördelarna om varje värde (botten, topping och extra) faktiskt har ett id som är likadant det som skrivs ut?

    // for (i = 0; i < i < data[0].botten.length; i++) {
    //     //vad får du ut? console.log(data[0].botten[i]);
    //     divDough.innerHTML += "<p id='" + Steg 3c + "' onclick='Steg 3.b)'>" + Läs Steg 3a + "</p>";
    // }
    // for (Loopa över topping) {
    //     //samma som för botten
    // }
    // for (Loopa över extra) {
    //     //samma som för botten
    // }
//}
//var savedIngridients = [];
//function getValuesFromUser(clickedValue) {
    //denna funktion anropas via ett onclick
    //1. här kan du sätta en styling på det element du klickat på. Tips: hur kan du använda clickedValue? Titta på steg 3c
    //2. Du ska "pusha" in värden i en lista som ligger som global array. Så varje gång du klickar på en ingrediens ska den läggas till savedIngridients. Varför ska denna vara global?
//}

//vad gör denna funktion?
//function printOutOrder() {
    //loopa över listan med savedIngridients och skriv ut i "valdPizza" som finns som id i index.html
    //Tips: document.getElementById("valdPizza").innerHTML och lägg in savedIngridients

//}




