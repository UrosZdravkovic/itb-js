/* Zadatak 1 */

let sati = 0;
let minuti = 40;

let odPonoci = sati * 60 + minuti;
console.log("Minuta od ponoci:" + odPonoci);

/* Zadatak 2 */

console.log("Sati do ponoci:" + Math.floor(odPonoci / 60),"Minuta do ponoci:" + odPonoci % 60 );


/* Zadatak 3 */

let cenaRobe = 10; 
let unetaNovcanica = 20;

console.log("Kusur:" + (unetaNovcanica - cenaRobe));


/* Zadatak 4 */



/* 6.Data je promenljiva u kojoj je ukupan broj evra koji posedujemo, kao i promenljiva u kojoj je vrednost trenutnog kursa. Odrediti koliko ćemo imati dinara nakon razmene. Uraditi isto i za konverziju iz dinara u evre. */

let ukupnoEur = 70;
let kurs = 117.29;

console.log("Dinara :" + ukupnoEur*kurs);


/* 7. Data je promenljiva u kojoj je ukupan broj evra koji posedujemo, kao i promenljive u kojima je vrednost kurseva evro-dinar, kao i dolar-dinar, redom. Odrediti koliko ćemo imati dolara nakon razmene. Uraditi isto i za konverziju iz dolare u evre. */

/* Druga konverzija (dol -> eur uz pomoc dinara) */




/* 8. Zadatak */

let celz = 25;

console.log("Farenhajt: " + (celz * 1.8 + 32) );

/* 8. Zadatak obrnuta konverzija */

let faren = 77;

console.log("Celzijusa:" + (faren - 32) / 1.8);


/* 9. */

// Zadatak 4 // 

let datum = new Date();  // Datum promenljiva koja sadrzi info o trenutnom datumu i vremenu

let god = datum.getFullYear();
let mes = datum.getMonth() + 1; 
let dan = datum.getDate();
console.log(dan, mes, god);








