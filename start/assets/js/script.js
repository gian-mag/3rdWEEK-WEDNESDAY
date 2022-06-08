// funzione hello world
function ciao() {
    console.log("Hello World");
}
ciao();

// funzione mele e arance
function spesa(mele = 5, arance= undefined) {
    var spesa = "Succo con " + mele + " mele e " + arance + " arance.";
    return spesa;
}
console.log(spesa(4, 5));
console.log(spesa(6));

//funzione età
function myAge() {
    let domani = 2050;
    let oggi = 1993;
    let anni = domani - oggi;
    let myAge = console.log("Nel 2050 avrò " + anni + " anni ");
}
myAge();

function yourAge(futuro, passato) {
    let anni = futuro - passato;
    var myAge = console.log("Nel " + futuro + " avrò " + anni + " anni ");
}
yourAge(2070, 1993);

//alert età
let età = 2020 - 1993;
alert('Io ho ' + età + ' anni.');

// funzione a freccia
var annituoi = (x, y) => { 
    z = 67 - (x - y); 
    console.log("Pinco va in pensione tra " + z + " anni.");
};
annituoi(2050, 1986);
annituoi(2050, 1991);

// parametrica con due costanti
var lamiaTorta = {};
function Torta(mele, arance) {
    const fettemele = 3;
    const fettearance = 3;
    console.log(`La mia Torta ha ${fettemele*mele} fette di mela e ${fettearance*arance} fette di arance.`)
};
lamiaTorta.cheBuona = Torta;
var cheBuona = lamiaTorta.cheBuona(3, 5);
console.log(lamiaTorta);

// operatore ternario 

/*function ternario(ossa) {
    let ossa = x + 1;
    return 'true';
}
ternario(206);
Umano = ternario(206);
console.log(Umano);
   // let quanteOssa = contaOssa == 206 ? 'Sei umano' : 'Sei alieno';
*/
