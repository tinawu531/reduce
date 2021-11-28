/*
Write a function called extractValue which accepts an array of objects and a key and returns a new array with the value of each object at the key.

Examples:
    const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
    extractValue(arr,'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/
// put arr in and put name in
function extractValue(arr, key){
    //accept the first element in the array: {name: 'Elie'}, and the next value {name: 'Tim'},
    return arr.reduce(function(acc,next){
        //Putting the value 'Tim' inside of the {name: 'Elie'} at the end, with the key which is name:
        acc.push(next[key]);
        return acc;
    },[]);
}

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/
//MY ATTEMPT
// function vowelCount(str) {
//     let newObject = {};
//     let toLowerCase = str.toLowerCase();
//     toLowerCase.reduce(function(accum,nextVal){
//         vowels = 'aeiou';
//         return accum === 
     
//     })
// }



//THEIR CODE:
function vowelCount(str){
    //making the vowels
    const vowels = "aeiou";
    //turn the string into an array, use reduce to loop thru the new array
    return str.split('').reduce(function(acc,next){
        //make the next letter in the array to lower case
        let lowerCased = next.toLowerCase()
        //when the next letter matches one of the vowels matches one of the letters in vowels
        if(vowels.indexOf(lowerCased) !== -1){
            //if the current lower cased letter exist, count up
            if(acc[lowerCased]){
                acc[lowerCased] = acc[lowerCased] + 1;
                //otherwise, the current lower case letter will be one
            } else {
                //e: 1
                acc[lowerCased] = 1;
            }
        }
        //return the final accumulated lower cased letter
        return acc;
    }, {});
}

/*
Write a function called addKeyAndValue which accepts an array of objects and returns the array of objects passed to it with each object now including the key and value passed to the function.

Examples:
    const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
    
    addKeyAndValue(arr, 'title', 'Instructor') // 
      [
        {title: 'Instructor', name: 'Elie'}, => each object
        {title: 'Instructor', name: 'Tim'}, 
        {title: 'Instructor', name: 'Matt'}, 
        {title: 'Instructor', name: 'Colt'}
       ]
*/

function addKeyAndValue(arr, key, value) {
    return arr.reduce(function(accum,nextVal){
    //each time, put the key and value inside of each object
        return accum + nextVal(key.value);
    },[])
}
//their answer
function addKeyAndValue(arr, key, value){
    return arr.reduce(function(acc,next,idx){
        acc[idx][key] = value;
        return acc;
    },arr);
}
//first time around:
function addKeyAndValue(theNameArray, title, instructor){
    return theNameArray.reduce(function(theNameArray,nameTim,zero){
        theNameArray[zero][title] = instructor;
        return acc;
    },theNameArray);
}

/*
Write a function called partition which accepts an array and a callback,
 and returns an array with two arrays inside of it. 
 The partition function should run the callback function on each value in the array
  and if the result of the callback function at that specific value is true, 
  the value should be placed in the first subarray. 
  If the result of the callback function at that specific value is false,
   the value should be placed in the second subarray. 

Examples:
    
    function isEven(val){
        return val % 2 === 0;
    }
    
    const arr = [1,2,3,4,5,6,7,8];
    
    partition(arr, isEven) // [[2,4,6,8], [1,3,5,7]];
    
    function isLongerThanThreeCharacters(val){
        return val.length > 3;
    }
    
    const names = ['Elie', 'Colt', 'Tim', 'Matt'];
    
    partition(names, isLongerThanThreeCharacters) // [['Elie', 'Colt', 'Matt'], ['Tim']]
*/


//start with an empty array with two empty sub arrays. They would be index 0, and index 1 in side of the big array.
function partition(arr, callback) {
    return arr.reduce(function(accum,next){
        //put the next value into the callback function if it is true
        if (callback(next)){
            //if true, put inside of the subarray 0
            accum[0].push(next);
            //if false, put inside of the subarray 1
        }else {
            accum[1].push(next);
        }
        //return the current accumulator
        return accum;
    },[[],[]])
    
}
