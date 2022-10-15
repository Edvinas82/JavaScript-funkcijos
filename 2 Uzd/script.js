let krastine1 = 3;
let krastine2 = 8;
let plotas = stačiakampioPlotas(krastine1, krastine2)
console.log("staciakampio plotas yra" + plotas);

krastine1 = 25;
krastine2 = 7;
plotas = stačiakampioPlotas(krastine1, krastine2)
console.log("staciakampio plotas yra" + plotas);

krastine1 = 3.148;
krastine2 = 3.5456;
plotas = stačiakampioPlotas(krastine1, krastine2)
console.log("staciakampio plotas yra" + plotas);

function stačiakampioPlotas(krastine1, krastine2) {
    return krastine1 * krastine2;
}