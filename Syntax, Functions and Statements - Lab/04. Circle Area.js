function circleArea(input) {
    let type = typeof(input);

    if (type !== "number") {
        console.log(`We can not calculate the circle area, because we receive a ${type}.`);
    } else {
        let radius = input;
        let area = Math.PI * Math.pow(radius, 2);
        console.log(area.toFixed(2));
    }
}

circleArea(5);
circleArea("name");