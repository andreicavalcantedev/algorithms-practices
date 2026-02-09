function compareArrayTriplets(a, b) {
    let first = 0;
    let second = 0;

    for(let i = 0; i < a.length; i++){
        const firstArray = a[i]
        const secondArray = b[i]

        if(firstArray > secondArray){
            first += 1
        }
        
        if(firstArray < secondArray){
            second += 1
        }
    }
    
    return [first, second]
}

const first = [5, 6, 7];
const second = [3, 6, 10];

const result = compareArrayTriplets(first, second);

console.log(result);
