var _a, _b;
// Funkcija aprašoma deklaruojant
var addNumbers = function (num1, num2) {
    return num1 + num2;
};
var joinStrings = function (str1, str2) {
    return str1 + ' ' + str2;
};
var createInitials = function (str1, str2) {
    return str1[0].toLocaleUpperCase() + str2[0].toLocaleUpperCase();
};
var sum = addNumbers(5, 7);
var joinedString = joinStrings('Penediktas', 'Tušinis');
var initials = createInitials('Penediktas', 'Tušinis');
console.log({
    sum: sum,
    joinedString: joinedString,
    initials: initials
});
function printRedText(text) {
    console.log("%c ".concat(text), 'color: #ee0000');
}
printRedText('printRed funkcijos argumentas');
console.group('1. Aprašykite funkcijoms tipus jas deklaruojant');
{
    var multiply = function (a, b) {
        return a * b;
    };
    var power = function (base, power) {
        return Math.pow(base, power);
    };
    var squareRoot = function (number) { return Math.pow(number, (1 / 2)); };
    var root = function (base, nthRoot) {
        return Math.pow(base, (1 / nthRoot));
    };
    var printBlueText = function (text) { return console.log("%c".concat(text), 'color: #0000ee'); };
    var num1 = 16;
    var num2 = 4;
    console.log((_a = {},
        _a["multiply(".concat(num1, ", ").concat(num2, ")")] = multiply(num1, num2),
        _a["power(".concat(num1, ", ").concat(num2, ")")] = power(num1, num2),
        _a["squareRoot(".concat(num1, ")")] = squareRoot(num1),
        _a["root(".concat(num1, ", ").concat(num2, ")")] = root(num1, num2),
        _a));
    printBlueText('printBlueText funkcijos argumentas');
}
console.groupEnd();
console.group('2. Aprašykite funkcijų tipus prieš deklaruojant funkcijas');
{
    var multiply = function (a, b) {
        return a * b;
    };
    var power = function (base, power) {
        return Math.pow(base, power);
    };
    var squareRoot = function (number) { return Math.pow(number, (1 / 2)); };
    var root = function (base, nthRoot) {
        return Math.pow(base, (1 / nthRoot));
    };
    var printBlueText = function (text) { return console.log("%c".concat(text), 'color: #0000ee'); };
    var num1 = 16;
    var num2 = 4;
    console.log((_b = {},
        _b["multiply(".concat(num1, ", ").concat(num2, ")")] = multiply(num1, num2),
        _b["power(".concat(num1, ", ").concat(num2, ")")] = power(num1, num2),
        _b["squareRoot(".concat(num1, ")")] = squareRoot(num1),
        _b["root(".concat(num1, ", ").concat(num2, ")")] = root(num1, num2),
        _b));
    printBlueText('printBlueText funkcijos argumentas');
}
console.groupEnd();
