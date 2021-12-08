//-----fetch request

fetch("/api/task")
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
  });

let btnEl = document.querySelector(".btn");
let titleEl = document.getElementsByClassName("titleWorker");

let bt1 = btnEl.getAttribute("data-id");

let label = ["No  completed", "Completed", "In progress"];
let employees = [];
for (let i = 0; i < titleEl.length; i++) {
  employees[i] = titleEl[i].textContent;
}

console.log(employees);
let totalEmploy = titleEl.length;
let property = "Completed";
let label2 = "Not completed";

let tottask = [2, 3, 4];

let mychart = document.getElementById("myChart").getContext("2d");
let barChart = new Chart(myChart, {
  type: "doughnut",
  data: {
    labels: label,
    datasets: [
      {
        label: `completed`,

        data: tottask,
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderColor: ["rgba(100, 100, 20, 100)"],
        borderWidth: 2,
      },
    ],
  },
});
//Team work is dream work
