var person1 = ["Koridas", "Atmazas"];
var person2 = ["Paklodijus", "Pagalvė"];
var person3 = ["Višta", "Maumedienė"];
var currentAge = 18;
var currentHeight = 180;
var age = [currentAge, function () { return currentAge += 1; }];
var height = [currentAge, function (h) {
        if (h)
            currentHeight = h;
    }];
// Alikite užduotis, ir atspausdinkite konsolėje savo sprendimo pavyzdžius užduoties bloke
console.group('Tuples - užduotys');
{
    // ↑↑↑↑ Tipus apraškite čia ↑↑↑↑
    console.group('1. Sukurkite žmogaus vardo ir amžiaus rinkinį');
    {
        var person1_1 = ['Kerpis', 12];
        var person2_1 = ['Kiaunė', 24];
        console.log(person1_1, person2_1);
    }
    console.groupEnd();
    console.group('2. Sukurkite šuns šeimininko ir šuns rinkinį(pradžioje teks sukurti Šuns ir Šeiminiko tipus)');
    {
        var friendship1 = [{
                name: 'Agnolis',
                age: 12
            }, {
                name: 'Barkis',
                age: 2,
                breed: 'Dalmantin'
            }];
        console.log(friendship1);
    }
    console.groupEnd();
    console.group('3. Sukurkite trikampio taškų 2D erdvėje rinkinį(pradžioje teks sukurti 2D Taško tipą)');
    {
        var triangle1 = [[-2, 1], [2, 2], [3, 1]];
        var rightTriangle = [[0, 0], [4, 0], [4, 3]];
        console.log({
            triangle1: triangle1,
            rightTriangle: rightTriangle
        });
    }
    console.groupEnd();
}
console.groupEnd();
