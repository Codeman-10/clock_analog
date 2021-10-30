const sec_hand = document.querySelector(".sec_hand");
const hour_hand = document.querySelector(".hour_hand");
const min_hand = document.querySelector(".min_hand");

function setTime() {

    const current_time = new Date();
    const second = current_time.getSeconds() / 60;
    sec_hand.style.setProperty('--rotation', second * 360)

    const minute = (current_time.getMinutes() + second) / 60;
    console.log(minute*360)
    min_hand.style.setProperty('--rotation', minute * 360)


    const hour = (current_time.getHours() + minute) / 12;
    hour_hand.style.setProperty('--rotation', hour * 360)

}
setInterval(() => {
    setTime();
}, 1000);
