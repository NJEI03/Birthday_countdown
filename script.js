/* // Set the date for tomorrow at 00:00:00 */
const countdownDate = new Date("Sep 11, 2024 00:00:00").getTime();

/* // Update the countdown every second */
const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    /* //Calculate time left in days, hours, minutes, and seconds */
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    /* //Display the result */
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    /* // If the countdown is finished, display the birthday message */
    if (distance < 0) {git 
        clearInterval(x);
        document.getElementById("countdown").style.display = "none";
        document.getElementById("title").style.display = "none";
        document.getElementById("birthday-message").style.display = "block";
    }
}, 1000);