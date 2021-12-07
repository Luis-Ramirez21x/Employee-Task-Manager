let a = document.querySelector(".chart");

let property = "Tasks";
let employee1 = "Mary";
let employee2 = "Sal";
let employee3 = "Tory";
let employee4 = "Mani";

let tottaskE1 = 2;
let tottaskE2 = 5;
let tottaskE3 = 4;
let tottaskE4 = 6;

let mychart = document.getElementById("myChart").getContext("2d");
let barChart = new Chart(myChart, {
  type: "bar",
  data: {
    labels: [employee1, employee2, employee3, "{{projects}}"],
    datasets: [
      {
        label: `${property}`,
        data: [tottaskE1, tottaskE2, tottaskE3, 6],
      },
    ],
  },
});
