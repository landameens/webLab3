function setTimeNow() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    h = (h < 10) ? '0' + h : h;
    m = (m < 10) ? '0' + m : m;
    s = (s < 10) ? '0' + s : s;
    document.getElementById('time').innerHTML = h + ':' + m + ':' + s;

}

setTimeNow();
setInterval(setTimeNow, 7000);
