/*
  1. Sukurkitę sąrašo mazgo struktūrą ListNode, bet kokiam duomenų tipui


  2. Sukurkite sąrašo klasę List.
    * Klasė turi privačias turėti savybes
      * head -> nuoroda į sąrašo pirmajį mazgą
      * taip -> nuoroda į sąrašo paskutinijė mazgą
    * Sukurkite konstruktorių, jog jis galėtų priimti pirmu parametru perduotą ListNode elementą ir priskirti
    jį savybėms List.head ir List.tail
    Konstruktoriaus ListNode tipo parametras neprivalomas. Neperdavus parametro, List klasės objekto savybės tail ir head turi būti null

  3. Sukurkite metodą pridėti sąrašo elementui į sąrašo priekį.
    Payzdys:
      esamas sąrašas:
        head ↓         ↓ tail
             a -> b -> c
      naujas elementas
        d
      rezultatas
        head ↓              ↓ tail
             d -> a -> b -> c

    Pridedant elementą įsitikintite, kad atnaujinate List.head ir List.tail savybes
    * Po sąrašo List atnaujinimo:
    List.head turi būti pirmasis mazgas(ListNode)
    List.tail turi būti paskutinis mazgas(ListNode)
    * Nepamirškite įvertinti atvejo, kuomet sąrašas List elementų neturi.

  4. Sukurkite metodą pridėti sąrašo elementui į sąrašo galą.
    Payzdys:
      esamas sąrašas:
        head ↓         ↓ tail
             a -> b -> c
      naujas elementas
        d
      rezultatas
        head ↓              ↓ tail
             a -> b -> c -> d

    Pridedant elementą įsitikintite, kad atnaujinate List.head ir List.tail savybes
    * Po sąrašo List atnaujinimo:
    List.head turi būti pirmasis mazgas(ListNode)
    List.tail turi būti paskutinis mazgas(ListNode)
    * Nepamirškite įvertinti atvejo, kuomet sąrašas List elementų neturi.

  5. Sukurkite metodą List.forEach klasėje List, kuris vykdytų parametru perduotą funkciją - callback
  su kiekvieno mazgo reikšme pradedant List.head ir baigiant List.tail
    * ForEachCallback tipas: (value: T) => void
    * List.forEach tipas: ( callback: ForEachCallback) => void)
*/

// ↓↓↓ Tipai ↓↓↓
type listnode<tt>={
  data:tt;
  next:listnode<tt>|null;
}

type ForEachCallback<tt> = (value: tt) => void;
// ↑↑↑ Tipai ↑↑↑

// ↓↓↓ Klasės ↓↓↓

// ↑↑↑ Klasės ↑↑↑

// ↓↓↓ Kintamuosius skirtus pavyzdžiams saugokite čia ↓↓↓

// ↑↑↑ Kintamuosius skirtus pavyzdžiam saugokite čia ↑↑↑

console.group('1. Sukurkitę sąrašo mazgo struktūrą ListNode, bet kokiam duomenų tipui');
{
}
console.groupEnd();

console.group('2. Sukurkite sąrašo klasę List');

  class List<tt>{
    private head:listnode<tt>|null;
    private tail:listnode<tt>|null;
    constructor(head:listnode<tt>, tail:listnode<tt>){
      if (head &&tail !==undefined){
        this.head=head;
        this.tail=tail;
      } else{
        this.head=null;
        this.tail=null
      }
    }
    private pridetiElementa = (p: listnode<tt>) => {
      this.head = p;
      this.tail = p;
    }
    public pridetiElementaPriekin = (p: listnode<tt>): void => {
      if (this.head === null) {
        this.pridetiElementa(p);
      } else {
        p.next = this.head;
        this.head = p;
      }
  }
    public addNodeEnd = (p: listnode<tt>): void => {
      if (this.tail === null) {
        this.pridetiElementa(p);
      } else {
        this.tail.next = p;
        this.tail = p;
      }
  };

  public forEach = (callback:ForEachCallback<tt>):void => {
    if (this.head === null) return;

    let currentNode:listnode<tt> = this.head;

    while (true) {
      callback(currentNode.data);
      if (currentNode.next === null) break;
      currentNode = currentNode.next;
    }
  };
}


console.groupEnd();

console.group('3. Sukurkite metodą pridėti sąrašo elementui į sąrašo priekį.');
{

}
console.groupEnd();

console.group('4. Sukurkite metodą pridėti sąrašo elementui į sąrašo priekį.');
{

}
console.groupEnd();

console.group('5. Sukurkite metodą List.forEach klasėje List, kuris vykdytų parametru perduotą funkciją');
{

}
console.groupEnd();
