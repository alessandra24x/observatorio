document.addEventListener('DOMContentLoaded', function () {
  var URL = 'https://docs.google.com/spreadsheets/d/1yHxhJAOArHkga3rTmrCc4t565jlkGZBMmhQ2Jl5CIhU/edit?usp=sharing'
  Tabletop.init( { key: URL, callback: myData, simpleSheet: true } )
})

function myData (data) {
  var tableOptions = {
    "data": data,
    "pagination": 100,
    "tableDiv": "#fullTable",
    "filterDiv": "#fullTableFilter"
  }
  console.log(data)
  Sheetsee.makeTable(tableOptions)
  Sheetsee.initiateTableFilter(tableOptions)

  let grouped = data.reduce(function (accu, item){
    let year = Number(item.fecha.split("/").pop());
    if(accu[year] != undefined) {
    accu[year]++;
   }

   return accu;
   }, {
   18:0,
   19:0
   })

   console.log(grouped);

   new Chart(document.getElementById("pie-chart"), {
     type: 'pie',
     data: {
       labels: ["2018", "2019"],
       datasets: [{
         label: "Cantidad",
         backgroundColor: ["#3e95cd", "#8e5ea2"],
         data:  [grouped[18] , grouped[19]]
       }]
     },
     options: {
       title: {
         display: true,
         text: 'Cantidad de muertes por crimenes de odio hacia la identidad de género'
       }
     }
   });
}
