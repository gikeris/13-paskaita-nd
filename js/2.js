/* 2. Susikurti klasę "Butas".
Klasės kintamieji:
numeris - skaičius,
kambarių skaičius - kiek kambarių turi butas,
gyventojų skaičius bute - skaičius,
 */

"use strict";

class Butas{
    constructor(butonr, kambsk, gyvsk){
    this.butonr = butonr;
    this.kambsk = kambsk;
    this.gyvsk = gyvsk;
    }
    static info(){
        return 'Buto numeris ${butonr} kambarių skaičius ${kambsk} gyventojų skaičius ${gyvsk}'

    }
    
}
let ats = info();
console.log(ats);