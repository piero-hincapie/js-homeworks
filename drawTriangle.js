function drawRectTriangle(linesNumber, symbol) {
    for (let i=1; i<=linesNumber; i++) {
        for (let j=1; j<=i; j++) {
            process.stdout.write(symbol)
        }
        console.log()      
    }
}

// for row in picture:
//     for pixel in row:
//         if (pixel):
//             print("*", end="")
//         else:
//             print(" ", end="")
//     print("")

let a = drawRectTriangle(10, "*");