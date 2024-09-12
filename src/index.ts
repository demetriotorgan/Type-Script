//string, boolean, number...
console.log("----Tipos-----");
const x:number = 10;
console.log(x);

//inferencia e annotation 
let y = 12;
let z: number = 12;

//tipos basicos
let firstName: string = "Matheus";
let age:number = 30;
const admin: boolean = true;

//String !=string
console.log(typeof firstName);

//object
console.log("--------Arrays--------")
const myNumbers: number[] = [1,2,3];
myNumbers.push(5);
console.log(myNumbers);
console.log("Tamanho do Array", myNumbers.length);

//tuplas
console.log("------Tuplas------");
let myTuple: [number, string, string[]]
myTuple = [5, "teste", ["a", "b"]];

//objetcs literals -> {prop:value}
console.log("-----Objetos------");
const user: {name:string, age:number}={
    name:"Pedro",
    age: 18
};
console.log(user);
console.log(user.name);

//------------------------------
//any -> Aceita qualquer tipo de dado
let a:any = 0;
a = 'teste';
a = true;
a = [];

//alternativa para o any
//union type
let id: string | number = "10";
id = 200;

//----------------------------------
//type alias defini um novo tipo de dado
type myIdType = number | string
const userID: myIdType = 10;
const productID: myIdType = "001";
const myID: myIdType = 123;

//---------------------------------------
//enum
//Enumera um coleção de dados
//Ex: tamanho de roupas(size: Médio, size: Pequeno)
enum Size{
    P="pequeno",
    M="médio",
    G="grande"
}

const camisa = {
    name: "Camisa Gola V",
    size: Size.G
}
console.log(camisa)

//-------------------------------
//literal types (Valor literal para um tipo)
let test: "autenticado" | null;
test: "autenticado"  // nao pode ser alterado o valor de test apenas autenticado ou null
test: null;

//-------------------------------------------
//funcoes
function soma(a:number,b:number){
    return a+b
}
console.log(soma(10,10));

//tipando o retorno
function sayHello(name:string):string{
    return `Hello ${name}`;
}
console.log(sayHello('Matheus'));

//---------------------------------------------
//tipando uma funçao que nao retorna nada
function logger(msg:string): void{
    console.log(msg)
}
logger("Teste");

//---------------------------------------------
//Argumentos ou parametros opcionais
console.log("----Parametros e argumentos opcionais");
function greeting (name:string, greet?: string): void{
    if(greet){
        console.log(`Olá ${greet} ${name}`);
    } else {
        console.log(`Olá ${name}`);
    }
}
greeting('Maria');
greeting('Maria', 'senhora');

//interfaces
//Padronizam tipos para serem reusados
interface MathFunctionParams{
    n1:number,
    n2:number
}
function sumNumbers(nums: MathFunctionParams){
    return nums.n1 + nums.n2;
}
console.log("-------Interface--------");
console.log(sumNumbers({n1:1,n2:2}));

function multplyNumbers(nums:MathFunctionParams){
    return nums.n1 * nums.n2;
}
console.log(multplyNumbers({n1:3,n2:2}));

const someNumbers:MathFunctionParams = {
    n1:5,
    n2: 10,
}
console.log(multplyNumbers(someNumbers));
console.log("----------");

//Checagem de tipo de dados
//narrowing

function doSomething(info:number | boolean){
    if(typeof info == "number"){
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
function showArraysItems<T>(arr: T[]){
    arr.forEach((item)=>{
        console.log(`ITEM: ${item}`)
    })
}
console.log("Exibindo Arrays com Generics");
const a1 = [1,2,3];
const a2 = ["a","b","c"];

showArraysItems(a1);
showArraysItems(a2);
console.log("------------")

//classes(O.O)
console.log("Classes em Type Script: User")
class User {
    name
    role
    isApproved
    constructor(name:string, role:string, isApproved:boolean){
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
    showUserName(){
        console.log(`O nome do usuario é: ${this.name}`);
    }
}

const zeca = new User("Zeca", "Admin", true);
console.log(zeca);
zeca.showUserName();

//------------------------
//Interfaces em Classes
console.log("-----Interfaces em Classes-----");

interface IVeiculo{
    brand: string
    showBrand():void
}

class Car implements IVeiculo{
    brand
    wheels
    constructor(brand:string,wheels:number) {
        this.brand = brand
        this.wheels = wheels
    }
    showBrand(): void {
        console.log(`A marca do carro é: ${this.brand}` )
    }
}
const fusca = new Car("vw", 4);
fusca.showBrand();

//--------------------------
//Herança
console.log("-----Herança--------")
class SuperCar extends Car{
    engine
    constructor(brand:string, wheels:number,engine:number){
        super(brand,wheels)
        this.engine = engine
    }
}

const a4 = new SuperCar("Audi",4,2.0);
console.log(a4);
a4.showBrand();
console.log("------------")

//constructor decorators
//Usado para validação de dados, construir um evento observavel em uma determinada classe
//Devemos habilita-lo no tsconfig
function baseParamters(){
    return function<T extends {new (...args: any[]):{}}>(constructor:T){
        return class extends constructor{
            id = Math.random();
            createdAt = new Date();
        }
    }
}

@baseParamters() //Neste caso ele está inserindo um id e a data de criação no objeto
class Person{
    name
    constructor(name:string){
        this.name = name
    }
}
const sam = new Person('Sam');
console.log(sam);