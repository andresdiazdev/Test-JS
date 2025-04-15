/* TEST JS */
/*
    1. Problem 1 - (A)
    Create an Object with a "hello" method that writes "Hello <name> in the console"
*/
const objectHello = {
    hello(name){
        console.log(`Hello ${name}`);
    }
};

objectHello.hello("Andres Eduardo");
/*
    2. Problem 1 - (B)
    How would you make name inmutable?
    (Can write or just describe)
*/

/*
Strings in javascript are inmutable by default.

I've researched and there's a way to prevent changes and extensions in objects, with the static method
Object.freeze()

In case that 'name' will be an object coud be like this
*/

const objectHelloFreeze = {
    hello(name){
        Object.freeze(name);
        // ..
        // ..
        // ..
        //console.log(`Hello ${name}`);
    }
};


/*
    3. Problem 2
    Write a funtion that logs the 5 cities that occur the most in the array below in
    order from the most number of occurrences to least.
*/

const citiesList = [
    "nasville",
    "nasville",
    "los angeles",
    "nasville",
    "Madrid",
    "memphis",
    "barcelona",
    "los angeles",
    "sevilla",
    "Madrid",
    "canary islands",
    "barcelona",
    "Madrid",
    "Madrid",
    "nasville",
    "barcelona",
    "london",
    "berlin",
    "Madrid",
    "nasville",
    "london",
    "Madrid",
    "Madrid",
]

function mostPopularCity(arr){
    var result = {};

    arr.forEach(element => {
        result[element] = (result[element] || 0) + 1;
    }); 
    
    const finalList = Object.entries(result)
    .sort((a, b) => b[1] - a[1]) 
    .slice(0, 3);

  console.log(finalList);
}

mostPopularCity(citiesList);