var maxProfit = function(prices) {
    let profit = 0;
    let holding = false;
    let holdValue = 0;
    for (let i = 0; i < prices.length; i++) {
        const current = prices[i];
        const next = prices[i + 1];
        if (current < next && !holding) {
            holdValue = current;
            holding = true;
        } else if (current > next && holding) {
            profit += current - holdValue;
            holding = false;

        }
    }
    if (holding) {
        profit += prices[prices.length - 1] - holdValue;
    }
    return profit;
};

maxProfit([7,6,4,3,1]);