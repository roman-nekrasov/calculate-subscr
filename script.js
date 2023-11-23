const dateInput = document.getElementById("date");
const packagesSelect = document.getElementById("monthSelect");
const resultWrapper = document.querySelector(".result-wrapper");
const result = document.querySelector(".result");

const dayMsAmount = 24 * 60 * 60 * 1000;
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
let startTimestamp = null;
let packagesAmount = 1;

const getResultDayTimestamp = (tsStart, packages) =>
    new Date(tsStart).getTime() + (28 * packages - 1) * dayMsAmount;

const getDateStrByTimestamp = (ts) => {
    const date = new Date(ts);
    return `${date.getDate()} ${
        months[date.getMonth()].name
    } ${date.getFullYear()} року`;
};

const renderResult = () => {
    if (startTimestamp) {
        const resultDayTimestamp = getResultDayTimestamp(
            startTimestamp,
            packagesAmount
        );
        result.textContent = getDateStrByTimestamp(resultDayTimestamp);
        if ((resultWrapper.style.display = "none")) {
            resultWrapper.style.display = "block";
        }
    } else {
        resultWrapper.style.display = "none";
    }
};

dateInput.onchange = (e) => {
    startTimestamp = new Date(e.target.value).getTime();
    renderResult();
};

packagesSelect.onchange = (e) => {
    packagesAmount = +e.target.value;
    renderResult();
};
