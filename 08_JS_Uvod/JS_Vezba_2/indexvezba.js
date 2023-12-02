/* Zadatak 1 */

let sati = 20;
let minuti = 27;

console.log('Minuta proslo od ponoci:' + (minuti + (sati * 60)));

/* Zadatak 2 */

let minOdPonoci = 1227;

console.log('Sati proslo od ponoci: ' + Math.floor(minOdPonoci / 60), 'Minuta proslo od ponoci: '+ (minOdPonoci % 60));

/* Zadatak 3 */

let cena = 200;
let novac = 1000;

console.log('Kusur: ' + (novac - cena));

/* Zadatak 4 */

let vreme = new Date();

let sat = vreme.getHours();
let min = vreme.getMinutes();

console.log('Minuta proslo od ponoci:' + (min + (sat * 60)));

/* Zadatak 5 */

let date = new Date();

let d = date.getDate();
let m = date.getMonth();
let y = date.getFullYear();

console.log(d, m ,y);

/* Zadatak 6 */ 

let e = 70;
let ek= 117.29;

console.log('Dinara:' + (e * ek));

let din = 4400

console.log('Eur:' + (din / ek));

/* Zadatak 7 */

let ukupnoE = 70;
let dd = 112.13;

console.log('Ukupno dolara:' + (ukupnoE * ek / dd));

let ukupnoDolara = 100;

console.log('Ukupno eur: ' + (ukupnoDolara * dd / ek));

/* Zadatak 8 */

let cel = 30;

console.log('Ukupno F :' + (cel * 1.8 + 32));

let far = 86; 

console.log ('Ukupno C :' + ((far - 32) / 1.8));


/* Zadatak 9 */

console.log('Ukupno K : ' + (cel + 273.15));

let kel = 303.15;

console.log('Ukupno celz :' + (kel - 273.15));
