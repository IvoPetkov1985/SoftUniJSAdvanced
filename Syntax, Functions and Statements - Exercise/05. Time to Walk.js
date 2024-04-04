function timeToWalk(steps, stepLength, speed) {
    let totalDistanceInM = steps * stepLength;
    let speedInMetersPerSecond = speed / 3.6;
    let secondsNeeded = totalDistanceInM / speedInMetersPerSecond;
    let rests = Math.floor(totalDistanceInM / 500);
    secondsNeeded += rests * 60;

    let seconds = Math.round(secondsNeeded % 60);
    let minutes = Math.floor(secondsNeeded / 60);
    let hours = Math.floor(minutes / 60);
    minutes -= hours * 60;

    let secondsToPrint = seconds < 10 ? `0${seconds}` : `${seconds}`;
    let minutesToPrint = minutes < 10 ? `0${minutes}` : `${minutes}`;
    let hoursToPrint = hours < 10 ? `0${hours}` : `${hours}`;

    console.log(`${hoursToPrint}:${minutesToPrint}:${secondsToPrint}`);
}

timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);