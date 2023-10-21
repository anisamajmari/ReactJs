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
