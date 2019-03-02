google.charts.load('current', {'packages':['corechart', 'controls']});
google.charts.setOnLoadCallback(initialize);


function initialize() {
  var queryString = encodeURIComponent('SELECT A, B, C LIMIT 5 OFFSET 1');
  var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1wx9d-9z9R4IS3CwQ-lNDTCTuhHsVSuwz4SNp1J0v4YQ/gviz/tq?sheet=Weight&headers=1&tq=' + queryString);
  query.send(drawDashboard);
}
function drawDashboard(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }
  var data = response.getDataTable();
  var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
  chart.draw(data, { height: 400 });

 
}
