"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//string, boolean, number...
console.log("----Tipos-----");
const x = 10;
console.log(x);
//inferencia e annotation 
let y = 12;
let z = 12;
//tipos basicos
let firstName = "Matheus";
let age = 30;
const admin = true;
//String !=string
console.log(typeof firstName);
//object
console.log("--------Arrays--------");
const myNumbers = [1, 2, 3];
myNumbers.push(5);
console.log(myNumbers);
console.log("Tamanho do Array", myNumbers.length);
//tuplas
console.log("------Tuplas------");
let myTuple;
myTuple = [5, "teste", ["a", "b"]];
//objetcs literals -> {prop:value}
console.log("-----Objetos------");
const user = {
    name: "Pedro",
    age: 18
};
console.log(user);
console.log(user.name);
//------------------------------
//any -> Aceita qualquer tipo de dado
let a = 0;
a = 'teste';
a = true;
a = [];
//alternativa para o any
//union type
let id = "10";
id = 200;
const userID = 10;
const productID = "001";
const myID = 123;
//---------------------------------------
//enum
//Enumera um coleção de dados
//Ex: tamanho de roupas(size: Médio, size: Pequeno)
var Size;
(function (Size) {
    Size["P"] = "pequeno";
    Size["M"] = "m\u00E9dio";
    Size["G"] = "grande";
})(Size || (Size = {}));
const camisa = {
    name: "Camisa Gola V",
    size: Size.G
};
console.log(camisa);
//-------------------------------
//literal types (Valor literal para um tipo)
let test;
test: "autenticado"; // nao pode ser alterado o valor de test apenas autenticado ou null
test: null;
//-------------------------------------------
//funcoes
function soma(a, b) {
    return a + b;
}
console.log(soma(10, 10));
//tipando o retorno
function sayHello(name) {
    return `Hello ${name}`;
}
console.log(sayHello('Matheus'));
//---------------------------------------------
//tipando uma funçao que nao retorna nada
function logger(msg) {
    console.log(msg);
}
logger("Teste");
//---------------------------------------------
//Argumentos ou parametros opcionais
console.log("----Parametros e argumentos opcionais");
function greeting(name, greet) {
    if (greet) {
        console.log(`Olá ${greet} ${name}`);
    }
    else {
        console.log(`Olá ${name}`);
    }
}
greeting('Maria');
greeting('Maria', 'senhora');
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
console.log("-------Interface--------");
console.log(sumNumbers({ n1: 1, n2: 2 }));
function multplyNumbers(nums) {
    return nums.n1 * nums.n2;
}
console.log(multplyNumbers({ n1: 3, n2: 2 }));
const someNumbers = {
    n1: 5,
    n2: 10,
};
console.log(multplyNumbers(someNumbers));
console.log("----------");
//Checagem de tipo de dados
//narrowing
function doSomething(info) {
    if (typeof info == "number") {
        console.log(`O numero é ${info}`);
        return;
    }
    console.log("Não foi informado um numero");
}
doSomething(5);
doSomething(true);
console.log("-----------");
//------------------
//Generics, trabalha com um tipo específico de dados neste caso qualquer tipo de Array
function showArraysItems(arr) {
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`);
    });
}
console.log("Exibindo Arrays com Generics");
const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];
showArraysItems(a1);
showArraysItems(a2);
console.log("------------");
//classes(O.O)
console.log("Classes em Type Script: User");
class User {
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
    showUserName() {
        console.log(`O nome do usuario é: ${this.name}`);
    }
}
const zeca = new User("Zeca", "Admin", true);
console.log(zeca);
zeca.showUserName();
//------------------------
//Interfaces em Classes
console.log("-----Interfaces em Classes-----");
class Car {
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log(`A marca do carro é: ${this.brand}`);
    }
}
const fusca = new Car("vw", 4);
fusca.showBrand();
//--------------------------
//Herança
console.log("-----Herança--------");
class SuperCar extends Car {
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const a4 = new SuperCar("Audi", 4, 2.0);
console.log(a4);
a4.showBrand();
console.log("------------");
//constructor decorators
//Usado para validação de dados, construir um evento observavel em uma determinada classe
//Devemos habilita-lo no tsconfig
function baseParamters() {
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.id = Math.random();
                this.createdAt = new Date();
            }
        };
    };
}
let Person = class Person {
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    baseParamters() //Neste caso ele está inserindo um id e a data de criação no objeto
], Person);
const sam = new Person('Sam');
console.log(sam);
