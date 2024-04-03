function squareOfStars(count = 5) {
    for (let i = 1; i <= count; i++) {
        let line = "* ".repeat(count);
        console.log(line);
    }
}

squareOfStars(1);
squareOfStars(2);
squareOfStars(5);
squareOfStars(7);
squareOfStars();