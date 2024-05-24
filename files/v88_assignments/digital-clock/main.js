document.addEventListener("DOMContentLoaded", function(){
    var time, hour, min, sec, timezone, meridiem, selected, remove_highlight, total_min, rgb, var_rgb;
    var iana_tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    var locale = 'en-GB';
    var format = 24;
    setInterval(()=>{
        time = new Date();
        hour = time.toLocaleTimeString(locale, {timeZone: iana_tz, hour: "2-digit"});
        min = time.toLocaleTimeString(locale, {timeZone: iana_tz, minute: "2-digit"});
        sec = time.toLocaleTimeString(locale, {timeZone: iana_tz, second: "2-digit"});


        meridiem = (hour >= 12) ? 'pm' : 'am';
        total_min = (hour * 60) + parseInt(min);
        if(total_min > 720){
            var_rgb = Math.floor(255 - ( 255 * (total_min - 720) / 720));
        }else{
            var_rgb = Math.floor((255 * total_min) / 720);
        }

        hour = ((hour%format).toString().length == 1) ? "0"+(hour%format) : (hour%format);
        min = (min.length == 1) ? "0"+min : min;
        sec = (sec.length == 1) ? "0"+sec : sec;
        remove_highlight = (meridiem == 'am') ? 'pm' : 'am' ;
        document.getElementById('hours').innerHTML = hour;
        document.getElementById('minutes').innerHTML = min;
        document.getElementById('seconds').innerHTML = sec;
        
        document.getElementById(remove_highlight).classList.remove('highlight');
        document.getElementById(meridiem).classList.add('highlight');


        document.body.style.backgroundColor = `rgb(${var_rgb},${var_rgb},63)`;
    }, 1000);

    document.getElementById('timezone').innerHTML = iana_tz;

    var one_two = document.getElementById('one-two');
    one_two.addEventListener('click', function(){
        format = 12;
        this.classList.add('highlight');
        document.getElementById('two-four').classList.remove('highlight');
    });
    var two_four = document.getElementById('two-four');
    two_four.addEventListener('click', function(){
        format = 24;
        this.classList.add('highlight');
        document.getElementById('one-two').classList.remove('highlight');
    });
    var green_btn = document.getElementById('green-btn');
    green_btn.addEventListener('click', function(){
        this.classList.add('selected');
        document.getElementById('white-btn').classList.remove('selected');
        document.getElementById('red-btn').classList.remove('selected');
        document.getElementById('digital-clock').style.color = "green";
    });
    var white_btn = document.getElementById('white-btn');
    white_btn.addEventListener('click', function(){
        this.classList.add('selected');
        document.getElementById('green-btn').classList.remove('selected');
        document.getElementById('red-btn').classList.remove('selected');
        document.getElementById('digital-clock').style.color = "white";
    });
    var red_btn = document.getElementById('red-btn');
    red_btn.addEventListener('click', function(){
        this.classList.add('selected');
        document.getElementById('white-btn').classList.remove('selected');
        document.getElementById('green-btn').classList.remove('selected');
        document.getElementById('digital-clock').style.color = "red";
    });

    // Native Ajax of Javascript
    var getTimeZones = new XMLHttpRequest();
    getTimeZones.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200){
            var tz_obj = JSON.parse(this.responseText);
            var html = '';
            for(let i=0; i<tz_obj.length; i++){
                (iana_tz == tz_obj[i]) ? selected='selected' : selected = '';
                html += `<option ${selected} value="${tz_obj[i]}">${tz_obj[i]}</option>`;
            }
            document.getElementById("select-timezone").innerHTML = html;
        }
    };
    getTimeZones.open("GET", "https://worldtimeapi.org/api/timezone", true);
    getTimeZones.send();

    //
    const selectTimezone = document.querySelector('#select-timezone');
    selectTimezone.addEventListener('change', function(){
        timezone = this.value;
        iana_tz = timezone;
        document.getElementById("timezone").innerHTML = timezone;
    });
});