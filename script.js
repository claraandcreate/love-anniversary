const weddingDate = new Date("2012-05-17T00:00:00");

function updateCountdown(){

    const today = new Date();

    const diff = today - weddingDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    document.getElementById("days").textContent =
        days.toLocaleString();

}

updateCountdown();

setInterval(updateCountdown, 86400000);
