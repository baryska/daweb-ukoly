// 1. Napiš cyklus, který projde čísla od 1 do 10 a do konzole pro každé
// číslo napiš 
// "Druhá mocnina 1 je 1"
// "Druhá mocnina 2 je 4"
// "Druhá mocnina 3 je 9"
// ...
// (Můžeš si napsat pomocnou funkci, která počítá druhou mocninu.)

for (let i = 0; i <= 10; i++) {
    console.log("Druhá mocnina " + i + " je " + i ** 2)
}


// 2. Víš, že operátor modulo se dá použít na to, abychom zjistili, jestli je číslo sudé nebo liché? 
// Pokud jsi se tím nikdy nesetkala, zamysli se, jak to funguje.
// https://javascript.info/operators#remainder

// A teď příklad: Napiš cyklus, který vypíše čísla od 1 do 20 a u každého napíše,
// zda je číslo sudé nebo liché. Výsledek by měl vypadat takto:
// 1 je liché
// 2 je sudé
// 3 je liché
// ...

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log("Číslo " + i + " je sudé.")
    } else {
        console.log("Číslo " + i + " je liché.")
    }
}

// 3. Dvě kamarádky se rozhodly, že pojedou spolu na dovolenou.
// Jde o drahou dovolenou na Havaj, takže mohou jet pouze pokud součet
// jejich úspor přesahuje 100 tisíc korun.
// Kamarádky se rozhodly, že budou platit všechno napůl, takže každá by
// měla platit 50 tisíc, ale hrozně se na dovolenou těší, takže vyrazí
// okamžitě, jakmile budou mít dohromady 100 tisíc, i kdyby jedna z nich
// měla platit víc. Dluh vyrovnají po dovolené.

// Napiš sérii podmínek, která zjistí (do konzole vypíše):
// - zda vůbec mohou nebo nemohou na dovolenou jet

// - pokud mohou jet (tj. mají dohromady 100 tisíc):
//   - napiš, zda obě mají naspořeno dost (každá alespoň 50 tisíc)
//   - nebo pokud má jedna kamarádka méně, tak napiš její jméno a kolik jí
//     ještě chybí do 50 tisíc a tudíž kolik bude muset po dovolené splatit

// - pokud nemohou jet (tj. nemají dohromady 100 tisíc), tak napiš
//   - kolik peněz jim celkově ještě chybí
//   - kolik musí každá z nich ještě naspořit

let osoba1 = {
    jmeno: 'Alena',
    uspory: 43000
};
let osoba2 = {
    jmeno: 'Karolína',
    uspory: 68000
};

// 4.
// Napiš program, který do konzole vypíše všechny planety, jejich průměr a vzdálenost od Slunce 
// (vzdálenost spočítej jako průměr mezi vzdálenostmi v perihéliu a v aféliu).
// Průměry jsou uvedeny v km, vzdálenosti v perihéliu a v aféliu v milionech km.
const planety = [
    {
        jmeno: "Merkur",
        prumer: 4879,
        perihelium: 46,
        afelium: 70
    },
    {
        jmeno: "Venuše",
        prumer: 12104,
        perihelium: 107,
        afelium: 109
    },
    {
        jmeno: "Země",
        prumer: 12756,
        perihelium: 147,
        afelium: 152
    },
    {
        jmeno: "Mars",
        prumer: 6792,
        perihelium: 207,
        afelium: 249
    },
    {
        jmeno: "Jupiter",
        prumer: 142984,
        perihelium: 741,
        afelium: 816
    },
    {
        jmeno: "Saturn",
        prumer: 120536,
        perihelium: 1349,
        afelium: 1504
    },
    {
        jmeno: "Uran",
        prumer: 51118,
        perihelium: 2736,
        afelium: 3006
    },
    {
        jmeno: "Neptun",
        prumer: 49528,
        perihelium: 4453,
        afelium: 4554
    }
];

for (let i = 0; i < planety.length; i++) {
    console.log(`Planeta: ${planety[i].jmeno}, průměr: ${planety[i].prumer} km, vzdálenost od Slunce: ${((planety[i].perihelium + planety[i].afelium) / 2)} milionů kilometrů.`)
}



// Pro hodně pokročilé: Neexistuje náhodou nějaké API, odkud by se tahle data dala stáhnout?
// (Je to úkol na googlení a ani autor úlohy nezná odpověď.)


// 5. Máme zde opět naše spolubydlící, kteří nakupují a výdaje si zapisují do tabulky. Daří se jim docela dobře,
// ale přišla na ně karanténa. Po dlouhé diskuzi se dohodli, že na to, aby na karanténu v pořádku přečkali, 
// potřebují mít doma alespoň 50 rolí toaletního papíru. (Také dokázali zjistit, že do teď jich spotřebovali 47.)
// Bude jim stačit to, co mají, nebo musí rychle utíkat na nákup (a kolik ho musí koupit)? 
// Napiš program, který to spočítá za ně.

// Data jsou zde:
const expenses = [
    { name: 'Pavla', product: 'Prací prášek', amount: 2, price: 240 },
    { name: 'Zuzka', product: 'Toaleťák', amount: 10, price: 65 },
    { name: 'Ondra', product: 'Savo', amount: 1, price: 80 },
    { name: 'Pavla', product: 'Toaleťák', amount: 10, price: 65 },
    { name: 'Zuzka', product: 'Mýdlo', amount: 4, price: 50 },
    { name: 'Pavla', product: 'Závěs do koupelny', amount: 1, price: 350 },
    { name: 'Ondra', product: 'Toaleťák', amount: 20, price: 120 },
    { name: 'Libor', product: 'Pivka na kolaudačku', amount: 10, price: 124 },
    { name: 'Pavla', product: 'Pytle na odpadky', amount: 1, price: 75 },
    { name: 'Míša', product: 'Utěrky na nádobí', amount: 2, price: 130 },
    { name: 'Ondra', product: 'Toaleťák', amount: 20, price: 120 },
    { name: 'Míša', product: 'Pečící papír', amount: 1, price: 30 },
    { name: 'Pavla', product: 'Savo', amount: 1, price: 80 },
    { name: 'Petr', product: 'Tapeta na záchod', amount: 3, price: 315 },
    { name: 'Ondra', product: 'Toaleťák', amount: 2, price: 6 }
];

let sum = 0
for (let i = 0; i < expenses.length; i++)
    if (expenses[i].product === 'Toaleťák') {
        sum = sum + expenses[i].amount
    }
console.log(sum)

const shopping = () => {
    if ((sum - 47) >= 50) {
        return `Je to dobré, toaleťáku máte dost, konkrétně ${(sum - 47)} kusů.`
    } else {
        return `Pozor, kritický nedostatek toaleťáku, máte ho jen ${(sum - 47)} kusů, musíte alespoň ${(50 - (sum - 47))} kusů dokoupit!`
    }
}
shopping()
// Pozn. protože data jsou poměrně krátká a dá se to spočítat i ručně, můžeš si udělat kontrolní výpočet
// a tak zkontrolovat, jestli tvůj program funguje správně.



// 6. Pro mírně pokročilé
// Fizz Buzz - toto je úloha, která se často objevuje na
// pracovních pohovorech (a dá se vyřešit mnoha způsoby).
// 
// Opět budeš potřebovat operátor % pro zbytek po celočíselném
// dělení. Takže úkol:
// Napiš cyklus, který projde postupně čísla od 1 do 100.
// Do konzole se napíše:
// - text "Fizz", je-li číslo dělitelné 3
// - text "Buzz", je-li číslo dělitelné 5
// - text "Fizz Buzz", je-li číslo dělitelné 3 i 5 zároveň
// - jinak se napíše jen aktuální číslo
// Takže výsledek v konzoli by měl vypadat asi takto
// (i když vše bude v konzoli pod sebou a ne oddělené čárkami):
// 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, Fizz Buzz,
// 16, 17, Fizz, 19, Buzz, Fizz, 22, 23, Fizz, Buzz, 26, Fizz, 28, 29,
// Fizz Buzz, 31, 32, Fizz, 34, Buzz, Fizz, ...

for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
        console.log("Fizz Buzz")
    }
    else if (i % 3 === 0) {
        console.log("Fizz")
    }
    else if (i % 5 === 0) {
        console.log("Buzz")
    } else {
        console.log(i)
    }
}


// 7. Pro hodně pokročilé
// Karanténa skončila a naši spolubydlící se to chystají oslavit. V rámci oslavy by chtěli koupit 
// něco pěkného tomu z nich, kdo obstarával nejvíce nákupů. 
// Dokážeš zjistit, kdo to byl? (Každá položka se počítá jako jeden nákup.)

const expenses = [
    { name: 'Pavla', product: 'Prací prášek', amount: 2, price: 240 },
    { name: 'Zuzka', product: 'Toaleťák', amount: 10, price: 65 },
    { name: 'Ondra', product: 'Savo', amount: 1, price: 80 },
    { name: 'Pavla', product: 'Toaleťák', amount: 10, price: 65 },
    { name: 'Zuzka', product: 'Mýdlo', amount: 4, price: 50 },
    { name: 'Pavla', product: 'Závěs do koupelny', amount: 1, price: 350 },
    { name: 'Ondra', product: 'Toaleťák', amount: 20, price: 120 },
    { name: 'Libor', product: 'Pivka na kolaudačku', amount: 10, price: 124 },
    { name: 'Pavla', product: 'Pytle na odpadky', amount: 1, price: 75 },
    { name: 'Míša', product: 'Utěrky na nádobí', amount: 2, price: 130 },
    { name: 'Ondra', product: 'Toaleťák', amount: 20, price: 120 },
    { name: 'Míša', product: 'Pečící papír', amount: 1, price: 30 },
    { name: 'Pavla', product: 'Savo', amount: 1, price: 80 },
    { name: 'Petr', product: 'Tapeta na záchod', amount: 3, price: 315 },
    { name: 'Ondra', product: 'Toaleťák', amount: 2, price: 6 }
];

let names = []
for (j = 0; j < expenses.length; j++) {
    if (!names.includes(expenses[j].name)) {
        names.push(expenses[j].name)
    }
}

let amount = 0
let amountsAll = [];
for (let k = 0; k < names.length; k++) { //pořadí cyklů musí být toto. Nejdříve cyklus projíždí pole se jmény a ke každému k-tému jménu hledá parťáka v poli expenses. Pokud ho najde, připočte k amount příšlusný počet nákupů. Po skonční cyklu jednoho jména se musí amount vynulovat, jinak by se nákupy u dalších jmen přičítaly k nákupům jmen předchozích.
    amount = 0
    for (let i = 0; i < expenses.length; i++) {
        if (expenses[i].name === names[k]) {
            amount = amount + expenses[i].amount
        }
    }
    amountsAll.push(amount) //postupně vytvoří pole počtu nákupů o jednotlivých jmen
}

const highestAmount = Math.max(...amountsAll) //najde největší počet nákupů v poli počtu nákupů amountsAll, které odpovídájí pořadí jmen v poli names
const highestIndex = amountsAll.indexOf(highestAmount); //najde index největšího počtu nákupů v poli amountsAll
const shopperOfTheMonth = names[highestIndex]; // tento index přiřadí ke jménu v poli names


// let amountPavla = 0;
// let amountZuzka = 0;
// let amountOndra = 0;
// let amountLibor = 0;
// let amountMisa = 0;
// let amountPetr = 0;

// for (let i = 0; i < expenses.length; i++) {
//     if (expenses[i].name === 'Pavla') {
//         amountPavla = amountPavla + expenses[i].amount
//     }
//     if (expenses[i].name === 'Zuzka') {
//         amountZuzka = amountZuzka + expenses[i].amount
//     }
//     if (expenses[i].name === 'Ondra') {
//         amountOndra = amountOndra + expenses[i].amount
//     }
//     if (expenses[i].name === 'Libor') {
//         amountLibor = amountLibor + expenses[i].amount
//     }
//     if (expenses[i].name === 'Míša') {
//         amountMisa = amountMisa + expenses[i].amount
//     }
//     if (expenses[i].name === 'Petr') {
//         amountPetr = amountPetr + expenses[i].amount
//     }
// }
// amountsAll.push(amountPavla)
// amountsAll.push(amountZuzka)
// amountsAll.push(amountOndra)
// amountsAll.push(amountLibor)
// amountsAll.push(amountMisa)
// amountsAll.push(amountPetr)

// console.log("Nejvíce nákupů: "(Math.max(...amountsAll)));
