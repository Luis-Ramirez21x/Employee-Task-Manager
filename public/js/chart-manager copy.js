// let a = document.querySelector(".chart");
// let btnEl = document.querySelector(".btn");

// let bt1 = btnEl.getAttribute("data-id");

// //------*-*---*--*-----*--*-------------
// function getemployes() {
//   let firstreq = fetch("/api/chart/task")
//     .then((res) => res.json())
//     .then((res) => {
//       let seqreq = fetch("/api/chart")
//         .then((resU) => resU.json())
//         .then((resU) => {
//           console.log(resU);
//           console.log(res);
//           //console.log(res);
//           //var propertyNames = Object.entries(firstreq);

//           const myJSON = JSON.stringify(res[0].user.name);
//           console.log(myJSON);
//           // console.log(res[1]);
//           let aba = res;
//           let first = res;
//           let second = res[1];
//           /**--
//            * Duplicates
//            */

//           var output = [];

//           first.forEach(function (item) {
//             var existing = output.filter(function (v, i) {
//               return v.user_id == item.user_id;
//             });
//             if (existing.length) {
//               var existingIndex = output.indexOf(existing[0]);
//               output[existingIndex].value = output[existingIndex].value.concat(
//                 item.value
//               );
//             } else {
//               if (typeof item.value == "string") item.value = [item.value];
//               output.push(item);
//             }
//           });

//           console.dir(output);

//           //------
//           let data1 = document.getElementById("data1");
//           let data = (data1.innerHTML = `
//       <ul class="collection">
//        <li class="collection-item avatar">
//          <i class="material-icons circle">folder</i>
//          <span class="titleWorker"> ${myJSON} </span>
//                  </p>
//          <p> ${aba[0].title} </p>
//          ${aba[0].description}
//          ${aba[1].description}
//          ${aba[2].description}
//          ${aba[3].description}
//         </li>
//       </ul>  `);
//         });
//     });
// }

// let e = getemployes();

// //------*-*---*--*-----*--*-------------
// let titleEl = document.getElementsByClassName("titleWorker");
// let employees = [];
// console.log(titleEl);
// console.log(titleEl[0].firstChild);
// for (let i = 0; i < titleEl.length; i++) {
//   employees[i] = titleEl[i].textContent;
// }

// //console.log(employees);
// let totalEmploy = titleEl.length;

// let tottask = [1, 2, 3, 4, 2];
// let mychart = document.getElementById("myChart").getContext("2d");
// let barChart = new Chart(myChart, {
//   type: "bar",
//   data: {
//     labels: employees,
//     datasets: [
//       {
//         label: ["Complete"],
//         data: tottask,
//         backgroundColor: [
//           "rgba(255, 99, 132, 0.2)",
//           "rgba(54, 162, 235, 0.2)",
//           "rgba(255, 206, 86, 0.2)",
//           "rgba(75, 192, 192, 0.2)",
//           "rgba(153, 102, 255, 0.2)",
//           "rgba(255, 159, 64, 0.2)",
//         ],
//         borderColor: [
//           "rgba(255, 99, 132, 1)",
//           "rgba(54, 162, 235, 1)",
//           "rgba(255, 206, 86, 1)",
//           "rgba(75, 192, 192, 1)",
//           "rgba(153, 102, 255, 1)",
//           "rgba(255, 159, 64, 1)",
//         ],
//         borderWidth: 1,
//       },
//       {
//         label: [" Not Completed"],
//         data: tottask,
//         backgroundColor: [
//           "rgba(0, 99, 132, 0.1)",
//           "rgba(54, 162, 235, 0.1)",
//           "rgba(255, 206, 86, 0.1)",
//           "rgba(75, 192, 192, 0.1)",
//           "rgba(153, 102, 255, 0.1)",
//           "rgba(255, 159, 64, 0.1)",
//         ],
//         borderColor: [
//           "rgba(255, 99, 132, 1)",
//           "rgba(54, 162, 235, 1)",
//           "rgba(255, 206, 86, 1)",
//           "rgba(75, 192, 192, 1)",
//           "rgba(153, 102, 255, 1)",
//           "rgba(255, 159, 64, 1)",
//         ],
//         borderWidth: 1,
//       },
//     ],
//   },
// });
