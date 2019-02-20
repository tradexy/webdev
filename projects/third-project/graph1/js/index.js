var CHART = {};

CHART.load = function (sheetData) {
  // Load the Visualization API and the corechart package.
  google.charts.load('current', { 'packages': ['corechart'] });

  // Set a callback to run when the Google Visualization API is loaded.
  google.charts.setOnLoadCallback(drawChart);

  // Callback that creates and populates a data table,
  // instantiates the pie chart, passes in the data and
  // draws it.
  function drawChart() {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'City');
    data.addColumn('number', 'Attendance');
    data.addRows(sheetData);

    // Set chart options
    var options = {
      'title': 'Women\'s March Attendance by City',
      'width': 750,
      'height': 500 };


    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
    chart.draw(data, options);
  }

};


var SHEET = {};
// my spreadsheet does not work https://docs.google.com/spreadsheets/d/18wqZWvxxoJi8jlsfyWkmNFpZezs4w7_7jH2OzV7Hhxs/edit#gid=0
//original spreadshet being used below, also in index.babel (a problem with my copy, see in console)
var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/185EbxGklql1wZgoTjwYPsth0RcmoqmutP2DKddqIKnY/pubhtml';

SHEET.load = function (data, tabletop) {
  var arrayOfData = [];

  data.forEach(function (item) {
    var attendance = parseInt(item.Attendance, 10) * 1000;
    arrayOfData.push([item.City, attendance]);
  });

  // Sort cities by name
  var sortArrayOfData = arrayOfData.sort();

  // Load the data into Google Charts
  CHART.load(sortArrayOfData);
};

SHEET.init = function (url) {
  Tabletop.init({
    key: url,
    callback: SHEET.load,
    simpleSheet: true });

};

window.addEventListener('DOMContentLoaded', SHEET.init(publicSpreadsheetUrl));