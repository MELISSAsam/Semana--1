class Person{
    name: string;
    age: number;
    
    constructor(name: string, age: number){
        this.name=name;
        this.age=age;
    }
    greet (){
        console.log (`Hola, soy ${this.name} y tengo ${this.age} años.`)
    }
    cumplirAños(){
        console.log(`Mi edad es: ${this.age} e incrementada es : ${this.age+1}`)
    }
}
const personal =new Person ("Mel", 25);
personal.greet();
personal.cumplirAños()
class Student extends Person {
    career: string;

    constructor(name: string, age: number, career: string) {
        super(name, age);
        this.career = career;
    }
    showCareer(){
      console.log(`Estoy estudiando la carrera de ${this.career}`);  
    }
}
const Student1 = new  Student('Samanrha', 20, 'Medicina Veterinaria');
Student1.showCareer();
Student1.greet();
Student1.cumplirAños();