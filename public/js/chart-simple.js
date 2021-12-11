function getemployes() {
  let firstreq = fetch("/api/chart/single")
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      let completed = 0;
      let notCompleted = 0;
      for (let index = 0; index < res.length; index++) {
        if (res[index].task_status) {
          completed++;
        } else {
          notCompleted++;
        }
      }
      // var rate_value;
      // if (document.getElementById("typeofB").checked) {
      //   rate_value = document.getElementById("typeofB").value;
      // }
      // console.log(rate_value);
      let taskEl = document.getElementsByClassName("card card");
      let taskoneEl = document.getElementsByClassName("material-icons");

      //const userId = document.querySelector("#userId").value();
      console.log(userId);
      console.log(taskEl[0].firstChild);
      console.log(taskoneEl[0].getAttribute("da"));

      let property = "Tasks";

      let tipchart = "pie";
      let mychart = document.getElementById("myChart").getContext("2d");
      let barChart = new Chart(myChart, {
        type: tipchart,
        data: {
          labels: ["Completed", "Not completed"],
          datasets: [
            {
              label: `${property}`,
              data: [completed, notCompleted],
              backgroundColor: [
                "rgba(54, 162, 235, 1)",
                "rgba(255, 99, 132, 1)",

                "rgba(255, 206, 86, 1)",
                "rgba(153, 102, 255, 0.2)",
                "rgb(255, 255, 0)",
                "rgb(255, 120, 0)",
                "rgb(255, 205, 86)",
              ],
            },
          ],
        },
      });

      //---
    });
}

getemployes();
