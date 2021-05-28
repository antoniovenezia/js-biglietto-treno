var x = prompt("Quanti km hai intenzione di percorrere?");
var y = prompt("In che anno sei nato?");

var z = document.getElementById("price");

var km = parseInt(x);
var year = parseInt(y);


var priceKm = km * 0.21;
var age = 2021 - year;


if (age < 18) {
       
    z.innerHTML = (priceKm - (priceKm * 20 / 100)).toFixed(2);

} else if (age > 65) {
    
    z.innerHTML = (priceKm - (priceKm * 40 / 100)).toFixed(2);
    
} else {

    z.innerHTML = priceKm.toFixed(2);
}
