/**
 * Created by SDT on 15.04.2016.
 */
var tablica1 = ['dorsz', 'rosół','sernik'];
console.log (tablica1);
console.log (tablica1[1]);
console.log (tablica1[2]);
console.log (tablica1[1],tablica1[2]);
tablica1[1]= 'pomidorowa';
console.log (tablica1[1]);
console.log (tablica1.length);
tablica1.push('łosoś');


var menuobiektowe = [];
var dorsz ={
    cena: '15zł',
    nazwa: 'dorsz',
    gramatura: 500
};

menuobiektowe.push (dorsz);
console.log(menuobiektowe);
var pomidorowa={
    cena: 7,
    nazwa: 'pomidorowa',
    gramatura: 150
};
menuobiektowe.push(pomidorowa);

var kaczka ={
    cena: 32,
    nazwa: 'kaczka',
    gramatura: 300
};
menuobiektowe.push (kaczka);


function stwórzhtml(danie) {
    console.log (danie.gramatura);
    var dania = $('#dania');
    dania.append(danie.nazwa);
}
menuobiektowe.forEach(stwórzhtml);


var dania = $('#dania');

