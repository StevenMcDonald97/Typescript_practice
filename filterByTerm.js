"use strict";
// A Basic typescript file for learning typescript, based on:
//  https://www.valentinog.com/blog/typescript/
// filterByTerm(input:Link[], searchTerm:string) returns elements of an 
//  array of links matching a search 
// input: the array of Links to be matched
// searchTerm: the string being matched against
function filterByTerm(input, searchTerm, lookupKey) {
    if (lookupKey === void 0) { lookupKey = "url"; }
    if (!searchTerm)
        throw Error("searchTerm cannot be empty");
    if (!input.length)
        throw Error("inputArr cannot be empty");
    var regex = new RegExp(searchTerm, "i");
    return input.filter(function (arrayElement) {
        return arrayElement[lookupKey].match(regex);
    });
}
var obj1 = { url: "string1" };
var obj2 = { url: "string2" };
var link1 = {
    description: "TypeScript tutorial for beginners is a tutorial for all the JavaScript developers ...",
    id: 1,
    url: "www.valentinog.com/typescript/",
    language: "en"
};
var arrOfLinks = [obj1, obj2];
var term = "javva";
filterByTerm(arrOfLinks, term);
