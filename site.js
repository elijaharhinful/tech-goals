window.onload = function() {
    // Get the current date and time in UTC
    const now = new Date();
    const year = now.getUTCFullYear();
    const month = String(now.getUTCMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(now.getUTCDate()).padStart(2, '0');
    const hours = String(now.getUTCHours()).padStart(2, '0');
    const minutes = String(now.getUTCMinutes()).padStart(2, '0');
    const seconds = String(now.getUTCSeconds()).padStart(2, '0');
    const utcTime = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`;

    // Display the formatted UTC time
    document.getElementById('currentTime').innerText = utcTime;

    // Display the current day of the week
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDay = days[now.getUTCDay()];
    document.getElementById('currentDay').innerText = currentDay;
}
