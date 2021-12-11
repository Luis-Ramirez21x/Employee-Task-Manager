function getemployes() {
  let firstreq = fetch("/api/chart/single")
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      //---------------employees
      var em = res.map(function (singleElement) {
        console.log(em);
        return singleElement.name;
      });
      //em.push(res[0].name);
      //let em = res.forEach((element) => element.name);
      // Employee1
      var employtask1 = res[0].tasks.length;
      var employtask2 = res[1].tasks.length;
      var employtask3 = res[2].tasks.length;
      var employtask4 = res[3].tasks.length;
      var employtask1C = 0;
      var employtask1I = 0;
      var employtask2C = 0;
      var employtask2I = 0;
      function completes(len, ind, complete, incomplete) {
        for (let index = 0; index < len.length; index++) {
          if (res[ind].tasks[index]) {
            employtask1C++;
          } else {
            incomplete++;
          }
        }
        return complete, incomplete;
      }
      console.log(employtask1C);
      let empl1 = [];
      empl1 = completes(employtask1C, 1, employtask1C, employtask1I);
      console.log(empl1);

      console.log(employtask1);
      let tottaskC = [employtask1, employtask2, employtask3, employtask4];
      let tottask = [employtask1, employtask2, employtask3, employtask4];
      let mychart = document.getElementById("myChart").getContext("2d");
      let barChart = new Chart(myChart, {
        type: "bar",
        data: {
          labels: ["a", "2"],
          datasets: [
            {
              label: ["Tasks"],
              data: [1, 2],
              backgroundColor: [
                "rgba(0, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 1,
            },
          ],
        },
      });
    });
}

getemployes();

// let titleEl = document.getElementsByClassName("titleWorker");
// let taskEl = document.getElementsByClassName("card card");
// let taskoneEl = document.getElementsByClassName("material-icons");

// const userId = document.querySelector("#userId").value();
// console.log(userId);
// console.log(taskEl[0].firstChild);
// console.log(taskoneEl[0].getAttribute("da"));

// let employees = [];
// for (let i = 0; i < titleEl.length; i++) {
//   employees[i] = titleEl[i].textContent;
// }
// console.log(employees);
// let tcompleted = 2;
// let tincompleted = 1;
// let tasktot = tcompleted + tincompleted;

// let property = "Tasks";

// let tottask = [1, 2, 3, 4];
// let tipo = "pie";
// let mychart = document.getElementById("myChart").getContext("2d");
// let barChart = new Chart(myChart, {
//   type: tipo,
//   data: {
//     labels: ["Not completed", "completed"],
//     datasets: [
//       {
//         label: `${property}`,
//         data: [tcompleted, tincompleted],
//         backgroundColor: [
//           "rgb(255, 120, 0)",
//           "rgb(255, 255, 0)",
//           "rgb(255, 205, 86)",
//         ],
//       },
//     ],
//   },
// });
