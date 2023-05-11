const findLowest = function(A) {
    const newSet = new Set(A);
    let i = 1;
    while (true) {
        if (!newSet.has(i)) {
            return i;
        }
        i++;
    }
}

const numbers = [];
for (let i = 0; i < 1000; i++){
    numbers[i] = i;
}
numbers.splice(1000, 1);

console.log(findLowest([1, 2, 3, 4, 6, 7, 8000]))
console.log(findLowest([-1, -2, -3, -4, -6, -7, -8]))
console.log(findLowest(numbers))
