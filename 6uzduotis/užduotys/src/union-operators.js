/*
  Union operator (Apjungimo operatorius) yra skirtas aprašytis tipus, kurie apjungia kelis kitus tipus
*/
var id1 = '1321354';
var id2 = 17;
var id3 = 47;
var id4 = 'asdasdas';
var id5 = 47;
var id6 = 'sdfsdfdsfsdf';
var id7 = true;
var call = function (callee) {
    if (typeof callee === 'string') {
        console.log('Skambinama:', callee);
    }
    else {
        console.log('Skambinama:', callee.mobile);
    }
};
// Union panaudojimas aprašant masyvus
var data1 = [1, 5, 'burundukas', 8, 'siurprizas', 7];
//  data1 ir data2 tipai yra identiški.
var data2 = [1, 5, 'burundukas', 8, 'siurprizas', 7];
var flags1 = [1, 1, 0, 0, 0, 1, 1];
var flags2 = [true, false, false, true, true];
//  Alikite užduotis, ir atspausdinkite konsolėje savo sprendimo pavyzdžius užduoties bloke
console.group('Union operators - užduotys');
{
    // ↑↑↑↑ Tipus apraškite čia ↑↑↑↑
    console.group('1. Aprašykite objekto tipą Accommodation, kurio savybė "type" būtų, "House" arba "Flat"');
    {
        var accommodation1 = {
            address: 'Sausainių gatvė 13, Vinciučškiai',
            type: 'House'
        };
        var accommodation2 = {
            address: 'Falantierų pr. 58-9a, Didelmiestis',
            type: 'Flat'
        };
        console.log({
            accommodation1: accommodation1,
            accommodation2: accommodation2
        });
    }
    console.groupEnd();
    console.group('2. Aprašykite objekto tipą Car, kurio savybė "transmission" būtų, "Automatic" arba "Manual"');
    {
        var car1 = {
            brand: 'Toyota',
            model: 'Yaris',
            transmission: 'Automatic'
        };
        var car2 = {
            brand: 'Toyota',
            model: 'Avensis',
            transmission: 'Manual'
        };
        console.log({
            car1: car1,
            car2: car2
        });
    }
    console.groupEnd();
    console.group('3. Aprašykite tipą, kuris kintamajam leistų būti: arba Accommodation masyvu, arba Car masyvu');
    {
        var assets1 = [{
                address: 'Sausainių gatvė 13, Vinciučškiai',
                type: 'House'
            }, {
                address: 'Falantierų pr. 58-9a, Didelmiestis',
                type: 'Flat'
            }];
        var assets2 = [{
                brand: 'Toyota',
                model: 'Yaris',
                transmission: 'Automatic'
            }, {
                brand: 'Toyota',
                model: 'Avensis',
                transmission: 'Manual'
            }];
        console.table(assets1);
        console.table(assets2);
    }
    console.groupEnd();
}
console.groupEnd();
