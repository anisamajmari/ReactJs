//  Primitives: number, string, boolean
//  More complex types: arrays, objects
//  Function types, parameters

// Primitives
let age: number;
age = 12;

let userName: string;
userName = "Anisa";

let isInstructor: Boolean;
isInstructor = true;

//  More complex types
let hobbies: string[];
hobbies = ["Sports", "Cooking"];

type Person = { name: string; age: number };

let person: Person;

person = {
  name: "Anisa",
  age: 22,
};

let people: Person[];

// Type inference

let course = "React - The complete guide";
// course = 123;    ERROR
course = "React";

// let courses: string | number = "JavaScript and React";
// courses = 111;

// Functions & types

function add(a: number, b: number) {
  return a + b;
}

function print(value: any) {
  console.log(value);
}

// Generics
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, "a"];
const updatedArray = insertAtBeginning(demoArray, -1);
const stringArray = insertAtBeginning(["a", "n", "d", "t"], "o");

// updatedArray[0].split("");
