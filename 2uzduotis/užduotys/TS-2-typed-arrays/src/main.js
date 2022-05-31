var numbers = [1, 2, 3, 4, 5, 6];
var names = ['Jagnita', 'Kimparas', 'Pitonkas', 'Fasalija'];
var people = [{
        id: '39304075689',
        name: 'Verundijus',
        surname: 'Bauda',
        age: 51
    }, {
        id: '39304075689',
        name: 'Ryja',
        surname: 'Žaneirytė',
        age: 41,
        height: 1.65,
        weight: 55
    }, {
        id: '39304075689',
        name: 'Brudas',
        surname: 'Veilokas',
        age: 11,
        height: 1.45,
        weight: 45
    }];
var printStrings = function (strings) {
    var printString = function (str) { return console.log(str); };
    strings.forEach(printString);
};
var sumNumbers = function (nums) {
    var numberSumReducer = function (sum, num) { return sum + num; };
    return nums.reduce(numberSumReducer, 0);
};
var createPeopleArray = function (p1, p2) { return [p1, p2]; };
console.group('Panaudojimo pavyzdžiai:');
{
    console.group('printStrings');
    {
        printStrings(names);
    }
    console.groupEnd();
    console.group('sumNumbers');
    {
        var result = sumNumbers(numbers);
        console.log({
            numbers: numbers,
            result: result
        });
    }
    console.groupEnd();
    console.group('createPeopleArray');
    {
        var couple = createPeopleArray(people[0], people[1]);
        console.log(couple);
    }
    console.groupEnd();
}
console.groupEnd();
console.group('Užduotys');
{
    console.group('1. Aprašykite funkcijoms ir kintamiesiems tipus');
    {
        var numbers_1 = [1, -8, -6, 7, 5, 1];
        function addPositiveNumbers(arr) {
            var positiveNumberReducer = function (sum, num) { return (num > 0 ? sum + num : sum); };
            return arr.reduce(positiveNumberReducer, 0);
        }
        console.log({
            numbers: numbers_1,
            sumOfPositiveNumbers: addPositiveNumbers(numbers_1)
        });
    }
    console.groupEnd();
    console.group('2. Sukurkite ir tipais aprašykite funkciją, kuri sudarytų string\'ą iš string\'ų masyvo elementų pirmųjų raidžių');
    {
        var acronymReducer_1 = function (acronym, word) { return acronym + word[0]; };
        var Acronym_1 = function (words) {
            var acronym = words.reduce(acronymReducer_1, '');
            return acronym;
        };
        var data = [
            ['Lietuviškas', 'Nepriklausomas', 'Kanalas'],
            ['Lietuvos', 'Respublikos', 'Televizija'],
            ['Loughing', 'Out', 'Loud'],
        ];
        data.forEach(function (words) { return console.log("[".concat(words.join(', '), "] -> ").concat(Acronym_1(words))); });
    }
    console.groupEnd();
    console.group('3. Sukurkite ir tipais aprašykite funkciją, kuri saudaugintų visus number masyvo skaičius');
    {
        var numbersReducer_1 = function (product, factor) { return product * factor; };
        var multiplyNumbers = function (numbers) { return numbers.reduce(numbersReducer_1, 1); };
        multiplyNumbers(numbers);
    }
    console.groupEnd();
}
console.groupEnd();
