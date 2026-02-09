function binarySearch (array, target) {
    let left = 0;
    let right = array.length;

    while(left <= right) {
        const middlePosition = Math.floor((left + right) / 2);
        const middleElement = array[middlePosition]

        if(target === middleElement) return middlePosition;

        if(middleElement > target){
            right = middlePosition - 1;
        }

        if(middleElement < target) {
            left = middlePosition + 1;
        }

        if(left > right) return -1
    }
}

let array = [1,2,3,4,5,6];
const result = binarySearch(array, 6);

console.log(result);