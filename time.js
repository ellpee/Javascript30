function displayClock()
        {
    timer = setInterval(updateClock, 1000)
        }
    function updateClock() 
        {
        var dateTime = new Date ();
            var output = "";
            var ampm = "AM"
        
            var hours = dateTime.getHours();
            if (hours < 10)
                {
                    hours = "0" + hours;
                }   if (hours > 12)
                {
                    hours -= 12;
                    ampm = "PM"
                }
            
            var minutes = dateTime.getMinutes();
            if (minutes < 10)
                {
                    minutes = "0" + minutes;
                }
            var seconds = dateTime.getSeconds();
            if (seconds < 10)
                {
                    seconds = "0" + seconds;
                }
            
    document.getElementById("clock").innerHTML = hours + ":" + minutes + ":" + seconds + " " + ampm;
        }