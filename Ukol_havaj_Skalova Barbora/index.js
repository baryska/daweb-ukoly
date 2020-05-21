// Dvě kamarádky se rozhodly, že pojedou spolu na dovolenou. Jde o drahou dovolenou na Havaj, takže mohou jet pouze, pokud součet jejich úspor přesahuje 100 tisíc korun. Kamarádky se rozhodly, že budou platit všechno napůl, takže každá by měla platit 50 tisíc, ale hrozně se na dovolenou těší, takže vyrazí okamžitě, jakmile budou mít dohromady 100 tisíc, i kdyby jedna z nich měla platit víc. Dluh vyrovnají po dovolené.

// Napiš sérii podmínek, která zjistí (do konzole vypíše):
// 1. Zda vůbec mohou nebo nemohou na dovolenou jet.
// 2. Pokud mohou jet (tj. mají dohromady 100 tisíc):
//     2a. Napiš, zda obě mají naspořeno dost (každá alespoň 50 tisíc).
//     2b. Nebo pokud má jedna kamarádka méně, tak napiš její jméno a kolik jí ještě chybí do 50 tisíc a tudíž kolik bude muset po dovolené splatit.
// 3. Pokud nemohou jet (tj. nemají dohromady 100 tisíc), tak napiš:
//     3a. Kolik peněz jim celkově ještě chybí.
//     3b. Kolik musí každá z nich ještě naspořit.

// Tvým úkolem je program nejenom napsat, ale i otestovat - tedy vymyslet víc možností vstupních dat a zkontrolovat, jestli to funguje správně. Je hned vidět, že u zadaných vstupních dat mohou kamarádky okamžitě bez problémů odjet. Určitě ale existuje možnost, kdy kamarádky mají tak málo úspor, že nemohou odjet vůbec. A taky možnost, že můžou odjet, ale po dovolené si musí srovnat dluhy. Odpovídající vstupní data si vymysli. Jejich formát bude vždycky stejný, jen částky budou jiné (a jiný bude i výstup programu).


let osoba1 = {
  jmeno: 'Alena',
  uspory: 53000
};
let osoba2 = {
  jmeno: 'Karolína',
  uspory: 68000
};

let uspory1 = osoba1.uspory
let uspory2 = osoba2.uspory
let jmeno1 = osoba1.jmeno
let jmeno2 = osoba2.jmeno

const dovolena = (osoba1, osoba2) => {

  if (uspory1 + uspory2 >= 100000) {
    console.log("Hurá, můžete jet na dovolenou!")
    if (uspory1 < 50000) {
      return `Ale pozor, ${jmeno1} bude muset po dovolené doplatit ${(50000 - uspory1)}`
    }
    if (uspory2 < 50000) {
      return `Ale pozor, ${jmeno2} bude muset po dovolené doplatit ${(50000 - uspory2)}`
    }
  }
  else {
    return `Bohužel nemůžete jet, chybí vám ještě ${(100000 - (uspory1 + uspory2))}. ${jmeno1} musí ještě naspořit ${(50000 - uspory1)} a ${jmeno2} musí ještě naspořit ${(50000 - uspory2)}.`
  }
}

dovolena(osoba1, osoba2)

const test1 = () => {
  uspory1 = 45000;
  uspory2 = 55000;
  return (dovolena(osoba1, osoba2));
}

const test2 = () => {
  uspory1 = 55000;
  uspory2 = 45000;
  return (dovolena(osoba1, osoba2));
}

const test3 = () => {
  uspory1 = 55000;
  uspory2 = 55000;
  return (dovolena(osoba1, osoba2));
}

const test4 = () => {
  uspory1 = 45000;
  uspory2 = 45000;
  return (dovolena(osoba1, osoba2));
}
