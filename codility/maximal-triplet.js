function solution(A) {
    // Implement your solution here
    A.sort(function(a,b){return a - b});
    const mixOne = A[0] * A[1] * A[2];
    const mixTwo = A[A.length - 1] * A[A.length - 2] * A[A.length - 3];
    const mixThree = A[0] * A[A.length - 1] * A[A.length - 2];
    const mixFour = A[0] * A[1] * A[A.length - 1];
    return Math.max(mixOne, mixTwo, mixThree, mixFour)
}

console.log(solution([-5, -6, -4, -7, -10]))