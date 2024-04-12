function rotateArray(array, rotations) {
    for (let i = 0; i < rotations % array.length; i++) {
        let lastElement = array.pop();
        array.unshift(lastElement);
    }

    console.log(array.join(" "));
}

rotateArray(['1', '2', '3', '4'], 2);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15);