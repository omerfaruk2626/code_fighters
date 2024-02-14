//* ------------------------ DAY 5 ------------------------



//? ---------------------- EXERCISE-1 ---------------------

//!1 Declare an empty array;
const itCompanim = [];


//!2 Declare an array with more than 5 number of elements
const numbers = [1, 2, 3, 4, 5, 6];

//!3 Find the length of your array
console.log(numbers.length);

//!4 Get the first item, the middle item and the last item of the array
const array = [1, 2, 3, 4, 5, 6];

const firstItem = array[0];
const middleItem = array[Math.floor(array.length / 2)];
const lastItem = array[array.length - 1];

//!5 Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [1, "two", true, null, undefined, { name: "John" }];
const arrayLength = mixedDataTypes.length;
console.log(arrayLength);

//!6 Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

//!7 Print the array using console.log()
console.log(itCompanies);

//!8 Print the number of companies in the array
console.log(itCompanies.length);

//!9 Print the first company, middle and last company
console.log(itCompanies[0]);
console.log(itCompanies[Math.floor(itCompanies.length / 2)]);
console.log(itCompanies[itCompanies.length - 1]);

//!10 Print out each company
for (let i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i]);
}
console.log('---------------');
itCompanies.forEach((x) => console.log(x));

//!11 Change each company name to uppercase one by one and print them out
itCompanies.forEach((x) => console.log(x.toUpperCase()));

//!12 Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(`${itCompanies[0]}, ${itCompanies[1]}, ${itCompanies[2]}, ${itCompanies[3]}, ${itCompanies[4]}, ${itCompanies[5]}, ${itCompanies[6]} are big IT companies.`);
console.log(itCompanies.join());

//!13 Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
function checkCompanyExists(companyName) {
    if (itCompanies.includes(companyName)) {
        return companyName;
    } else {
        return "Company is not found";
    }
}

console.log(checkCompanyExists("Microsoft"));
console.log(checkCompanyExists("Amazon")); 
console.log(checkCompanyExists("Netflix")); 
console.log(itCompanies.find(x => x === "Netflix"));

//!14 Filter out companies which have more than one 'o' without the filter method
const filteredCompanies = itCompanies.filter(x => x.includes("o") && x.length > 1);
console.log(filteredCompanies);

//!15 Sort the array using sort() method
itCompanies.sort();
console.log(itCompanies);

//!16 Reverse the array using reverse() method
itCompanies.reverse();
console.log(itCompanies);

//!17 Slice out the first 3 companies from the array
const slicedCompanies = itCompanies.slice(0, 3);
console.log(slicedCompanies);

//!18 Slice out the last 3 companies from the array
const slicedCompanies2 = itCompanies.slice(-3);
console.log(slicedCompanies2);

//!19 Slice out the middle IT company or companies from the array
const slicedCompanies3 = itCompanies.slice(2, 4);
console.log(slicedCompanies3);

//!20 Remove the first IT company from the array
itCompanies.shift();
console.log(itCompanies);

//!21 Remove the middle IT company or companies from the array
itCompanies.splice(2, 2);
console.log(itCompanies);

//!22 Remove the last IT company from the array
itCompanies.pop();
console.log(itCompanies);

//!23 Remove all IT companies
itCompanies.splice(0, itCompanies.length);
console.log(itCompanies);