let total = 1;
function pow (number, power){
    if (power > 1) {
        for (i=1; i<=power; i++){
            total = total * number;
        }
        return total;
    } else if (power === 0) {
        return 1
    } else if (power === 1) {
        return number
    } else {
        return "power should be 0 or positive integer"
    }
}

let result = pow (-3, 3);
console.log(result)