function displayTime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var am_pm = "AM";

    
    if(h == 0){
        h = 12;
    }
    if(h > 12){
        h -= 12;
        am_pm ="PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + "" + " " + am_pm;

    document.getElementById("time").innerHTML = time;
    document.getElementById("time").innerContent = time;

    setTimeout(displayTime, 1000);
}
displayTime();