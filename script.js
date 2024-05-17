// p1 = prompt("Food 1");
// p2 = prompt("Food 2");
// p3 = prompt("Food 3");
// p4 = prompt("Food 4");
// p5 = prompt("Food 5");

// document.getElementById("list1").innerHTML = p1;
// document.getElementById("list2").innerHTML = p2;
// document.getElementById("list3").innerHTML = p3;
// document.getElementById("list4").innerHTML = p4;
// document.getElementById("list5").innerHTML = p5;

// function elementCreater(elementType, name, size, color, weight) {
//   newElem = document.createElement(elementType);
//   newElem.innerHTML = name;
//   newElem.style.fontSize = size;
//   newElem.style.color = color;
//   newElem.style.fontWeight = weight;
//   document.body.appendChild(newElem);
// }
// elementCreater("p", "Hello CO-DE", "32px", "red", "bold");

// function addFood() {
//   elemName = prompt("What food you want to add");

//   newElem = document.createElement("p");
//   newElem.className = "name text-[24px] w-[400px] text-white mb-[10px] bg-black";
//   newElem.innerHTML = "This is a Hello World";
//   document.body.appendChild(newElem);
// }

// function deleteElement() {
//   targetElement = document.querySelector(".food");
//   targetElement.remove();
// }

// x = 0;
// document.getElementById("count").innerHTML = -1;

// function add() {
//   x += 2;
//   document.getElementById("count").innerHTML = x;
// }

// function subtract() {
//   x -= 2;
//   document.getElementById("count").innerHTML = x;
// }

// function multiply() {
//   x *= 2;
//   document.getElementById("count").innerHTML = x;
// }

// function divide() {
//   x /= 2;
//   document.getElementById("count").innerHTML = x;
// }

// x = 0;
// document.getElementById("count").innerHTML = x;

// function increment() {
//   x++;
//   document.getElementById("count").innerHTML = x;
// }

// function decrement() {
//   x--;
//   document.getElementById("count").innerHTML = x;
// }

// let arr = ["Chicken", "Soup", "Steak", "Pizza", "Fish"];

// document.getElementById("note1").innerHTML = arr[0];
// document.getElementById("note2").innerHTML = arr[1];
// document.getElementById("note3").innerHTML = arr[2];
// document.getElementById("note4").innerHTML = arr[3];
// document.getElementById("note5").innerHTML = arr[4];

// const addElement = () => {
//   for (let i = 0; i < 5; i++) {
//     newElem2 = document.createElement("p");
//     newElem2.className =
//       "name text-[24px] w-[200px] flex justify-center items-center text-white mb-[10px] bg-black";
//     newElem2.innerHTML = i + 1;
//     document.body.appendChild(newElem2);
//   }
// };

// if (state == true) {
//   document.getElementById("txt").innerHTML = "State is True";
// } else {
//   document.getElementById("txt").innerHTML = "State is False";
// }

// function increment() {
//   x++;
//   document.getElementById("count").innerHTML = x;
// }

// function decrement() {
//   x--;
//   document.getElementById("count").innerHTML = x;
// }

// let x = "";

// function passcode() {
//   x = prompt("Enter Passcode");
//   while (x != "12345") {
//     x = prompt("Wrong Passcode, Please try again!");
//     document.getElementById("txt").innerHTML = "Hello!";
//   }
//   document.getElementById("txt").innerHTML = "Welcome User!";
// }

// let balance = 1000;

// function deposit() {
//   depositMoney = Number(prompt("How much would you like to deposit?"));
//   balance += depositMoney;
//   document.getElementById("balance").innerHTML = balance;
// }

// function withdraw() {
//   withdrawMoney = Number(prompt("How much would you like to withdraw?"));
//   while (balance < withdrawMoney) {
//     withdrawMoney = Number(prompt("Insufficient Funds, Please try again!"));
//   }
//   balance -= withdrawMoney;
//   document.getElementById("balance").innerHTML = balance;
// }

const myArray = [];
let box = document.getElementById("box");

function render(arr) {
  box.innerHTML = "";
  arr.forEach(function (item) {
    let createElem = document.createElement("p");
    createElem.className =
      "w-[400px] p-5 bg-blue-800 text-white text-4xl text-center mb-2";
    createElem.innerHTML = item;
    box.appendChild(createElem);
  });
}

function deleteItem() {
  myArray.pop();
  render(myArray);
}

function addItem() {
  let newitem = prompt("Adding To-do...");
  myArray.push(newitem);
  render(myArray);
}

function sortAsc() {
  myArray.sort();
  render(myArray);
}

function sortDesc() {
  myArray.sort();
  myArray.reverse();
  render(myArray);
}


function filterWords() {
  word = prompt("Filter what word?");
  filteredArray = myArray.filter((item) => item.includes(word));
  render(filteredArray);
}



// containsFox is true

// let words = ["apple", "banana", "cherry", "date"];
// words = words.filter((word) => word.length > 5);

// function add(a, b) {
//   return a + b;
// }

// const add = (a, b) => a + b;

// let arr1 = ["red", "blue", "green"];

// for (let i = 0; i < arr1.length; i++) {
//   let createElem = document.createElement("div");
//   createElem.className = "w-[400px] p-5  text-white text-4xl text-center mb-2";
//   createElem.style.backgroundColor = arr1[i];
//   createElem.innerHTML = arr1[i];
//   document.body.appendChild(createElem);

// x = 2;

// if (x < 5) {
//   console.log("Sky");
// } else if (x == 2) {
//   console.log("Daniel");
// }

// let array = [1, 2, 3];
// array.push(4);

// let array = [1, 2, 3, 4, 5];
// let removedElement = array.pop();
