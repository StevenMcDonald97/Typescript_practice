// A Basic typescript file for learning typescript, based on:
//  https://www.valentinog.com/blog/typescript/

// a Link contains a string representing a url, an optional
//  description string, and an optional identifier string id
interface Link {
	description?: string;
	id?: number;
	url:string;
	[index:string]: any;
}

// TranslatedLink extends the Link interface and adds a language
//  specification string
interface TranslatedLink extends Link {
	language:String;
}

// filterByTerm(input:Link[], searchTerm:string) returns elements of an 
//  array of links matching a search 
// input: the array of Links to be matched
// searchTerm: the string being matched against
function filterByTerm(input:Link[], searchTerm:string, lookupKey:string="url") : Array<Link>{
	if(!searchTerm) throw Error ("searchTerm cannot be empty");
	if (!input.length) throw Error("inputArr cannot be empty");
	const regex = new RegExp(searchTerm, "i");
	return input.filter(function(arrayElement){
		return arrayElement[lookupKey].match(regex);
	});
}


const obj1: Link = { url: "string1" };
const obj2: Link = { url: "string2" };
const link1 : TranslatedLink = {
	description:
    "TypeScript tutorial for beginners is a tutorial for all the JavaScript developers ...",
  id: 1,
  url: "www.valentinog.com/typescript/",
  language: "en"
};

const arrOfLinks: Array<Link> = [obj1, obj2];
const term:string = "javva"


filterByTerm(arrOfLinks, term);


