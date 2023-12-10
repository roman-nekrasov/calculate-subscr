const dateInput = document.getElementById("date");
const packagesSelect = document.getElementById("monthSelect");
const resultWrapper = document.querySelector(".result-wrapper");
const resultTableBody = document.querySelector(".result-table-body");
const reverseRadioBtns = document.querySelectorAll(".subscription-radio");

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
let reverse = false;

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
        resultTableBody.innerHTML = "";
        let curr = reverse
            ? startTimestamp - (dayMsAmount * 28 * packagesAmount - dayMsAmount)
            : startTimestamp;
        for (let i = 0; i < packagesAmount; i++) {
            const tr = document.createElement("tr");
            tr.classList.add("table-row");
            const col1 = i + 1;
            const col2 = getDateStrByTimestamp(curr);
            const col3 = getDateStrByTimestamp(curr + dayMsAmount * 27);
            [col1, col2, col3].forEach((col) => {
                const td = document.createElement("td");
                td.classList.add("table-cell");
                td.textContent = col;
                tr.appendChild(td);
            });
            resultTableBody.appendChild(tr);
            curr = curr + dayMsAmount * 28;
        }
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

reverseRadioBtns.forEach((input) => {
    input.onchange = (e) => {
        reverse = JSON.parse(e.target.value);
        renderResult();
    };
});
