enum ugioVienetai {
    cm = 'cm',
    meter = 'm',
    inch = 'in',
  }
  
  enum svorioVienetai {
    kg = 'kg',
    lbs = 'lbs',
  }
class Person{
    private name: string;
    private surname: string;
    private age?: number;
    private height?: number;
    private weight?: number;
    static ugioVienetai: ugioVienetai = ugioVienetai.cm;
    static svorioVienetai: svorioVienetai = svorioVienetai.kg;
    constructor(name:string, surname:string, age:number, height:number, weight:number) {
        this.name=name;
        this.surname=surname;
        this.setAge(age);
        this.setHeight(height);
        this.setWeight(weight);
    }
    getName(){return this.name};
    getSurname(){return this.surname};
    getAge(){return this.age};
    getHeight(){return this.height};
    getWeight(){return this.weight};

    setAge(age:number){
        if (age < 1 || age > 150) {
            console.error(`not a viable age: '${age}'\n\t your age must be in between [1; 150].`);
            return;
          }
          if (age % 1 !== 0) {
            console.error(`not a viable age: '${age}'\n\t your age must be an integer`);
            return;
          }
          this.age = age;
    }
        
    setHeight(height:number, units?:ugioVienetai){
        switch (units) {
            case ugioVienetai.cm: this.height = height; break;
            case ugioVienetai.meter: this.height = height * 100; break;
            case ugioVienetai.inch: this.height = height * 2.54; break;
            default: this.height = height;
          }
    };
    setWeight(weight: number, units?: svorioVienetai): void {
        switch (units) {
          case svorioVienetai.kg: this.weight = weight; break;
          case svorioVienetai.lbs: this.weight = weight / 2.20462262; break;
          default: this.weight = weight;
        }
    toString(); {
        let grazustekstas = `${this.name} ${this.surname}\n`;
        grazustekstas += `\theight: ${this.getHeight()} ${Person.ugioVienetai}\n`;
        grazustekstas += `\tweight: ${this.getWeight()}   ${Person.svorioVienetai}\n`;

        console.log(grazustekstas);
        }

}
}
