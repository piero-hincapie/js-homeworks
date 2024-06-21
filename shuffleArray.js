let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function shuffleArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        let randomIndex = Math.floor(Math.random() * (arr.length - i)) + i;
        let temp = arr[i];
        arr[i] = arr[randomIndex];
        arr[randomIndex] = temp;
    }
}

console.log("Before the shuffle:", arr);

shuffleArray(arr);
console.log("After the shuffle:", arr);
