localStorage.setItem("name", "Roman");

const user = localStorage.getItem("name");

const root = document.getElementById("root");
root.textContent = `Name: ${user || "Username"}`;
