//------*-*---*--*-----*--*-------------
function getemployes() {
  let firstreq = fetch("/api/chart/task")
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
      // for (let index = 0; index < employtask2.length; index++) {
      //   if (res[0].tasks[index]) {
      //     employtask2C++;
      //   } else {
      //     employtask2I++;
      //   }
      // }
      //------

      console.log(employtask1);
      let tottaskC = [employtask1, employtask2, employtask3, employtask4];
      let tottask = [employtask1, employtask2, employtask3, employtask4];
      let mychart = document.getElementById("myChart").getContext("2d");
      let barChart = new Chart(myChart, {
        type: "bar",
        data: {
          labels: em,
          datasets: [
            {
              label: ["Tasks"],
              data: tottaskC,
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
