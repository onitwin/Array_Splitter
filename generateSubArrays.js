/* function should :
Take an array with a length equal to or greater than 0
Return sub arrays of equal size to each other
generated from the original array divided by N, where N is a positive integer
Where there is an unequal number, the final sub-array should have the remaining contents
ASSUMPTION- valid data is submitted so no checks included*/


function arraySplitter(array,n){
    //hold results
    const resultsArray=[];
    //check length of each sub array
    const lengthPerArray=Math.round(array.length/n);
    //loop over array and push a spliced collection while resultsArray length is less than target
    while(array.length>=lengthPerArray && resultsArray.length < n){
        resultsArray.push(array.splice(0,lengthPerArray));
    };
    //if there are left over values, they are handled below- one method if 
    //resultsArray length has reached 'N', the oether if not
    if(array.length > 0  && resultsArray.length < n){
        resultsArray.push([...array]);
    }else{
        resultsArray[resultsArray.length-1]=[...resultsArray[resultsArray.length-1],...array];
    }
    return resultsArray;
}

//Please replace array and INT with desired array and INT
console.log(arraySplitter([1,2,3,4,5],3));
