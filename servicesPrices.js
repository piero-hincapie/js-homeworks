let services = {
    haircut: "300 uah",
    shaving: "50 uah",
    headWashing: "100 uah",
    other: {
        nailsServices: "520uah",
        lashes: "243.2 uah"
    }
}

function priceToInt(obj) {
    let integerPrices = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key) && typeof obj[key] !== "function") {
            if ((typeof obj[key] === "string") || (typeof obj[key] === "number")) {
                integerPrices[key] = parseInt(obj[key]);
            }
            else if ((typeof obj[key] === "object") && (obj[key] !== null)) {
                integerPrices[key] = priceToInt (obj[key])
            }
        }
    }
    return integerPrices;
};

function extractAllPrices(obj) {
    let prices = []
    function extract(obj) {
        for (let key in obj) {
            if (typeof obj[key] === "number") {
                prices.push(obj[key]);
            }
            else if (typeof obj[key] === "object" && obj[key] !== null) {
                extract(obj[key])
            }
        }
    }
    extract(obj);
    return prices;
}

services.minPrice = function() {
    let prices = extractAllPrices(priceToInt(this));
    return Math.min(...prices)
};

services.maxPrice = function() {
    let prices = extractAllPrices(priceToInt(this));
    return Math.max(...prices)
};

services.totalPrice = function() {
    let prices = extractAllPrices(priceToInt(this));
    return prices.reduce((total, price) => total + price, 0)
};



console.log("The cheapest service costs:", services.minPrice())
console.log("The most expensive service costs:", services.maxPrice())
console.log("Full package of services costs:", services.totalPrice())


console.log("Here is the full list of services", priceToInt(services))

