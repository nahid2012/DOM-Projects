let Hr = document.getElementsByClassName("H")[0]
let Mr = document.getElementsByClassName("M")[0]
let date = document.getElementsByClassName("date")[0]

function myTime() {
    let myDate = new Date()
    let hr, min = (myDate.getMinutes() < 10) ? '0' + myDate.getMinutes() : myDate.getMinutes(),
        sec = (myDate.getSeconds() < 10) ? '0' + myDate.getSeconds() : myDate.getSeconds(),
        M = (myDate.getHours() >= 12) ? "PM" : "AM"

    if (myDate.getHours() == 0) {
        hr = 12
    }
    else if (myDate.getHours() > 12) {
        hr = myDate.getHours() - 12
    }
    else {
        hr = myDate.getHours()
    }

    let crtime = hr + ':' + min +':'+ sec
    Hr.innerHTML = crtime
    Mr.innerHTML = M

    let myday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        mymonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        day = myDate.getDate()
    let curdate = myday[myDate.getDay()] + ',' + mymonth[myDate.getMonth()] + day
    date.innerHTML = curdate
}

myTime()

setInterval(() => {
    myTime()
}, 1000);