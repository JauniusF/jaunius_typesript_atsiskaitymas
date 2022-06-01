// /*
//   Assertion(Teigimas) - tai papildoma direktyva tiksliau aprašyti tipui, kuomet programuotojui žinoma daugiau 
//   informacijos nei gali žinoti TypeScript transpiliatorius.
var someNumber = 17;
var title = "Grace";
// Šiuo atveju 'teigiame' kad rastas elementas bus būtent form'os elementas.
var formAddUser = document.querySelector('#form-add-user');
formAddUser.onsubmit = function (e) {
    e.preventDefault();
    console.log('Ateityje pridėsiu vartotoją');
};
// Alikite užduotis, ir atspausdinkite savo sprendimo pavyzdžius užduoties blokuose
console.group('Assertions - užduotys');
{
    var btn = document.querySelector("#submit");
    // ↑↑↑↑ Tipus ir užduotims bendrus kintamuosius apraškite čia ↑↑↑↑
    console.group('1. Sukurkite HTML mygtuką ir uždėkite jam įvykio klausiklį, jog paspaudus, būt spausdinamas tekstas "paspausta!"');
    {
        var printykPaspaudus = function () { return console.log('Paspausta!?'); };
        btn.addEventListener('click', printykPaspaudus);
    }
    console.groupEnd();
    // sprendimą|sprendimo pavyzdžius spausdinkite čia 
}
console.groupEnd();
console.group('2. Sukurkite <div> elementą ir papildikyte jo turinį mažu kvadaratėliu kiekvieną kart, kuomet paspaudžiamas [1.] mygtukas');
{
    var btn = document.querySelector("#submit");
    var kvadratas_1 = document.querySelector('#kubas');
    var pridekvadrata = function () {
        var kv = document.createElement('span');
        kv.className = 'kv';
        kvadratas_1.append(kv);
    };
    btn.addEventListener('click', pridekvadrata);
}
console.groupEnd();
console.group('3. Sukurkite <p> elementą kuriame spausdinsite skaičių - kiek kvadratėlių yra [2.] konteineryje');
{
    var btn = document.querySelector("#submit");
    var count_1 = document.querySelector('#counter');
    var kvCounter_1 = 0;
    var startinkKvadratuCounteri = function () {
        kvCounter_1++;
        count_1.innerHTML = "Kvadrat\u0173 skai\u010Dius: ".concat(kvCounter_1);
    };
    btn.addEventListener('click', startinkKvadratuCounteri);
}
console.groupEnd();
console.groupEnd();
