var x = prompt("Quanti km hai intenzione di percorrere?");
var f = prompt("In che anno sei nato?");

var w = document.getElementById("price");

var km = parseInt(x);
var year = parseInt(f);


var priceKm = km * 0.21;
var age = 2021 - year;


if (age < 18) {
       
    w.innerHTML = (priceKm - (priceKm * 20 / 100)).toFixed(2);

} else if (age > 65) {
    
    w.innerHTML = (priceKm - (priceKm * 40 / 100)).toFixed(2);
    
} else {

    w.innerHTML = priceKm.toFixed(2);
}
