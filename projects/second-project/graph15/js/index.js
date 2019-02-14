google.charts.load('current', {'packages':['corechart', 'controls']});
google.charts.setOnLoadCallback(initialize);


function initialize() {
  var queryString = encodeURIComponent('SELECT A, C LIMIT 7 OFFSET 1');
  var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1kYwBfiLspqpwoupSdJoXoUV9tsNtBfStqNiCsrFQ0Gc/gviz/tq?sheet=Sheet3&headers=1&tq=' + queryString);
  query.send(drawDashboard);
}
function drawDashboard(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }
  var data = response.getDataTable();
  var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
  chart.draw(data, { height: 400 });

 
}
