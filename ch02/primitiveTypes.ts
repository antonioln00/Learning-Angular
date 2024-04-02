var brand: string = "Chevrolet";
var message: string = `Today it's a happy day! I just bought a new ${brand} car`;

var x = 15;
console.log("antes", x);

function testVar() {
  var x = 10;
  console.log("dentro", x);
}

testVar();
console.log(x);

let y = 15;
console.log("antes", y);

function testLet() {
  y = 25;
  console.log("dentro", y);
}

testLet();

console.log(y);

const PI = 3.14;
// PI = 2.52;

const obj = {
  a: 10,
};

obj.a = 15;

console.log(obj);

const age: number = 7;

const carros: string[] = ["Chevrolet", "Volkswagem", "Honda"];
console.log(carros);

const ages: number[] = [10, 20, 30];
console.log(ages);

let distancia: any;
distancia = "1000km";
distancia = 1000;
const distancias: any[] = ["1000km", 1000];
console.log(distancia);
console.log(distancias);

type Animal = "Leão" | "Gato";
// const animal: Animal = 'cachorro';
const animal: Animal = "Leão";
const animal2: Animal = "Gato";

enum Carros {
  Chevrolet,
  Volkswagem,
  Honda,
}
const meuCarro: Carros = Carros.Volkswagem;
console.log(meuCarro);

enum Carros2 {
  Tesla = 1,
  GMC,
  Jeep,
}
const meuCarro2: Carros2 = Carros2.Jeep;
console.log(meuCarro2);

enum StackingIndex {
  None = 0,
  Dropdown = 1000,
  Overlay = 2000,
  Modal = 3000,
}
const meuSelectIndex: StackingIndex = StackingIndex.Dropdown;
console.log(meuSelectIndex);

enum Carros3 {
  Chevrolet,
  Volkswagem,
  Honda,
}
const meuCarro3: string = Carros3[1];
console.log(meuCarro3);

function test(): void {
  const a = 0; // função que não espera retorno
}

function sayHello(name: string): string {
  return "Hello, " + name; // função normal
}
console.log(sayHello("Antonio"));

const sayHello2 = function (name: string): string {
  return "Hello, " + name; // função anonima declarada em uma constate, porem sem tipo definido de retorno da constante
};

console.log(sayHello2("Antonio"));

const sayHello3: (name: string) => string = function (name: string): string {
  return "Hello, " + name; // função anonima em uma const, porem com um tipo de retorno definido da constante
};

console.log(sayHello3("Antonio"));

function greetMe(name: string, greeting?: string): string {
  if (!greeting) greeting = "Hello";

  return greeting + ", " + name;
}

console.log(greetMe("Antonio"));

function add(mandatory: string, optional?: number) {
  return mandatory + ", " + optional; // colocando o parametro opcional por ultimo
}

console.log(add("teste", 1));

// function add2(optional?: number, mandatory: string) {
//   return mandatory + ", " + optional; // se colocar parametro opcional primeiro já aparece erro de lint
// }
// console.log(add2("teste", 1));

function greetMe2(name: string, greeting: string = "Hello"): string {
  return `${greeting}, ${name}`; // definindo parametro default
}

console.log(greetMe2("Antonio"));

function greetPeople(greeting: string, ...names: string[]): string {
  return greeting + ", " + names.join(" and ") + "!";
}

console.log(greetPeople("joao", "antonio", "luiza"));

function hello(names: string): string;
function hello(names: string[]): string;
function hello(names: any, greeting?: string): string {
  let namesArray: string[];
  if (Array.isArray(names)) {
    namesArray = names;
  } else {
    namesArray = [names];
  }
  if (!greeting) {
    greeting = "Hello";
  }
  return greeting + ", " + namesArray.join(" and ") + "!";
}

console.log(hello(["antonio", "luiza"]));

const mult = (x: number) => x * 2;

console.log(mult(2));

const soma = (x: number, y: number): number => x + y;
console.log(soma(1, 2));

function delayedGreeting(name: string): void {
  this.name = name;
  this.greet = function () {
    setTimeout(() => console.log("Hello " + this.name), 0);
  };
}

const newItem = 3;
const oldArray = [1, 2];
const newArray = [...oldArray, newItem];

console.log(newArray);

const oldPerson = { name: "John" };
const newPerson = { ...oldPerson, age: 20 };
console.log(newPerson);

// const url =
//   "http://path_to_domain" +
//   "path_to_resource" +
//   "?param=" +  // url sem template string
//   parameter +
//   "&param2=" +
//   parameter2;

// const urlTemplate = `${baseUrl}/${path_to_resource}?param=${parameter}&param2=${parameter2}`;
// url com template string

function method<T>(arg: T): T {
  return arg;
}
console.log(method<string>("toni"));

function method2<T>(arg: T[]): T[] {
  console.log(arg.length);
  return arg;
}
class CustomPerson extends Array {}
class Person {}
const people: Person[] = [];
const newPerson2 = new CustomPerson();
method2<Person>(people);
method2<CustomPerson>(newPerson2);

const person = new Person();
// method2<Person>(person);

interface Shape {
  area(): number;
}
class Square implements Shape {
  area() {
    return 1;
  }
}
class Circle implements Shape {
  area() {
    return 2;
  }
}
function allAreas<T extends Shape>(...args: T[]): number {
  let total = 0;
  args.forEach((x) => {
    total += x.area();
  });
  return total;
}
allAreas(new Square(), new Circle());

const square = new Square();

if (square !== undefined) {
  const area = square.area();
}

const area = square?.area();

// const width = square?.area()?.width;

const mySquare = square ? square : new Square(); // operador ternario se square for true (?) mostra square, se não (:) cria uma nova instancia de Square();

const mySquare2 = square ?? new Square(); // se square não for nulo, aparecesse square, se não, cria uma nova instancia de square;

class Car {
  private distanceRun: number = 0;
  private color: string;

  constructor(private isHybrid: boolean, color: string = "red") {
    this.color = color; // construtor é inicializado junto com a instancia da classe
  }

  getGasConsumption(): string {
    return this.isHybrid ? "Very low" : "Too high!"; // são metodos da classe car
  }

  drive(distance: number): void {
    this.distanceRun += distance;
  }

  static honk(): string {
    return "HOOONK!"; // esse é um metodo static onde não precisa instancializar um objeto primeiro.
  }

  get distance(): number {
    return this.distanceRun; // a propriedade get torna o metodo legivel
  }
}

class Car2 {
  make: string;
  model: string;

  constructor(make: string, model: string) {
    this.make = make;
    this.model = model;
  }
}

class Car3 {
  constructor(public make: string, public model: string) {}
}

interface Vehicle {
  make: string;
}

class Car4 implements Vehicle {
  make: string; // por eu estar implementando a interface vehicle na classe car4, se torna obrigatório a propriedade make.
}

interface Exception {
  message: string;
  id?: number; // o ? representa que o ID não é obrigatório
}

interface ErrorHandler {
  exceptions: Exception[];
  logException(message: string, id?: number): void;
}

interface ExceptionHandlerSettings {
  logAllExceptions: boolean;
}

class CustomErrorHandler implements ErrorHandler {
  exceptions: Exception[] = [];
  logAllExceptions: boolean;

  constructor(settings: ExceptionHandlerSettings) {
    this.logAllExceptions = settings.logAllExceptions;
  }

  logException(message: string, id?: number): void {
    this.exceptions.push({ message, id });
  }
}

interface A {
  a: number;
}
const instance = { a: 3 } as A;
instance.a = 5;

interface DatabaseService {
  save(order: Order): void;
}
class Order {}
class OrderProcessor {
  constructor(private databaseService: DatabaseService) {}

  process(order) {
    this.databaseService.save(order);
  }
}

interface AuthService {
  isAuthenticated(): boolean;
}
class Auth {
  constructor(private srv: AuthService) {}
  execute() {
    if (this.srv.isAuthenticated()) {
    } else {
    }
  }
}

function NameChanger(callbackObject: any): Function {
  return function (target: Object, key: string): void {
    let propertyValue: string = target[key];
    if (delete target[key]) {
      Object.defineProperty(target, key, {
        get: function () {
          return propertyValue;
        },
        set: function (newValue) {
          propertyValue = newValue;
          callbackObject.changeName.call(this, propertyValue);
        },
      });
    }
  };
}

class Character {
  @NameChanger({
    changeName: function (newValue: string): void {
      console.log("You are now known as ${newValue}");
    },
  })
  name: string;
}
var character = new Character();
character.name = "Anakin";
console.log(character);

interface Hero {
  name: string;
  power: number;
 }
 const hero: Partial<Hero> = {
  name: 'Boothstomper'
 }
 
 console.log(hero);

 interface Hero2 {
  powers: Record<string, number>
 }

 interface Hero3 {
  name: string;
  powers: number[] | Record<string, number>; // tipo union 
 }
 