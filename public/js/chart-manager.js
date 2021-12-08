let btnEl = document.querySelector(".btn");
let titleEl = document.getElementsByClassName("titleWorker");

let bt1 = btnEl.getAttribute("data-id");

let employees = [];

for (let i = 0; i < titleEl.length; i++) {
  employees[i] = titleEl[i].textContent;
}

console.log(employees);
let totalEmploy = titleEl.length;
let property = "Completed";
let label2 = "Not completed";

let tottask = [1, 2, 3, 4];

let mychart = document.getElementById("myChart").getContext("2d");
let barChart = new Chart(myChart, {
  type: "bar",
  data: {
    labels: employees,
    datasets: [
      {
        label: `${property}`,

        data: tottask,
        backgroundColor: ["rgba(75, 192, 192, 1)"],
        borderColor: ["rgba(255, 206, 86, 1)"],
        borderWidth: 1,
      },
      {
        label: label2,

        data: tottask,
        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(255, 206, 86, 1)"],
        borderWidth: 1,
      },
    ],
  },
});
