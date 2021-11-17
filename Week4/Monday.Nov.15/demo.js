/*
let arr = [1, 5, 2, 6, 8, 23, 54, 12, 15];

function fizzBuzz(nums){
    for (let num of nums){
        //for (var i = 0; i < nums.length; i++){
        // nums[i]%3 ===0   
        //}
        if(num%3 === 0 && num%5 ===0){
            console.log("FizzBuzz");
        } 
        else {

        }
    }
}
*/

for(var i=0; i<10; i++) {
    console.log(i);
    i = i + 3; 
}
    
console.log("outside of the loop " + i);

/*

(i = 0)     
log: 0
i=0+3=3

(i++): i = 4

i:4
log: 4
i= 4 + 3 = 7

i++:8

log: 8
i = 8 + 3

*/