let a = 3;
let b = 5;
if (a > b) {
    console.log('A je vece od B');
} 

else {
    console.log(' A nije vece od B');
}



// Prvi zadatak //

let zapremina = 150;

if (zapremina <= 100 ){
    document.write('<p style="color:green">Pack up! </p>');
} else {
    document.write('<p style="color:red">Throw away</p>');
}

// Treci zadatak //

/* Za preuzetu godinu sa računara i unetu godinu rođenja izračunati da li osoba ove godine postaje punoletna. Ukoliko postaje, prikazati sliku torte sa brojem 18. U suprotnom, izračunati još koliko godina je preostalo do punoletstva i ispisati tu informaciju u paragrafu. */

let datum = new Date();
let godina = datum.getFullYear();
let godRodjenja = 2006;
const p = 18;

if ( godina - godRodjenja == p){
    document.write('<img src="https://www.svetbalona.com/wp-content/uploads/2022/06/crno-zlatni-buket-za-18-rodjendan-sa-konfetama.jpg" alt="">');
} else {
    document.write('<p> Preostalo godina do punoletstva </p>:' + (p - (godina - godRodjenja))); 
}


// Drugi zadatak //

/* Za unetu temperaturu u paragrafu, ispisati “Temperatura u plusu” crvenom bojom ili “Temperatura u minusu” plavom bojom. 
Ukoliko je temperatura nula, računati kao temperaturu u plusu. */



let temp = -14;

if (temp >= 0){
    let paragraf = document.getElementById('temperatura');
    paragraf.innerHTML = 'Temperatura je u plusu';
    paragraf.style.color = 'red';
} else {
    let paragraf = document.getElementById('temperatura');
    paragraf.innerHTML = 'Temperatura je u minusu';
    paragraf.style.color = 'blue';
}


// Cetvrti zadatak // 

/* U odnosu na preuzeto trenutno vreme sa računara, u paragrafu ispisati da li je trenutno jutro ili popodne.
Popodne je kada prođe 12:00 sati, računajući i to vreme. */


let vreme = new Date();
let sati = vreme.getHours();

if ( sati >= 12 ){
    document.write('PoPodne');
} else {
    document.write('Jutro');
}


// Peti zadatak //






    

