var x = prompt("Quanti km hai intenzione di percorrere?");
var f = prompt("In che anno sei nato?");


var g = parseInt(f);
var pricetokm = parseInt(x);


var y = 2021 - g;
var z = pricetokm * 0.21;


if (y < 18) {
       
    document.getElementById("price").innerHTML = (z - (z * 20 / 100)).toFixed(2);

} else if (y > 65) {
    
    document.getElementById("price").innerHTML = (z - (z * 40 / 100)).toFixed(2);
    
} else {

    document.getElementById("price").innerHTML = z.toFixed(2);
}
