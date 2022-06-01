/*
  literal-types(konkretūs tipai) - tai tipai sudaryti iš konkrečių reikšmių
*/
var country = 'Latvia';
var country2 = 'Estonia';
var req1 = {
    url: 'https://tavo-veidas.lt',
    headers: {
        'Content-Type': 'application/json'
    },
    method: 'GET'
};
var req2 = {
    url: 'https://tavo-veidas.lt/api/',
    headers: {
        'Authorization': 'Bearer fhdguisdf8g76sdf89ghf5..?sfg',
        'Content-Type': 'application/json'
    },
    body: {
        image: 'https://i.pinimg.com/474x/67/0a/1d/670a1d06e7bff426ec343e8c06c93ca5--crazy-faces-strange-people.jpg'
    },
    method: 'POST'
};
// Alikite užduotis, ir atspausdinkite savo sprendimo pavyzdžius užduoties blokuose
console.group('Literal types - užduotys');
{
    // ↑↑↑↑ Tipus ir užduotims bendrus kintamuosius apraškite čia ↑↑↑↑
    console.group('1. Sukurkite konkrečius 5 dižiausių Vokietijos miestų tipus. Sukurkite tipą, kurio reikšmė būtų viena iš miestų.');
    {
        var city1 = 'Berlin';
        var city2 = 'Cologne';
        console.log({ city1: city1, city2: city2 });
    }
    console.groupEnd();
    console.group('2. Sukurkite konkrečias 5 šunų veisles. Sukurkite tipą, kurio reikšmė būtų viena iš veislių.');
    {
        var breed1 = 'Dalmantin';
        var breed2 = 'Mops';
        console.log({ breed1: breed1, breed2: breed2 });
    }
    console.groupEnd();
    console.group('3. Sukurkite konkrečias 5 mašinos dalių tipus. Sukurkite tipą, kurio reikšmė būtų viena iš dalių.');
    {
        var parts = ['Engine', 'Wheel', 'Trasmission'];
        console.log(parts);
    }
    console.groupEnd();
}
console.groupEnd();
