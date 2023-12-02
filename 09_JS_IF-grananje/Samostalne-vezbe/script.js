/* Za unetu zapreminu proizvoda, u paragrafu zelenom bojom ispisati “Pack up”, ukoliko je proizvod zapremine veće ili jednake 100ml. 
U suprotnom u paragrafu crvenom bojom ispisati “Throw away”.
Zadatak 1
*/

let zapremina = 150;

if (zapremina >= 100){
    let paragraf = document.getElementById('p1');
    paragraf.innerHTML = 'Pack up';
    paragraf.style.color = 'Green';
} else {
    let paragraf = document.getElementById('p1');
    paragraf.innerHTML = 'Throw away';
    paragraf.style.color = 'Red';
}



/* Za unetu temperaturu u paragrafu, ispisati “Temperatura u plusu” crvenom bojom ili “Temperatura u minusu” plavom bojom. 
Ukoliko je temperatura nula, računati kao temperaturu u plusu. */

// Zadatak 2

let temp = 30;

if ( temp >= 0){
    let paragraf2 = document.getElementById('p2');
    paragraf2.innerHTML = 'Temperatura je u plusu';
    paragraf2.style.color = 'Red';
} else {
    let paragraf2 = document.getElementById('p2');
    paragraf2.style.color = 'Temperatura je u minus';
    paragraf2.style.color = 'Blue';
}

// Zadatak 3
/*Za preuzetu godinu sa računara i unetu godinu rođenja izračunati da li osoba ove godine postaje punoletna. Ukoliko postaje, prikazati sliku torte sa brojem 18. U suprotnom, izračunati još koliko godina je preostalo do punoletstva i ispisati tu informaciju u paragrafu. */


let datum = new Date();
let godina = datum.getFullYear();
let godRodjenja = 2010;

if (godina - godRodjenja >= 18){
    document.write('Osoba je punoletna');
} else {
    let doPunoletsva = 18 - (godina - godRodjenja);
    document.write(` Osobi fali ${doPunoletsva} godina do punoletstva`);
}


// Zadatak 4 
/* U odnosu na preuzeto trenutno vreme sa računara, u paragrafu ispisati da li je trenutno jutro ili popodne.
Popodne je kada prođe 12:00 sati, računajući i to vreme. */

let sati = datum.getHours();

if ( sati >= 12){
    let paragraf3 = document.getElementById('p3');
    paragraf3.innerHTML = 'Trenutno je podne'
} else {
    let paragraf3 = document.getElementById('p3');
    paragraf3.innerHTML = 'Trenutno je jutro'
} 

// Zadatak 5 

/* U odnosu na pol koji je korisnik uneo u promenljivu  
(“m” za muški pol ili “z” za ženski pol)  na ekranu prikazati odgovarajući avatar (odgovarajuću sličicu). */

let pol = 'zenski';

if (pol == 'muski'){
    document.write('<img src = "https://static.vecteezy.com/system/resources/previews/024/183/513/original/male-avatar-portrait-of-a-young-brunette-male-illustration-of-male-character-in-modern-color-style-vector.jpg" width = 250');
} else {
    document.write('<img src = "https://img.freepik.com/premium-vector/girl-s-face-with-beautiful-smile-female-avatar-website-social-network_499739-527.jpg?w=2000" width = 250');
}

// OVO SU ZADACI ZA VEZBANJE IF i ELSE


// Zadatak 6 

/* Preuzeti sa računara koji je dan u nedelji i ispitati da li je to radni dan 
ili je u pitanju vikend.  */ 

let dan = datum.getDay();
if (dan == 0){
    console.log('Vikend je');
} else if ( dan == 6){
    console.log('Vikend je');
} else {
    console.log('Radni dan!');
}


// Zadatak 7

/*Za vreme preuzeto sa računara ispisati 
dobro jutro za vreme manje od 12 sati ujutru, 
dobar dan za vreme manje od 18 sati,
u ostalim slučajevima ispisati dobro veče. */

if (sati <= 12){
    let paragraf4 = document.getElementById('p4');
    paragraf4.innerHTML = 'Dobro jutro'
} else if (sati < 18 ){
    let paragraf4 = document.getElementById('p4');
    paragraf4.innerHTML = 'Dobar dan'
} else {
    let paragraf4 = document.getElementById('p4');
    paragraf4.innerHTML = 'Dobro vece'
}

// Zadatak 8 

/* Radno vreme jedne programerske firme je od 9h do 17h. 
Preuzeti vreme sa računara i ispitati da li u to vreme firma radi ili ne radi.
*/

let vreme = datum.getHours();

if (vreme < 9){
    console.log('Firma ne radi');
} else if ( vreme > 17){
    console.log('Firma ne radi');
} else {
    console.log('Firma radi');
}


// Zadatak 10 

/* Uneti dva broja. Većem  broju ispisati sledbenik, a manjem broju ispisati prethodnik. */

let a = 10;
let b = 14;

if (a > b){
    console.log(a+1, b-1);
} else if (b>a) {
    console.log(a-1, b+1);
} else {
    console.log('Brojevi su jednaki');
}

// 11 Zadatak

/* Učitati broj ispitati na ekranu “Ceo broj”, ukoliko je učitani broj ceo.  */

let broj = 0;

if (broj % 1 == 0){
    console.log ('Ceo broj');
} else if ( broj % 1 !== 0){
    console.log('Broj nije ceo');
} else {
    console.log('Broj je 0');
}

// 12 Zadatak

/* Učitati dva cela broja i ispitati da li je veći od njih paran, a manji od njih deljiv sa 3. */

let x = 8;
let y = 5;

if (x > y){
    console.log('X je veci broj');
} else {
}
