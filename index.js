setInterval(() => {
    
    var d=new Date();
    var htime=d.getHours();
    var mtime=d.getMinutes();
    var stime=d.getSeconds();
    var hrotation=(30*htime)+(mtime/2);
    var mrotation=6*mtime;
    var srotation=6*stime;

    var oldDate = new Date("Thu Jan 0 1970 21:30:00 GMT +0530(IST)");
    // var newDate = new Date();
    d.setHours(oldDate.getHours());
    d.setMinutes(oldDate.getMinutes());
    d.setSeconds(oldDate.getSeconds());
    
    hour.style.transform=`rotate(${hrotation}deg)`;
    minute.style.transform=`rotate(${mrotation}deg)`;
    second.style.transform=`rotate(${srotation}deg)`;
}, 1000);


