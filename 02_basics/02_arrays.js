// array functions

const marvel_heros =["thor", "Ironman", "Spiderman"];
const dc_heros = ["superman", "flash", "batman"];
//marvel_heros.push(dc_heros);
//console.log(marvel_heros);

// const heros = marvel_heros.concat(dc_heros);
// console.log(heros);


// const all_new_heros =[...marvel_heros,...dc_heros];
// console.log(all_new_heros);

// const another_array = [1, 2, 3,[4, 5, 6],7 ,8]
// const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array);

console.log(Array.isArray("sani"));
console.log(Array.from("sani"));
console.log(Array.from("soumyaranjanmahalik"));
console.log(Array.isArray("sani"));

console.log(Array.from({name : "hitesh"}));//instresting

let score1 =120;
let score2 = 140;
let score3 = 144;
console.log(Array.of(score1,score2,score3));