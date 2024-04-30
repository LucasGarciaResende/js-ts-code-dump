function bubbleSort (ar: number[]){
    let swaps: boolean;
    do{
        swaps = false
        for (let j of ar){
            if (ar[j] > ar[j + 1]){
                [ar[j], ar[j + 1]] = [ar[j + 1], ar[j]];
                swaps = true;
            }
        }
    } while (swaps == true);
    return ar;
}

/*
let array: number[] = [2, 1, 5, 3, 4];
console.log(`Original Arrat: ${array}`);
console.log(`Sorted Array: ${bubbleSort(array)}`); 
*/

function factorial(num: number): number {
    if (num <= 1){
        return 1;
    }
    return num * factorial(num - 1);
}

/*
let n: number = 5;
console.log(`Factorial of ${n} is ${factorial(n)}`);
*/