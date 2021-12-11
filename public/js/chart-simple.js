let titleEl = document.getElementsByClassName("titleWorker");
let taskEl = document.getElementsByClassName("card card");
let taskoneEl = document.getElementsByClassName("material-icons");
console.log(taskEl[0].firstChild);
console.log(taskoneEl[0].getAttribute("da"));

let employees = [];
for (let i = 0; i < titleEl.length; i++) {
  employees[i] = titleEl[i].textContent;
}
console.log(employees);
let tcompleted = 2;
let tincompleted = 1;
let tasktot = tcompleted + tincompleted;

let property = "Tasks";

let tottask = [1, 2, 3, 4];
let tipo = "pie";
let mychart = document.getElementById("myChart").getContext("2d");
let barChart = new Chart(myChart, {
  type: tipo,
  data: {
    labels: ["Not completed", "completed"],
    datasets: [
      {
        label: `${property}`,
        data: [tcompleted, tincompleted],
        backgroundColor: [
          "rgb(255, 120, 0)",
          "rgb(255, 255, 0)",
          "rgb(255, 205, 86)",
        ],
      },
    ],
  },
});
