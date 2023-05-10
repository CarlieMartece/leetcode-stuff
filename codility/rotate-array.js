function solution(A, K) {
    if (A.length === 0) {
        return [];
    }
    if (K > A.length) {
        K = K % A.length;
    }
    const spliced = A.splice(-K, K);
    A.unshift(spliced);
    return A.flat();
}

solution([-1, -2, -3, -4, -5, -6], 8)