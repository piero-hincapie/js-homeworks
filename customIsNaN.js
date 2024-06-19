function customIsNaN(value) {
    if (typeof value === 'number' && value !== value) { //check if the value is number and not equal to itself = it is NaN
        return "Your value is NaN";
    } else if (typeof value === 'number') { //if the first condition is not met but the value is number => we have number here
        return "Your value is a number";
    } else {
        return "Your value is a different type, not a number but not NaN"; //otherwise it is nor NaN, not a normal number
    }
}

console.log(customIsNaN(NaN));            
console.log(customIsNaN('7929'));
console.log(customIsNaN(7929));    