// Zadatak 8 //

//Radno vreme jedne programerske firme je od 9h do 17h. 
//Preuzeti vreme sa računara i ispitati da li u to vreme firma radi ili ne radi.
/*
let datum = new Date();
let sati = datum.getHours();

if (sati < 9 ){
    document.write('Firma ne radi');
} else if ( sati > 17 ){
    document.write ('Firma ne radi');
} else {
    document.write ('Firma radi');
}
 */

// Zadatak 6
// Preuzeti sa računara koji je dan u nedelji i ispitati da li je to radni dan 
// ili je u pitanju vikend.
/*

let dan = datum.getDay();

if ( dan <= 5) {
 document.write ('radni dan');
} else {
    document.write('Vikend');
}


*/

 //Zadatak 7
/* Za vreme preuzeto sa računara ispisati 
dobro jutro za vreme manje od 12 sati ujutru, 
dobar dan za vreme manje od 18 sati,
u ostalim slučajevima ispisati dobro veče. */

/*
let datum = new Date();
let vreme = datum.getHours();

if (vreme < 12){
    document.write('Dobro jutro');
} else if (vreme < 18){
    document.write('Dobar dan');
} else {
    document.write('Dobro vece')
}
*/


/*
 Zadatak 9.
Za unet sat početka i sat kraja radnog vremena dva lekara,  
ispisati DA ukoliko se smene lekara preklapaju, 
u suprotnom ispisati NE.
(Ne može se desiti da lekar počne smenu pre ponoći, a završi sa smenom nakon ponoći, ovo se podrazumeva i ne ispitivati dodatno)

*/

let pocetakSmene1 = 8;
let krajSmene1 = 16;
let pocetakSmene2 = 17;
let krajSmene2 = 22;

if (krajSmene1 > pocetakSmene2){
    document.write(`Smene se preklapaju`);
} else if (krajSmene2 > pocetakSmene1){
    document.write(`Smene se preklapaju`);
} else {
    document.write(`Smene se ne preklapaju`);
}

//(pocetakLekar1 < krajLekar2 && krajLekar1 > pocetakLekar2)



// 10. Zadatak 

//Uneti dva broja. Većem  broju ispisati sledbenik, a manjem broju ispisati prethodnik.
/*
let a = 9;
let b = 9;

if (a > b){
    document.write( a + 1, b-1 );
} else if (b > a){
    document.write ( b + 1, a - 1);
} else { 
    document.write('Brojevi su jednaki');
}

*/


// 11.Učitati broj ispitati na ekranu “Ceo broj”, ukoliko je učitani broj ceo. 
/*

let a = 10;

if (a % 1 == 0){
    document.write('Broj je ceo');
} else {
    document.write('Broj nije ceo');
}

*/