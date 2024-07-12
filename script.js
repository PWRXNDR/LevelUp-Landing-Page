function scrollToOrder() {
    document.getElementById('order').scrollIntoView({ behavior: 'smooth' });
}

$(document).ready(function () {
    $("#phone").on("input", function () {
        this.value = this.value.replace(/\D/g, '');
    });

    let time = 1800;
    const timerElement = $("#timer");

    setInterval(() => {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        timerElement.text(`${minutes}:${seconds}`);
        time--;
    }, 1000);
});