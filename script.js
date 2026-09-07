const weddingDate = new Date(2012, 4, 17);

function updateCountdown() {
    const today = new Date();

    const diff = today.getTime() - weddingDate.getTime();

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    document.getElementById("days").innerHTML =
        days.toLocaleString();
}

updateCountdown();

setInterval(updateCountdown, 86400000);