let a = document.querySelector(".chart");
let btnEl = document.querySelector(".btn");

let bt1 = btnEl.getAttribute("data-id");

//------*-*---*--*-----*--*-------------
function getemployes() {
  let firstreq = fetch("/api/task")
    .then((res) => res.json())
    .then((res) => {
      //console.log(res);
      //var propertyNames = Object.entries(firstreq);

      const myJSON = JSON.stringify(res[0]);
      // console.log(res[0]);
      // console.log(res[1]);

      let data1 = document.getElementById("data1");
      let data = (data1.innerHTML = `


      <ul class="collection">
       
       <li class="collection-item avatar">
         <i class="material-icons circle">folder</i>
         <span class="titleWorker"> {{worker.name}}</span>
             {{#each tasks as |task|}}
         </p>
         <p> {{title}}
           <br />
         </p>
           {{/each}}
         <a href="#!" class="secondary-content"><i
             class="material-icons"
           >grade</i></a>
       </li>
   
 </ul>

{{/each}}`);

      let seqreq = fetch("/api/users")
        .then((resU) => resU.json())
        .then((resU) => {
          console.log(resU);
          console.log(res);
        });
    });
}

let e = getemployes();

//------*-*---*--*-----*--*-------------
let titleEl = document.getElementsByClassName("titleWorker");
let employees = [];

for (let i = 0; i < titleEl.length; i++) {
  employees[i] = titleEl[i].textContent;
}

//console.log(employees);
let totalEmploy = titleEl.length;
let property = ["Completed", "Not Completed"];

let tottask = [1, 2, 3, 4];

let mychart = document.getElementById("myChart").getContext("2d");
let barChart = new Chart(myChart, {
  type: "bar",
  data: {
    labels: employees,
    datasets: [
      {
        label: ["Not completed", "completed"],
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
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
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
