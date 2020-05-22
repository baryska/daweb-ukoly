// 1. Napiš funkci, která zjistí, zda je návštevník v baru plnoletý.
// Funkce bere jeden parametr (věk) a vrací řetězec informující o výsledku.
let vek = Number(prompt("Kolik je vám let?"));

const jePlnolety = (vek) => {
	if (vek >= 18) {
		return "Můžete vstoupit."
	} else {
		return "Vstup zakázán."
	}
}

alert(jePlnolety(vek))


// 2. Napiš funkci, která otestuje, zda je osoba muž (M) nebo žena (Z).
let pohlavi = 'Z';

let sex = (pohlavi) => {
	if (pohlavi === 'Z') {
		return "Žena"
	} else if (pohlavi === 'M') {
		return "Muž"
	} else {
		return "Pohlaví neznámé"
	}
}
console.log(sex(pohlavi))

// 3. Představ si, že žiješ na Měsíci. Teploty se tam pohybují
// od -173°C do +127°C. Než vylezeš z domu, zjisti nejdřív,
// zda je venku teplota vhodná na kraťasy a tričko s krátkým
// rukávem, tj. teplota mezi 20°C a 38°C.
// Protože máš na měsíci hodně kolegů, připrav pro ně funkci (která tohle otestuje), 
// aby nemuseli psát kód pokaždé znovu.
let teplota = Number(prompt("Jaká je dnes venku teplota?"));

let moon = (teplota) => {
	if (teplota > -173 && teplota < 20) {
		return "Vem si bundu"
	} else if (teplota >= 20 && teplota < 39) {
		return "Je to na kraťasy a tričko"
	} else {
		return "Ven jen nahý"
	}
}
alert(moon(teplota))

// 4. Napiš funkci, která zjistí, zda je daná osoba dospělá žena, která může řídit.
// Funkce bere dva parametry, osobu a aktuální rok.
let osoba = {
	jmeno: 'Ema',
	pohlavi: 'Z',
	rokNarozeni: 1992,
	ridicak: true
};
let aktualniRok = Number(prompt("Jaký je právě rok?"));

let driver = (osoba, aktualniRok) => {
	if (aktualniRok - osoba.rokNarozeni >= 18) {
		return "Tato osoba může řídit."
	}
	else {
		return "Tato osoba ještě nemůže řídit."
	}
}

alert(driver(osoba, aktualniRok))

// 5. Podle věku napiš, o jakého člověka jde:
// 0-5 miminko
// 6-18 dítě
// 19 - 65 dospělý
// 66 a víc - důchodce
let vek = 23;


// 6. Moje oblíbené ovoce jsou jahody, melouny nebo hrušky.
// Řekni mi, zda si dnes zamlsám!
// Pro pokročilé - troufneš si to napsat pomocí hledání v poli, ve kterém bude uloženo, jaké ovoce mám rád?
let ovoce = [
	'jablko', 'banán', 'meloun', 'kiwi', 'hruška', 'jahody'
]

let fruit = (ovoce) => {
	for (let i = 0; i < ovoce.length; i++) {
		if (ovoce[i] === 'jablko' || ovoce[i] === 'meloun' || ovoce[i] === 'hruška') {
			return true
		} else {
			return false
		}
	}
}
let hlaska = () => {
	if (fruit(ovoce)) {
		alert('Dnes si zamlsáš')
	}
}
hlaska()



// 7. Pro mírně pokročilé
// Napiš funkci, která jako parametr bere třídu id nějakého html prvku, a přidá mu třídu "active".
// Pozor, prvek už může nějaké třídy mít!

let element = document.querySelector('#id')

let elementActive = (element) => {
	return element.classList.add("active")
}

elementActive(element);

// 8. Pro pokročilé.
// Napište posluchač události, který bude zachycovat událost "click" na celém dokumentu (pověste ho na "document.body"). 
// Událost si uložte do parametru event a vypište ji do konzole. Prohlédněte si celý vypsaný objekt a popřemýšlejte, 
// co znamenají jeho jednotlivé vlastnosti. Mimojiné se zaměřte na vlastnost clientX a clientY. Zkuste pomocí googlu
// zjistit, co přesně znamenají (např. na MDN tuhle informaci určitě najdete.)
// Pro super pokročilé: Dokážete z objektu události zjistit, kterým tlačítkem bylo kliknuto? (Pomůže opět google.)