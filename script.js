let array1 = [
  ["Hello", "world"],
  ["Brad", "came", "to", "dinner", "with", "us"],
  ["He", "loves", "tacos"],
];

let array = [...array1];
array[0] = [...array1[0]];
array[1] = [...array1[1]];
array[2] = [...array1[2]];

let arr = [];

// [LEFT, RIGHT, LEFT]  chars < 16
if (array[0].join("").length < 16) {
  array[0].unshift("*");
  array[0].push("  *");
  arr.push(array[0].join(" "));
} else {
  let cut1 = arr1.splice(array[0].length / 2);
  array[0].unshift("*  ");
  array[0].push("*");
  cut1.unshift("*  ");
  cut1.push("*");
  arr.push(array[0].join(" "));
  arr.push(cut1.join(" "));
}

if (array[1].join("").length < 16) {
  array[1].unshift("*  ");
  array[1].push("*");
  arr.push(array[1].join(" "));
} else {
  let cut2 = array[1].splice(array[1].length / 2);
  array[1].unshift("*  ");
  array[1].push("*");
  cut2.unshift("<br>*  ");
  cut2.push("*");
  arr.push(array[1].join(" "));
  arr.push(cut2.join(" "));
}

if (array[2].join("").length < 16) {
  array[2].unshift("*");
  array[2].push("  *");
  arr.push(array[2].join(" "));
} else {
  let cut3 = array[2].splice(array[2].length / 2);
  array[2].unshift("*  ");
  array[2].push("*");
  cut3.unshift("*  ");
  cut3.push("*");
  arr.push(array[2].join(" "));
  arr.push(cut3.join(" "));
}
// alert(array);
console.log(array);

let a = document.getElementById("ida");
let b = document.getElementById("idb");
let c = document.getElementById("idc");

a.innerHTML = `<p align=left>  ${arr[0]} </p>`;
b.innerHTML = `<p align=right>  ${arr[1]}  ${arr[2]} </p>`;
c.innerHTML = `<p align=left>  ${arr[3]} </p>`;
