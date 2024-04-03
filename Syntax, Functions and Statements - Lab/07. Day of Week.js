function dayOfWeek(day) {
    const allDays = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ];

    let result = allDays.indexOf(day);

    if (result > -1) {
        console.log(result + 1);
    } else {
        console.log("error");
    }
}

dayOfWeek("Monday");
dayOfWeek('Friday');
dayOfWeek("Invalid");