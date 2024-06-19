let evens = 0;
let odds = 0;

function getRandomNumber(min, max, generations) { //please specify desired maximum + 1, so if you need maximum value to be 1000, specify 1001
    for (let i=1; i<=generations; i++) {
        let generatedNumber = Math.floor(Math.random() * (max - min) + min);
        //UNCOMMENT IF WE WANT TO SEE GENERATED NUMBERS
        // console.log(generatedNumber)
        if (generatedNumber % 2 === 0) {
          evens++
        } else {
          odds++
        }
    }
    let evensPercentage = parseFloat(((evens/generations)*100).toFixed(2));
    let oddsPercentage = parseFloat((100 - evensPercentage).toFixed(2))
    let closeDistribution;
    if (evensPercentage >= 45 && evensPercentage <= 55) {
      closeDistribution = "The distribution of even and odd numbers is quite close";
    } 
    else if (evensPercentage > 55) {
      closeDistribution = "The count of evens is considerably higher than the count of odds"
    }
    else {
      closeDistribution = "The count of odds is considerably higher than the count of evens"
    }
    return {
      evensPercentage: evensPercentage,
      oddsPercentage: oddsPercentage,
      closeDistribution: closeDistribution
    };
  }

let generateAndCount = getRandomNumber(1, 1000, 4);
console.log (`The number of evens is ${evens}, the number of odds is ${odds}`)
console.log (`The evens percentage is ${generateAndCount.evensPercentage}, and the odds percentage is ${generateAndCount.oddsPercentage}`)
console.log (`${generateAndCount.closeDistribution}`)