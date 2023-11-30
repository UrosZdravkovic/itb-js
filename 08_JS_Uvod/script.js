document.getElementById("d1").innerHTML = "Ja se zovem Uros Zdravkovic";   

console.log("zdravo");
console.log("Pozdrav");

console.log("It's alright");

/* Navodnici mogu biti jednostruki ili dvostruki ali ako je unutra jednostruki spolja mora biti dvostruki */


// Literali //

console.log(5);
console.log(-5.189);
console.log(3 + 4); // 7
console.log("3" + "4"); // konkatenacija (spajanje stringova)
console.log("3 + 4"); // "3 + 4"
console.log("3 + 4 =", 3 + 4);
console.log('3 + 4 =' + (3 + 4));


console.log(false);
console.log(true);

// Promenljive var i let se koriste

let x; // 1) deklaracija promenljive

x = 5;

console.log(x);


x = "Laza"; 

console.log(x);

let y = true; // 2) Definicija promenljive (deklaracija + dodela vrednosti)

console.log(y);

const z = -3.2;

console.log(z);

let age;
console.log(age, age + 3); // undefined, NaN - Not a Number

age = null;

console.log(age, age + 3); // null, 3 

let broj = 3 + 4 * 2; // 11 

console.log(broj);

broj += 6;

console.log(broj); // 17

broj *= 2; 

console.log(broj);

x = 6; 

x++;
console.log(x); // 7

++x;

console.log(x); // 8

x = 6;
console.log(x++); // post-increment, prvo koristimo promenljivu pa dodajemo plus 1
 
console.log(++x); // pre-increment, prvo dodajemo plus jedan pa uzimamo vrednost

// Kolicnik
console.log(Math.floor(28 / 12)); //2
// Ostatak
console.log(28 % 12); // 4


x = 5;
x = 3;
console.log(x ** y);




