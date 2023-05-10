function solution(A) {
    A = A.sort();
    for (let i = 0; i < A.length - 1; i += 2) {
        if (A[i] !== A[i + 1]) {
            return A[i];
        }
    }
    return A[A.length - 1];
}

console.log(solution([5, 3, 5, 3, 5, 7, 5]))