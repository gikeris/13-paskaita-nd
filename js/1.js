"use strict";

// Klasės kintamieji:
// miestas - tekstas,
// pastatymo data - datos formatas, 
// adresas - tekstas,
// laiptinių skaičius - masyvas, turintis tiek elementų, kiek yra laiptinių. Pvz: [1,2,3,4]
// butų skaičius - masyvas, turintis tiek elementų, kiek butų yra laiptinėje.Pvz: [20, 22, 19, 13]
// bendras butų skaičius - suskaičiuojamas automatiškai. Apskaičiavimui susikurti statinį metodą.



//minimali reiksme ieina i intervala, maksimali neieina
function randomFunction(min, max) {
    return Math.floor((Math.random() * (max - min)) + min);
}

//minimali reiksme ieina i intervala, maksimali ieina
function randomFunctionWithMax(min, max) {

    return Math.floor((Math.random() * (max - min + 1)) + min);
}

let laiptines = ["laiptine1", "laiptine2", "laiptine3",'laiptine4', 'laiptine5'] //laiptiniu skaicius masyvo lenght - 3

let laiptiniuSk = laiptines.length;

let atsitiktinisSk = randomFunctionWithMax(1, 100); // Skaiciu nuo 1 iki 100

console.log(atsitiktinisSk);

// let butai = [20, 22, 19, 13];
let butai = [];
for (let i = 0; i< laiptiniuSk; i++) {
    butai.push(randomFunctionWithMax(1, 100));
}

let bendrasButuSkaicius = 0;

for (let i = 0; i < butai.length; i++) {
    bendrasButuSkaicius += butai[i];
}

class Namas {
    constructor (miestas,pastatymoData, adresas, laiptiniuSkaicius, butuSkaicius, butuSuma) {
        this.miestas = miestas;
        this.pastatymoData = pastatymoData;
        this.adresas = adresas;
        this.laiptiniuSkaicius = laiptiniuSkaicius;
        this.butuSkaicius = butuSkaicius;
        this.butuSuma = butuSuma;
    }
    static gimimoData (pastatymoData) {
        let skaiciavimas = new Date();
        return skaiciavimas.getFullYear() - pastatymoData
    }
    static butuSumosSkaiciavimas (a,b) {
        let suma = butuSkaicius.length * laiptiniuSkaicius;
        return suma;
    }
}

//gauname laiptiniu skaiciu +
//pagal laiptiniu skaiciu susikuriame butu masyva
//butu masyvas turi tiek elementu kiek yra laiptiniu
// kiekvienas buto masyvo elementas yra atsitiktinis skaicius