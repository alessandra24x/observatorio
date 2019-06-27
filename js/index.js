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
  console.log(tableOptions);
  Sheetsee.makeTable(tableOptions)
  Sheetsee.initiateTableFilter(tableOptions)

}


// var jsonObject = JSON.parse(tableOptions);

// console.log(jsonObject);

const CHART = document.getElementById("myChart");
const data = tableOptions.data;

let myChart = new Chart(CHART, data, {
  type: 'line',
  data: data
});