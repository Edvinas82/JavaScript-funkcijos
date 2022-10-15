
let krastine1 = +prompt("Įrašykite pirmos kraštinės ilgį");
let krastine2 = +prompt("Įrašykite antros kraštinės ilgį");
let perimetras = kvadratoPerimetras (krastine1, krastine2);
console.log("kvadrato primetras yra" + perimetras);

krastine1 = 14;
krastine2 = 8;
perimetras = kvadratoPerimetras (krastine1, krastine2);
console.log("kvadrato primetras yra" + perimetras);

krastine1 = 5.678;
krastine2 = 12126.63;
perimetras = kvadratoPerimetras (krastine1, krastine2);
console.log("kvadrato primetras yra" + perimetras);


function kvadratoPerimetras(krastine1, krastine2) {
    return (krastine1 + krastine2) * 2;
}  