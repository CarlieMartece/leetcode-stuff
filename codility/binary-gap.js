function solution(N) {
    let binArr = N.toString(2).split('');
    let gaps = [0];
    let foundOne = 0;
    for (let i = 0; i < binArr.length; i++) {     
        if (binArr[i] === "1" && i > foundOne) {
            gaps.push(i - foundOne - 1);
            foundOne = i;
        }
    }
    return (Math.max(...gaps));
}

solution(32);