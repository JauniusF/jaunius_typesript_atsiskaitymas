/*
  Tuple(rinkinys) - tai masyvas su greižtai nurodytais masyvo elemento tipais ir jų seka.
  Šis tipas neleidžia turėti kitokį kiekį, ar kitokio tipo elementų
*/
type FullnameTuple = [string, string];
type UseNumericStateTuple = [number, (num?: number) => void];

const person1: FullnameTuple = ["Koridas", "Atmazas"];
const person2: FullnameTuple = ["Paklodijus", "Pagalvė"];
const person3: FullnameTuple = ["Višta", "Maumedienė"];

let currentAge: number = 18;
let currentHeight: number = 180;
const age: UseNumericStateTuple = [currentAge, () => currentAge += 1];
const height: UseNumericStateTuple = [currentAge, (h) => {
  if (h) currentHeight = h;
}];

// Alikite užduotis, ir atspausdinkite konsolėje savo sprendimo pavyzdžius užduoties bloke
console.group('Tuples - užduotys');
{
  // ↓↓↓↓ Tipus apraškite čia ↓↓↓↓
  type PersonTuplius = [string, number];
  type TaskoTuplius = [number, number];
  type TrikampisTuplius = [TaskoTuplius, TaskoTuplius, TaskoTuplius];
  // ↑↑↑↑ Tipus apraškite čia ↑↑↑↑

  console.group('1. Sukurkite žmogaus vardo ir amžiaus rinkinį');
  {
    const person1: PersonTuplius = ['petras', 14];
    const person2: PersonTuplius = ['Nepetras', 30];

    console.log(person1, person2);
  }
  console.groupEnd();

  console.group('2. Sukurkite šuns šeimininko ir šuns rinkinį(pradžioje teks sukurti Šuns ir Šeiminiko tipus)');
  {
    const rinkinukas=[{
      name:'maze',
      age:4
    },{
      name:'jaunius',
      age:26
    }]

    console.log(rinkinukas);
  }
  console.groupEnd();

  console.group('3. Sukurkite trikampio taškų 2D erdvėje rinkinį(pradžioje teks sukurti 2D Taško tipą)');
  {
    const trikampis: TrikampisTuplius = [[-2, 1], [2, 2], [3, 1]];
    const darKitasTrikampis: TrikampisTuplius = [[0, 0], [4, 0], [4, 3]];

    console.log({
      trikampis,
      darKitasTrikampis,
    });
  }
  console.groupEnd();

}
console.groupEnd();