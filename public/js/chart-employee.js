let a = document.querySelector(".chart");

let btnEl = document.querySelector(".btn");

let titleEl = document.getElementsByClassName("titleWorker");

let bt1 = btnEl.getAttribute("data-id");

let employees = [];

for (let i = 0; i < titleEl.length; i++) {
  employees[i] = titleEl[i].textContent;
}

// console.log(employees);

// let totalEmploy = titleEl.length;
// let property = "Tasks";

// let tottask = [1, 2, 3, 4];

// let mychart = document.getElementById("myChart").getContext("2d");
// let barChart = new Chart(myChart, {
//   type: "bar",
//   data: {
//     labels: employees,
//     datasets: [
//       {
//         label: `${property}`,
//         data: tottask,
//       },
//     ],
//   },
// });
