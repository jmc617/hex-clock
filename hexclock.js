
var clockChange = window.setInterval(clock, 1000)

function clock() {
  var clock = document.getElementById('clock');
  var time = new Date();
  var getSeconds = time.getSeconds();
  var getMinutes = time.getMinutes();
  var getHour = time.getHours();
  var hour = hour()
  var minute = minute()
  var seconds = seconds()

  function hour() {
    if (getHour < 10) {
    return  "0"+ getHour;
    } else {
    return  getHour;
    }
  }
  // console.log(hour);

  function minute() {
     if (getMinutes < 10) {
    return  "0"+ getMinutes;
    } else {
    return  getMinutes;
    }
  }
  function seconds() {
    if (getSeconds < 10) {
       return "0"+ getSeconds;
     } else {
      return  getSeconds;
      }
    }

    function hexTime () {
      clock.innerHTML = hour +""+ minute +"" + seconds;
      document.body.style.backgroundColor = "#"+hour+""+minute+""+seconds;
    }
    hexTime()
}
