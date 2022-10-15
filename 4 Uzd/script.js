let skaicius = +prompt("Įvedskite skaičių");
let pakeitimas = zenkloPakeitimas (skaicius);
console.log("zenkloPakeitimas yra" + pakeitimas);

function zenkloPakeitimas (skaičius) {
    return skaicius * (-1);
}