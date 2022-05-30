// Pirmoji užduotis - Pasiruošimas darbui, kompiliavimas
// Pagal temas “Instaliavimas ir kompiliavimas“ ir “Kodo rašymo kokybės įrankio ESLint konfigūravimas“ pasiruoškite projektą.
// src/main.ts sukurkite komandą: console.log('sveikas pasauli')
// Atsidarius terminalą, naviguokite į savo projekto darbinį aplanką
// Paleiskite komandą: tsc --watch
// public/ aplanke sukurkite failą index.html ir įtraukite į jį (naujai sukompiliuotą failą) public/js/main.js
console.log("Labas Pasauli!!!!");
/*
TypeScript'e galioja tie patys primityvūs duomenų tipai kaip ir JavaScript'e:
  * string - simbolių darinys
  * number - skaičius
  * boolean - loginis kintamasis
  * null - tipas pasakantis, kad reikėmės/nuorodos nėra
  * undefined - neapibrėžtas tipas
  * symbol - skirtas unikalioms reikšmėms kurti - šio kurso metu jo nenagrinėsime
*/
// Kuriant kintamuosius, reikia šiuos tipus priskirti kintamiesiems:
// const height: number = 175.0;
// const weight: number = 78.2;
// const fullname: string = 'Serbentautas';
// const surname: string = 'Bordiūras';
// const age: number = 19;
// const wife: null = null;
// const innerAnimal: undefined = undefined;
console.group('1. Priskirkite kintamiesiems duomenų tipus');
{
    var title = 'Vermontas';
    var subTitle = 'Kavinė - Baras';
    var peopleCount = 5;
    var maxPeopleCount = 26;
    var isOpen = true;
    var openTime = '12:00';
    var closeTime = '02:00';
    var security = null;
    console.log({
        title: [title, typeof title],
        subTitle: [subTitle, typeof subTitle],
        peopleCount: [peopleCount, typeof peopleCount],
        maxPeopleCount: [maxPeopleCount, typeof maxPeopleCount],
        isOpen: [isOpen, typeof isOpen],
        openTime: [openTime, typeof openTime],
        closeTime: [closeTime, typeof closeTime],
        security: [security, typeof security]
    });
}
console.groupEnd();
// 21-29 eilutėse esanties kintamiesiems aprašykite duomenų tipus, pagal pavyzdį 12-18 eilutėse.
