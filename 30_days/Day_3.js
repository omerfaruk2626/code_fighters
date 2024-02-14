//* ------------------------ DAY 3 ------------------------//



//? ---------------------- EXERCISE-1 ---------------------//

//!1 Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = "Omer";
let lastName = "Fidan";
let country = "Turkey";
let city = "Istanbul";
let age = 30;
let isMarried = false;
let year = 2022;

//!2 Check if type of '10' is equal to 10
console.log(typeof '10' === typeof 10);

//!3 Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8') === typeof 10);


//!4 Check if Boolean value is either true or false.
console.log(typeof true);
console.log(typeof false);

//!4a Write three JavaScript statement which provide truthy value.
let isTrue = true;
let isTrue2 = 1;
let isTrue3 = 'true';



//!4b Write three JavaScript statement which provide falsy value.
let isFalse = false;
let isFalse2 = 0;
let isFalse3 = 0>1;

//!5 Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
// 4 > 3
// 4 >= 3
// 4 < 3
// 4 <= 3
// 4 == 4
// 4 === 4
// 4 != 4
// 4 !== 4
// 4 != '4'
// 4 == '4'
// 4 === '4'
// Find the length of python and jargon and make a falsy comparison statement.
console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != '4');
console.log(4 == '4');
console.log(4 === '4');
console.log(("python").length === ("jargon").length);

//!6 Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
// 4 > 3 && 10 < 12
// 4 > 3 && 10 > 12
// 4 > 3 || 10 < 12
// 4 > 3 || 10 > 12
// -!(4 > 3)
// -!(4 < 3)
// -!(false)
// -!(4 > 3 && 10 < 12)
// -!(4 > 3 && 10 > 12)
// -!(4 === '4')
// There is no 'on' in both dragon and python
console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!(false));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));
console.log(!('dragon').includes('on') && !('python').includes('on'));

//!7 Use the Date object to do the following activities
// What is the year today?
console.log(new Date().getFullYear());
// What is the month today as a number?
console.log(new Date().getMonth());
// What is the date today?
console.log(new Date().getDate());
// What is the day today as a number?
console.log(new Date().getDay());
// What is the hours now?
console.log(new Date().getHours());
// What is the minutes now?
console.log(new Date().getMinutes());
// Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(new Date().getTime());

//? ---------------------- EXERCISE-2 ---------------------//

//!1 Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
let base1 = 20;
let height = 10;
// The area of the triangle is 100
// let base = prompt("Enter base");
// let height = prompt("Enter height");
let area = 0.5 * base1 * height;
console.log(area);



//!2 Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
// Enter side a: 5
// Enter side b: 4
// Enter side c: 3
// The perimeter of the triangle is 12
let sideA = 5;
let sideB = 4;
let sideC = 3;
let perimeter = sideA + sideB + sideC;
console.log(perimeter);

//!3 Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
let length = 20;
let width = 10;
console.log("area is", length * width);

//!4 Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
let radius = 10;
console.log("area is", 3.14 * radius * radius);
console.log("circumference is", 2 * 3.14 * radius);

//!5 Calculate the slope, x-intercept and y-intercept of y = 2x -2
let slope = 2;
let xIntercept = 2;
let yIntercept = -2;
console.log(slope, xIntercept, yIntercept);


//!6 Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
let slope2 = (10 - 2) / (6 - 2);
console.log(slope2);

//!7 Compare the slope of above two questions.


// Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

// Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

// Enter hours: 40
// Enter rate per hour: 28
// Your weekly earning is 1120
// If the length of your name is greater than 7 say, your name is long else say your name is short.

// Compare your first name length and your family name length and you should get this output.

// let firstName = 'Asabeneh'
// let lastName = 'Yetayeh'
// Your first name, Asabeneh is longer than your family name, Yetayeh
// Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

// let myAge = 250
// let yourAge = 25
// I am 225 years older than you.
// Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

// Enter birth year: 1995
// You are 25. You are old enough to drive

// Enter birth year: 2005
// You are 15. You will be allowed to drive after 3 years.
// Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

// Enter number of years you live: 100
// You lived 3153600000 seconds.
// Create a human readable time format using the Date time object

// YYYY-MM-DD HH:mm
// DD-MM-YYYY HH:mm
// DD/MM/YYYY HH:mm
// Exercises: Level 3