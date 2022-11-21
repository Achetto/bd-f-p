let num1 = 1;
let num2 = 0;

[num1, num2] = [num2, num1];

// console.log(num1,num2) // - > 0 , 1

let person = {
  name: "Amy",
  years: 30,
  score: {
    math: 99,
    chemistry: 80,
    biology: 78,
  },
  hobbies: ["sport", "dance"],
};

let {
  name: name,
  years: age,
  score: {
    math: mathScore,
    chemistry: chemistryScore,
    biology: biologyScore,
  },
  hobbies: [hobby1, hobby2],
} = person;

console.log(name); // Amy
console.log(age); // 30
console.log(mathScore); // 99
console.log(chemistryScore); // 80
console.log(biologyScore); // 78
console.log(hobby1); // sport
console.log(hobby2); // dance
