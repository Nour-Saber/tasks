const numbers = [5, 2, 9, 1, 7, 3];
let max=0;
for(let i = 0; i < numbers.length; i++)
{
  max=Math.max(max, numbers[i]);
}
let min=numbers[0];
for(let i = 0; i < numbers.length; i++)
    { 
         min=Math.min(min, numbers[i]);
    }

console.log("Largest number" + " : " + max);
console.log("Smallest number" + " : " + min);