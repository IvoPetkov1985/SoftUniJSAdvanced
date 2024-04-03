function daysInAMonth(month, year) {
    const daysCount = new Date(year, month, 0).getDate();
    console.log(daysCount);
}

daysInAMonth(1, 2012);
daysInAMonth(2, 2021);
daysInAMonth(2, 2024);