function previousDay(year, month, day) {
    let myDate = new Date(year, month - 1, day);
    myDate.setDate(myDate.getDate() - 1);
    let myYear = myDate.getFullYear();
    let myMonth = myDate.getMonth() + 1;
    let myDay = myDate.getDate();

    console.log(`${myYear}-${myMonth}-${myDay}`);
}

previousDay(2016, 3, 30);
previousDay(2016, 9, 30);
previousDay(2015, 5, 10);