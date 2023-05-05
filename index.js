/*
1. Write a function that makes each word in a string an element of an array.
Sample Input: “Orange Jordan”
Sample Output: [“Orange”, “Jordan”]
*/

function convert(word) {
  return word.split(" ");
}
console.log(convert("Orange Jordan"));
/*
2. Write a function that converts the first seven digits of a mobile phone number to a hidden form.
Sample Input: 0776807777
Sample Output: *******777
*/

function convertDigites(number) {
  let new_number = "";
  let astick = "*";
  for (let i = 0; i < number.length; i++) {
    if (i >= 7) {
      new_number += number[i];
    } else if (i < 7) {
      new_number += astick;
    }
  }
  return new_number;
}
console.log(convertDigites("0778060214"));
/*
3. Write a function that converts an email address to a hidden form.
Sample Input: orange_academy@orangorange_academy@orange.joe.jo
Sample Output: orange…@orange.com
*/
function convertEmail(email) {
  let indexOfUnderScore = email.indexOf("_");
  let indexOfAt = email.indexOf("@");
  let dot = ".";
  let hiddenEmail = "";
  for (let i = 0; i < email.length; i++) {
    if (i < indexOfUnderScore) {
      hiddenEmail += email[i];
    } else if (i >= indexOfAt) {
      hiddenEmail += email[i];
    } else {
      hiddenEmail += dot;
    }
  }
  return hiddenEmail;
}
console.log(convertEmail("orange_academy@orange.com"));

/*
4. Write a function that turns the first letter of every word in a string to the upper case.
Sample Input: “coding academy by orange”
Sample Output: “Coding academy by orange”

*/

function upper(item) {
  let newItem = item[0].toUpperCase();
  for (let i = 1; i < item.length - 1; i++) {
    if (item[i] == " ") {
      newItem += item[i].toUpperCase();
    } else {
      newItem += item[i];
    }
  }
  return newItem;
}
console.log(upper("coding academy by orange"));
// ------------------------------------------------
/*
1. Write a script to print out all even numbers between 1 and 50, twice.
Use 1 for loop and 1 while loop.
*/

console.log("the first way to solve the same question");
let count = 1;
for (let i = 1; i < 2; i++) {
  while (count <= 50) {
    if (count % 2 == 0) {
      console.log(count);
    }
    count++;
  }
}

console.log("The second way to solve same question : ");
for (let i = 1; i <= 50; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
/*
3. Resolve Exercise 1 so that one loop prints out even numbers and the second prints out the odd
ones.
*/
console.log("print the Odd and Even numbers");
for (let i = 1; i <= 50; i++) {
  if (i % 2 != 0) {
    console.log(i + " Odd number");
  } else {
    console.log(i + " Even number");
  }
}

// Conditions
// 1. If someone is applying to the academy’s website, create the conditional to cover these situations:
// ● If the candidate is older than 30, print out: “You are not eligible. You may join other programs.”
// ● If the candidate is between 18 and 30, print out: “You are eligible. Start your application.”
// ● If the candidate is younger than 18, print out: “You may join the kids' program.”
// ● If the candidate is older than 60, print out: “You may join the seniors’ program.”
// ● Calculate the age using the year of birth dynamically.

function distinguish(age) {
  let currant_year = 2023;
  let immature = currant_year - 2007; /* ... - 18*/
  let young = currant_year - 2006; /*18 - 30*/
  let middle_age = currant_year - 1993; /* 30 -..... 59 */
  let mature = currant_year - 1963; /* 60 - ..(die) */
  if (age > middle_age) {
    console.log("You are not eligible. You may join other programs.");
  } else if (age >= young) {
    console.log("You are eligible. Start your application.");
  } else if (age < immature) {
    console.log("You may join the kids' program.");
  } else if (age > mature) {
    console.log("You may join the seniors’ program.");
  }
}

distinguish(30);

// 2. Write a function that takes a string and switches the letters' case from upper to lower and vice
// versa.
// Sample Input: “OrAnGe”
// Sample Output: “oRaNgE”

function modify(String) {
  let newStr = "";
  for (let i = 0; i < String.length; i++) {
    if (String[i] === String[i].toLowerCase()) {
      newStr += String[i].toUpperCase();
    } else {
      newStr += String[i].toLowerCase();
    }
  }
  return newStr;
}

console.log(modify("OrAnGe"));

// 3. Write a function that takes a string, capitalizes each word's first letter, and removes all spaces
// (Camel Case).
// Sample Input: “Coding Academy by Orange”
// Sample Output: “CodingAcademybyOrange”

//loop
/*
4. Fizz-Buzz! Write a script that does the following:
● Counts from 1 to 100 and prints out something for each number:
○ If the number is divisible by 3, print "Fizz"
○ If the number is divisible by 5, print "Buzz"
○ If the number is divisible by both 3 and 5, print "FizzBuzz"
○ If the number does not meet any of the above conditions, just print the number
*/
function fizzBuzz() {
  let result = "";
  for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
      if (i % 5 == 0) {
        result += " Fizz Buzz, ";
      } else {
        result += " Fizz, ";
      }
    } else if (i % 5 == 0) {
      if (i % 3 == 0) {
        result += " Fizz Buzz, ";
      } else {
        result += " Buzz, ";
      }
    } else {
      result += `${i}, `;
    }
    return result;
  }
}
console.log(fizzBuzz());
/*
  5. Rewrite the script with a function so that each iteration will trigger a function call.
  Sample Input: fizzBuzz(1)
  Sample Output: 1
  Sample Input: fizzBuzz(15)
  Sample Output: FizzBuzz
  */

function fizzBuzz2(num) {
  if (num % 3 == 0) {
    if (num % 5 == 0) {
      console.log("Fizz Buzz");
    } else {
      console.log("Fizz");
    }
  } else if (num % 5 == 0) {
    if (num % 3 == 0) {
      console.log("Fizz Buzz");
    } else {
      console.log("Buzz");
    }
  } else {
    console.log(num);
  }
}
fizzBuzz2(1);
fizzBuzz2(3);
fizzBuzz2(15);
/*
    6. Create a recursive solution. A FizzBuzz function calls itself to continue the series.
    */

function fizBuz(num) {
  if (num % 3 == 0) {
    fizBuz(num);
    if (num % 5 == 0) {
      console.log("Fizz Buzz");
      fizBuz(num);
    } else {
      console.log("Fizz");
      fizBuz(num);
    }
  } else if (num % 5 == 0) {
    if (num % 3 == 0) {
      console.log("Fizz Buzz");
      fizBuz(num);
    } else {
      console.log("Buzz");
      fizBuz(num);
    }
  } else if (num === 100) {
    return;
  } else {
    num++;
    console.log(num);
  }
}
fizBuz(1);

function fb(num) {
  if (num == 100) return;
  if (num % 5 == 0 || num % 3 == 0) {
    if (num % 5 == 0 && num % 3 == 0) {
      console.log("FizzBuzz");
      fb(num + 1);
    } else if (num % 5 == 0) {
      console.log("Buzz");
      fb(num + 1);
    } else if (num % 3 == 0) {
      console.log("Fizz");
      fb(num + 1);
    }
  } else {
    console.log(num);
    fb(num + 1);
  }
}

fb(1);

/*
    7. Write a function that takes a number and converts it to certain banknotes.
    Sample Input: (57, [25, 10, 5, 1])
    Sample Output: 25, 25, 5, 1, 1
    */

function banknotes(num, arr) {
  let sub = num;
  let i = 0;
  while (sub != 0) {
    if (sub < arr[i]) {
      i++;
    } else {
      sub = sub - arr[i];
      console.log(arr[i]); //25
    }
  }
}

// 8. Write a function that counts the existence of a specific character within a string, despite the case.
// Sample Input: (“Coding Academy by Orange”, “o”)
// Sample Output: 2

function countChar(string, char) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === char.toUpperCase() || string[i] === char.toLowerCase()) {
      count++;
    }
  }
  return count;
}

console.log(countChar("Coding Academy by Orange", "o"));

/*
9. Write for loops that accomplish the following tasks:
a. Print the numbers 0 - 20, one number per line.
b. Print only the ODD values from 3 - 29, one number per line.
c. Print the EVEN numbers 12 down to -14 in descending order, one number per line.
*/

for (let i = 0; i <= 20; i++) {
  console.log(i);

  //  ODD numbers
  if (i % 2 != 0) {
    console.log(i + " ODD number");
  }
  //  Even numbers
  if (i % 2 == 0) {
    console.log(i + " Even number");
  }
}

// d. Print the numbers 50 down to 20 in descending order, but only if the numbers are multiples of 3.

for (let i = 50; i >= 20; i--) {
  console.log(i);
}

/*
10. Initialize two variables to hold the string 'CodingAcademy' and the 
array [7, 500, 'KH404', 'black', 36], then construct for loops to accomplish the following tasks:
e. Print each element of the array to a new line.
f. Print each string character in reverse order to a new line
*/

let string = "CodingAcademy";
let array = [7, 500, "KH404", "black", 36];

for (let i = 0; i < array; i++) {
  console.log(array[i]);
}

for (let i = string.length - 1; i <= 0; i--) {
  console.log(string[i]);
}

/*
11. Construct a for loop that sorts the array [7, 23, 18, 9, -13, 38, -10, 12, 0, 124] into two new arrays:
Define an empty evens array to hold the even numbers and an odds array for the odd numbers.
In the loop, determine if each number is even or odd, then put that number into evens or odds, as 
appropriate.
*/
let arr = [7, 23, 18, 9, -13, 38, -10, 12, 0, 124];
function sort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      // swap elements
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
      // update the value of i
      i = -1;
    }
  }
  return arr;
}
console.log(sort(arr));

/*
12. Write the code to create meals using elements from these arrays, ensuring the rules below.
Protein options:
['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans']
Grain options:
['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers']
Vegetable options:
['peas', 'green beans', 'kale', 'edamame', 'broccoli', 'asparagus']
Beverage options:
['juice', 'milk', 'water', 'soy milk', 'soda', 'tea']
Dessert options
['apple', 'banana', 'more kale', 'ice cream', 'chocolate', 'kiwi']
• The number of meals is determined as an input.
• The meals must include one item from each category.
• No two meals should be identical
*/

function createMeals(numMeals) {
  let Protein = ["chicken", "pork", "tofu", "beef", "fish", "beans"];
  let Grain = ["rice", "pasta", "corn", "potato", "quinoa", "crackers"];
  let Vegetable = [
    "peas",
    "green beans",
    "kale",
    "edamame",
    "broccoli",
    "asparagus",
  ];
  let Beverage = ["juice", "milk", "water", "soy milk", "soda", "tea"];
  let Dessert = [
    "apple",
    "banana",
    "more kale",
    "ice cream",
    "chocolate",
    "kiwi",
  ];
  let length = Protein.length; // I will use length of Protein array because all of category length equvilent
  let meals = [];
  meals.length = numMeals;
  for (let i = 0; i < numMeals; i++) {
    for (let j = 0; j < length; j++) {
      meals[i] = new Array(
        Protein[Math.floor(Math.random() * 6)],
        Grain[Math.floor(Math.random() * 6)],
        Vegetable[Math.floor(Math.random() * 6)],
        Beverage[Math.floor(Math.random() * 6)],
        Dessert[Math.floor(Math.random() * 6)]
      );
    }
    console.log(meals[i]);
  }
}
createMeals(7);

// let a = [1, 2, 3, 4, 5];
// let c = [];
// let randomElement = a[Math.floor(Math.random() * a.length)];
// for (let i = 0; i < a.length; i++) {
//   if (c.length == 0) {
//     c.push(randomElement);
//     console.log(c)
//   }
//   else if(!c.includes(randomElement)) {
//     c.push(randomElement);
//     console.log(c)
//   }

// }
