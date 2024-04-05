function roadRadar(speed, areaType) {
    let speedLimit = 0;

    switch (areaType) {
        case "motorway": speedLimit = 130; break;
        case "interstate": speedLimit = 90; break;
        case "city": speedLimit = 50; break;
        case "residential": speedLimit = 20; break;
    }

    let diff = speed - speedLimit;
    let status = "";

    if (diff > 0 && diff <= 20) {
        status = "speeding";
    } else if (diff > 20 && diff <= 40) {
        status = "excessive speeding";
    } else if (diff > 40) {
        status = "reckless driving";
    }

    if (diff <= 0) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    } else {
        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
    }
}

roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');