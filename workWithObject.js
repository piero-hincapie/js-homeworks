let player = {
    name: "Andriy Shevchenko",
    country: "Ukraine",
    club: "Milan",
    matches: {
        nationalTeam: "112",
        clubTeam: "635"
    }
}

player.getInfo = function() {
    for (let key in this) {
        if (this.hasOwnProperty(key)) {
            if (typeof this[key] === 'object' && this[key] !== null) {
                console.log(key + ":");
                for (let subKey in this[key]) {
                    if (this[key].hasOwnProperty(subKey)) {
                        console.log("  " + subKey + ": " + this[key][subKey]);
                    }
                }
            } else if (typeof this[key] !== 'function') {
                console.log(key + ": " + this[key]);
            }
        }
    }
};

console.log("\n Original information")
player.getInfo();

// Adding new property
player.goals = {
    nationalTeam: 48,
    clubTeam: 350
};

console.log("\n After adding new properties:");
player.getInfo();

delete player.goals.clubTeam;
console.log("\n After deleting some property:");
player.getInfo()