const arr:number[]=[1,2,33,4,99]
console.group('1. Parašykite funkciją, kuri atspausdina paskutinio masyvo elemento indeksą');
{
  
  function giveMeLastIndex(arr:number[]){
    const arrLast:number=arr.length -1
    return arrLast;
  }
  giveMeLastIndex(arr)
}
console.groupEnd();

console.group('2. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus eilutėmis');
{
  function arrRow(arr: any[]): void {
    for (let i = 0; i < arr.length; i++) console.log(i);
  }

  console.log(arr);
  arrRow(arr);


}
console.groupEnd();

console.group('4. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras eilutėmis, tokiu formatu:  ');

{
  function arrArrow(arr: any[]): void {
    for (let i = 0; i < arr.length; i++) console.log(`[${i}] => ${arr[i]}`);
  }

  console.log(arr);
  arrArrow(arr);

}
console.groupEnd();

console.group('5. Parašykite funkciją, kuri atspausdina masyvo elementus atbuline tvarka eilutėmis, iš galo.');
{
  function baiginejasVaizduote(arr: any[]): void {
    for (let i = arr.length - 1; i >= 0; i--) console.log(arr[i]);
  }

  console.log(arr);
  baiginejasVaizduote(arr);

}
console.groupEnd();

console.group('6. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus vienoje eilutėje: 0 1 2 3 ...');
{
  function sprendimas(arr: any[]): void {
    const rest = arr.map((_, i) => i).join(' ');
    console.log(rest)
  }

  console.log(arr);
  sprendimas(arr);

}
console.groupEnd();

console.group('7. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes vienoje eilutėje: -111 2 -9 48 ...');
{
  function sprendimas(arr: any[]): void {
    const rest = arr.join(' ');
    console.log(rest);
  
  }

  console.log(arr);
  sprendimas(arr);

}
console.groupEnd();

console.group('8. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras vienoje eilutėje, tokiu formatu:');

{
  function sprendimas(arr: any[]): void {
    const res = arr.map((x, i) => `[${i}]=>${x}`).join(', ');
    console.log(res);
  }

  console.log(arr);
  sprendimas(arr);

}
console.groupEnd();

console.group('9. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų padaugintų iš 2');
{
  function sprendimas(arr: number[]): number[] {
    return arr.map(x => x * 2);
  }

  const rezultatas = sprendimas(arr);
  console.log(arr);
  console.log(rezultatas);
}
console.groupEnd();

console.group('10. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų pakeltų kvadratu');
{
  function sprendimas(arr: number[]): number[] {
    return arr.map(x => x ** 2);
  }

  const rezult = sprendimas(arr);
  console.log(arr);
  console.log(rezult);
}
console.groupEnd();

console.group('11. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų ir jų indeksų sandaugos');
{
  function sprendimas(arr: number[]): number[] {
    return arr.map((x, i) => x * i);
  }

  const result = sprendimas(arr);
  console.log(arr);
  console.log(result);
}
console.groupEnd();

console.group('12. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo teigiamų elementų');
{
  function sprendimas(arr: number[]): number[] {
    return arr.filter((x) => x > 0);
  }

  const result = sprendimas(arr);
  console.log(arr);
  console.log(result);
}
console.groupEnd();

console.group('13. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo NE-teigiamų elementų');
{
  function sprendimas(arr: number[]): number[] {
    return arr.filter((x) => x <= 0);
  }

  const result = sprendimas(arr);
  console.log(arr);
  console.log(result);
}
console.groupEnd();

console.group('14. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo lyginių elementų');
{
  function sprendimas(arr: number[]): number[] {
    return arr.filter((x) => x % 2 === 0);
  }

  const result = sprendimas(arr);
  console.log(arr);
  console.log(result);
}
console.groupEnd();

console.group('15. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo nelyginių elementų');
{
  function sprendimas(arr: number[]): number[] {
    return arr.filter((x) => Math.abs(x) % 2 === 1);
  }

  const result = sprendimas(arr);
  console.log(arr);
  console.log(result);
}
console.groupEnd();

console.group('16. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo, paverstų teigiamais, elementų');
{
  function sprendimas(arr: number[]): number[] {
    return arr.map((x) => x < 0 ? x * -1 : x);
  }

  const result = sprendimas(arr);
  console.log(arr);
  console.log(result);
}
console.groupEnd();
