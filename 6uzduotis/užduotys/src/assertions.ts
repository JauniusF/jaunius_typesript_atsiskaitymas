// /*
//   Assertion(Teigimas) - tai papildoma direktyva tiksliau aprašyti tipui, kuomet programuotojui žinoma daugiau 
//   informacijos nei gali žinoti TypeScript transpiliatorius.

//   Įmanoma 'teigti' tik tuos tipus, kurie priklauso potencialių tipų aibei
// */

type PossibleType = string | number;

const someNumber: PossibleType = 17 as number;
const title: PossibleType = "Grace" as string;

// Šiuo atveju 'teigiame' kad rastas elementas bus būtent form'os elementas.
const formAddUser: HTMLFormElement = document.querySelector('#form-add-user') as HTMLFormElement;
formAddUser.onsubmit = (e) => {
  e.preventDefault();
  console.log('Ateityje pridėsiu vartotoją');
};

// Alikite užduotis, ir atspausdinkite savo sprendimo pavyzdžius užduoties blokuose
console.group('Assertions - užduotys');
{
  // ↓↓↓↓ Tipus ir užduotims bendrus kintamuosius apraškite čia ↓↓↓↓
  type printyk = (e: MouseEvent) => void;
  const btn:HTMLButtonElement =document.querySelector("#submit") as HTMLButtonElement;
  // ↑↑↑↑ Tipus ir užduotims bendrus kintamuosius apraškite čia ↑↑↑↑

  console.group('1. Sukurkite HTML mygtuką ir uždėkite jam įvykio klausiklį, jog paspaudus, būt spausdinamas tekstas "paspausta!"');
  {
    const printykPaspaudus: printyk = () => console.log('Paspausta!?');

    btn.addEventListener('click', printykPaspaudus);
  }
  console.groupEnd();

    // sprendimą|sprendimo pavyzdžius spausdinkite čia 
  }
  console.groupEnd();
  
  console.group('2. Sukurkite <div> elementą ir papildikyte jo turinį mažu kvadaratėliu kiekvieną kart, kuomet paspaudžiamas [1.] mygtukas');
  {
    type printyk = (e: MouseEvent) => void;
    const btn:HTMLButtonElement =document.querySelector("#submit") as HTMLButtonElement;
    const kvadratas: HTMLDivElement = document.querySelector('#kubas') as HTMLDivElement;
    const pridekvadrata: printyk = () => {
      const kv: HTMLSpanElement = document.createElement('span');
      kv.className = 'kv';
      kvadratas.append(kv);
    }

    btn.addEventListener('click', pridekvadrata);
  }
  console.groupEnd();

  console.group('3. Sukurkite <p> elementą kuriame spausdinsite skaičių - kiek kvadratėlių yra [2.] konteineryje');
  {
    type printyk = (e: MouseEvent) => void;
    const btn:HTMLButtonElement =document.querySelector("#submit") as HTMLButtonElement;
    const count: HTMLParagraphElement = document.querySelector('#counter') as HTMLParagraphElement;

    let kvCounter: number = 0;
    const startinkKvadratuCounteri: printyk = () => {
      kvCounter++;
      count.innerHTML = `Kvadratų skaičius: ${kvCounter}`;
    }

    btn.addEventListener('click', startinkKvadratuCounteri);
  }
  console.groupEnd();


console.groupEnd();