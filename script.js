const input = document.getElementById("date");
const _6month = document.getElementById("_6month");
const _12month = document.getElementById("_12month");
const infoElem = document.getElementById("info");

const months = [
    { id: 0, days: 31, name: "січня" },
    { id: 1, days: 28, name: "лютого" },
    { id: 2, days: 31, name: "березня" },
    { id: 3, days: 30, name: "квітня" },
    { id: 4, days: 31, name: "травня" },
    { id: 5, days: 30, name: "червня" },
    { id: 6, days: 31, name: "липня" },
    { id: 7, days: 31, name: "серпня" },
    { id: 8, days: 30, name: "вересня" },
    { id: 9, days: 31, name: "жовтня" },
    { id: 10, days: 30, name: "листопада" },
    { id: 11, days: 31, name: "грудня" },
];

input.onchange = (e) => {
    const dayMsAmount = 24 * 60 * 60 * 1000;
    const _6monthTS =
        new Date(e.target.value).getTime() + (28 * 6 - 1) * dayMsAmount;
    const _12monthTS =
        new Date(e.target.value).getTime() + (28 * 12 - 1) * dayMsAmount;
    const date6 = new Date(_6monthTS);
    const date12 = new Date(_12monthTS);

    const info = [];
    [date6, date12].forEach((date) => {
        info.push(
            `${date.getDate()} ${
                months[date.getMonth()].name
            } ${date.getFullYear()} року`
        );
    });
    infoElem.textContent = "Останній день підписки";
    _6month.innerHTML = `на 6 пакетів: <span class='bold'>${info[0]}</span>`;
    _12month.innerHTML = `на 12 пакетів: <span class='bold'>${info[1]}</span>`;
};
